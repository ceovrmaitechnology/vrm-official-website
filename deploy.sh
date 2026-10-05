#!/bin/bash
# ============================================================
# deploy.sh — VRM AI Technology production deploy script
# Usage: bash deploy.sh
# Requires: Node, npm, pm2, Chrome (for prerender)
# ============================================================
set -e   # Stop immediately on any error

APP_DIR="/var/www/vrm-official-website"
PM2_APP="vrm-official-website"
PORT="${SERVER_PORT:-5000}"

echo "===== VRM Deploy $(date) ====="
cd "$APP_DIR"

# 1. Back up the current build so we can roll back
if [ -d "build" ]; then
  echo "[1/6] Backing up current build to build_backup/ ..."
  rm -rf build_backup
  cp -r build build_backup
  echo "      Backup complete."
else
  echo "[1/6] No existing build to back up."
fi

# 2. Pull latest code from main
echo "[2/6] Pulling latest code from main ..."
git pull origin main

# 3. Install dependencies
echo "[3/6] Installing npm dependencies ..."
npm install

# 4. Locate Chrome for prerendering
echo "[4/6] Locating Chrome ..."
CHROME=""
if [ -n "$PUPPETEER_EXECUTABLE_PATH" ] && [ -f "$PUPPETEER_EXECUTABLE_PATH" ]; then
  CHROME="$PUPPETEER_EXECUTABLE_PATH"
elif [ -n "$CHROME_BIN" ] && [ -f "$CHROME_BIN" ]; then
  CHROME="$CHROME_BIN"
elif [ -f "/usr/bin/google-chrome-stable" ]; then
  CHROME="/usr/bin/google-chrome-stable"
elif [ -f "/usr/bin/google-chrome" ]; then
  CHROME="/usr/bin/google-chrome"
elif [ -f "/usr/bin/chromium-browser" ]; then
  CHROME="/usr/bin/chromium-browser"
else
  # Try puppeteer's own bundled browser
  PUPPETEER_CACHE=$(node -e "try { const p = require('puppeteer'); console.log(p.executablePath()); } catch(e) { console.log(''); }" 2>/dev/null || true)
  if [ -n "$PUPPETEER_CACHE" ] && [ -f "$PUPPETEER_CACHE" ]; then
    CHROME="$PUPPETEER_CACHE"
  fi
fi

if [ -z "$CHROME" ]; then
  echo "ERROR: No Chrome found. Prerendering requires Chrome."
  echo "Run: npx puppeteer browsers install chrome"
  echo "Then re-run this script."
  exit 1
fi
echo "Using Chrome at: $CHROME"

echo "      Chrome: $CHROME"
export PUPPETEER_EXECUTABLE_PATH="$CHROME"

# 5. Build (compiles React + runs postbuild → prerender + safety check)
echo "[5/6] Building application ..."
npm run build

# 6. Restart with PM2
echo "[6/6] Restarting PM2 app: $PM2_APP ..."
pm2 restart "$PM2_APP"

# Wait a moment for the server to start
echo "      Waiting for server to start ..."
sleep 4

# Verify prerendered HTML is actually being served
echo "===== Smoke Test: /ai-company-madurai ====="
RAW=$(curl -s "http://localhost:${PORT}/ai-company-madurai")
echo "  <title>: $(echo "$RAW" | grep -oP '<title[^>]*>\K[^<]*' | head -1 || echo 'NOT FOUND')"
echo "  canonical: $(echo "$RAW" | grep -oP '<link[^>]*rel="canonical"[^>]*href="\K[^"]*' | head -1 || echo "$RAW" | grep -oP '<link[^>]*href="\K[^"]*(?="[^>]*rel="canonical")' | head -1 || echo 'NOT FOUND')"
echo "  <h1>: $(echo "$RAW" | grep -oP '<h1[^>]*>\K[^<]*' | head -1 || echo 'NOT FOUND')"

echo "===== Deploy complete! ====="
echo "To roll back: rm -rf build && mv build_backup build && pm2 restart $PM2_APP"

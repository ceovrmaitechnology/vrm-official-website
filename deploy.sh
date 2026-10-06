#!/bin/bash
# ============================================================
# deploy.sh — VRM AI Technology production deploy script
# Usage: bash deploy.sh
# Requires: Node, npm, pm2, Chrome (for prerender)
# ============================================================
set -e   # Stop immediately on any error

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
PM2_APP="vrm-official-website"
PORT="${SERVER_PORT:-5000}"
BACKED_UP=0
CHROME=""
PUPPETEER_CACHE=""

echo "===== VRM Deploy $(date) ====="
cd "$APP_DIR"

function rollback() {
  echo "ERROR: Deploy failed. Rolling back..."
  if [ "$BACKED_UP" -eq 1 ] && [ -d "build_backup" ]; then
    rm -rf build
    mv build_backup build
    pm2 restart "$PM2_APP" || true
    echo "Rollback complete."
  else
    echo "No fresh backup available for rollback."
  fi
  exit 1
}

trap rollback ERR
trap 'rm -f test_html.js' EXIT

# 0. Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo "ERROR: Uncommitted tracked changes found. Please commit or stash them before deploying."
  exit 1
fi

# 1. Back up the current build so we can roll back
if [ -d "build" ]; then
  echo "[1/6] Backing up current build to build_backup/ ..."
  rm -rf build_backup
  cp -r build build_backup
  BACKED_UP=1
  echo "      Backup complete."
else
  echo "[1/6] No existing build to back up."
fi

# 2. Pull latest code from main
echo "[2/6] Pulling latest code from main ..."
git pull origin main

# 3. Install dependencies
echo "[3/6] Installing npm dependencies ..."
npm ci --include=dev

# 4. Locate Chrome for prerendering
echo "[4/6] Checking Chrome installation ..."
if [ -n "$PUPPETEER_EXECUTABLE_PATH" ] && [ -f "$PUPPETEER_EXECUTABLE_PATH" ]; then
  CHROME="$PUPPETEER_EXECUTABLE_PATH"
elif [ -n "$CHROME_BIN" ] && [ -f "$CHROME_BIN" ]; then
  CHROME="$CHROME_BIN"
elif command -v google-chrome-stable &> /dev/null; then
  CHROME="$(command -v google-chrome-stable)"
elif command -v google-chrome &> /dev/null; then
  CHROME="$(command -v google-chrome)"
elif command -v chromium-browser &> /dev/null; then
  CHROME="$(command -v chromium-browser)"
else
  # Try puppeteer's own bundled browser
  PUPPETEER_CACHE=$(node -e "try { const p = require('puppeteer'); console.log(p.executablePath()); } catch(e) { console.log(''); }" 2>/dev/null || true)
  if [ -n "$PUPPETEER_CACHE" ] && [ -f "$PUPPETEER_CACHE" ]; then
    CHROME="$PUPPETEER_CACHE"
  fi
fi

if [ -z "$CHROME" ]; then
  echo "ERROR: No Chrome found. Prerendering requires Chrome."
  echo "Please install Chrome manually or set CHROME_BIN."
  exit 1
fi
echo "      Using Chrome at: $CHROME"
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
echo "===== Smoke Test ====="
cat << 'EOF' > test_html.js
const http = require('http');
const routes = ['/', '/ai-company-madurai', '/ai-company-bangalore', '/contactus'];
let hasError = false;
let rootTitle = "";
let maduraiTitle = "";

async function testRoute(route) {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:' + (process.env.SERVER_PORT || 5000) + route, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title[^>]*>([^<]*)<\/title>/i);
        const canonicalMatch = data.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) || data.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
        const h1Match = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        
        console.log(`\nRoute: ${route}`);
        
        const title = titleMatch ? titleMatch[1].trim() : "";
        const canonical = canonicalMatch ? canonicalMatch[1].trim() : "";
        let h1Text = "";
        if (h1Match) {
            h1Text = h1Match[1].replace(/<[^>]+>/g, '').trim();
        }
        
        console.log("  <title>: " + (title || "NOT FOUND"));
        console.log("  canonical: " + (canonical || "NOT FOUND"));
        console.log("  <h1>: " + (h1Text || "NOT FOUND"));

        let expectedCanonical = 'https://www.vrmaitechnology.com' + (route === '/' ? '' : route);
        
        if (!title || !canonical || !h1Text) {
            console.error(`  ERROR: Missing critical SEO tags on ${route}`);
            hasError = true;
        } else if (canonical !== expectedCanonical) {
            console.error(`  ERROR: Canonical mismatch on ${route}. Expected: ${expectedCanonical}, Got: ${canonical}`);
            hasError = true;
        }

        if (route === '/') rootTitle = title;
        if (route === '/ai-company-madurai') maduraiTitle = title;

        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
    for (const route of routes) {
        await testRoute(route);
    }
    
    if (rootTitle && maduraiTitle && rootTitle === maduraiTitle) {
        console.error(`\nERROR: Title of / and /ai-company-madurai are identical: "${rootTitle}"`);
        hasError = true;
    }

    if (hasError) {
        console.error("\nSmoke test failed.");
        process.exit(1);
    }
})();
EOF
node test_html.js

echo "===== Deploy complete! ====="
echo "To roll back manually: rm -rf build && mv build_backup build && pm2 restart $PM2_APP"

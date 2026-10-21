#!/usr/bin/env bash
set -e

echo "=== VRM AI Technology Deployment on VPS ==="

# 1. Pull latest changes
git checkout main
git pull origin main

# 2. Install dependencies if needed
npm install

# 3. Build & Prerender
npm run build

# 4. Check active web server
echo "Checking active web server..."
ps aux | grep -E "nginx|apache|httpd|node" | grep -v grep

# 5. Update Nginx configuration if Nginx is active
if [ -d "/etc/nginx/sites-available" ]; then
    echo "Updating Nginx configuration..."
    # Backup existing
    if [ -f "/etc/nginx/sites-available/vrmaitechnology" ]; then
        cp /etc/nginx/sites-available/vrmaitechnology /etc/nginx/sites-available/vrmaitechnology.bak
    fi
    cp server/nginx/vrmaitechnology.conf /etc/nginx/sites-available/vrmaitechnology
    ln -sf /etc/nginx/sites-available/vrmaitechnology /etc/nginx/sites-enabled/
    nginx -t && systemctl reload nginx
fi

# 6. Restart Node.js backend if using PM2
if command -v pm2 &> /dev/null; then
    echo "Restarting PM2 process..."
    pm2 restart all || pm2 start server/index.js --name "vrm-api"
fi

echo "=== Deployment Completed Successfully ==="

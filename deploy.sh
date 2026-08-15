#!/bin/bash

cd /var/www/vrm-official-website

git pull origin main

npm install

npm run build

pm2 restart vrm-official-website

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

(async () => {
  const buildDir = path.join(__dirname, 'build');
  const publicDir = path.join(__dirname, 'public');
  
  if (!fs.existsSync(buildDir)) {
    console.log('Build directory not found, skipping postbuild script.');
    return;
  }

  // 1. Ensure config and crawler files are copied into build/
  const configFiles = ['.htaccess', '_redirects', 'robots.txt', 'sitemap.xml'];
  for (const file of configFiles) {
    const srcPath = path.join(publicDir, file);
    const destPath = path.join(buildDir, file);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[POSTBUILD] Copied ${file} to build/${file}`);
    }
  }

  // 2. Pre-render static HTML for all public routes (SEO)
  console.log('[POSTBUILD] Starting static HTML pre-rendering for SEO...');
  try {
    execSync('node scripts/prerender.js', { stdio: 'inherit', cwd: __dirname });
  } catch (err) {
    console.error('[POSTBUILD ERROR] Prerender failed:', err.message);
    process.exit(1);
  }

  // 3. Ensure root 404.html exists for web servers (Apache ErrorDocument 404 /404.html, Nginx try_files, Netlify)
  const prerendered404 = path.join(buildDir, '404', 'index.html');
  const root404 = path.join(buildDir, '404.html');
  if (fs.existsSync(prerendered404)) {
    fs.copyFileSync(prerendered404, root404);
    console.log('[POSTBUILD] Created build/404.html from build/404/index.html');
  } else {
    // If /404 route is not prerendered into 404/index.html, copy index.html as fallback
    const fallbackSource = path.join(buildDir, 'index.html');
    if (fs.existsSync(fallbackSource)) {
      fs.copyFileSync(fallbackSource, root404);
      console.log('[POSTBUILD] Created build/404.html fallback from build/index.html');
    }
  }

  // 4. Prerender Safety Check: Validate title, meta description, canonical, and single H1
  console.log('[POSTBUILD] Running Prerender Safety Check...');
  try {
    execSync('node scripts/verify_prerender.js', { stdio: 'inherit', cwd: __dirname });
  } catch (err) {
    console.error('[POSTBUILD ERROR] Prerender Safety Check failed! Failing build.');
    process.exit(1);
  }

  console.log('[POSTBUILD] Postbuild optimizations completed successfully.');
})();

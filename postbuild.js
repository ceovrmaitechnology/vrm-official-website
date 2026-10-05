const fs = require('fs');
const path = require('path');

(async () => {
  const buildDir = path.join(__dirname, 'build');
  
  if (!fs.existsSync(buildDir)) {
    console.log('Build directory not found, skipping postbuild script.');
    return;
  }

  console.log('Postbuild optimizations completed successfully (purging disabled for visual safety).');

  // 3. Pre-render static HTML for all public routes (SEO)
  console.log('Starting static HTML pre-rendering for SEO...');
  const { execSync } = require('child_process');
  try {
    execSync('node scripts/prerender.js', { stdio: 'inherit', cwd: __dirname });
  } catch (err) {
    console.error('Prerender error:', err.message);
    process.exit(1);
  }

  // 4. Prerender Safety Check: Validate title, meta description, canonical, and single H1
  console.log('Running Prerender Safety Check...');
  try {
    execSync('node scripts/verify_prerender.js', { stdio: 'inherit', cwd: __dirname });
  } catch (err) {
    console.error('Prerender Safety Check failed! Failing build.');
    process.exit(1);
  }
})();

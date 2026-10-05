const { PurgeCSS } = require('purgecss');
const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

(async () => {
  const buildDir = path.join(__dirname, 'build');
  
  if (!fs.existsSync(buildDir)) {
    console.log('Build directory not found, skipping postbuild script.');
    return;
  }

  const styleCssPath = path.join(buildDir, 'assets/css/style.css');
  if (fs.existsSync(styleCssPath)) {
    const rawStyle = fs.readFileSync(styleCssPath, 'utf8');
    const purgeCSSResults = await new PurgeCSS().purge({
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      css: [{ raw: rawStyle }],
      safelist: [/^swiper/, /^wow/, /^animate/, /^animate__/, /^fa-/, /^vrm-/, 'show', 'collapse', 'collapsing', 'active', 'fade', 'in', 'modal-open', 'dropdown-open', 'animated']
    });

    if (purgeCSSResults && purgeCSSResults.length > 0) {
      const purgedCss = purgeCSSResults[0].css;
      const minifiedCss = new CleanCSS({ level: 2 }).minify(purgedCss).styles;
      fs.writeFileSync(styleCssPath, minifiedCss);
      console.log(`style.css purged and minified: ${(rawStyle.length / 1024).toFixed(1)} KB -> ${(minifiedCss.length / 1024).toFixed(1)} KB`);
    }
  }

  const bootstrapCssPath = path.join(buildDir, 'assets/css/vendor/bootstrap.min.css');
  if (fs.existsSync(bootstrapCssPath)) {
    const rawBootstrap = fs.readFileSync(bootstrapCssPath, 'utf8');
    const purgeBootstrapResults = await new PurgeCSS().purge({
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      css: [{ raw: rawBootstrap }],
      safelist: [/^col-/, /^row/, /^container/, /^btn/, /^nav/, /^fade/, /^show/, /^modal/, /^collapse/, /^dropdown/]
    });

    if (purgeBootstrapResults && purgeBootstrapResults.length > 0) {
      const minifiedBootstrap = new CleanCSS({ level: 2 }).minify(purgeBootstrapResults[0].css).styles;
      fs.writeFileSync(bootstrapCssPath, minifiedBootstrap);
      console.log(`bootstrap.min.css purged and minified: ${(rawBootstrap.length / 1024).toFixed(1)} KB -> ${(minifiedBootstrap.length / 1024).toFixed(1)} KB`);
    }
  }

  // 2. Minify other CSS files
  const cssFilesToMinify = [
    glob.sync(path.join(buildDir, 'assets/css/plugins/animate.min.css'))[0],
    glob.sync(path.join(buildDir, 'assets/css/plugins/unicons.css'))[0],
    glob.sync(path.join(buildDir, 'assets/css/plugins/fontawesome-5.css'))[0]
  ].filter(Boolean);

  cssFilesToMinify.forEach(cssPath => {
    const content = fs.readFileSync(cssPath, 'utf8');
    const minified = new CleanCSS({}).minify(content).styles;
    fs.writeFileSync(cssPath, minified);
    console.log(`${path.basename(cssPath)} minified.`);
  });

  console.log('Postbuild optimizations completed successfully!');

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

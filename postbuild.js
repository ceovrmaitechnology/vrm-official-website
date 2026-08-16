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

  // 1. PurgeCSS for style.css
  const styleCssPath = glob.sync(path.join(buildDir, 'assets/css/style.css'))[0];
  if (styleCssPath) {
    const purgeCSSResults = await new PurgeCSS().purge({
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      css: [styleCssPath],
      safelist: {
        standard: ['active', 'show', 'collapsing', 'collapse', 'fade', 'modal-backdrop', 'modal-open', 'modal'],
        greedy: [/^swiper-/, /^wow/, /^animate__/, /^modal-/, /^uil-/, /^fa-/]
      }
    });

    const purgedCss = purgeCSSResults[0].css;
    const minifiedCss = new CleanCSS({}).minify(purgedCss).styles;
    fs.writeFileSync(styleCssPath, minifiedCss);
    console.log('style.css purged and minified.');
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

  // 3. Ensure defer on main.js in index.html (M3)
  const indexHtmlPath = path.join(buildDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    let htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
    htmlContent = htmlContent.replace(/<script(?![^>]*defer)[^>]*src="[^"]*\/static\/js\/[^"]*"[^>]*><\/script>/gi, (match) => {
      return match.replace('<script ', '<script defer="defer" ');
    });
    fs.writeFileSync(indexHtmlPath, htmlContent);
    console.log('Added defer attribute to scripts in index.html.');
  }

  console.log('Postbuild optimizations completed successfully!');
})();

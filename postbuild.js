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

  const styleCssPath = glob.sync(path.join(buildDir, 'assets/css/style.css').replace(/\\/g, '/'))[0];
  if (styleCssPath) {
    const purgeCSSResults = await new PurgeCSS().purge({
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      css: [styleCssPath],
      safelist: [/^swiper-/, /^wow/, /^animate/, /^animate__/, /^fa-/, /^vrm-/, 'show', 'collapse', 'collapsing', 'active', 'fade', 'in', 'modal-open', 'dropdown-open', 'animated']
    });

    if (purgeCSSResults && purgeCSSResults.length > 0) {
      const purgedCss = purgeCSSResults[0].css;
      const minifiedCss = new CleanCSS({}).minify(purgedCss).styles;
      fs.writeFileSync(styleCssPath, minifiedCss);
      console.log('style.css purged and minified.');
    } else {
      console.log('PurgeCSS returned no results. Check paths.');
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
})();

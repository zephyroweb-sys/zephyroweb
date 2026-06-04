const fs = require('fs');
const path = require('path');

const gtagSnippet = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-C98RV71KXM"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-C98RV71KXM');
    </script>`;

function addGtagToFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('G-C98RV71KXM')) {
    // Replace <head> with <head> + snippet
    const headRegex = /<head\b[^>]*>/i;
    if (headRegex.test(content)) {
      const updatedContent = content.replace(headRegex, `$&${gtagSnippet}`);
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Added gtag to: ${filePath}`);
    }
  } else {
    console.log(`gtag already exists in: ${filePath}`);
  }
}

function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'dist') return;
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile()) {
      if (/\.(html)$/.test(filepath)) {
        callback(filepath);
      }
    }
  });
}

walkSync('.', addGtagToFile);
console.log('Google tag insertion complete.');

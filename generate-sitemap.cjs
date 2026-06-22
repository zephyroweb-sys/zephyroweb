const fs = require('fs');
const path = require('path');

const baseUrl = 'https://zephyrowebstudio.in';
const rootDir = __dirname;
const publicDir = path.join(rootDir, 'public');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist' && file !== 'public' && file !== 'src' && file !== 'scripts') {
        getHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html') && file !== 'template.html') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allHtmlFiles = getHtmlFiles(rootDir);

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

allHtmlFiles.forEach(file => {
  const relativePath = path.relative(rootDir, file).replace(/\\/g, '/');
  // Avoid duplicating index.html in subdirectories if not needed, but here we include all.
  let urlPath = relativePath;
  if (urlPath === 'index.html') {
    urlPath = '';
  } else if (urlPath.endsWith('/index.html')) {
    urlPath = urlPath.replace('/index.html', '/');
  }

  sitemapContent += `  <url>\n`;
  sitemapContent += `    <loc>${baseUrl}/${urlPath}</loc>\n`;
  sitemapContent += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  sitemapContent += `    <changefreq>weekly</changefreq>\n`;
  sitemapContent += `    <priority>${urlPath === '' ? '1.0' : '0.8'}</priority>\n`;
  sitemapContent += `  </url>\n`;
});

sitemapContent += `</urlset>\n`;

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log('Successfully generated public/sitemap.xml');

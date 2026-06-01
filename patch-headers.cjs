const fs = require('fs');
const files = ['index.html', 'about.html', 'services.html', 'projects.html', 'process.html', 'pricing.html', 'contact.html', 'template.html'];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/<li><a href="\/contact\.html" class="nav-item">Contact<\/a><\/li>/g, '<li><a href="/contact.html" class="nav-item">Contact</a></li>\n            <li><a href="/blog/index.html" class="nav-item">Insights</a></li>');
  content = content.replace(/<li><a href="\/contact\.html" class="mobile-nav-item">Contact<\/a><\/li>/g, '<li><a href="/contact.html" class="mobile-nav-item">Contact</a></li>\n          <li><a href="/blog/index.html" class="mobile-nav-item">Insights</a></li>');
  fs.writeFileSync(f, content);
});
console.log('Done!');

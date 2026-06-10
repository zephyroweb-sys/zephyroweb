const fs = require('fs');

const filesToPatch = [
  'index.html',
  'about.html',
  'services.html',
  'projects.html',
  'case-study.html',
  'process.html',
  'pricing.html',
  'contact.html',
  'template.html'
];

filesToPatch.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // First, let's normalize. In case projects.html has the old nav, let's make sure it has the new nav first.
    // If it has Projects but not Case Study, we fix it.
    // The easiest way is to use a regex to replace the entire block or target specific lines.
    
    // Let's just find "Case Study" and inject "Projects" before it, IF "Projects" is missing.
    if (!content.includes('href="/projects.html"')) {
      content = content.replace(
        /<li><a href="\/case-study\.html" class="nav-item(.*?)">Case Study<\/a><\/li>/,
        '<li><a href="/projects.html" class="nav-item">Projects</a></li>\n            <li><a href="/case-study.html" class="nav-item$1">Case Study</a></li>'
      );
      
      content = content.replace(
        /<li><a href="\/case-study\.html" class="mobile-nav-item(.*?)">Case Study<\/a><\/li>/,
        '<li><a href="/projects.html" class="mobile-nav-item">Projects</a></li>\n          <li><a href="/case-study.html" class="mobile-nav-item$1">Case Study</a></li>'
      );
    } 
    // What if it has Projects but no Case Study? (e.g. the restored projects.html)
    else if (!content.includes('href="/case-study.html"')) {
      content = content.replace(
        /<li><a href="\/projects\.html" class="nav-item(.*?)">Projects<\/a><\/li>/,
        '<li><a href="/projects.html" class="nav-item$1">Projects</a></li>\n            <li><a href="/case-study.html" class="nav-item">Case Study</a></li>'
      );
      
      content = content.replace(
        /<li><a href="\/projects\.html" class="mobile-nav-item(.*?)">Projects<\/a><\/li>/,
        '<li><a href="/projects.html" class="mobile-nav-item$1">Projects</a></li>\n          <li><a href="/case-study.html" class="mobile-nav-item">Case Study</a></li>'
      );
    }
    
    fs.writeFileSync(f, content);
  }
});
console.log('Nav patched with both Projects and Case Study!');

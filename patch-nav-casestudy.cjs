const fs = require('fs');
const path = require('path');

const filesToPatch = [
  'index.html',
  'about.html',
  'services.html',
  'projects.html',
  'process.html',
  'pricing.html',
  'contact.html',
  'template.html'
];

filesToPatch.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Replace Projects link with Case Study link
    content = content.replace(/href="\/projects\.html"/g, 'href="/case-study.html"');
    content = content.replace(/>Projects<\/a>/g, '>Case Study</a>');
    
    fs.writeFileSync(f, content);
  }
});
console.log('Nav patched!');

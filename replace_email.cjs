const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('zephyroweb@gmail.com')) {
    const updatedContent = content.replace(/hello@zephyrowebstudio\.in/g, 'zephyroweb@gmail.com');
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated email in: ${filePath}`);
  }
}

function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git') return;
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile()) {
      if (/\.(html|js|json|txt|css|cjs|xml)$/.test(filepath)) {
        callback(filepath);
      }
    }
  });
}

walkSync('.', replaceInFile);
console.log('Email replacement complete.');

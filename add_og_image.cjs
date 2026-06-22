const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

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
let updatedCount = 0;

allHtmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Check if it already has og:image
  if (!content.includes('property="og:image"')) {
    // Inject after og:url or before </head>
    const ogImageTag = `\n    <meta property="og:image" content="https://zephyrowebstudio.in/favicon.png" />`;
    
    if (content.includes('property="og:url"')) {
      content = content.replace(/(<meta property="og:url" content=".*?" \/>)/, `$1${ogImageTag}`);
      fs.writeFileSync(file, content);
      updatedCount++;
    } else if (content.includes('</head>')) {
      content = content.replace('</head>', `${ogImageTag}\n  </head>`);
      fs.writeFileSync(file, content);
      updatedCount++;
    }
  }
});

console.log(`Added og:image to ${updatedCount} files.`);

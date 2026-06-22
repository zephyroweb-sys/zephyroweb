const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');
const rootDir = __dirname;

// Gather all images
function getImages(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getImages(filePath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file) && file !== 'favicon.png') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const imagesToConvert = [
  ...getImages(path.join(publicDir, 'images')),
  ...getImages(path.join(publicDir, 'assets'))
];

async function convertImages() {
  console.log(`Found ${imagesToConvert.length} images to convert.`);
  for (const imgPath of imagesToConvert) {
    const ext = path.extname(imgPath);
    const webpPath = imgPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
    
    try {
      await sharp(imgPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      console.log(`Converted: ${path.basename(imgPath)} -> ${path.basename(webpPath)}`);
      // Delete original to save space
      fs.unlinkSync(imgPath);
    } catch (err) {
      console.error(`Error converting ${imgPath}:`, err);
    }
  }
}

// Gather HTML files
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

function updateHtmlFiles() {
  const allHtmlFiles = getHtmlFiles(rootDir);
  let updatedCount = 0;
  
  allHtmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    
    // Replace .png, .jpg, .jpeg with .webp (excluding favicon.png and external urls if any, but since we are replacing specific local paths, a regex is good)
    const newContent = content.replace(/(src=".*?)\.(png|jpg|jpeg)"/gi, (match, p1, p2) => {
      // Don't replace favicon
      if (p1.endsWith('favicon')) return match;
      hasChanges = true;
      return `${p1}.webp"`;
    });
    
    if (hasChanges) {
      fs.writeFileSync(file, newContent);
      updatedCount++;
    }
  });
  console.log(`Updated image references in ${updatedCount} HTML files.`);
}

async function run() {
  await convertImages();
  updateHtmlFiles();
}

run();

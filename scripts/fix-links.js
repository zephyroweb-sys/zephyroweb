import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.resolve(__dirname, '..', 'src', 'pages');

const files = fs.readdirSync(pagesDir);

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace href="#projects" with href="/projects.html", etc.
  content = content.replace(/href="#(projects|services|about|process|pricing|contact)"/g, 'href="/$1.html"');
  
  // Replace cursor classes
  content = content.replace(/cursor-hover/g, '');
  
  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Fixed links and cursors in pages.');

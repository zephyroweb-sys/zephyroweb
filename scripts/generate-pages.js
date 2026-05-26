import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const pages = [
  { name: 'about', module: 'about.js' },
  { name: 'services', module: 'services.js' },
  { name: 'projects', module: 'projects.js' },
  { name: 'process', module: 'process.js' },
  { name: 'pricing', module: 'pricing.js' },
  { name: 'contact', module: 'contact.js' },
  { name: 'home', module: 'home.js' }
];

function generatePages() {
  const templatePath = path.join(rootDir, 'template.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  for (const page of pages) {
    const modulePath = path.join(rootDir, 'src', 'pages', page.module);
    const content = fs.readFileSync(modulePath, 'utf-8');
    
    // Extract everything inside return ` ... `;
    const match = content.match(/return `([\s\S]*?)`;/);
    if (!match) {
      console.error(`Could not extract HTML from ${page.module}`);
      continue;
    }
    
    const contentHTML = match[1];

    // Inject content into template
    let newHTML = template.replace(
      '<!-- The JS will inject the actual innerHTML here temporarily, or we inject it statically later -->',
      contentHTML
    );
    
    // Replace the namespace
    newHTML = newHTML.replace(
      'data-barba-namespace="home"',
      `data-barba-namespace="${page.name}"`
    );

    // Update active nav item
    newHTML = newHTML.replace(
      'class="nav-item active"',
      'class="nav-item"'
    );
    newHTML = newHTML.replace(
      'class="mobile-nav-item active"',
      'class="mobile-nav-item"'
    );
    
    // Set the specific nav item active based on page
    const pageHref = page.name === 'home' ? '/' : `/${page.name}.html`;
    newHTML = newHTML.replace(
      `href="${pageHref}" class="nav-item"`,
      `href="${pageHref}" class="nav-item active"`
    );
    newHTML = newHTML.replace(
      `href="${pageHref}" class="mobile-nav-item"`,
      `href="${pageHref}" class="mobile-nav-item active"`
    );

    // Write file
    const outPath = path.join(rootDir, page.name === 'home' ? 'index.html' : `${page.name}.html`);
    fs.writeFileSync(outPath, newHTML, 'utf-8');
    console.log(`Generated ${page.name === 'home' ? 'index.html' : `${page.name}.html`}`);
  }
}

generatePages();

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'blog');

const files = fs.readdirSync(blogDir);

files.forEach(file => {
  if (file.endsWith('.html') && file !== 'index.html') {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has Article schema
    if (!content.includes('"@type": "Article"')) {
      // Extract title to use in schema
      const titleMatch = content.match(/<title>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'Zephyro Blog Post';
      
      const schema = `
    <!-- Article Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${title}",
      "author": {
        "@type": "Organization",
        "name": "Zephyro Web Development Studio",
        "url": "https://zephyrowebstudio.in/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zephyro Web Development Studio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://zephyrowebstudio.in/favicon.png"
        }
      },
      "datePublished": "2026-06-01T08:00:00+08:00",
      "dateModified": "2026-06-01T08:00:00+08:00",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://zephyrowebstudio.in/blog/${file}"
      }
    }
    </script>
`;
      
      // Inject schema before </head>
      if (content.includes('</head>')) {
        content = content.replace('</head>', schema + '</head>');
        fs.writeFileSync(filePath, content);
        console.log(`Added Article schema to ${file}`);
      }
    }
  }
});

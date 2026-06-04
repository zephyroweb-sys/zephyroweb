import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.resolve(__dirname, '../template.html');
const rootDir = path.resolve(__dirname, '../');
let template = fs.readFileSync(templatePath, 'utf8');

const pages = [
  // SERVICES
  {
    path: 'services/website-development.html',
    title: 'Website Development Company in Bengaluru | Zephyro',
    desc: 'Professional website development services in Bengaluru. Modern, responsive, SEO-friendly websites built to help businesses grow online.',
    heading: 'Website Development Services',
    content: '<p>Custom website development for local and national businesses.</p>',
    schema: 'FAQPage',
    image: '/images/services/website_dev_abstract_1780309098986.png'
  },
  {
    path: 'services/seo-services.html',
    title: 'SEO Services in Bengaluru | Zephyro Web Development Studio',
    desc: 'SEO services designed to improve search visibility, website performance, and lead generation for businesses in Bengaluru.',
    heading: 'SEO Services',
    content: '<p>Dominate local search rankings in Bengaluru and beyond.</p>',
    schema: 'FAQPage',
    image: '/images/services/seo_abstract_1780309115670.png'
  },
  {
    path: 'services/landing-page-development.html',
    title: 'Landing Page Development in Bengaluru | Zephyro',
    desc: 'High-converting landing page development for your marketing campaigns.',
    heading: 'Landing Page Development',
    content: '<p>Conversion-focused landing pages designed for high ROI.</p>',
    image: '/images/services/landing_page_abstract_1780309136613.png'
  },
  {
    path: 'services/logo-design.html',
    title: 'Premium Logo Design Services | Zephyro Web Development Studio',
    desc: 'Professional logo design and brand identity services to make your business stand out.',
    heading: 'Logo Design Services',
    content: '<p>Stand out with a premium custom logo design.</p>',
    image: '/images/services/logo_design_abstract_1780309153352.png'
  },
  {
    path: 'services/business-card-design.html',
    title: 'Business Card Design | Zephyro Web Development Studio',
    desc: 'Professional and premium business card design services.',
    heading: 'Business Card Design',
    content: '<p>Leave a lasting impression with premium business cards.</p>',
    image: '/images/services/business_card_abstract_1780309172315.png'
  },
  {
    path: 'services/website-redesign.html',
    title: 'Website Redesign Services | Zephyro Web Development Studio',
    desc: 'Revamp your outdated website with our premium website redesign services.',
    heading: 'Website Redesign Services',
    content: '<p>Upgrade your digital presence with a full website redesign.</p>',
    image: '/images/services/website_redesign_abstract_1780309188109.png'
  },
  // LOCATIONS
  {
    path: 'website-development-bengaluru.html',
    title: 'Website Development Company in Bengaluru | Top Web Designers',
    desc: 'Zephyro Web Development Studio is a top website development company in Bengaluru. We build fast, SEO-optimized, and premium websites.',
    heading: 'Website Development in Bengaluru',
    content: '<p>Serving Whitefield, HSR Layout, Koramangala, and more.</p>'
  },
  {
    path: 'seo-services-bengaluru.html',
    title: 'SEO Services Company in Bengaluru | Local SEO Experts',
    desc: 'Best SEO services in Bengaluru. Increase your organic traffic and lead generation with Zephyro Web Development Studio.',
    heading: 'SEO Services in Bengaluru',
    content: '<p>Expert local SEO for Bengaluru businesses.</p>'
  },
  {
    path: 'web-design-company-bengaluru.html',
    title: 'Web Design Company in Bengaluru | Premium UI/UX',
    desc: 'Leading web design company in Bengaluru specializing in premium, responsive, and conversion-optimized websites.',
    heading: 'Web Design Company in Bengaluru',
    content: '<p>Premium web design tailored for your brand.</p>'
  },
  {
    path: 'landing-page-development-bengaluru.html',
    title: 'Landing Page Development Company in Bengaluru',
    desc: 'Get high-converting landing pages built by the best web developers in Bengaluru.',
    heading: 'Landing Page Development in Bengaluru',
    content: '<p>Turn ad clicks into customers with our landing pages.</p>'
  },
  // BLOG
  {
    path: 'blog/index.html',
    title: 'Digital Marketing & Web Development Insights | Zephyro Blog',
    desc: 'Read the latest insights on web development, SEO, and digital marketing from Zephyro Web Development Studio.',
    heading: 'Insights & Resources',
    content: '<p>Stay updated with our latest industry insights.</p>',
    type: 'blog_index'
  },
  {
    path: 'blog/how-much-does-a-business-website-cost.html',
    title: 'How Much Does a Business Website Cost in India? | Zephyro',
    desc: 'Find out the real cost of building a business website in India, from budget templates to premium custom builds.',
    heading: 'How Much Does a Business Website Cost in India?',
    content: `
      <p style="margin-bottom: 20px;">When planning a digital transformation, the first question most business owners in Bengaluru ask is: "How much will this actually cost?" The truth is, website pricing in India varies drastically based on the value, performance, and custom engineering required.</p>
      <h3 style="color: white; font-size: 24px; margin: 30px 0 15px;">The Template Trap (₹10,000 - ₹30,000)</h3>
      <p style="margin-bottom: 20px;">Many freelancers offer seemingly cheap websites built on generic, bloated WordPress themes. While the initial cost is low, these sites suffer from slow loading speeds, poor SEO rankings, and zero conversion optimization, ultimately costing you more in lost leads.</p>
      <h3 style="color: white; font-size: 24px; margin: 30px 0 15px;">The Premium Custom Build (₹50,000 - ₹2,00,000+)</h3>
      <p style="margin-bottom: 20px;">A premium agency builds from the ground up. At Zephyro Web Development Studio, we engineer custom solutions using modern stacks (like Vite and React) that load in under 1 second. We integrate advanced technical SEO, LocalBusiness schemas, and conversion-focused UI/UX design. This isn't just a website; it's a lead-generating asset with a high ROI.</p>
    `,
    schema: 'BlogPosting',
    type: 'blog',
    date: 'June 1, 2026',
    readTime: '4 Min Read',
    image: '/images/blog/blog_cost_abstract_1780310292406.png'
  },
  {
    path: 'blog/why-local-business-needs-website.html',
    title: 'Why Every Local Business Needs a Professional Website',
    desc: 'Discover why a professional website is the most important investment for your local business in Bengaluru.',
    heading: 'Why Every Local Business Needs a Professional Website',
    content: `
      <p style="margin-bottom: 20px;">In 2026, relying solely on foot traffic or a simple Instagram page is no longer enough to dominate a competitive market like Bengaluru. Consumers are actively searching for local services online, and if you don't have a professional website, you're invisible to them.</p>
      <h3 style="color: white; font-size: 24px; margin: 30px 0 15px;">Owning Your Digital Real Estate</h3>
      <p style="margin-bottom: 20px;">Social media algorithms change constantly, and organic reach is declining. A website is the only digital asset you truly own. It acts as a 24/7 salesperson, capturing leads while you sleep. Furthermore, integrating Local SEO ensures that when someone in Indiranagar or Whitefield searches for your specific services, your business appears first in the Google Maps pack.</p>
    `,
    schema: 'BlogPosting',
    type: 'blog',
    date: 'May 28, 2026',
    readTime: '3 Min Read',
    image: '/images/blog/blog_local_business_1780310310935.png'
  },
  {
    path: 'blog/seo-vs-paid-ads.html',
    title: 'SEO vs Paid Ads: Which is Better for Small Businesses?',
    desc: 'Compare SEO and Paid Ads to determine the best digital marketing strategy for your small business growth.',
    heading: 'SEO vs Paid Ads: Which is Better for Small Businesses?',
    content: `
      <p style="margin-bottom: 20px;">The debate between Search Engine Optimization (SEO) and Pay-Per-Click (PPC) ads is ongoing. Both drive traffic, but they operate on fundamentally different timelines and ROI models.</p>
      <h3 style="color: white; font-size: 24px; margin: 30px 0 15px;">The Immediate Impact of Ads</h3>
      <p style="margin-bottom: 20px;">Paid ads guarantee immediate visibility. You pay Google or Meta, and your business appears at the top. However, the moment you stop paying, the traffic dies instantly. It is a rent-based model.</p>
      <h3 style="color: white; font-size: 24px; margin: 30px 0 15px;">The Compounding ROI of SEO</h3>
      <p style="margin-bottom: 20px;">SEO, on the other hand, is an equity-based model. It takes months to build authority, but once you rank on the first page organically, you receive free, high-intent traffic for years. We recommend a hybrid approach: use ads for short-term lead generation while heavily investing in technical SEO to build a sustainable, long-term acquisition channel.</p>
    `,
    schema: 'BlogPosting',
    type: 'blog',
    date: 'May 15, 2026',
    readTime: '5 Min Read',
    image: '/images/blog/blog_seo_vs_ads_1780310328973.png'
  },
  {
    path: 'blog/signs-you-need-website-redesign.html',
    title: '5 Signs Your Business Needs a Website Redesign',
    desc: 'Is your website holding your business back? Learn the top 5 signs it\'s time for a professional website redesign.',
    heading: '5 Signs Your Business Needs a Website Redesign',
    content: `
      <p style="margin-bottom: 20px;">Your website is the digital storefront of your brand. If it looks outdated, customers will assume your services are outdated too. Here are the clear indicators that it's time for an upgrade.</p>
      <ul style="margin-bottom: 20px; padding-left: 20px; display: flex; flex-direction: column; gap: 10px;">
        <li><strong>1. It Takes Longer Than 3 Seconds to Load:</strong> 53% of mobile users abandon sites that take longer than 3 seconds to load.</li>
        <li><strong>2. It Isn't Mobile-First:</strong> If users have to pinch and zoom on their phones, you are losing sales.</li>
        <li><strong>3. Poor Conversion Rates:</strong> If you get traffic but no inquiries, your UI/UX design is failing to build trust.</li>
        <li><strong>4. Brand Misalignment:</strong> Your business has evolved, but your website still looks like it was built in 2015.</li>
        <li><strong>5. Failing Core Web Vitals:</strong> Google explicitly penalizes sites with poor performance scores in search rankings.</li>
      </ul>
      <p>If any of these apply, it is time to consult Zephyro Web Development Studio for a full digital revamp.</p>
    `,
    schema: 'BlogPosting',
    type: 'blog',
    date: 'April 30, 2026',
    readTime: '4 Min Read',
    image: '/images/blog/blog_redesign_1780310347170.png'
  },
  {
    path: 'blog/how-fast-websites-improve-conversions.html',
    title: 'How Fast Websites Improve Conversions | Zephyro',
    desc: 'Learn how website loading speed directly impacts your conversion rate and overall business revenue.',
    heading: 'How Fast Websites Improve Conversions',
    content: `
      <p style="margin-bottom: 20px;">In the digital landscape, speed is revenue. A delay of just one second in page load time can result in a 7% reduction in conversions. If an e-commerce site makes $100,000 a day, a 1-second delay could potentially cost $2.5 million in lost sales every year.</p>
      <h3 style="color: white; font-size: 24px; margin: 30px 0 15px;">The Psychology of Speed</h3>
      <p style="margin-bottom: 20px;">Modern consumers have zero tolerance for latency. A blazing-fast website instantly communicates professionalism, reliability, and premium quality. At Zephyro, we abandon bloated builders and engineer sites using lightning-fast modern stacks, optimized asset delivery, and edge caching to ensure near-instantaneous load times.</p>
    `,
    schema: 'BlogPosting',
    type: 'blog',
    date: 'April 12, 2026',
    readTime: '3 Min Read',
    image: '/images/blog/blog_speed_1780310366833.png'
  }
];

function generateHead(p) {
  const url = `https://zephyrowebstudio.in/${p.path.replace('index.html', '')}`;
  
  let schema = `
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://zephyrowebstudio.in/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "${p.heading}"
      }]
    }
    </script>`;

  if (p.schema === 'FAQPage') {
    schema += `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is included in this service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide end-to-end solutions tailored to your business goals, including strategy, execution, and support."
        }
      }]
    }
    </script>`;
  } else if (p.schema === 'BlogPosting') {
    schema += `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${url}"
      },
      "headline": "${p.title}",
      "description": "${p.desc}",
      "image": "https://zephyrowebstudio.in${p.image}",  
      "author": {
        "@type": "Organization",
        "name": "Zephyro Web Development Studio"
      },  
      "publisher": {
        "@type": "Organization",
        "name": "Zephyro Web Development Studio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://zephyrowebstudio.in/favicon.png"
        }
      },
      "datePublished": "2026-05-01T08:00:00+08:00"
    }
    </script>`;
  }

  return `
    <!-- SEO Optimization -->
    <title>${p.title}</title>
    <meta name="description" content="${p.desc}" />
    <meta name="keywords" content="${p.title.split(' ').join(', ')}" />
    <meta name="author" content="Zephyro Web Development Studio" />
    <link rel="canonical" href="${url}" />
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="${p.title}" />
    <meta property="og:description" content="${p.desc}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    ${schema}
`;
}

function generateBody(p) {
  if (p.type === 'blog') {
    return `
    <section class="section-panel app-section" style="padding: 150px 40px; min-height: 80vh;">
      <article style="max-width: 800px; margin: 0 auto; text-align: left;">
        <a href="/blog/index.html" class="body-mono" style="color: var(--text-secondary); text-decoration: none; margin-bottom: 20px; display: inline-block;">&larr; BACK TO INSIGHTS</a>
        <h1 class="heading-large" style="margin-top: 10px; margin-bottom: 20px; font-size: 42px; line-height: 1.2;">${p.heading}</h1>
        
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 40px; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); padding: 15px 0;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: #222; display: flex; align-items: center; justify-content: center;">
              <i data-lucide="pen-tool" style="width: 20px; height: 20px; color: white;"></i>
            </div>
            <div>
              <div class="body-mono" style="font-size: 12px; color: white;">ZEPHYRO STUDIO</div>
              <div class="body-regular" style="font-size: 12px; color: var(--text-secondary);">Editorial Team</div>
            </div>
          </div>
          <div style="width: 1px; height: 30px; background: var(--border-color);"></div>
          <div>
            <div class="body-mono" style="font-size: 12px; color: white;">PUBLISHED</div>
            <div class="body-regular" style="font-size: 12px; color: var(--text-secondary);">${p.date}</div>
          </div>
          <div style="width: 1px; height: 30px; background: var(--border-color);"></div>
          <div>
            <div class="body-mono" style="font-size: 12px; color: white;">READ TIME</div>
            <div class="body-regular" style="font-size: 12px; color: var(--text-secondary);">${p.readTime}</div>
          </div>
        </div>

        <img src="${p.image}" alt="${p.heading}" loading="lazy" width="800" height="400" style="width: 100%; height: auto; border-radius: 12px; margin-bottom: 50px; border: 1px solid var(--border-color);" />

        <div class="body-regular blog-content" style="color: var(--text-secondary); font-size: 18px; line-height: 1.8;">
          ${p.content}
        </div>
        
        <!-- Internal Linking Silo Widget -->
        <div style="margin-top: 80px; padding: 40px; background: rgba(20,20,20,0.5); border-radius: 12px; border: 1px solid var(--border-color); text-align: center;">
          <h3 class="heading-small" style="margin-bottom: 15px;">Ready to elevate your digital presence?</h3>
          <p class="body-regular" style="margin-bottom: 30px; color: var(--text-secondary);">Zephyro Web Development Studio engineers high-performance digital solutions.</p>
          <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
            <a href="/services/website-development.html" class="magnetic-button" style="padding: 12px 24px;">Web Development</a>
            <a href="/services/seo-services.html" class="magnetic-button" style="padding: 12px 24px; background: transparent; border: 1px solid white;">SEO Services</a>
          </div>
        </div>
      </article>
    </section>
    `;
  }

  if (p.type === 'blog_index') {
    // Generate grid for blog index
    const blogPosts = pages.filter(page => page.type === 'blog');
    let gridHTML = blogPosts.map(post => `
      <a href="/${post.path}" class="service-card" style="text-decoration: none; color: inherit; display: block;" data-tilt>
        <img src="${post.image}" alt="${post.heading}" loading="lazy" width="400" height="200" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--border-color);" />
        <span class="body-mono" style="font-size: 12px; color: var(--text-secondary);">${post.date} &nbsp;|&nbsp; ${post.readTime}</span>
        <h3 class="heading-small" style="margin: 15px 0;">${post.heading}</h3>
        <p class="body-regular" style="font-size: 14px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${post.desc}</p>
        <div style="margin-top: 20px; display: flex; align-items: center; gap: 10px; color: var(--text-primary); font-size: 14px; font-weight: 600;">
          <span>READ ARTICLE</span> <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
        </div>
      </a>
    `).join('');

    return `
    <section class="section-panel app-section" style="padding: 150px 40px; min-height: 80vh;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <span class="body-mono">ZEPHYRO STUDIO</span>
          <h1 class="heading-large" style="margin-top: 20px;">Insights & Strategy</h1>
          <p class="body-regular" style="color: var(--text-secondary); max-width: 600px; margin: 20px auto 0;">Deep dives into modern web development, technical SEO, and scaling your business digitally.</p>
        </div>
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
          ${gridHTML}
        </div>
      </div>
    </section>
    `;
  }

  let imageSection = '';
  let extendedContent = '';

  if (p.image) {
    imageSection = `
    <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); box-shadow: 0 20px 40px rgba(0,0,0,0.4);">
      <img src="${p.image}" alt="${p.heading}" loading="lazy" width="600" height="600" style="width: 100%; height: auto; object-fit: cover; display: block; filter: contrast(1.1) brightness(0.9);" />
    </div>`;
    
    extendedContent = `
      <p style="margin-top: 20px;">We follow a data-driven, strategic approach to ensure the best results. Our team works closely with you to understand your goals, target audience, and market positioning before writing a single line of code or designing a single pixel.</p>
      <p style="margin-top: 20px;">By leveraging the latest technologies and industry best practices, we deliver solutions that are not only visually stunning but also highly functional and scalable.</p>
      
      <div style="margin-top: 40px; display: flex; flex-direction: column; gap: 15px;">
         <div style="display: flex; align-items: center; gap: 10px;">
           <i data-lucide="check-circle-2" style="color: var(--text-primary); width: 24px; height: 24px;" aria-hidden="true"></i>
           <span style="font-weight: 500; color: white;">Premium Quality & Design</span>
         </div>
         <div style="display: flex; align-items: center; gap: 10px;">
           <i data-lucide="check-circle-2" style="color: var(--text-primary); width: 24px; height: 24px;" aria-hidden="true"></i>
           <span style="font-weight: 500; color: white;">Performance Optimized</span>
         </div>
         <div style="display: flex; align-items: center; gap: 10px;">
           <i data-lucide="check-circle-2" style="color: var(--text-primary); width: 24px; height: 24px;" aria-hidden="true"></i>
           <span style="font-weight: 500; color: white;">Dedicated Support & Strategy</span>
         </div>
      </div>`;
  }

  return `
    <section class="section-panel app-section" style="padding: 150px 40px; min-height: 80vh;">
      <div style="max-width: ${p.image ? '1200px' : '800px'}; margin: 0 auto; ${p.image ? 'display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 60px; align-items: center;' : 'text-align: left;'}">
        <div>
          <span class="body-mono">ZEPHYRO STUDIO SERVICES</span>
          <h1 class="heading-large" style="margin-top: 20px; margin-bottom: 40px; font-size: ${p.image ? '48px' : 'inherit'}; line-height: 1.1;">${p.heading}</h1>
          <div class="body-regular" style="color: var(--text-secondary); font-size: 18px; line-height: 1.8;">
            ${p.content}
            ${extendedContent}
          </div>
          <div style="margin-top: 60px;">
            <a href="/contact.html" class="magnetic-button" aria-label="Discuss your project with us">
              <span class="btn-text">Discuss Your Project</span>
              <span class="btn-icon"><i data-lucide="arrow-right" aria-hidden="true"></i></span>
            </a>
          </div>
        </div>
        ${imageSection}
      </div>
    </section>
  `;
}

pages.forEach(p => {
  const fullPath = path.resolve(rootDir, p.path);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let fileContent = template;
  
  // Replace head
  const headTarget = `
    <!-- SEO Optimization -->
    <title>Zephyro Web Studio | Premium Creative Agency</title>
    <meta name="description" content="Zephyro Web Studio is a premium web design and development agency based in New York. We craft modern, high-performance, and immersive digital experiences that convert leads into clients." />
    <meta name="keywords" content="web agency New York, creative studio, web design NYC, digital experiences, premium development, local SEO expert, minimal design, black and white portfolio" />
    <meta name="author" content="Zephyro Web Studio" />
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="Zephyro Web Studio | Premium Creative Agency NYC" />
    <meta property="og:description" content="Zephyro Web Studio is a premium web design and development agency based in New York. We craft modern, high-performance, and immersive digital experiences." />
    <meta property="og:type" content="website" />
`.trim();

  fileContent = fileContent.replace(headTarget, generateHead(p).trim());
  
  // Update namespace
  fileContent = fileContent.replace('data-barba-namespace="home"', 'data-barba-namespace="generic"');
  
  // Inject body
  fileContent = fileContent.replace('<!-- The JS will inject the actual innerHTML here temporarily, or we inject it statically later -->', generateBody(p));

  fs.writeFileSync(fullPath, fileContent, 'utf8');
  console.log('Generated: ' + p.path);
});

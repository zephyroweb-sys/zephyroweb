import { defineConfig } from 'vite';
import { resolve } from 'path';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    Sitemap({
      hostname: 'https://zephyrowebstudio.in', // replace with actual domain if different
      dynamicRoutes: [
        '/',
        '/about.html',
        '/services.html',
        '/projects.html',
        '/process.html',
        '/pricing.html',
        '/contact.html',
        '/services/website-development.html',
        '/services/seo-services.html',
        '/services/landing-page-development.html',
        '/services/logo-design.html',
        '/services/business-card-design.html',
        '/services/website-redesign.html',
        '/website-development-bengaluru.html',
        '/seo-services-bengaluru.html',
        '/web-design-company-bengaluru.html',
        '/landing-page-development-bengaluru.html',
        '/blog/index.html',
        '/blog/how-much-does-a-business-website-cost.html',
        '/blog/why-local-business-needs-website.html',
        '/blog/seo-vs-paid-ads.html',
        '/blog/signs-you-need-website-redesign.html',
        '/blog/how-fast-websites-improve-conversions.html'
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        projects: resolve(__dirname, 'projects.html'),
        process: resolve(__dirname, 'process.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        contact: resolve(__dirname, 'contact.html'),
        // Services
        serviceWebDev: resolve(__dirname, 'services/website-development.html'),
        serviceSEO: resolve(__dirname, 'services/seo-services.html'),
        serviceLanding: resolve(__dirname, 'services/landing-page-development.html'),
        serviceLogo: resolve(__dirname, 'services/logo-design.html'),
        serviceBizCard: resolve(__dirname, 'services/business-card-design.html'),
        serviceRedesign: resolve(__dirname, 'services/website-redesign.html'),
        // Locations
        locWebDev: resolve(__dirname, 'website-development-bengaluru.html'),
        locSEO: resolve(__dirname, 'seo-services-bengaluru.html'),
        locWebDesign: resolve(__dirname, 'web-design-company-bengaluru.html'),
        locLanding: resolve(__dirname, 'landing-page-development-bengaluru.html'),
        // Blog
        blogMain: resolve(__dirname, 'blog/index.html'),
        blogCost: resolve(__dirname, 'blog/how-much-does-a-business-website-cost.html'),
        blogNeed: resolve(__dirname, 'blog/why-local-business-needs-website.html'),
        blogSEO: resolve(__dirname, 'blog/seo-vs-paid-ads.html'),
        blogRedesign: resolve(__dirname, 'blog/signs-you-need-website-redesign.html'),
        blogSpeed: resolve(__dirname, 'blog/how-fast-websites-improve-conversions.html')
      }
    }
  }
});

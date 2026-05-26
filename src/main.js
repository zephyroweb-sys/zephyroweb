import './style.css';
import Lenis from 'lenis';
import gsap from 'gsap';
import barba from '@barba/core';

// Animations & Base Components Imports
import { initCircuitCanvas } from './animations/canvas';
import { initNavigation } from './components/navigation';

// Page / Section Modules Imports
import { initHomeAnimations } from './pages/home.js';
import { initServicesAnimations } from './pages/services.js';
import { initProjectsAnimations } from './pages/projects.js';
import { initProcessAnimations } from './pages/process.js';
import { initPricingAnimations } from './pages/pricing.js';
import { initAboutAnimations } from './pages/about.js';
import { initContactAnimations } from './pages/contact.js';
import { renderFooter } from './components/footer.js';

let lenisInstance = null;

// Initialize Smooth Scroll Engine (Lenis)
function initSmoothScroll() {
  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    smoothWheel: true,
    wheelMultiplier: 1.0,
    infinite: false
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenisInstance;
}

// Preloader progress bar simulation
function handlePreloader(onCompleteCallback) {
  const loader = document.getElementById('page-loader');
  const bar = document.getElementById('loader-bar');
  
  if (!loader || !bar) {
    if (onCompleteCallback) onCompleteCallback();
    return;
  }

  let progress = 0;
  const interval = setInterval(() => {
    if (progress < 40) progress += Math.random() * 20;
    else if (progress < 80) progress += Math.random() * 10;
    else progress += Math.random() * 5;

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      bar.style.width = '100%';
      
      setTimeout(() => {
        loader.classList.add('loaded');
        if (onCompleteCallback) onCompleteCallback();
      }, 300);
    } else {
      bar.style.width = `${progress}%`;
    }
  }, 30);
}

const pageInitializers = {
  home: initHomeAnimations,
  services: initServicesAnimations,
  projects: initProjectsAnimations,
  process: initProcessAnimations,
  pricing: initPricingAnimations,
  about: initAboutAnimations,
  contact: initContactAnimations
};

// Bootstrap application on layout load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize circuit canvas
  initCircuitCanvas();
  
  // 3. Initialize header mechanics
  initNavigation();
  
  // 4. Initialize Lenis scroll
  initSmoothScroll();

  // Render global footer in shell
  const globalFooter = document.getElementById('global-footer');
  if (globalFooter) {
    globalFooter.innerHTML = renderFooter();
  }

  // 5. Fire preloader and render landing modules
  handlePreloader(() => {
    // Initial page load animations
    const container = document.querySelector('[data-barba="container"]');
    const currentNamespace = container ? container.getAttribute('data-barba-namespace') : 'home';
    
    if (pageInitializers[currentNamespace]) {
      pageInitializers[currentNamespace]();
    }
    if (window.lucide) window.lucide.createIcons();

    // Initialize Barba.js
    barba.init({
      transitions: [{
        name: 'luxury-transition',
        leave(data) {
          const overlay = document.getElementById('transition-overlay');
          // Close mobile drawer dynamically if open
          document.body.classList.remove('mobile-menu-active');
          const toggleBtn = document.getElementById('mobile-toggle');
          if (toggleBtn) toggleBtn.classList.remove('mobile-toggle-active');
          
          return gsap.to(overlay, {
            y: '0%',
            duration: 0.5,
            ease: 'power3.inOut'
          });
        },
        enter(data) {
          const overlay = document.getElementById('transition-overlay');
          
          if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
          else window.scrollTo(0, 0);
          
          return gsap.to(overlay, {
            y: '100%',
            duration: 0.5,
            ease: 'power3.inOut',
            onComplete: () => {
              gsap.set(overlay, { y: '-100%' });
            }
          });
        }
      }],
      views: Object.keys(pageInitializers).map(namespace => ({
        namespace,
        afterEnter(data) {
          if (pageInitializers[namespace]) pageInitializers[namespace]();
          if (window.lucide) window.lucide.createIcons();
          
          // Update active nav links
          const currentPath = data.next.url.path;
          const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
          navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === currentPath || (currentPath === '' && item.getAttribute('href') === '/')) {
              item.classList.add('active');
            }
          });
        }
      }))
    });
  });
});

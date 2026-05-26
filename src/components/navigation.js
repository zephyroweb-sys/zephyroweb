import gsap from 'gsap';

export function initNavigation() {
  const header = document.getElementById('site-header');
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-item, .mobile-nav-item');
  
  if (!header) return;

  // 1. STICKY HEADER AUTO-HIDE/SHOW ON SCROLL
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Ignore small scrolls or negative bouncy scrolls on iOS
    if (Math.abs(currentScrollY - lastScrollY) < 10) return;
    
    if (currentScrollY > lastScrollY && currentScrollY > 120) {
      // Scrolling down - hide header
      gsap.to(header, { y: '-100%', duration: 0.4, ease: 'power2.inOut' });
    } else {
      // Scrolling up - show header
      gsap.to(header, { y: '0%', duration: 0.4, ease: 'power2.out' });
    }
    
    lastScrollY = currentScrollY;
  });

  // 2. MAGNETIC CTA BUTTON EFFECT
  const magneticButtons = document.querySelectorAll('.magnetic-button');
  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      
      // Calculate mouse displacement relative to center of the button
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      
      const strength = btn.dataset.strength || 20;

      // Elastic pull on both the button itself and its sub-icons
      gsap.to(btn, {
        x: x * (strength / 100),
        y: y * (strength / 100),
        duration: 0.35,
        ease: 'power2.out'
      });
      
      const icon = btn.querySelector('.btn-icon');
      if (icon) {
        gsap.to(icon, {
          x: x * (strength / 50),
          y: y * (strength / 50),
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    });

    btn.addEventListener('mouseleave', () => {
      // Elastic return to base position
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)'
      });
      
      const icon = btn.querySelector('.btn-icon');
      if (icon) {
        gsap.to(icon, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.4)'
        });
      }
    });
  });

  // 3. MOBILE MENU DRAWER INTERACTIVE TOGGLE
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isActive = document.body.classList.toggle('mobile-menu-active');
      toggleBtn.classList.toggle('mobile-toggle-active');
      
      if (isActive) {
        // Animate elements inside drawer staggering in
        const listItems = drawer.querySelectorAll('.mobile-nav-item');
        gsap.fromTo(listItems, 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.15 }
        );
      }
    });

    // Close mobile drawer when link is clicked
    const drawerLinks = drawer.querySelectorAll('.mobile-nav-item');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('mobile-menu-active');
        toggleBtn.classList.remove('mobile-toggle-active');
      });
    });
  }
}

/**
 * Highlights the active page navigation items.
 * @param {string} pageId 
 */
export function setActiveNavItem(pageId) {
  const items = document.querySelectorAll('.nav-item, .mobile-nav-item');
  items.forEach((item) => {
    if (item.dataset.page === pageId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

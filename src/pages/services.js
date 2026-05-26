import { animateTextReveal } from '../animations/text';

export function renderServices() {
  return `
    <section class="section-panel app-section" id="services-page">
      <div class="home-services" style="margin-top: 0;">
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <span class="body-mono">OUR SERVICES • CAPABILITIES</span>
          <h2 class="heading-medium animate-reveal-services">ENGINEERING HIGH-CONVERSION DIGITAL SYSTEMS</h2>
        </div>
        
        <!-- 6 services cards grid -->
        <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
          
          <!-- Card 1: Website Development -->
          <div class="service-card" data-tilt>
            <span class="service-num">01 / ENG</span>
            <div class="service-icon"><i data-lucide="code-xml"></i></div>
            <h3 class="heading-small">Website Development</h3>
            <p class="body-regular">Custom modern websites built for speed, responsiveness, and conversion. We write clean, optimized codesets from scratch.</p>
          </div>
          
          <!-- Card 2: SEO Optimization -->
          <div class="service-card" data-tilt>
            <span class="service-num">02 / SEO</span>
            <div class="service-icon"><i data-lucide="search-code"></i></div>
            <h3 class="heading-small">SEO Optimization</h3>
            <p class="body-regular">Technical and local SEO strategies that improve visibility, crawlability, search rankings, and organic inbound growth.</p>
          </div>
          
          <!-- Card 3: Landing Pages -->
          <div class="service-card" data-tilt>
            <span class="service-num">03 / CONV</span>
            <div class="service-icon"><i data-lucide="target"></i></div>
            <h3 class="heading-small">Landing Pages</h3>
            <p class="body-regular">High-converting landing pages designed to generate leads and sales, structured with high-retention visual staggers.</p>
          </div>
          
          <!-- Card 4: Logo Design -->
          <div class="service-card" data-tilt>
            <span class="service-num">04 / BRAND</span>
            <div class="service-icon"><i data-lucide="sparkles"></i></div>
            <h3 class="heading-small">Logo Design</h3>
            <p class="body-regular">Modern brand identity and structural logo systems tailored for businesses looking to project premium market authority.</p>
          </div>
          
          <!-- Card 5: Visiting Card Design -->
          <div class="service-card" data-tilt>
            <span class="service-num">05 / PRINT</span>
            <div class="service-icon"><i data-lucide="contact-2"></i></div>
            <h3 class="heading-small">Visiting Card Design</h3>
            <p class="body-regular">Premium business cards and print-ready branding materials designed to establish high-fashion offline credentials.</p>
          </div>
          
          <!-- Card 6: Website Revamps -->
          <div class="service-card" data-tilt>
            <span class="service-num">06 / TRANS</span>
            <div class="service-icon"><i data-lucide="refresh-cw"></i></div>
            <h3 class="heading-small">Website Revamps</h3>
            <p class="body-regular">Transform outdated legacy websites into modern, sleek, conversion-focused experiences built to win premium conversions.</p>
          </div>
          
        </div>
      </div>
    </section>
  `;
}

export function initServicesAnimations() {
  const reveals = document.querySelectorAll('.animate-reveal-services');
  reveals.forEach((el, index) => {
    animateTextReveal(el, index * 0.1);
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Interactive mouse tracking glow effect on service cards
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

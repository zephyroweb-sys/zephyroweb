import { animateTextReveal } from '../animations/text';

export function renderPricing() {
  return `
    <section class="section-panel app-section" id="pricing-page">
      <div class="pricing-header" style="max-width: 1200px; margin: 0 auto; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <span class="body-mono">PRICING • INVESTMENT MODEL</span>
        <h1 class="heading-medium animate-reveal-pricing-h">CHOOSE THE PERFECT PLAN</h1>
        <p class="body-large" style="max-width: 700px; margin: 0 auto;">Modern web solutions tailored for businesses that want to grow online. Transparent pricing with zero hidden layers.</p>
      </div>
      
      <!-- Starter, Business, and Premium Plan Grid -->
      <div class="pricing-grid" style="max-width: 1200px; margin: 60px auto 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
        
        <!-- Plan 1: Starter -->
        <div class="price-card info-glass-card" style="display: flex; flex-direction: column; gap: 30px; padding: 50px 40px; background: rgba(13, 13, 13, 0.45); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.4); position: relative; transition: var(--transition-smooth);">
          <div>
            <span class="body-mono">PLAN 01 / STARTER</span>
            <h3 class="heading-small" style="margin-top: 10px; font-size: 24px;">Starter</h3>
          </div>
          
          <div class="price-box" style="display: flex; align-items: flex-end; gap: 8px;">
            <span class="price-num" style="font-family: var(--font-display); font-size: 50px; font-weight: 800; line-height: 1;">₹8,999</span>
          </div>
          
          <p class="body-regular" style="color: var(--text-secondary);">Perfect for startups and small businesses looking for a strong online presence.</p>
          
          <ul class="pricing-features" style="list-style: none; display: flex; flex-direction: column; gap: 15px; border-top: 1px solid var(--border-color); padding-top: 25px;">
            <li><i data-lucide="check"></i> Up to 3 Pages</li>
            <li><i data-lucide="check"></i> Fully Responsive Design</li>
            <li><i data-lucide="check"></i> Social Media Integration</li>
            <li><i data-lucide="check"></i> Free Hosting for 1 Year</li>
            <li><i data-lucide="check"></i> 3 Revisions</li>
            <li><i data-lucide="check"></i> Domain Setup Assistance</li>
            <li><i data-lucide="check"></i> Google Maps Integration</li>
            <li><i data-lucide="check"></i> Contact Form</li>
            <li><i data-lucide="check"></i> Basic Performance Optimization</li>
          </ul>
          
          <a href="/contact.html" class="magnetic-button price-btn" data-strength="15" style="margin-top: auto; text-align: center; display: block;">
            <span class="btn-text">Get Started</span>
          </a>
        </div>
        
        <!-- Plan 2: Business (Featured) -->
        <div class="price-card featured info-glass-card" style="display: flex; flex-direction: column; gap: 30px; padding: 50px 40px; background: rgba(13, 13, 13, 0.45); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1.5px solid white; box-shadow: 0 12px 45px rgba(255,255,255,0.05); position: relative; transition: var(--transition-smooth);">
          <div class="featured-tag" style="position: absolute; top: 20px; right: 20px; font-family: var(--font-mono); font-size: 9px; padding: 4px 8px; background-color: white; color: black; font-weight: 700;">MOST POPULAR</div>
          <div>
            <span class="body-mono" style="color: var(--text-primary);">PLAN 02 / ENTERPRISE</span>
            <h3 class="heading-small" style="margin-top: 10px; font-size: 24px;">Business</h3>
          </div>
          
          <div class="price-box" style="display: flex; align-items: flex-end; gap: 8px;">
            <span class="price-num" style="font-family: var(--font-display); font-size: 50px; font-weight: 800; line-height: 1;">₹16,999</span>
          </div>
          
          <p class="body-regular" style="color: var(--text-secondary);">Designed for growing businesses that need a modern conversion-focused website.</p>
          
          <ul class="pricing-features" style="list-style: none; display: flex; flex-direction: column; gap: 15px; border-top: 1px solid var(--border-color); padding-top: 25px;">
            <li><i data-lucide="check"></i> Up to 5 Pages</li>
            <li><i data-lucide="check"></i> <strong>Everything in Starter Plan</strong></li>
            <li><i data-lucide="check"></i> Custom UI Sections</li>
            <li><i data-lucide="check"></i> SEO Ready Structure</li>
            <li><i data-lucide="check"></i> Advanced Contact Forms</li>
            <li><i data-lucide="check"></i> Speed Optimization</li>
            <li><i data-lucide="check"></i> Free Hosting for 1 Year</li>
            <li><i data-lucide="check"></i> 5 Revisions</li>
            <li><i data-lucide="check"></i> Basic SEO Setup</li>
            <li><i data-lucide="check"></i> WhatsApp Integration</li>
          </ul>
          
          <a href="/contact.html" class="magnetic-button price-btn" data-strength="15" style="margin-top: auto; text-align: center; display: block; background-color: white; color: black; border-color: white;">
            <span class="btn-text">Choose Business</span>
          </a>
        </div>
        
        <!-- Plan 3: Premium -->
        <div class="price-card info-glass-card" style="display: flex; flex-direction: column; gap: 30px; padding: 50px 40px; background: rgba(13, 13, 13, 0.45); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.4); position: relative; transition: var(--transition-smooth);">
          <div class="featured-tag" style="position: absolute; top: 20px; right: 20px; font-family: var(--font-mono); font-size: 9px; padding: 4px 8px; border: 1px solid rgba(255,255,255,0.3); background-color: transparent; color: white; font-weight: 700;">PREMIUM EXPERIENCE</div>
          <div>
            <span class="body-mono">PLAN 03 / CUSTOM</span>
            <h3 class="heading-small" style="margin-top: 10px; font-size: 24px;">Premium</h3>
          </div>
          
          <div class="price-box" style="display: flex; align-items: flex-end; gap: 8px;">
            <span class="price-num" style="font-family: var(--font-display); font-size: 50px; font-weight: 800; line-height: 1;">₹29,999</span>
          </div>
          
          <p class="body-regular" style="color: var(--text-secondary);">A fully custom premium web experience built for scaling businesses and brands.</p>
          
          <ul class="pricing-features" style="list-style: none; display: flex; flex-direction: column; gap: 15px; border-top: 1px solid var(--border-color); padding-top: 25px;">
            <li><i data-lucide="check"></i> Up to 10 Pages</li>
            <li><i data-lucide="check"></i> <strong>Everything in Business Plan</strong></li>
            <li><i data-lucide="check"></i> Premium Custom UI/UX</li>
            <li><i data-lucide="check"></i> Fully Custom Design System</li>
            <li><i data-lucide="check"></i> Advanced SEO Optimization</li>
            <li><i data-lucide="check"></i> Conversion-Focused Layouts</li>
            <li><i data-lucide="check"></i> WhatsApp Chat Integration</li>
            <li><i data-lucide="check"></i> Premium Animations</li>
            <li><i data-lucide="check"></i> Priority Support</li>
            <li><i data-lucide="check"></i> Free Hosting for 1 Year</li>
            <li><i data-lucide="check"></i> 10 Revisions</li>
          </ul>
          
          <a href="/contact.html" class="magnetic-button price-btn" data-strength="15" style="margin-top: auto; text-align: center; display: block;">
            <span class="btn-text">Book a Consultation</span>
          </a>
        </div>
        
      </div>
      
      <!-- BOTTOM PREMIUM DETAILS SECTION -->
      <div class="pricing-bottom-section" style="max-width: 900px; margin: 100px auto 0 auto; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 40px; border-top: 1px solid var(--border-color); padding-top: 60px;">
        <!-- Glowing CTA Solution -->
        <div style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
          <h4 class="heading-small" style="font-size: 18px;">Need something custom?</h4>
          <p class="body-regular" style="max-width: 600px; color: var(--text-secondary);">Contact us for a personalized solution tailored to your business goals. We engineer specific portals, database systems, and custom applications.</p>
          <a href="/contact.html" class="magnetic-button glowing-button " data-strength="18" style="box-shadow: 0 0 20px rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.4); margin-top: 10px;">
            <span class="btn-text">Contact Zephyro</span>
            <span class="btn-icon"><i data-lucide="arrow-right"></i></span>
          </a>
        </div>
        
        <!-- Premium Tagline Statement -->
        <div style="margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 30px; max-width: 800px;">
          <p class="body-large" style="font-family: var(--font-display); font-weight: 500; font-size: 20px; line-height: 1.5; color: var(--text-primary);">
            “Every website we build is custom-crafted for performance, aesthetics, and long-term scalability. No generic templates. No bloated designs.”
          </p>
        </div>
        
        <!-- Small disclaimer text -->
        <p class="body-mono" style="font-size: 9px; color: var(--text-muted); letter-spacing: 1px; margin-top: -10px;">
          * Maintenance & support packages are available separately.
        </p>
      </div>
    </section>
  `;
}

export function initPricingAnimations() {
  const reveals = document.querySelectorAll('.animate-reveal-pricing-h');
  reveals.forEach((el, index) => {
    animateTextReveal(el, index * 0.1);
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

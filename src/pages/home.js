import { animateTextReveal } from '../animations/text';

export function renderHome() {
  return `
    <div id="home-page">
      <section class="section-panel app-section active" style="min-height: 90vh; display: flex; flex-direction: column; justify-content: center;">
        <div class="home-hero-content">
          <!-- Status indicator -->
          <div class="hero-subtitle-wrapper">
            <div class="hero-dot"></div>
            <span class="body-mono">NOW ACCEPTING PROJECTS FOR 2026 • CREATIVE STUDIO</span>
          </div>
          
          <!-- Large headlines -->
          <h1 class="heading-huge animate-reveal-home">ZEPHYRO</h1>
          <h1 class="heading-huge outline-text animate-reveal-home">WEB STUDIO</h1>
          
          <!-- Modern action buttons -->
          <div class="hero-ctas" style="display: flex; gap: 20px; margin-top: 40px; flex-wrap: wrap;">
            <a href="/projects.html" class="magnetic-button" data-strength="18">
              <span class="btn-text">View Projects</span>
              <span class="btn-icon"><i data-lucide="folder-kanban"></i></span>
            </a>
            <a href="/contact.html" class="magnetic-button" data-strength="18" style="background-color: white; color: black; border-color: white;">
              <span class="btn-text">Book a Consultation</span>
              <span class="btn-icon"><i data-lucide="phone-call"></i></span>
            </a>
          </div>
          
          <!-- Premium Brand highlights -->
          <div class="hero-footer" style="margin-top: 80px;">
            <div class="hero-footer-col">
              <span class="body-mono">01 / BRAND SUITES</span>
              <p class="body-large">We engineer high-fidelity, premium digital platforms for brands looking to transcend ordinary templates.</p>
            </div>
            <div class="hero-footer-col">
              <span class="body-mono">02 / MOTION METRICS</span>
              <p class="body-large">Focusing on high-performance design, crisp staggers, and fluid user interactions.</p>
            </div>
            <div class="hero-footer-col">
              <span class="body-mono">03 / CONVERSION CODES</span>
              <p class="body-large">Developing custom, clean layouts geared to optimize engagement and accelerate visual credibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-panel" style="background-color: var(--bg-secondary); padding: 120px 40px;">
        <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px;">
          <div>
            <span class="body-mono">ABOUT US</span>
            <h2 class="heading-medium" style="margin-top: 20px;">WE CRAFT DIGITAL EXPERIENCES THAT DEFY THE ORDINARY.</h2>
            <a href="/about.html" class="magnetic-button" style="margin-top: 40px;">
              <span class="btn-text">Discover Our Studio</span>
              <span class="btn-icon"><i data-lucide="arrow-right"></i></span>
            </a>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: center;">
            <p class="body-large">Zephyro Web Studio is a premium design and development agency. We don't just build websites; we engineer high-performance conversion tools designed to elevate your brand's market perception.</p>
            <p class="body-regular" style="margin-top: 20px;">By merging striking minimalist aesthetics with complex, fluid motion, we create unforgettable digital landscapes.</p>
          </div>
        </div>
      </section>

      <section class="section-panel" style="padding: 120px 40px;">
        <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
          <span class="body-mono">WHAT WE DO</span>
          <h2 class="heading-medium" style="margin-top: 20px; margin-bottom: 60px;">OUR EXPERTISE</h2>
          
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; text-align: left;">
            <div style="padding: 40px; border: 1px solid var(--border-color); background: rgba(255,255,255,0.02);">
              <i data-lucide="code-xml" style="width: 32px; height: 32px;"></i>
              <h3 class="heading-small" style="margin-top: 20px;">Web Development</h3>
              <p class="body-regular" style="margin-top: 15px;">Fast, responsive, and tailored strictly to your operational goals.</p>
            </div>
            <div style="padding: 40px; border: 1px solid var(--border-color); background: rgba(255,255,255,0.02);">
              <i data-lucide="sparkles" style="width: 32px; height: 32px;"></i>
              <h3 class="heading-small" style="margin-top: 20px;">Brand Identity</h3>
              <p class="body-regular" style="margin-top: 15px;">Premium logo design and complete structural brand architecture.</p>
            </div>
            <div style="padding: 40px; border: 1px solid var(--border-color); background: rgba(255,255,255,0.02);">
              <i data-lucide="target" style="width: 32px; height: 32px;"></i>
              <h3 class="heading-small" style="margin-top: 20px;">SEO & Conversion</h3>
              <p class="body-regular" style="margin-top: 15px;">Targeted optimization to dominate local markets and inbound sales.</p>
            </div>
          </div>

          <a href="/services.html" class="magnetic-button" style="margin-top: 60px; background-color: white; color: black; border-color: white;">
            <span class="btn-text">View All Services</span>
            <span class="btn-icon"><i data-lucide="arrow-right"></i></span>
          </a>
        </div>
      </section>
      <section class="section-panel" style="background-color: var(--bg-tertiary); padding: 120px 40px; border-top: 1px solid var(--border-color);">
        <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
          <h2 class="heading-medium" style="margin-bottom: 30px;">READY TO DOMINATE YOUR MARKET?</h2>
          <p class="body-large" style="color: var(--text-secondary); margin-bottom: 50px;">
            Your website is your most valuable digital asset. Stop losing leads to competitors with outdated templates. Partner with Zephyro Web Studio to engineer a high-performance, conversion-focused platform that turns visitors into premium clients.
          </p>
          
          <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
            <a href="/contact.html" class="magnetic-button" style="background-color: white; color: black; border-color: white; font-size: 16px; padding: 18px 36px;">
              <span class="btn-text">Start Your Project Today</span>
              <span class="btn-icon"><i data-lucide="arrow-up-right"></i></span>
            </a>
            <a href="/pricing.html" class="magnetic-button" style="font-size: 16px; padding: 18px 36px;">
              <span class="btn-text">View Pricing Plans</span>
            </a>
          </div>
          
          <div style="margin-top: 60px; display: flex; justify-content: center; gap: 40px; opacity: 0.6;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
              <i data-lucide="shield-check" style="width: 28px; height: 28px;"></i>
              <span class="body-mono">SECURE BUILDS</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
              <i data-lucide="zap" style="width: 28px; height: 28px;"></i>
              <span class="body-mono">LIGHTNING FAST</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
              <i data-lucide="trending-up" style="width: 28px; height: 28px;"></i>
              <span class="body-mono">SEO OPTIMIZED</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initHomeAnimations() {
  const reveals = document.querySelectorAll('.animate-reveal-home');
  reveals.forEach((el, index) => {
    animateTextReveal(el, index * 0.1);
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

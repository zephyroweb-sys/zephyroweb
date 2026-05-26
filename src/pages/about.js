import { animateTextReveal } from '../animations/text';

export function renderAbout() {
  return `
    <section class="section-panel app-section" id="about-page">
      <div class="about-grid" style="align-items: flex-start; gap: 60px;">
        
        <!-- Left: Premium & Confident Copy -->
        <div class="about-content">
          <span class="body-mono">PHILOSOPHY • ZEPHYRO WAY</span>
          <h2 class="heading-medium animate-reveal-about-h">BUILT FOR BUSINESSES THAT WANT TO STAND OUT</h2>
          
          <p class="body-large" style="color: var(--text-primary); margin-top: 20px; font-weight: 500;">
            Zephyro Web Development Studio focuses on creating modern digital experiences that combine performance, aesthetics, and strategy. We help businesses establish a strong online presence through clean design, optimized user experience, and scalable web solutions.
          </p>
          
          <p class="body-regular" style="margin-top: 15px;">
            From business websites and landing pages to SEO optimization and branding assets, every project is crafted with attention to detail, speed, and long-term growth in mind. We believe in visual clarity and digital speed.
          </p>
        </div>
        
        <!-- Right: Minimalist Stats Section Grid -->
        <div class="about-stats-container" style="display: flex; flex-direction: column; gap: 30px; width: 100%;">
          <span class="body-mono">AGENCY CORE METRICS</span>
          
          <div class="stats-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; border-top: 1px solid var(--border-color); padding-top: 30px;">
            
            <!-- Stat 1 -->
            <div class="stat-card" style="border: 1px solid var(--border-color); padding: 30px; display: flex; flex-direction: column; gap: 10px; background-color: var(--bg-secondary);">
              <span class="font-display" style="font-size: 38px; font-weight: 800; font-family: var(--font-display);">50+</span>
              <span class="body-mono" style="color: var(--text-secondary); letter-spacing: 1px;">DESIGN CONCEPTS</span>
            </div>
            
            <!-- Stat 2 -->
            <div class="stat-card" style="border: 1px solid var(--border-color); padding: 30px; display: flex; flex-direction: column; gap: 10px; background-color: var(--bg-secondary);">
              <span class="font-display" style="font-size: 38px; font-weight: 800; font-family: var(--font-display);">FAST</span>
              <span class="body-mono" style="color: var(--text-secondary); letter-spacing: 1px;">RESPONSIVE BUILDS</span>
            </div>
            
            <!-- Stat 3 -->
            <div class="stat-card" style="border: 1px solid var(--border-color); padding: 30px; display: flex; flex-direction: column; gap: 10px; background-color: var(--bg-secondary);">
              <span class="font-display" style="font-size: 38px; font-weight: 800; font-family: var(--font-display);">SEO</span>
              <span class="body-mono" style="color: var(--text-secondary); letter-spacing: 1px;">OPTIMIZED CODE</span>
            </div>
            
            <!-- Stat 4 -->
            <div class="stat-card" style="border: 1px solid var(--border-color); padding: 30px; display: flex; flex-direction: column; gap: 10px; background-color: var(--bg-secondary);">
              <span class="font-display" style="font-size: 38px; font-weight: 800; font-family: var(--font-display);">MODERN</span>
              <span class="body-mono" style="color: var(--text-secondary); letter-spacing: 1px;">UI/UX SYSTEMS</span>
            </div>
            
          </div>
        </div>
        
      </div>
      
      <!-- Studio Methodology Section -->
      <div style="margin-top: 120px; border-top: 1px solid var(--border-color); padding-top: 80px;">
        <span class="body-mono">OUR METHODOLOGY</span>
        <h2 class="heading-medium" style="margin-top: 20px; margin-bottom: 60px;">WHY INDUSTRY LEADERS CHOOSE ZEPHYRO</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
          <div style="padding: 40px; background: var(--bg-tertiary); border: 1px solid var(--border-color);">
            <span class="body-mono" style="color: var(--text-primary);">01 / STRATEGY FIRST</span>
            <h3 class="heading-small" style="margin-top: 15px;">Data-Driven Architecture</h3>
            <p class="body-regular" style="margin-top: 15px;">We don't rely on guesswork. Every wireframe and user journey is meticulously planned based on market research, ensuring your website funnels users directly toward your conversion goals.</p>
          </div>
          
          <div style="padding: 40px; background: var(--bg-tertiary); border: 1px solid var(--border-color);">
            <span class="body-mono" style="color: var(--text-primary);">02 / BEYOND TEMPLATES</span>
            <h3 class="heading-small" style="margin-top: 15px;">Custom Engineering</h3>
            <p class="body-regular" style="margin-top: 15px;">Generic templates hurt your brand's credibility. We build completely bespoke, ground-up systems tailored to your exact operational requirements, ensuring you stand entirely apart from competitors.</p>
          </div>
          
          <div style="padding: 40px; background: var(--bg-tertiary); border: 1px solid var(--border-color);">
            <span class="body-mono" style="color: var(--text-primary);">03 / POST-LAUNCH</span>
            <h3 class="heading-small" style="margin-top: 15px;">Scalable Growth</h3>
            <p class="body-regular" style="margin-top: 15px;">Our relationship doesn't end at launch. We provide ongoing technical SEO scaling, infrastructure support, and performance monitoring to ensure your digital asset appreciates in value over time.</p>
          </div>
        </div>
      </div>
      
      <!-- Lead Gen Block -->
      <div style="margin-top: 100px; padding: 80px 40px; background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMGQwZDBkIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMWExYTFhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+') repeat; border: 1px solid var(--border-color); text-align: center;">
        <h3 class="heading-medium" style="margin-bottom: 20px;">READY TO ELEVATE YOUR BRAND?</h3>
        <p class="body-large" style="max-width: 600px; margin: 0 auto 40px auto;">Let's build a digital experience that leaves a lasting impression and drives real, measurable revenue.</p>
        <a href="/contact.html" class="magnetic-button" style="background-color: white; color: black; border-color: white; padding: 16px 32px;">
          <span class="btn-text">Schedule a Strategy Call</span>
          <span class="btn-icon"><i data-lucide="arrow-right"></i></span>
        </a>
      </div>
    </section>
  `;
}

export function initAboutAnimations() {
  const reveals = document.querySelectorAll('.animate-reveal-about-h');
  reveals.forEach((el, index) => {
    animateTextReveal(el, index * 0.1);
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

import { animateTextReveal } from '../animations/text';

export function renderProjects() {
  return `
    <section class="section-panel app-section" id="projects-page">
      <div style="max-width: 1200px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 60px;">
        
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <span class="body-mono">SELECTED WORK • CASE STUDIES</span>
          <h2 class="heading-medium animate-reveal-projects-h">BUILT FOR BUSINESS CONVERSIONS</h2>
        </div>
        
        <!-- Case Studies List -->
        <div class="case-studies-container" style="display: flex; flex-direction: column; gap: 80px;">
          
          <!-- Project 1: Tax Consultant Website -->
          <div class="project-card-split" style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 50px; align-items: center;">
            <div class="project-img-wrapper" style="aspect-ratio: 16/10; overflow: hidden; border: 1px solid var(--border-color); background-color: var(--bg-secondary);">
              <img src="/assets/nexus.png" alt="Tax Consultant Website" class="project-img" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);" />
            </div>
            
            <div class="project-info-split" style="display: flex; flex-direction: column; gap: 20px;">
              <span class="body-mono">CASE 01 / FINTECH</span>
              <h3 class="heading-small" style="font-size: 28px;">Tax Consultant Website</h3>
              <p class="body-regular">Modern redesign for a tax consultancy focused on trust, speed, and local SEO optimization. We transformed their digital structure into an authoritative client lead funnel.</p>
              
              <!-- Features checklist -->
              <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">SEO OPTIMIZED</span>
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">MOBILE RESPONSIVE</span>
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">IMPROVED PERFORMANCE</span>
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">PROFESSIONAL UI</span>
              </div>
            </div>
          </div>
          
          <!-- Project 2: Real Estate Website -->
          <div class="project-card-split" style="display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 50px; align-items: center;">
            <div class="project-info-split" style="display: flex; flex-direction: column; gap: 20px; grid-column: 1; @media (max-width: 992px) { grid-column: auto; }">
              <span class="body-mono">CASE 02 / REAL ESTATE</span>
              <h3 class="heading-small" style="font-size: 28px;">Real Estate Website</h3>
              <p class="body-regular">Luxury-inspired real estate platform designed to showcase properties with premium visuals, sharp shadows, and clean, organic navigation frameworks.</p>
              
              <!-- Features checklist -->
              <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">PROPERTY SHOWCASE</span>
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">RESPONSIVE DESIGN</span>
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">PREMIUM UI</span>
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">LEAD GENERATION FOCUSED</span>
              </div>
            </div>
            
            <div class="project-img-wrapper" style="aspect-ratio: 16/10; overflow: hidden; border: 1px solid var(--border-color); background-color: var(--bg-secondary); grid-column: 2; @media (max-width: 992px) { grid-column: auto; }">
              <img src="/assets/aetheria.png" alt="Real Estate Website" class="project-img" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);" />
            </div>
          </div>
          
          <!-- Project 3: E-Commerce Store -->
          <div class="project-card-split" style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 50px; align-items: center;">
            <div class="project-img-wrapper" style="aspect-ratio: 16/10; overflow: hidden; border: 1px solid var(--border-color); background-color: var(--bg-secondary);">
              <img src="/assets/fashion.png" alt="E-Commerce Store" class="project-img" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);" />
            </div>
            
            <div class="project-info-split" style="display: flex; flex-direction: column; gap: 20px;">
              <span class="body-mono">CASE 03 / E-COMMERCE</span>
              <h3 class="heading-small" style="font-size: 28px;">E-Commerce Store</h3>
              <p class="body-regular">Modern e-commerce experience designed for seamless shopping, fast performance, and higher conversions. Structured with high-fashion minimal visual weight pairing.</p>
              
              <!-- Features checklist -->
              <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">PRODUCT-FOCUSED UI</span>
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">RESPONSIVE SHOPPING</span>
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">OPTIMIZED CHECKOUT FLOW</span>
                <span class="body-mono" style="border: 1px solid var(--border-color); padding: 6px 12px; font-size: 10px; color: var(--text-primary);">MODERN BRANDING</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  `;
}

export function initProjectsAnimations() {
  const reveals = document.querySelectorAll('.animate-reveal-projects-h');
  reveals.forEach((el, index) => {
    animateTextReveal(el, index * 0.1);
  });
  
  // High contrast case card image filters on hover
  const splits = document.querySelectorAll('.project-card-split');
  splits.forEach((split) => {
    const img = split.querySelector('.project-img');
    split.addEventListener('mouseenter', () => {
      if (img) {
        img.style.filter = 'grayscale(0%) contrast(1)';
        img.style.transform = 'scale(1.03)';
      }
    });
    split.addEventListener('mouseleave', () => {
      if (img) {
        img.style.filter = 'grayscale(100%)';
        img.style.transform = 'scale(1)';
      }
    });
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

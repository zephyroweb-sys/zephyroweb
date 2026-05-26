import { animateTextReveal } from '../animations/text';

export function renderProcess() {
  return `
    <section class="section-panel app-section" id="process-page">
      <div style="max-width: 1200px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 60px;">
        
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <span class="body-mono">WORKFLOW • EXECUTION</span>
          <h2 class="heading-medium animate-reveal-process-h">OUR COLLABORATIVE BLUEPRINT</h2>
        </div>
        
        <!-- Sleek Timeline Layout -->
        <div class="timeline-container" style="position: relative; padding-left: 50px; border-left: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 50px;">
          
          <!-- Timeline Vertical Progress Fill (CSS handled) -->
          
          <!-- Step 1: Discovery -->
          <div class="timeline-step" style="position: relative;">
            <div class="timeline-dot" style="position: absolute; left: -56px; top: 8px; width: 11px; height: 11px; border-radius: 50%; border: 1.5px solid white; background-color: var(--bg-primary); transition: all 0.3s;"></div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <span class="body-mono" style="color: var(--text-muted);">STEP 01</span>
              <h3 class="heading-small" style="font-size: 22px;">Discovery</h3>
              <p class="body-regular" style="max-width: 650px;">Understanding your business model, customer demographics, core milestones, and target market audience to align design direction with real revenue goals.</p>
            </div>
          </div>
          
          <!-- Step 2: Strategy -->
          <div class="timeline-step" style="position: relative;">
            <div class="timeline-dot" style="position: absolute; left: -56px; top: 8px; width: 11px; height: 11px; border-radius: 50%; border: 1.5px solid white; background-color: var(--bg-primary); transition: all 0.3s;"></div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <span class="body-mono" style="color: var(--text-muted);">STEP 02</span>
              <h3 class="heading-small" style="font-size: 22px;">Strategy</h3>
              <p class="body-regular" style="max-width: 650px;">Architecting content hierarchies, visual directions, pair typographies, and a solid SEO architectural foundation before moving to code layouts.</p>
            </div>
          </div>
          
          <!-- Step 3: Design & Development -->
          <div class="timeline-step" style="position: relative;">
            <div class="timeline-dot" style="position: absolute; left: -56px; top: 8px; width: 11px; height: 11px; border-radius: 50%; border: 1.5px solid white; background-color: var(--bg-primary); transition: all 0.3s;"></div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <span class="body-mono" style="color: var(--text-muted);">STEP 03</span>
              <h3 class="heading-small" style="font-size: 22px;">Design & Development</h3>
              <p class="body-regular" style="max-width: 650px;">Crafting modern, fully responsive, and highly scalable digital products from scratch, integrating GSAP staggers and fast-load optimizations.</p>
            </div>
          </div>
          
          <!-- Step 4: Launch & Optimization -->
          <div class="timeline-step" style="position: relative;">
            <div class="timeline-dot" style="position: absolute; left: -56px; top: 8px; width: 11px; height: 11px; border-radius: 50%; border: 1.5px solid white; background-color: var(--bg-primary); transition: all 0.3s;"></div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <span class="body-mono" style="color: var(--text-muted);">STEP 04</span>
              <h3 class="heading-small" style="font-size: 22px;">Launch & Optimization</h3>
              <p class="body-regular" style="max-width: 650px;">Deploying your codeset to premium networks, optimizing system response assets, and auditing speed reports to ensure a flawless online experience.</p>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  `;
}

export function initProcessAnimations() {
  const reveals = document.querySelectorAll('.animate-reveal-process-h');
  reveals.forEach((el, index) => {
    animateTextReveal(el, index * 0.1);
  });
  
  // Sleek hover timeline dot glows
  const steps = document.querySelectorAll('.timeline-step');
  steps.forEach((step) => {
    const dot = step.querySelector('.timeline-dot');
    step.addEventListener('mouseenter', () => {
      if (dot) {
        dot.style.backgroundColor = 'white';
        dot.style.transform = 'scale(1.4)';
        dot.style.boxShadow = '0 0 12px white';
      }
    });
    step.addEventListener('mouseleave', () => {
      if (dot) {
        dot.style.backgroundColor = 'var(--bg-primary)';
        dot.style.transform = 'scale(1)';
        dot.style.boxShadow = 'none';
      }
    });
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

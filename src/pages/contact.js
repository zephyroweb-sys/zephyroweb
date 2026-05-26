import { animateTextReveal } from '../animations/text';

export function renderContact() {
  return `
    <section class="section-panel app-section" id="contact-page">
      <div class="contact-grid" style="align-items: flex-start;">
        
        <!-- Left Column: Contact Form with Web3Forms Integration -->
        <div class="contact-form-wrap">
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <span class="body-mono">GET IN TOUCH • BRIEFING</span>
            <h2 class="heading-medium animate-reveal-contact-h">LET'S BUILD SOMETHING EXTRAORDINARY</h2>
            <p class="body-large">Integrated with Web3Forms. Submit your brand brief and we will coordinate our initial review within 12 hours.</p>
          </div>
          
          <!-- Web3Forms Integrated Form -->
          <form action="https://api.web3forms.com/submit" method="POST" class="contact-form" id="brief-form">
            <!-- Web3Forms access key placeholder -->
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="subject" value="New Brand Brief from Zephyro Web Studio" />
            <input type="hidden" name="from_name" value="Zephyro Web Studio Portal" />
            
            <!-- Honeypot Spam Protection -->
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
            
            <!-- Name Input -->
            <div class="form-group">
              <input type="text" name="name" id="form-name" class="form-input" placeholder=" " required autocomplete="off" />
              <label for="form-name" class="form-label">YOUR NAME</label>
            </div>
            
            <!-- Email Input -->
            <div class="form-group">
              <input type="email" name="email" id="form-email" class="form-input" placeholder=" " required autocomplete="off" />
              <label for="form-email" class="form-label">EMAIL ADDRESS</label>
            </div>
            
            <!-- Business Name Input -->
            <div class="form-group">
              <input type="text" name="business_name" id="form-business" class="form-input" placeholder=" " required autocomplete="off" />
              <label for="form-business" class="form-label">BUSINESS NAME</label>
            </div>
            
            <!-- Message Input -->
            <div class="form-group">
              <textarea name="message" id="form-message" class="form-input" rows="3" placeholder=" " required autocomplete="off"></textarea>
              <label for="form-message" class="form-label">TELL US ABOUT YOUR PROJECT</label>
            </div>
            
            <!-- Custom Styled Submit -->
            <button type="submit" class="form-submit-btn " id="form-submit">
              SUBMIT BRIEF
            </button>
          </form>
        </div>
        
        <!-- Right Column: Map Widget & Info styled in premium Glassmorphism cards -->
        <div class="contact-details-wrap" style="border-left: none; padding-left: 0; display: flex; flex-direction: column; gap: 30px;">
          
          <!-- Embedded Google Maps widget -->
          <div class="map-widget-container" style="border: 1px solid var(--border-color); padding: 10px; background: rgba(13, 13, 13, 0.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082184!2d-74.11976373099734!3d40.69767006327393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1716500000000!5m2!1sen!2s" 
              width="100%" 
              height="200" 
              style="border:0; filter: grayscale(100%) invert(90%) contrast(1.2);" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          
          <!-- Glassmorphic Details block -->
          <div class="info-glass-card" style="border: 1px solid var(--border-color); padding: 40px; background: rgba(13, 13, 13, 0.45); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; gap: 30px; box-shadow: 0 8px 32px rgba(0,0,0,0.4);">
            
            <div class="contact-info-block">
              <span class="info-label">PHONE NUMBER</span>
              <a href="tel:+18009374976" class="info-text">+1 (800) ZEPHYRO</a>
            </div>
            
            <div class="contact-info-block">
              <span class="info-label">EMAIL ADDRESS</span>
              <a href="mailto:hello@zephyro.studio" class="info-text">hello@zephyro.studio</a>
            </div>
            
            <div class="contact-info-block">
              <span class="info-label">BUSINESS HOURS</span>
              <span class="info-text" style="pointer-events: none;">MON - FRI / 9:00 AM - 6:00 PM EST</span>
            </div>
            
            <div class="contact-info-block">
              <span class="info-label">SOCIAL METRICS</span>
              <div class="social-links-grid" style="grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 5px;">
                <a href="#" class="social-pill" target="_blank">TWITTER</a>
                <a href="#" class="social-pill" target="_blank">DRIBBBLE</a>
                <a href="#" class="social-pill" target="_blank">GITHUB</a>
                <a href="#" class="social-pill" target="_blank">LINKEDIN</a>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  `;
}

export function initContactAnimations() {
  const reveals = document.querySelectorAll('.animate-reveal-contact-h');
  reveals.forEach((el, index) => {
    animateTextReveal(el, index * 0.1);
  });
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

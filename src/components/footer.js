export function renderFooter() {
  return `
    <footer class="site-footer" id="site-footer" style="border-top: 1px solid var(--border-color); padding: 80px 40px 40px; background-color: var(--bg-primary); z-index: 2; position: relative;">
      <div class="footer-container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 60px;">
        
        <!-- Top row -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px;">
          
          <!-- Column 1: Brand -->
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 15px;">
              <div style="width: 44px; height: 44px; color: var(--text-primary);">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
                  <path d="M 25 25 H 75 L 25 75 H 75" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                  <circle cx="25" cy="25" r="3" fill="currentColor" />
                  <circle cx="75" cy="25" r="3" fill="currentColor" />
                  <circle cx="25" cy="75" r="3" fill="currentColor" />
                  <circle cx="75" cy="75" r="3" fill="currentColor" />
                </svg>
              </div>
              <div style="display: flex; flex-direction: column;">
                <span class="logo-title" style="font-size: 20px;">ZEPHYRO</span>
                <span class="logo-tag">WEB STUDIO</span>
              </div>
            </div>
            <p class="body-mono" style="color: var(--text-muted); margin-top: 5px;">Modern websites built for growth.</p>
            <div style="display: flex; gap: 15px; margin-top: 10px;">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style="color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'" aria-label="LinkedIn">
                <i data-lucide="linkedin" style="width: 20px; height: 20px;"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style="color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'" aria-label="Instagram">
                <i data-lucide="instagram" style="width: 20px; height: 20px;"></i>
              </a>
            </div>
          </div>
          
          <!-- Column 2: Navigation -->
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <span class="body-mono">DIRECTORY</span>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0;">
              <li><a href="/" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Home</a></li>
              <li><a href="/about.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">About</a></li>
              <li><a href="/services.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Services</a></li>
              <li><a href="/projects.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Projects</a></li>
              <li><a href="/process.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Process</a></li>
              <li><a href="/pricing.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Pricing</a></li>
              <li><a href="/contact.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Contact</a></li>
              <li><a href="/blog/index.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Insights</a></li>
            </ul>
          </div>
          
          <!-- Column 3: Services -->
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <span class="body-mono">SERVICES</span>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0;">
              <li><a href="/services/website-development.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Website Development</a></li>
              <li><a href="/services/seo-services.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">SEO Services</a></li>
              <li><a href="/services/landing-page-development.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Landing Pages</a></li>
              <li><a href="/services/logo-design.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Logo Design</a></li>
              <li><a href="/services/website-redesign.html" class="body-regular cursor-hover" style="font-weight: 500; color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Website Revamps</a></li>
            </ul>
          </div>

          <!-- Column 4: Local SEO -->
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <span class="body-mono">SERVING BUSINESSES ACROSS BENGALURU</span>
            <p class="body-regular" style="color: var(--text-secondary); font-size: 14px; line-height: 1.6;">
              We proudly serve clients across Bengaluru including Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, Marathahalli, JP Nagar, Jayanagar, and Yelahanka.
            </p>
          </div>
          
        </div>
        
        <!-- Bottom Row -->
        <div style="border-top: 1px solid var(--border-color); padding-top: 30px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
          <span class="body-mono" style="font-size: 10px; color: var(--text-muted);">&copy; 2026 ZEPHYRO WEB STUDIO • ALL RIGHTS RESERVED.</span>
          <span class="body-mono" style="font-size: 10px; color: var(--text-muted); display: flex; align-items: center; gap: 5px;">
            GRID STATUS: ONLINE <span style="width: 6px; height: 6px; border-radius: 50%; background-color: #22c55e; display: inline-block;"></span>
          </span>
        </div>
        
      </div>
    </footer>
  `;
}

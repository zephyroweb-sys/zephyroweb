export function renderFooter() {
  return `
    <footer class="site-footer" id="site-footer" style="border-top: 1px solid var(--border-color); padding: 80px 40px; background-color: var(--bg-primary); z-index: 2; position: relative;">
      <div class="footer-container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 50px;">
        
        <!-- Top row: Logo tag and Tagline -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 40px;">
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <!-- Circuit Z Logo -->
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
          </div>
          
          <!-- Quick Nav Links -->
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <span class="body-mono">DIRECTORY</span>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
              <li><a href="#hero" class="body-regular cursor-hover" style="font-weight: 500; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Home</a></li>
              <li><a href="#services" class="body-regular cursor-hover" style="font-weight: 500; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Services</a></li>
              <li><a href="#about" class="body-regular cursor-hover" style="font-weight: 500; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">About</a></li>
              <li><a href="#projects" class="body-regular cursor-hover" style="font-weight: 500; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Projects</a></li>
              <li><a href="#process" class="body-regular cursor-hover" style="font-weight: 500; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Process</a></li>
              <li><a href="#contact" class="body-regular cursor-hover" style="font-weight: 500; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Row: Copyright & Micro technical values -->
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

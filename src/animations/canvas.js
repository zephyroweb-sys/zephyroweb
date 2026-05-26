export function initCircuitCanvas() {
  const canvas = document.getElementById('circuit-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const mouse = { x: null, y: null, radius: 150 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initNodes();
  });

  // Particle configuration
  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 22000), 75); // Density based cap
  
  class Node {
    constructor() {
      this.reset();
      // Distribute randomly initially
      this.x = Math.random() * width;
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 1;
      this.baseAlpha = Math.random() * 0.15 + 0.05;
      this.alpha = this.baseAlpha;
      
      // Target position for physics repulsion
      this.ox = this.x;
      this.oy = this.y;
    }

    update() {
      // Basic drift
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around bounds
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse repulsion interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Repel from cursor smoothly
          this.x += Math.cos(angle) * force * 2.5;
          this.y += Math.sin(angle) * force * 2.5;
          this.alpha = Math.min(this.baseAlpha + force * 0.5, 0.7);
        } else {
          // Return to drift smoothly
          if (this.alpha > this.baseAlpha) {
            this.alpha -= 0.01;
          }
        }
      } else {
        if (this.alpha > this.baseAlpha) {
          this.alpha -= 0.01;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.shadowColor = 'white';
      ctx.shadowBlur = this.alpha > this.baseAlpha ? 6 : 0;
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }
  }

  function initNodes() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Node());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);

        const connectionDistance = 140;

        if (dist < connectionDistance) {
          let alpha = (connectionDistance - dist) / connectionDistance;
          alpha *= Math.min(p1.alpha, p2.alpha) * 1.5;

          if (alpha > 0.01) {
            ctx.beginPath();
            
            // Recreating circuit style square path junctions if close enough
            // Instead of pure straight lines, do occasional orthogonal paths
            const useOrthogonal = (i + j) % 7 === 0 && dist > 70;
            
            ctx.moveTo(p1.x, p1.y);
            if (useOrthogonal) {
              // Mid-point orthogonal layout
              ctx.lineTo(p1.x, p2.y);
            }
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }
  }

  // Draw technical grid coordinate lines in background
  function drawGrid() {
    const gridSize = 100;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)';
    ctx.lineWidth = 0.5;

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    drawGrid();
    drawConnections();

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  initNodes();
  animate();

  // Return clean-up method
  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}

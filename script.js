// Generate Floating Particles
function createParticles() {
  const container = document.getElementById('particlesContainer');
  const particleCount = 50; // Adjust for performance
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size
    const sizes = ['small', 'medium', 'large'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    particle.classList.add(randomSize);
    
    // Occasionally add special glowing particles
    if (Math.random() < 0.1) { // 10% chance
      const glowTypes = ['glow', 'glow-green', 'glow-gold'];
      const randomGlow = glowTypes[Math.floor(Math.random() * glowTypes.length)];
      particle.classList.add(randomGlow);
    }
    
    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 15 + 's';
    
    // Random horizontal drift
    const randomDrift = (Math.random() - 0.5) * 200; // -100px to +100px
    particle.style.setProperty('--drift', randomDrift + 'px');
    
    container.appendChild(particle);
  }
}

// Generate subtle constellation lines
function createConstellationLines() {
  const container = document.getElementById('particlesContainer');
  const lineCount = 5;
  
  for (let i = 0; i < lineCount; i++) {
    const line = document.createElement('div');
    line.className = 'constellation-line';
    
    // Random positioning and sizing
    line.style.top = Math.random() * 100 + '%';
    line.style.left = Math.random() * 100 + '%';
    line.style.width = (Math.random() * 200 + 100) + 'px';
    line.style.animationDelay = Math.random() * 45 + 's';
    line.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    container.appendChild(line);
  }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  createConstellationLines();
  
  // Add some particles periodically for continuous effect
  setInterval(() => {
    if (document.querySelectorAll('.particle').length < 60) {
      const container = document.getElementById('particlesContainer');
      const particle = document.createElement('div');
      particle.className = 'particle medium';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = '0s';
      container.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 30000);
    }
  }, 3000);
});

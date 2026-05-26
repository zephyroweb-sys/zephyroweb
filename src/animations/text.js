import gsap from 'gsap';

/**
 * Splits text inside a DOM element into individual characters wrapped in masks,
 * enabling top-tier masked stagger text reveal animations.
 * @param {HTMLElement} element 
 */
export function splitTextForReveal(element) {
  if (!element || element.dataset.splitDone) return;
  
  const originalText = element.textContent.trim();
  element.textContent = '';
  element.style.opacity = '1';
  
  // Split into words, then split words into characters
  const words = originalText.split(' ');
  
  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'word-wrapper';
    wordSpan.style.display = 'inline-block';
    wordSpan.style.whiteSpace = 'nowrap';
    
    const chars = Array.from(word);
    chars.forEach((char) => {
      const outerSpan = document.createElement('span');
      outerSpan.className = 'char-wrapper';
      outerSpan.style.display = 'inline-block';
      outerSpan.style.overflow = 'hidden';
      outerSpan.style.verticalAlign = 'top';
      
      const innerSpan = document.createElement('span');
      innerSpan.className = 'char-elem';
      innerSpan.style.display = 'inline-block';
      innerSpan.textContent = char;
      
      outerSpan.appendChild(innerSpan);
      wordSpan.appendChild(outerSpan);
    });
    
    element.appendChild(wordSpan);
    
    // Add spaces between words
    if (wordIndex < words.length - 1) {
      const spaceSpan = document.createElement('span');
      spaceSpan.style.display = 'inline-block';
      spaceSpan.innerHTML = '&nbsp;';
      element.appendChild(spaceSpan);
    }
  });

  element.dataset.splitDone = 'true';
}

/**
 * Animates the split characters of an element with a premium slide-up mask fade stagger effect.
 * @param {HTMLElement} element 
 * @param {number} delaySeconds 
 */
export function animateTextReveal(element, delaySeconds = 0) {
  if (!element) return;
  
  // If not split yet, split it
  if (!element.dataset.splitDone) {
    splitTextForReveal(element);
  }

  const chars = element.querySelectorAll('.char-elem');
  
  // Set initial hidden state
  gsap.set(chars, { y: '102%' });
  
  // Stagger reveal slide-up
  gsap.to(chars, {
    y: '0%',
    duration: 1.1,
    ease: 'power4.out',
    stagger: 0.02,
    delay: delaySeconds,
    overwrite: 'auto'
  });
}

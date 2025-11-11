/**
 * ============================================
 * MODAL.JS
 * ============================================
 * Plassering: /js/modal.js
 * 
 * Håndterer modal/popup vinduer.
 * 
 * Konsepter demonstrert:
 * - DOM manipulation
 * - Event listeners
 * - Event delegation
 * - Keyboard events
 * - Body scroll lock
 */

/**
 * ==========================================
 * GLOBAL VARIABLES
 * ==========================================
 */

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

/**
 * ==========================================
 * INITIALIZATION
 * ==========================================
 */

export function initModal() {
  console.log('🪟 Initialiserer modal...');
  
  if (!modal) return;
  
  // Close button
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  // Click overlay to close
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }
  
  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
  
  // Demo button in hero
  const demoBtn = document.getElementById('demoBtn');
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      const content = `
        <h2>Velkommen til Demo! 🎉</h2>
        <p style="margin-top: 1rem; color: var(--text-secondary);">
          Dette er en modal (popup vindu) som vises over innholdet.
        </p>
        <p style="color: var(--text-secondary);">
          Modaler er nyttige for:
        </p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary); margin-top: 0.5rem;">
          <li>Vise viktig informasjon</li>
          <li>Bekrefte handlinger</li>
          <li>Vise detaljer uten å forlate siden</li>
          <li>Skjemaer og dialoger</li>
        </ul>
        <p style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">
          💡 Tips: Trykk ESC eller klikk utenfor for å lukke!
        </p>
      `;
      openModal(content);
    });
  }
  
  console.log('✅ Modal klar!');
}

/**
 * ==========================================
 * OPEN MODAL
 * ==========================================
 */

/**
 * Åpner modal med innhold
 * @param {string} content - HTML innhold
 */
export function openModal(content) {
  if (!modal || !modalBody) return;
  
  // Sett innhold
  modalBody.innerHTML = content;
  
  // Åpne modal
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  
  // Forhindre scrolling på body
  document.body.classList.add('modal-open');
  
  // Focus på modal for accessibility
  modal.focus();
}

/**
 * ==========================================
 * CLOSE MODAL
 * ==========================================
 */

/**
 * Lukker modal
 */
export function closeModal() {
  if (!modal) return;
  
  // Lukk modal
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  
  // Tillat scrolling igjen
  document.body.classList.remove('modal-open');
}

/**
 * ============================================
 * SLUTT PÅ MODAL.JS
 * ============================================
 * 
 * Funksjoner implementert:
 * ✅ Åpne modal med innhold
 * ✅ Lukke modal (button, overlay, ESC)
 * ✅ Body scroll lock
 * ✅ Accessibility (ARIA, focus)
 * 
 * Konsepter vist:
 * - Event listeners
 * - Keyboard events
 * - DOM manipulation
 * - Accessibility
 */

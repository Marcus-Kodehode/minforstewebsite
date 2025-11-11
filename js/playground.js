/**
 * ============================================
 * PLAYGROUND.JS
 * ============================================
 * Plassering: /js/playground.js
 * 
 * Håndterer interaktiv playground section.
 * 
 * Konsepter demonstrert:
 * - Tabs system
 * - Event listeners
 * - DOM manipulation
 * - Input handling
 * - Functions
 */

/**
 * ==========================================
 * INITIALIZATION
 * ==========================================
 */

export function initPlayground() {
  console.log('🎮 Initialiserer playground...');
  
  initTabs();
  initVariablesDemo();
  initFunctionsDemo();
  initDOMDemo();
  initEventsDemo();
  
  console.log('✅ Playground klar!');
}

/**
 * ==========================================
 * TABS SYSTEM
 * ==========================================
 */

function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Hent tab id fra data attributt
      const tabId = btn.getAttribute('data-tab');
      
      // Fjern active fra alle tabs
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Legg til active på valgt tab
      btn.classList.add('active');
      const targetTab = document.getElementById(`${tabId}-tab`);
      if (targetTab) {
        targetTab.classList.add('active');
      }
    });
  });
}

/**
 * ==========================================
 * VARIABLES DEMO
 * ==========================================
 */

function initVariablesDemo() {
  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');
  const greetOutput = document.getElementById('greetOutput');
  
  if (!greetBtn) return;
  
  greetBtn.addEventListener('click', () => {
    // Hent verdi fra input
    const name = nameInput.value.trim();
    
    if (!name) {
      greetOutput.innerHTML = '<p style="color: var(--error-color);">⚠️ Vennligst skriv inn et navn!</p>';
      return;
    }
    
    // Lag hilsen med template literal
    const greeting = `Hei, ${name}! 👋 Velkommen til JavaScript!`;
    
    // Vis i output
    greetOutput.innerHTML = `
      <p style="color: var(--success-color); font-size: 1.2rem; font-weight: bold;">
        ${greeting}
      </p>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
        Dette ble laget med en <code>const</code> variabel og template literal!
      </p>
    `;
  });
  
  // Enter key support
  if (nameInput) {
    nameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        greetBtn.click();
      }
    });
  }
}

/**
 * ==========================================
 * FUNCTIONS DEMO
 * ==========================================
 */

function initFunctionsDemo() {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const calculateBtn = document.getElementById('calculateBtn');
  const calculateOutput = document.getElementById('calculateOutput');
  
  if (!calculateBtn) return;
  
  calculateBtn.addEventListener('click', () => {
    // Hent verdier og konverter til tall
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    
    // Kall funksjoner
    const sum = add(num1, num2);
    const product = multiply(num1, num2);
    const difference = subtract(num1, num2);
    
    // Vis resultater
    calculateOutput.innerHTML = `
      <div style="display: grid; gap: 0.5rem;">
        <p><strong>Addisjon:</strong> ${num1} + ${num2} = <span style="color: var(--primary-color);">${sum}</span></p>
        <p><strong>Subtraksjon:</strong> ${num1} - ${num2} = <span style="color: var(--secondary-color);">${difference}</span></p>
        <p><strong>Multiplikasjon:</strong> ${num1} × ${num2} = <span style="color: var(--accent-color);">${product}</span></p>
      </div>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 1rem;">
        Disse beregningene ble gjort med gjenbrukbare funksjoner! 🧮
      </p>
    `;
  });
}

/**
 * Matematikk funksjoner
 */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

/**
 * ==========================================
 * DOM MANIPULATION DEMO
 * ==========================================
 */

function initDOMDemo() {
  const changeColorBtn = document.getElementById('changeColorBtn');
  const changeTextBtn = document.getElementById('changeTextBtn');
  const demoBox = document.getElementById('demoBox');
  
  if (!demoBox) return;
  
  // Array med farger
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  ];
  
  // Array med tekster
  const texts = [
    'Jeg kan endres! 🎨',
    'JavaScript er kult! 🚀',
    'DOM manipulation! 💪',
    'Se på meg! 👀',
    'Klikk igjen! 🔄'
  ];
  
  let colorIndex = 0;
  let textIndex = 0;
  
  // Endre farge
  if (changeColorBtn) {
    changeColorBtn.addEventListener('click', () => {
      colorIndex = (colorIndex + 1) % colors.length;
      demoBox.style.background = colors[colorIndex];
      demoBox.style.transform = 'scale(1.05)';
      setTimeout(() => {
        demoBox.style.transform = 'scale(1)';
      }, 200);
    });
  }
  
  // Endre tekst
  if (changeTextBtn) {
    changeTextBtn.addEventListener('click', () => {
      textIndex = (textIndex + 1) % texts.length;
      demoBox.textContent = texts[textIndex];
      demoBox.style.transform = 'rotate(5deg)';
      setTimeout(() => {
        demoBox.style.transform = 'rotate(0deg)';
      }, 200);
    });
  }
}

/**
 * ==========================================
 * EVENTS DEMO
 * ==========================================
 */

function initEventsDemo() {
  const clickCountBtn = document.getElementById('clickCountBtn');
  const clickCountSpan = document.getElementById('clickCount');
  
  if (!clickCountBtn) return;
  
  let count = 0;
  
  clickCountBtn.addEventListener('click', () => {
    count++;
    clickCountSpan.textContent = count;
    
    // Animasjon
    clickCountSpan.style.transform = 'scale(1.5)';
    clickCountSpan.style.color = 'var(--primary-color)';
    
    setTimeout(() => {
      clickCountSpan.style.transform = 'scale(1)';
      clickCountSpan.style.color = 'var(--text-primary)';
    }, 200);
    
    // Spesiell melding ved visse tall
    if (count === 10) {
      alert('🎉 Gratulerer! Du har klikket 10 ganger!');
    } else if (count === 50) {
      alert('🔥 Wow! 50 klikk! Du er dedikert!');
    } else if (count === 100) {
      alert('🏆 LEGENDARISK! 100 klikk! Du er en mester!');
    }
  });
}

/**
 * ============================================
 * SLUTT PÅ PLAYGROUND.JS
 * ============================================
 * 
 * Funksjoner implementert:
 * ✅ Tabs system
 * ✅ Variables demo (input og output)
 * ✅ Functions demo (matematikk)
 * ✅ DOM manipulation demo (endre styling)
 * ✅ Events demo (click counter)
 * 
 * Konsepter vist:
 * - Event listeners
 * - DOM manipulation
 * - Functions
 * - Arrays
 * - Conditionals
 * - Animations
 */

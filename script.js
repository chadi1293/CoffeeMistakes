// CoffeeMistakes.com - Complete Quiz Logic v2.0
// Last updated: October 22, 2025 - Reddit feedback integrated

// Configuration
const CONFIG = {
  affiliateTag: "shadiz0f-20",
  paypalLink: "https://paypal.me/shadikelany",
  contactEmail: "elmasryshadi@gmail.com",
  privacyPolicyUrl: "https://coffeemistakes.com/privacy-policy"
};

// Quiz Data
const quizData = {
  questions: [
    {
      id: 1,
      text: "What kind of coffee do you want to make?",
      options: [
        { value: "espresso", label: "Espresso shots (and milk drinks like lattes)" },
        { value: "pourover", label: "Pour-over or filter coffee (V60, Chemex, drip machine)" },
        { value: "immersion", label: "French press, AeroPress, or cold brew" },
        { value: "unsure", label: "I'm not sure yet—just want better coffee!" }
      ]
    },
    {
      id: 2,
      text: "Do you want to make milk-based drinks?",
      conditional: true, // Only show if Q1 = espresso OR unsure
      options: [
        { value: "yes", label: "Yes! Lattes, cappuccinos, all the frothy goodness" },
        { value: "sometimes", label: "Sometimes, but not a priority" },
        { value: "no", label: "Nope, black coffee all the way" }
      ]
    },
    {
      id: 3,
      text: "What's your current grinder situation?",
      options: [
        { value: "quality", label: "Quality burr grinder ($100+) that works great" },
        { value: "basic", label: "Basic burr grinder (under $100)" },
        { value: "blade", label: "Blade grinder (the spinning nightmare)" },
        { value: "none", label: "No grinder yet" }
      ]
    },
    {
      id: 4,
      text: "Where do you get your coffee beans?",
      options: [
        { value: "local", label: "Fresh from a local roaster (roasted within 2-4 weeks)" },
        { value: "online", label: "Online specialty roaster or subscription" },
        { value: "supermarket", label: "Whole beans from the supermarket" },
        { value: "preground", label: "Pre-ground from wherever" }
      ]
    },
    {
      id: 5,
      text: "What water do you use for brewing?",
      options: [
        { value: "filtered", label: "Filtered water (Brita or similar)" },
        { value: "bottled", label: "Bottled or remineralized water" },
        { value: "tap", label: "Straight from the tap" }
      ]
    },
    {
      id: 6,
      text: "What's your realistic TOTAL budget for gear?",
      options: [
        { value: "under200", label: "Under $200" },
        { value: "200to500", label: "$200-500" },
        { value: "500to1000", label: "$500-1000" },
        { value: "over1000", label: "$1000+ (I'm serious about this)" }
      ]
    },
    {
      id: 7,
      text: "How patient are you with coffee-making?",
      options: [
        { value: "very", label: "Very patient - I love dialing in and experimenting" },
        { value: "somewhat", label: "Somewhat patient - I'll learn but don't overcomplicate it" },
        { value: "notvery", label: "Not very - good coffee without PhD please" },
        { value: "zero", label: "Zero patience - just make it fast and good" }
      ]
    },
    {
      id: 8,
      text: "What's your biggest coffee frustration right now?",
      options: [
        { value: "taste", label: "My espresso tastes sour or bitter" },
        { value: "inconsistent", label: "Coffee is inconsistent - sometimes good, sometimes terrible" },
        { value: "time", label: "Takes too long or too complicated" },
        { value: "starting", label: "Don't know where to start" },
        { value: "upgrade", label: "No issues, just want to upgrade" }
      ]
    }
  ]
};

// Quiz State
let currentQuestionIndex = 0;
let answers = {};
let quizStarted = false;

// Initialize quiz
document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.getElementById('start-quiz-btn');
  if (startBtn) {
    startBtn.addEventListener('click', startQuiz);
  }
});

// Start Quiz
function startQuiz() {
  quizStarted = true;
  currentQuestionIndex = 0;
  answers = {};
  
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('progress-container').style.display = 'block';
  document.getElementById('quiz-container').style.display = 'block';
  
  showQuestion(currentQuestionIndex);
  updateProgress();
}

// Show specific question
function showQuestion(index) {
  const question = quizData.questions[index];
  
  // Check if question should be shown (conditional logic)
  if (question.conditional && question.id === 2) {
    const q1Answer = answers[1];
    if (q1Answer !== 'espresso' && q1Answer !== 'unsure') {
      // Skip milk question, go to next
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.questions.length) {
        showQuestion(currentQuestionIndex);
      }
      return;
    }
  }
  
  const container = document.getElementById('quiz-container');
  
  const questionHTML = `
    <div class="question-card fade-in">
      <h2 class="question-text">${question.text}</h2>
      <div class="options-container">
        ${question.options.map((option, i) => `
          <button class="option-btn" onclick="selectAnswer(${question.id}, '${option.value}')">
            ${option.label}
          </button>
        `).join('')}
      </div>
      ${index > 0 ? '<button class="back-btn" onclick="goBack()">← Back</button>' : ''}
    </div>
  `;
  
  container.innerHTML = questionHTML;
  updateProgress();
}

// Select answer and move to next question
function selectAnswer(questionId, value) {
  answers[questionId] = value;
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < quizData.questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    showResults();
  }
}

// Go back to previous question
function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

// Update progress bar
function updateProgress() {
  const totalQuestions = quizData.questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / totalQuestions) * 100;
  
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  
  if (progressBar) progressBar.style.width = progress + '%';
  if (progressText) progressText.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
}

// Determine result profile based on answers
function determineProfile() {
  const q1 = answers[1]; // Brewing method
  const q2 = answers[2]; // Milk drinks
  const q3 = answers[3]; // Grinder
  const q4 = answers[4]; // Beans
  const q5 = answers[5]; // Water
  const q6 = answers[6]; // Budget
  const q7 = answers[7]; // Patience
  const q8 = answers[8]; // Frustration
  
  // Profile: Pour-Over Pro (Already Set)
  if (q1 === 'pourover' && q3 === 'quality' && (q4 === 'local' || q4 === 'online') && (q5 === 'filtered' || q5 === 'bottled')) {
    return {
      id: 'pourover_pro',
      title: 'The Pour-Over Pro (You're Set!) ☕',
      message: 'Honestly? You're already ahead of 90% of coffee drinkers.',
      whatYouHaveRight: [
        '✓ Quality grinder (the #1 factor)',
        '✓ Fresh beans (the #2 factor)',
        '✓ Good water (the most overlooked factor)'
      ],
      advice: [
        'Focus on technique: dial in grind size, water temp (195-205°F), pour pattern',
        'Experiment with bloom time (30-45 seconds) and total brew time (2:30-3:30)',
        'Try the Hoffmann method or 4:6 method on YouTube'
      ],
      conclusion: 'You don't need new gear. Keep refining your technique and enjoy!',
      links: (q6 === 'over1000' && q7 === 'very') ? [
        { label: 'Gooseneck Kettles', keyword: 'gooseneck kettle coffee pourover' },
        { label: 'Precision Coffee Scales', keyword: 'coffee scale 0.1g precision timer' }
      ] : []
    };
  }
  
  // Profile: Smart Espresso Beginner
  if (q1 === 'espresso' && (q3 === 'none' || q3 === 'blade' || q3 === 'basic') && (q6 === 'under200' || q6 === '200to500')) {
    let budgetAdvice = '';
    if (q6 === 'under200') {
      budgetAdvice = 'Manual route: Flair Neo ($100) + 1Zpresso JX-Pro ($160) = $260. OR: Save another $100-200 and do it right the first time. Avoid: Any espresso machine under $200. You'll hate it in 2 weeks.';
    } else {
      budgetAdvice = 'Manual: Flair Classic ($200) + 1Zpresso grinder ($160). OR Electric path: Save to $600 for Bambino Plus ($350) + entry electric grinder ($250).';
    }
    
    return {
      id: 'espresso_beginner',
      title: 'The Smart Espresso Beginner 🎯',
      message: 'Here's the truth r/Coffee won't sugar-coat: Good espresso needs investment, but you CAN start smart.',
      advice: [
        'The Golden Rule: 50% of budget on grinder, 40% on machine, 10% on accessories',
        '(Most people do this backwards and regret it)',
        budgetAdvice
      ],
      warning: '⚠️ NEVER BUY: Breville Barista Express. Built-in grinder is garbage. Always buy separately.',
      conclusion: 'A great grinder with an OK machine beats a great machine with a bad grinder. EVERY. TIME.',
      links: [
        { label: 'Manual Espresso Makers', keyword: 'flair neo espresso maker manual' },
        { label: 'Hand Espresso Grinders', keyword: '1zpresso manual espresso grinder hand' }
      ]
    };
  }
  
  // Profile: Filter Coffee Fan (Needs Grinder Upgrade)
  if (q1 === 'pourover' && (q3 === 'blade' || q3 === 'basic' || q3 === 'none')) {
    return {
      id: 'filter_coffee_fan',
      title: 'The Filter Coffee Fan ☕',
      message: 'Pour-over can make AMAZING coffee—but your grinder is holding you back.',
      advice: [
        'Grind consistency matters MORE for pour-over than you think',
        'Uneven grounds = sour, bitter mess',
        'Budget: $80-150 on burr grinder, $30-50 on dripper'
      ],
      conclusion: 'Fix the grinder first, then everything else falls into place.',
      links: [
        { label: 'Burr Grinders for Pour-Over', keyword: 'burr coffee grinder pour over' },
        { label: 'Pour-Over Coffee Makers', keyword: 'pour over coffee dripper v60 chemex' },
        { label: 'Coffee Scales with Timer', keyword: 'coffee scale timer' }
      ]
    };
  }
  
  // Profile: Troubleshooter (Bad Taste Issues)
  if (q8 === 'taste' || q8 === 'inconsistent') {
    const links = [];
    
    // Only show grinder link if they have bad grinder
    if (q3 === 'blade' || q3 === 'basic') {
      links.push({ label: 'Espresso Burr Grinders', keyword: 'espresso burr grinder' });
    }
    
    // Only show bean link if they have bad beans
    if (q4 === 'supermarket' || q4 === 'preground') {
      links.push({ label: 'Fresh Roasted Coffee Beans', keyword: 'fresh roasted coffee beans specialty' });
    }
    
    // Only show water link if they use tap water
    if (q5 === 'tap') {
      links.push({ label: 'Water Filter Pitchers', keyword: 'water filter pitcher brita' });
    }
    
    return {
      id: 'troubleshooter',
      title: 'The Troubleshooter 🔧',
      message: 'Your bad-tasting coffee ISN't your fault. It's usually one of three fixable things.',
      fixes: [
        'Grind Size: Sour = too coarse (under-extracted), Bitter = too fine (over-extracted). Adjust in TINY increments.',
        'Bean Freshness: Roasted more than 4 weeks ago? That's your problem. Check the roast date, not "best by" date.',
        'Water Quality: Tap water (especially hard or very soft) ruins extraction. Use filtered or bottled water.'
      ],
      toolsThatHelp: [
        'Espresso scale ($20-40): Consistency is everything',
        'WDT tool ($15): Prevents channeling'
      ],
      conclusion: links.length === 0 ? 'Your gear is fine. Focus on the fundamentals above.' : 'Fix these issues first before blaming your equipment.',
      links: links
    };
  }
  
  // Profile: Convenience Seeker
  if (q7 === 'zero' || q7 === 'notvery' || q8 === 'time') {
    return {
      id: 'convenience_seeker',
      title: 'The Convenience Seeker 😌',
      message: 'You want great coffee without the rabbit hole. Smart choice!',
      advice: [
        'Path 1: Super-automatic espresso machines do everything (grind, brew, froth). Cost: $800-1500.',
        'Path 2: Premium drip maker ($300) + automatic grinder ($150) = amazing filter coffee, zero effort.',
        'Both make coffee WAY better than Starbucks with minimal daily effort.'
      ],
      conclusion: 'These eliminate 90% of variables while making excellent coffee. Perfect for busy mornings.',
      links: [
        { label: 'Super Automatic Espresso', keyword: 'super automatic espresso machine' },
        { label: 'Premium Drip Coffee Makers', keyword: 'technivorm moccamaster drip coffee' },
        { label: 'Automatic Burr Grinders', keyword: 'automatic burr grinder coffee' }
      ]
    };
  }
  
  // Profile: Milk Enthusiast
  if (q2 === 'yes' && q1 === 'espresso') {
    const links = [];
    
    if (q6 === 'under200') {
      links.push({ label: 'Manual Milk Frothers', keyword: 'manual milk frother handheld electric' });
    }
    
    links.push({ label: 'Espresso Machines with Steam Wand', keyword: 'espresso machine steam wand beginner' });
    links.push({ label: 'Milk Frothing Pitchers', keyword: 'milk frothing pitcher stainless steel' });
    
    return {
      id: 'milk_enthusiast',
      title: 'The Milk Drink Enthusiast 🥛',
      message: 'Frothing milk is an art—here's how to do it without a $2000 machine.',
      advice: [
        'Under $200: Manual frother ($20) + stovetop milk warmer works!',
        '$200-500: Bambino or Bambino Plus ($350-450) has best steam wand under $500',
        '$500+: Gaggia Classic Pro ($450) or better for serious microfoam'
      ],
      conclusion: 'Great milk texture is possible at every budget with the right technique.',
      links: links
    };
  }
  
  // Profile: Fresh Starter
  if (q1 === 'unsure' || (q6 === 'under200' && q3 === 'none')) {
    return {
      id: 'fresh_starter',
      title: 'The Fresh Starter 🌱',
      message: 'Don't start with espresso. Seriously. Here's the smarter path.',
      advice: [
        'Start: French Press ($25) OR AeroPress ($35) + manual hand grinder ($50-70)',
        'Total: Under $100. Makes BETTER coffee than a $200 espresso setup.',
        'Why? Forgiving, consistent, and you'll actually enjoy it vs troubleshooting hell.'
      ],
      conclusion: 'After 3-6 months, decide: pour-over or espresso? By then you'll know if you're a tinkerer.',
      links: [
        { label: 'French Press Coffee Makers', keyword: 'french press coffee maker' },
        { label: 'AeroPress Coffee Makers', keyword: 'aeropress coffee maker' },
        { label: 'Manual Hand Grinders', keyword: 'manual hand coffee grinder burr' },
        { label: 'Fresh Coffee Beans', keyword: 'fresh roasted coffee beans whole' }
      ]
    };
  }
  
  // Default fallback profile
  return {
    id: 'general',
    title: 'Your Coffee Path 🌟',
    message: 'Based on your answers, here's what matters most.',
    advice: [
      'Focus on the fundamentals: fresh beans, good grinder, proper water',
      'Technique beats expensive equipment every time',
      'Start simple and upgrade as you learn what you actually need'
    ],
    conclusion: 'Great coffee is a journey, not a destination. Take your time!',
    links: [
      { label: 'Burr Coffee Grinders', keyword: 'burr coffee grinder' },
      { label: 'Fresh Coffee Beans', keyword: 'fresh roasted coffee beans' }
    ]
  };
}

// Show results
function showResults() {
  const profile = determineProfile();
  
  document.getElementById('progress-container').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('results-container').style.display = 'block';
  
  const resultsHTML = `
    <div class="result-card fade-in">
      <h1 class="result-title">${profile.title}</h1>
      <p class="result-message">${profile.message}</p>
      
      ${profile.whatYouHaveRight ? `
        <div class="advice-section">
          <h3>What You Have Right:</h3>
          <ul>
            ${profile.whatYouHaveRight.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${profile.advice ? `
        <div class="advice-section">
          <h3>Your Best Path Forward:</h3>
          <ul>
            ${profile.advice.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${profile.fixes ? `
        <div class="advice-section">
          <h3>The Big 3 Fixes:</h3>
          <ol>
            ${profile.fixes.map(item => `<li>${item}</li>`).join('')}
          </ol>
        </div>
      ` : ''}
      
      ${profile.toolsThatHelp ? `
        <div class="advice-section">
          <h3>Tools That Actually Help:</h3>
          <ul>
            ${profile.toolsThatHelp.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${profile.warning ? `
        <div class="warning-box">
          ${profile.warning}
        </div>
      ` : ''}
      
      ${profile.links && profile.links.length > 0 ? `
        <div class="links-section">
          <h3>Gear That Helps:</h3>
          <div class="amazon-links">
            ${profile.links.map(link => `
              <a href="https://www.amazon.com/s?k=${encodeURIComponent(link.keyword)}&tag=${CONFIG.affiliateTag}" 
                 class="amazon-btn" 
                 target="_blank" 
                 rel="noopener">
                Find ${link.label} →
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="conclusion-section">
        <p><strong>${profile.conclusion}</strong></p>
      </div>
      
      <div class="feedback-section">
        <h3>Did this quiz help or miss the mark?</h3>
        <a href="mailto:${CONFIG.contactEmail}?subject=Coffee Quiz Feedback" class="feedback-btn">Send Feedback</a>
        <p class="small-text">This quiz improves weekly based on your input. Be brutally honest!</p>
      </div>
      
      <div class="donation-section">
        <h3>☕ Did this quiz save you from a $500 mistake?</h3>
        <p>This site is 100% free and ad-free. If it helped, consider buying me a coffee!</p>
        <a href="${CONFIG.paypalLink}" class="paypal-btn" target="_blank" rel="noopener">💵 Buy Me a Coffee</a>
        <p class="small-text">Suggested: $3-5 • Every donation keeps this site running and updated</p>
        <p class="small-text">Thank you for supporting independent coffee resources! ❤️</p>
      </div>
      
      <button class="restart-btn" onclick="restartQuiz()">Start Over</button>
      
      <div class="disclosure">
        <p>As an Amazon Associate, I earn from qualifying purchases. | <a href="${CONFIG.privacyPolicyUrl}">Privacy Policy</a></p>
        <p class="small-text">Last updated: October 22, 2025 based on Reddit feedback</p>
      </div>
    </div>
  `;
  
  document.getElementById('results-container').innerHTML = resultsHTML;
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Restart quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  answers = {};
  
  document.getElementById('results-container').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
}

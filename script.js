// Coffee Equipment Quiz Data - REBUILT based on Reddit feedback
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
            conditional: true, // Show only if Q1 = espresso OR unsure
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
                { value: "quality", label: "I have a quality burr grinder ($100+) and it works great" },
                { value: "basic", label: "Basic burr grinder (under $100)" },
                { value: "blade", label: "I have a blade grinder (the spinning nightmare)" },
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
                { value: "bottled", label: "Bottled or mineralized water" },
                { value: "tap", label: "Straight from the tap" },
                { value: "bottled", label: "Bottled or remineralized water" }
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
                { value: "upgrade", label: "No issues, just want to upgrade" },
            ]
        }
    ],
    
    profiles: {
        pourover_perfectionist: {
            title: "The Pour-Over Pro (You're Set!) ☕",
            message: "Honestly? You're already ahead of 90% of coffee drinkers.",
            recommendation: "Focus on technique: dial in grind size, water temp (195-205°F), pour pattern",
            why: "You don't need new gear. Keep refining your technique and enjoy!",
            whatYouHaveRight: [
                "✓ Quality grinder (the #1 factor)",
                "✓ Fresh beans (the #2 factor)",
                "✓ Good water (the most overlooked factor)"
            ],
            advice: [
                "Focus on technique: dial in grind size, water temp (195-205°F), pour pattern",
                "Experiment with bloom time (30-45 seconds) and total brew time (2:30-3:30)",
                "Try the Hoffmann method or 4:6 method on YouTube"
            ],
            categories: [
                { label: "Find Gooseneck Kettles", keyword: "gooseneck kettle coffee pourover", showIf: "budget_over_500_and_patient" },
                { label: "Find Precision Scales", keyword: "coffee scale 0.1g precision timer", showIf: "budget_over_500_and_patient" }
            ]
        },
        espresso_beginner: {
            title: "The Smart Espresso Beginner 🎯",
            message: "Here's the truth r/Coffee won't sugar-coat: Good espresso needs investment, but you CAN start smart.",
            recommendation: "The Golden Rule: 50% of budget on grinder, 40% on machine, 10% on accessories. (Most people do this backwards and regret it)",
            why: "A great grinder with an OK machine beats a great machine with a bad grinder. EVERY. TIME. This is the #1 lesson from r/espresso.",
            warning: "⚠️ NEVER BUY: Breville Barista Express. Built-in grinder is garbage. Always buy separately.",
            budgetAdvice: {
                "under200": "Manual route: Flair Neo ($100) + 1Zpresso JX-Pro ($160) = $260 OR: Save another $100-200 and do it right the first time. Avoid: Any espresso machine under $200. You'll hate it in 2 weeks.",
                "200to500": "Manual: Flair Classic ($200) + 1Zpresso grinder ($160) OR Electric path: Save to $600 for Bambino Plus ($350) + entry electric grinder ($250)"
            },
            categories: [
                { label: "Manual Espresso Makers", keyword: "flair neo espresso maker manual" },
                { label: "Hand Espresso Grinders", keyword: "1zpresso manual espresso grinder" },
                { label: "Entry Electric Grinders", keyword: "entry electric espresso grinder" }
            ]
        },
        filter_coffee_fan: {
            title: "The Filter Coffee Fan ☕",
            message: "Pour-over can make AMAZING coffee—but your grinder is holding you back.",
            recommendation: "Grind consistency matters even MORE for pour-over than espresso. Uneven grounds = sour, bitter mess.",
            why: "Budget allocation: $80-150 on burr grinder, $30-50 on dripper/brewer",
            advice: [
                "Grind consistency matters MORE for pour-over than you think",
                "Uneven grounds = sour, bitter mess",
                "Budget: $80-150 on burr grinder, $30-50 on dripper"
            ],
            categories: [
                { label: "Find Burr Grinders for Pour-Over", keyword: "burr coffee grinder pour over" },
                { label: "Find Pour-Over Coffee Makers", keyword: "pour over coffee dripper v60 chemex" },
                { label: "Find Coffee Scales", keyword: "coffee scale timer" }
            ]
        },
        troubleshooter: {
            title: "The Troubleshooter 🔧",
            message: "Your bad-tasting coffee ISN'T your fault. It's usually one of three fixable things.",
            recommendation: "The Big 3 Fixes:",
            why: "Your gear is probably fine. Focus on the fundamentals above.",
            fixes: [
                "Grind Size: Sour shots = grind too coarse (under-extracted), Bitter shots = grind too fine (over-extracted). Adjust in TINY increments (1-2 clicks at a time)",
                "Bean Freshness: Roasted more than 4 weeks ago? That's your problem. Stale beans cause sour shots no matter what you do. Check the roast date, not 'best by' date",
                "Water Quality: Tap water (especially hard or very soft) ruins extraction. Use filtered or bottled water. This is the most overlooked factor"
            ],
            toolsThatHelp: [
                "Espresso scale ($20-40): Consistency is everything",
                "WDT tool ($15): Prevents channeling"
            ],
            categories: [
                { label: "Espresso Burr Grinders", keyword: "espresso burr grinder", showIf: "bad_grinder" },
                { label: "Fresh Roasted Coffee Beans", keyword: "fresh roasted coffee beans specialty", showIf: "bad_beans" },
                { label: "Water Filter Pitchers", keyword: "water filter pitcher brita", showIf: "bad_water" }
            ]
        },
        convenience_seeker: {
            title: "The Convenience Seeker 😌",
            message: "You want great coffee without the rabbit hole. Smart choice!",
            recommendation: "Super-automatic espresso OR high-end drip coffee. Both make excellent coffee with minimal effort.",
            why: "These eliminate 90% of variables while making coffee that's WAY better than Starbucks. Perfect for busy mornings.",
            note: "Super-automatics cost more upfront ($800-1500) but save hours of learning curve and daily fiddling.",
            advice: [
                "Super-automatic machines: grind, brew, froth automatically ($800-1500)",
                "OR: Premium drip maker + auto grinder = amazing coffee, zero fuss",
                "Both paths beat manual espresso for busy mornings"
            ],
            categories: [
                { label: "Find Super Automatic Espresso", keyword: "super automatic espresso machine" },
                { label: "Find Premium Drip Makers", keyword: "technivorm moccamaster drip coffee" },
                { label: "Find Automatic Grinders", keyword: "automatic burr grinder coffee" }
            ]
        },
        milk_enthusiast: {
            title: "The Milk Drink Enthusiast 🥛",
            message: "Frothing milk is an art—here's how to do it without a $2000 machine.",
            recommendation: "Budget-based approach to getting perfect microfoam for your lattes and cappuccinos.",
            why: "Great milk texture is possible at every budget level with the right technique and tools.",
            advice: [
                "Under $200: Manual frother + stovetop warmer (works!)",
                "$200-500: Entry machine with steam wand (Bambino, Gaggia)",
                "$500+: Better steam pressure for microfoam magic"
            ],
            categories: [
                { label: "Find Manual Milk Frothers", keyword: "manual milk frother handheld" },
                { label: "Find Espresso Machines with Steam Wand", keyword: "espresso machine steam wand beginner" },
                { label: "Find Milk Frothing Pitchers", keyword: "milk frothing pitcher stainless" }
            ]
        },
        fresh_starter: {
            title: "The Fresh Starter 🌱",
            message: "Don't start with espresso. Seriously. Here's the smarter path.",
            recommendation: "Start with forgiving methods that make incredible coffee while you learn the fundamentals.",
            why: "These methods are forgiving, consistent, and you'll actually enjoy your coffee instead of troubleshooting hell.",
            advice: [
                "Start: French Press ($25) OR AeroPress ($35) + hand grinder ($50)",
                "Total: Under $100. Better coffee than $200 espresso setup.",
                "Why? Forgiving, consistent, actually enjoyable vs troubleshooting hell"
            ],
            categories: [
                { label: "Find French Press Coffee Makers", keyword: "french press coffee maker" },
                { label: "Find AeroPress Coffee Makers", keyword: "aeropress coffee maker" },
                { label: "Find Manual Hand Grinders", keyword: "manual hand coffee grinder" },
                { label: "Find Fresh Coffee Beans", keyword: "fresh roasted coffee beans" }
            ]
        }
    }
};

// Quiz state (stored in memory only)
let currentQuestion = 0;
let answers = {};
let quizStarted = false;
const affiliateTag = "shadiz0f-20";
const paypalLink = "https://paypal.me/shadikelany";
const contactEmail = "elmasryshadi@gmail.com";

// Start quiz function
function startQuiz() {
    quizStarted = true;
    currentQuestion = 0;
    answers = {};
    
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('progress-container').style.display = 'block';
    document.getElementById('quiz-questions').style.display = 'block';
    
    renderQuestions();
    showQuestion(0);
    updateProgress();
}

// Render all questions
function renderQuestions() {
    const container = document.getElementById('quiz-questions');
    container.innerHTML = '';

    quizData.questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        questionDiv.id = `question-${index}`;
        
        const optionsHTML = question.options.map((option, optionIndex) => 
            `<div class="option" onclick="selectAnswer(${index}, '${option.value}', this)">${option.label}</div>`
        ).join('');
        
        const backButtonHTML = index === 0 ? 
            '<button class="btn btn-secondary" style="visibility: hidden;">← Back</button>' :
            '<button class="btn btn-secondary" onclick="previousQuestion()">← Back</button>';
        
        const nextButtonText = index === quizData.questions.length - 1 ? 'See My Results →' : 'Next →';
        
        questionDiv.innerHTML = `
            <h2 class="question">${question.text}</h2>
            <div class="options">
                ${optionsHTML}
            </div>
            <div class="navigation">
                ${backButtonHTML}
                <button class="btn btn-primary" id="next-btn-${index}" onclick="nextQuestion()" disabled>${nextButtonText}</button>
            </div>
        `;
        
        container.appendChild(questionDiv);
    });
}

// Show specific question
function showQuestion(questionIndex) {
    document.querySelectorAll('.question-container').forEach(q => {
        q.classList.remove('active');
    });
    
    // Check if question should be shown based on conditionals
    if (questionIndex === 1) { // Question 2 (milk drinks)
        const q1Answer = answers[0];
        if (q1Answer !== 'espresso' && q1Answer !== 'unsure') {
            // Skip question 2 if not making espresso
            if (currentQuestion < questionIndex) {
                showQuestion(questionIndex + 1);
            } else {
                showQuestion(questionIndex - 1);
            }
            return;
        }
    }
    
    const questionElement = document.getElementById(`question-${questionIndex}`);
    if (questionElement) {
        questionElement.classList.add('active');
    }
    
    currentQuestion = questionIndex;
    updateProgress();
}

// Select answer
function selectAnswer(questionIndex, answerValue, optionElement) {
    // Remove previous selection
    optionElement.parentNode.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    optionElement.classList.add('selected');
    
    // Store answer
    answers[questionIndex] = answerValue;
    
    // Enable next button
    document.getElementById(`next-btn-${questionIndex}`).disabled = false;
}

// Next question
function nextQuestion() {
    if (currentQuestion < quizData.questions.length - 1) {
        showQuestion(currentQuestion + 1);
    } else {
        showResults();
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        showQuestion(currentQuestion - 1);
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestion + 1;
}

// Calculate personality based on answers - FIXED REDDIT FEEDBACK LOGIC
function calculatePersonality() {
    const q1 = answers[0]; // Coffee type
    const q2 = answers[1]; // Milk drinks (conditional)
    const q3 = answers[2]; // Grinder situation  
    const q4 = answers[3]; // Bean source
    const q5 = answers[4]; // Water
    const q6 = answers[5]; // Budget
    const q7 = answers[6]; // Patience
    const q8 = answers[7]; // Frustration
    
    // PRIORITY 1: Pour-Over Perfectionist - FIXED: Don't recommend gear they already have!
    if (q1 === 'pourover' && q3 === 'quality' && (q4 === 'local' || q4 === 'online') && (q5 === 'filtered' || q5 === 'bottled')) {
        return 'pourover_perfectionist';
    }
    
    // PRIORITY 2: Troubleshooter - Handle frustrations first before recommending gear
    if (q8 === 'taste' || q8 === 'inconsistent') {
        return 'troubleshooter';
    }
    
    // PRIORITY 3: Convenience Seeker - Handle impatience before complex setups
    if (q7 === 'zero' || q7 === 'notvery' || q8 === 'time') {
        return 'convenience_seeker';
    }
    
    // PRIORITY 4: Fresh Starter - Don't push espresso on unsure people
    if (q1 === 'unsure' && (q6 === 'under200' || q3 === 'none')) {
        return 'fresh_starter';
    }
    
    // PRIORITY 5: Milk Enthusiast - FIXED: Only if they actually want espresso AND milk
    if (q1 === 'espresso' && q2 === 'yes') {
        return 'milk_enthusiast';
    }
    
    // PRIORITY 6: Espresso paths - FIXED: Better budget/grinder logic
    if (q1 === 'espresso') {
        return 'espresso_beginner';
    }
    
    // PRIORITY 7: Pour-over paths - FIXED: Don't assume they need gear upgrades
    if (q1 === 'pourover') {
        // If they have quality gear, send to perfectionist
        if (q3 === 'quality') {
            return 'pourover_perfectionist';
        }
        // Otherwise, filter coffee fan
        return 'filter_coffee_fan';
    }
    
    // PRIORITY 8: Other brewing methods
    if (q1 === 'immersion') {
        return 'fresh_starter';
    }
    
    // Final fallback
    return 'fresh_starter';
}

// Show results
function showResults() {
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('progress-container').style.display = 'none';
    
    const personalityType = calculatePersonality();
    const personality = quizData.profiles[personalityType];
    
    let resultsHTML = `
        <div class="profile-title">${personality.title}</div>
        <div class="profile-message">${personality.message}</div>
    `;
    
    // Add "What You Have Right" section if it exists
    if (personality.whatYouHaveRight) {
        resultsHTML += `
        <div class="recommendation-section">
            <h3>What You're Doing Right</h3>
            <ul class="fixes-list">
                ${personality.whatYouHaveRight.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        `;
    }
    
    resultsHTML += `
        <div class="recommendation-section">
            <h3>Your Best Path Forward</h3>
            <p>${personality.recommendation}</p>
        </div>
    `;
    
    // Add budget advice if it exists
    if (personality.budgetAdvice) {
        const budget = answers[5];
        if (personality.budgetAdvice[budget]) {
            resultsHTML += `
            <div class="recommendation-section">
                <h3>Your Budget Path</h3>
                <p>${personality.budgetAdvice[budget]}</p>
            </div>
            `;
        }
    }
    
    // Add warning if exists
    if (personality.warning) {
        resultsHTML += `
            <div class="warning-box">
                <strong>${personality.warning}</strong>
            </div>
        `;
    }
    
    // Add budget split if exists
    if (personality.budgetSplit) {
        resultsHTML += `
            <div class="budget-split">
                <strong>Budget breakdown:</strong>
                <ul>
                    ${personality.budgetSplit.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Add fixes list if exists
    if (personality.fixes) {
        resultsHTML += `
            <div class="recommendation-section">
                <h3>The Big 3 Fixes</h3>
                <ul class="fixes-list">
                    ${personality.fixes.map(fix => `<li>${fix}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Add tools that help if exists
    if (personality.toolsThatHelp) {
        resultsHTML += `
            <div class="recommendation-section">
                <h3>Tools That ACTUALLY Help</h3>
                <ul class="fixes-list">
                    ${personality.toolsThatHelp.map(tool => `<li>${tool}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Add advice if exists
    if (personality.advice) {
        resultsHTML += `
            <div class="recommendation-section">
                <h3>Your Personalized Advice</h3>
                <ul class="fixes-list">
                    ${personality.advice.map(advice => `<li>${advice}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Add note if exists
    if (personality.note) {
        resultsHTML += `
            <div class="why-section">
                <strong>Important note:</strong> ${personality.note}
            </div>
        `;
    }
    
    // Add Amazon buttons - FIXED: Smart filtering based on what they already have
    const filteredCategories = personality.categories.filter(category => {
        // Don't show grinder links if they have a quality grinder
        if (category.keyword.includes('grinder') && answers[2] === 'quality') {
            return false;
        }
        // Show grinder recommendations for blade/basic/none grinders
        if (category.showIf === 'bad_grinder' && answers[2] !== 'blade' && answers[2] !== 'basic' && answers[2] !== 'none') {
            return false;
        }
        // Don't show bean links if they already have good beans
        if (category.keyword.includes('coffee beans') && (answers[3] === 'local' || answers[3] === 'online')) {
            return false;
        }
        // Show bean recommendations for bad beans
        if (category.showIf === 'bad_beans' && answers[3] !== 'supermarket' && answers[3] !== 'preground') {
            return false;
        }
        // Don't show water filter links if they already have good water
        if (category.keyword.includes('water filter') && (answers[4] === 'filtered' || answers[4] === 'bottled')) {
            return false;
        }
        // Show water recommendations for bad water
        if (category.showIf === 'bad_water' && answers[4] !== 'tap') {
            return false;
        }
        // Show budget-appropriate items only
        if (category.showIf === 'budget_over_500_and_patient' && (answers[5] === 'under200' || answers[5] === '200to500')) {
            return false;
        }
        return true;
    });
    
    const amazonButtonsHTML = filteredCategories.map(category => `
        <a href="https://www.amazon.com/s?k=${encodeURIComponent(category.keyword)}&tag=${affiliateTag}" 
           target="_blank" 
           rel="noopener" 
           class="amazon-btn">
           ${category.label} →
        </a>
    `).join('');
    
    resultsHTML += `
        ${filteredCategories.length > 0 ? `
        <div class="recommendation-section">
            <h3>Gear That Actually Helps</h3>
            <div class="amazon-buttons">
                ${amazonButtonsHTML}
            </div>
        </div>` : ''}
        
        <div class="why-section">
            <strong>Why This Works For You:</strong> ${personality.why}
        </div>
        
        <div class="why-section">
            <strong>Why This Works For You:</strong> ${personality.why}
        </div>
        
        <div class="honest-disclosure">
            <strong>About These Links:</strong> This site uses Amazon affiliate links, which means I earn a small commission if you buy something. But I'd rather you save money than waste it—that's why the quiz tells you what NOT to buy. Your trust > my commission check.
        </div>
        
        <div class="paypal-section">
            <h3>☕ Did this quiz save you from a $500 mistake?</h3>
            <p>This site is 100% free and ad-free. If it helped, consider buying me a coffee!</p>
            <a href="${paypalLink}" target="_blank" class="paypal-btn">
                💵 Buy Me a Coffee
            </a>
            <p style="font-size: 0.9rem; margin-top: 8px;">Suggested: $3-5 • Every donation keeps this site running and updated</p>
            <p style="font-size: 0.9rem; color: var(--rich-brown);">Thank you for supporting independent coffee resources! ❤️</p>
        </div>
        
        <div class="restart-section">
            <button class="btn btn-primary" onclick="restartQuiz()">Take Quiz Again 🔄</button>
            <br><br>
            <button class="btn btn-secondary" onclick="showFeedback()" style="margin-top: 16px;">Send Feedback</button>
            <p style="font-size: 0.9rem; color: var(--rich-brown); margin-top: 8px;">This quiz improves weekly based on your input. Be brutally honest!</p>
        </div>
    `;
    
    document.getElementById('results').innerHTML = resultsHTML;
    document.getElementById('results').style.display = 'block';
}

// Restart quiz
function restartQuiz() {
    location.reload();
}

// Privacy policy (now handled by external link)
// Kept for backwards compatibility
function showPrivacyPolicy() {
    window.open('https://coffeemistakes.com/privacy-policy', '_blank');
}

// Support info
function showSupportInfo() {
    window.open(paypalLink, '_blank');
}

// Feedback function
function showFeedback() {
    const subject = encodeURIComponent('CoffeeMistakes Quiz Feedback');
    const body = encodeURIComponent('Hi! I just took the coffee quiz and wanted to provide feedback:\n\n[Tell me what worked/didn\'t work]\n\nMy answers were: ' + JSON.stringify(answers));
    window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, '_blank');
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', function() {
    // Quiz is ready to start
    console.log('Coffee Equipment Quiz loaded successfully');
});

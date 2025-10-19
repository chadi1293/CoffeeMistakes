// Coffee Equipment Quiz Data
const quizData = {
    questions: [
        {
            id: 1,
            text: "What kind of coffee do you make most often at home?",
            options: [
                { value: "drip", label: "Drip/Filter coffee ☕" },
                { value: "pourover", label: "Pour-over (Chemex, V60, etc.) 🫖" },
                { value: "espresso", label: "Espresso-based drinks ☕" },
                { value: "starting", label: "I'm just starting out 🌱" }
            ]
        },
        {
            id: 2,
            text: "Do you currently own a coffee grinder?",
            options: [
                { value: "none", label: "No grinder yet 🚫" },
                { value: "blade", label: "Yes, a blade grinder 😬" },
                { value: "cheap_burr", label: "Yes, a basic burr grinder (under $100) 🤔" },
                { value: "quality_burr", label: "Yes, a quality burr grinder ($100+) ✅" }
            ]
        },
        {
            id: 3,
            text: "What's your TOTAL realistic budget for coffee equipment?",
            options: [
                { value: "under200", label: "Under $200 💸" },
                { value: "200to500", label: "$200-500 💰" },
                { value: "500to1000", label: "$500-1000 💵" },
                { value: "over1000", label: "$1000+ (I'm serious about this) 🏆" }
            ]
        },
        {
            id: 4,
            text: "If you make espresso, how do your shots taste?",
            options: [
                { value: "sour", label: "Too sour/acidic 😖" },
                { value: "bitter", label: "Too bitter ☹️" },
                { value: "weak", label: "Weak/watery 💧" },
                { value: "good", label: "I don't make espresso yet / They taste good ✨" }
            ]
        },
        {
            id: 5,
            text: "Where do you get your coffee beans?",
            options: [
                { value: "supermarket_ground", label: "Supermarket (pre-ground or whole) 🏪" },
                { value: "supermarket_whole", label: "Supermarket whole beans 🫘" },
                { value: "local_roaster", label: "Local coffee roaster 🏠" },
                { value: "specialty", label: "Online subscription/specialty roaster 📦" }
            ]
        },
        {
            id: 6,
            text: "What's your biggest coffee-making frustration?",
            options: [
                { value: "inconsistent", label: "Inconsistent taste every time 🎲" },
                { value: "slow", label: "Takes too long in the morning ⏰" },
                { value: "bad_taste", label: "Shots taste bad (sour/bitter) 😫" },
                { value: "overwhelmed", label: "Don't know where to start 🤷" }
            ]
        },
        {
            id: 7,
            text: "What water do you use for coffee?",
            options: [
                { value: "tap", label: "Straight from the tap 🚰" },
                { value: "filtered", label: "Filtered water (Brita, etc.) 💧" },
                { value: "bottled", label: "Bottled water 🍶" },
                { value: "custom", label: "I use a water recipe/remineralized 🔬" }
            ]
        },
        {
            id: 8,
            text: "How much counter space can you dedicate to coffee equipment?",
            options: [
                { value: "minimal", label: "Very limited (small apartment) 📏" },
                { value: "corner", label: "One corner of counter 🏠" },
                { value: "decent", label: "Decent space available 🎯" },
                { value: "full", label: "Full coffee station possible 🏆" }
            ]
        }
    ],
    
    profiles: {
        reality_check: {
            title: "The Reality Check ⚡",
            message: "Here's the honest truth: Good espresso at home requires $400+ investment. But you can make AMAZING coffee right now without espresso.",
            recommendation: "Skip espresso machines for now. Start with methods that are forgiving and delicious.",
            why: "These methods make cafe-quality coffee without the $500+ investment and steep learning curve of espresso. You'll actually enjoy your coffee instead of fighting with equipment.",
            categories: [
                { label: "Find French Press Coffee Makers", keyword: "french press coffee maker" },
                { label: "Find AeroPress Coffee Makers", keyword: "aeropress coffee maker" },
                { label: "Find Manual Coffee Grinders", keyword: "manual burr coffee grinder" },
                { label: "Find Coffee Scales", keyword: "coffee scale" }
            ]
        },
        smart_starter: {
            title: "The Smart Starter 🎯",
            message: "You have the right budget and attitude. Here's how to start WITHOUT making the $500 mistake most beginners make.",
            recommendation: "Budget split rule: 50% on grinder, 40% on machine, 10% on accessories. This is backwards from what most people do, but it's what works.",
            why: "A great grinder with an OK machine beats a great machine with a bad grinder. EVERY. TIME. This is the #1 lesson from r/Coffee.",
            warning: "⚠️ AVOID: Breville Barista Express. The built-in grinder is the weak link. Buy them separately!",
            categories: [
                { label: "Find Manual Espresso Grinders", keyword: "manual espresso grinder" },
                { label: "Find Entry Espresso Machines", keyword: "entry level espresso machine" },
                { label: "Find Espresso Tamper Sets", keyword: "espresso tamper set" },
                { label: "Find Espresso Scales", keyword: "espresso coffee scale" }
            ]
        },
        troubleshooter: {
            title: "The Troubleshooter 🔧",
            message: "Your bad-tasting shots aren't your fault. 90% of the time it's one of three things: grinder, beans, or water.",
            recommendation: "Before buying new machines, fix these three common problems that cause sour/bitter espresso.",
            why: "New espresso makers waste MONTHS troubleshooting when the real issue is stale beans or a $30 blade grinder. Fix the fundamentals first.",
            fixes: [
                "Upgrade your grinder (if using blade or cheap burr)",
                "Get fresh beans (roasted within 2-4 weeks)",
                "Filter your water (tap water ruins coffee)"
            ],
            categories: [
                { label: "Find Burr Coffee Grinders", keyword: "burr coffee grinder" },
                { label: "Find Fresh Coffee Beans", keyword: "fresh roasted coffee beans" },
                { label: "Find Water Filter Pitchers", keyword: "water filter pitcher" },
                { label: "Find Coffee Storage Containers", keyword: "coffee storage container airtight" }
            ]
        },
        serious_setup: {
            title: "The Serious Setup 🏆",
            message: "You're ready for prosumer gear that will last 10+ years and make genuinely cafe-quality espresso.",
            recommendation: "At this budget, you unlock equipment that r/Coffee actually recommends (not what marketing says).",
            why: "This is the sweet spot where equipment stops being the limiting factor and you can focus on technique.",
            budgetSplit: [
                "Grinder: $400-600",
                "Machine: $400-600", 
                "Accessories: $100-200"
            ],
            categories: [
                { label: "Find Prosumer Espresso Grinders", keyword: "espresso grinder prosumer" },
                { label: "Find Quality Espresso Machines", keyword: "semi automatic espresso machine" },
                { label: "Find Bottomless Portafilters", keyword: "bottomless portafilter 58mm" },
                { label: "Find Espresso Accessories", keyword: "espresso accessories kit" }
            ]
        },
        convenience_seeker: {
            title: "The Convenience Seeker 😌",
            message: "You want great coffee without the rabbit hole. Smart choice - here's the path that values your time.",
            recommendation: "Super-automatic espresso OR high-end drip coffee. Both make excellent coffee with minimal effort.",
            why: "These eliminate 90% of variables while making coffee that's WAY better than Starbucks. Perfect for busy mornings.",
            note: "Super-automatics cost more upfront ($800-1500) but save hours of learning curve and daily fiddling.",
            categories: [
                { label: "Find Super Automatic Espresso", keyword: "super automatic espresso machine" },
                { label: "Find Premium Drip Coffee Makers", keyword: "technivorm moccamaster" },
                { label: "Find Automatic Burr Grinders", keyword: "automatic burr grinder" }
            ]
        }
    }
};

// Quiz state (stored in memory only)
let currentQuestion = 0;
let answers = {};
let quizStarted = false;
const affiliateTag = "shadiz0f-20";

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

// Calculate personality based on answers
function calculatePersonality() {
    const scores = {
        reality_check: 0,
        smart_starter: 0,
        troubleshooter: 0,
        serious_setup: 0,
        convenience_seeker: 0
    };

    // Question 1: Coffee type
    switch (answers[0]) {
        case 'starting':
            scores.reality_check += 3;
            scores.smart_starter += 1;
            break;
        case 'drip':
        case 'pourover':
            scores.reality_check += 1;
            scores.smart_starter += 2;
            break;
        case 'espresso':
            scores.troubleshooter += 2;
            scores.serious_setup += 1;
            break;
    }

    // Question 2: Grinder status
    switch (answers[1]) {
        case 'none':
            scores.reality_check += 3;
            break;
        case 'blade':
            scores.troubleshooter += 3;
            scores.reality_check += 2;
            break;
        case 'cheap_burr':
            scores.troubleshooter += 2;
            scores.smart_starter += 1;
            break;
        case 'quality_burr':
            scores.serious_setup += 2;
            scores.smart_starter += 1;
            break;
    }

    // Question 3: Budget
    switch (answers[2]) {
        case 'under200':
            scores.reality_check += 4;
            break;
        case '200to500':
            scores.smart_starter += 3;
            scores.reality_check += 1;
            break;
        case '500to1000':
            scores.smart_starter += 2;
            scores.serious_setup += 2;
            break;
        case 'over1000':
            scores.serious_setup += 4;
            break;
    }

    // Question 4: Shot taste
    switch (answers[3]) {
        case 'sour':
        case 'bitter':
        case 'weak':
            scores.troubleshooter += 3;
            break;
        case 'good':
            scores.smart_starter += 1;
            scores.serious_setup += 1;
            break;
    }

    // Question 5: Bean source
    switch (answers[4]) {
        case 'supermarket_ground':
            scores.reality_check += 2;
            scores.troubleshooter += 2;
            break;
        case 'supermarket_whole':
            scores.troubleshooter += 1;
            scores.smart_starter += 1;
            break;
        case 'local_roaster':
        case 'specialty':
            scores.serious_setup += 2;
            scores.smart_starter += 1;
            break;
    }

    // Question 6: Frustration
    switch (answers[5]) {
        case 'slow':
            scores.convenience_seeker += 4;
            break;
        case 'inconsistent':
        case 'bad_taste':
            scores.troubleshooter += 3;
            break;
        case 'overwhelmed':
            scores.reality_check += 2;
            scores.smart_starter += 2;
            break;
    }

    // Question 7: Water
    switch (answers[6]) {
        case 'tap':
            scores.troubleshooter += 2;
            scores.reality_check += 1;
            break;
        case 'filtered':
        case 'bottled':
            scores.smart_starter += 1;
            break;
        case 'custom':
            scores.serious_setup += 2;
            break;
    }

    // Question 8: Space
    switch (answers[7]) {
        case 'minimal':
            scores.convenience_seeker += 2;
            scores.reality_check += 1;
            break;
        case 'corner':
            scores.smart_starter += 1;
            break;
        case 'decent':
            scores.smart_starter += 1;
            scores.serious_setup += 1;
            break;
        case 'full':
            scores.serious_setup += 2;
            break;
    }

    // Find highest scoring personality
    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
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
        
        <div class="recommendation-section">
            <h3>Your Recommendation</h3>
            <p>${personality.recommendation}</p>
        </div>
        
        <div class="why-section">
            <strong>Why this works for YOU:</strong> ${personality.why}
        </div>
    `;
    
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
                <h3>The 3 fixes:</h3>
                <ul class="fixes-list">
                    ${personality.fixes.map(fix => `<li>${fix}</li>`).join('')}
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
    
    // Add Amazon buttons
    const amazonButtonsHTML = personality.categories.map(category => `
        <a href="https://www.amazon.com/s?k=${encodeURIComponent(category.keyword)}&tag=${affiliateTag}" 
           target="_blank" 
           rel="noopener" 
           class="amazon-btn">
           ${category.label} ➡️
        </a>
    `).join('');
    
    resultsHTML += `
        <div class="amazon-buttons">
            ${amazonButtonsHTML}
        </div>
        
        <div class="paypal-section">
            <h3>☕ Did this quiz save you from an expensive mistake?</h3>
            <p>This site is 100% free and ad-free. If it helped you, consider buying me a coffee to keep it running.</p>
            <a href="[PAYPAL_LINK_PLACEHOLDER]" target="_blank" class="paypal-btn">
                💵 Support This Site - $3-5
            </a>
            <p style="font-size: 0.9em; margin-top: 10px;">Every donation helps cover hosting • Thank you for supporting independent coffee resources! ❤️</p>
        </div>
        
        <div class="recommendation-section">
            <p style="font-size: 0.9em; text-align: center;">As an Amazon Associate, I earn from qualifying purchases. These recommendations are based on your quiz responses and real pain points from r/Coffee users.</p>
        </div>
        
        <div class="restart-section">
            <button class="btn btn-primary" onclick="restartQuiz()">Take Quiz Again 🔄</button>
        </div>
    `;
    
    document.getElementById('results').innerHTML = resultsHTML;
    document.getElementById('results').style.display = 'block';
}

// Restart quiz
function restartQuiz() {
    location.reload();
}

// Privacy policy
function showPrivacyPolicy() {
    const policyText = `PRIVACY POLICY\n\nThis coffee equipment quiz:\n\n• Stores your responses temporarily in memory only\n• Does not collect personal information\n• Does not use cookies or local storage\n• Does not track users across websites\n• Uses Amazon affiliate links for equipment recommendations\n• PayPal is used for optional donations\n\nYour quiz responses are deleted when you close this page.\n\nFor questions, contact: hello@coffeemistakes.com`;
    
    alert(policyText);
}

// Support info
function showSupportInfo() {
    const supportText = `☕ SUPPORT THIS SITE\n\nThis quiz is 100% funded by coffee lovers like you!\n\n• Built by someone who wasted money on bad coffee gear\n• Hours of research from r/Coffee pain points\n• No ads, no data collection\n• Just honest equipment advice\n\nEvery $3 donation helps cover hosting and keeps this site ad-free.\n\nThank you for supporting independent coffee content! ❤️`;
    
    alert(supportText);
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', function() {
    // Quiz is ready to start
    console.log('Coffee Equipment Quiz loaded successfully');
});
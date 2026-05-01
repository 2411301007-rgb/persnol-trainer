// Exercise Data
const exercises = [
    {
        id: 1,
        name: 'Barbell Bench Press',
        group: 'chest',
        desc: 'A fundamental compound movement for building chest size and strength.',
        steps: [
            'Lie flat on the bench with eyes under the bar.',
            'Grip the bar slightly wider than shoulder-width.',
            'Unrack the bar and lower it slowly to your mid-chest.',
            'Press the bar back up powerfully to the starting position.'
        ],
        tips: 'Keep your feet planted, arch your back slightly, and squeeze your shoulder blades together.'
    },
    {
        id: 2,
        name: 'Incline Dumbbell Press',
        group: 'chest',
        desc: 'Targets the upper pectorals for a well-rounded chest.',
        steps: [
            'Set bench to a 30-45 degree incline.',
            'Hold dumbbells at shoulder level with palms facing forward.',
            'Press the weights straight up until arms are fully extended.',
            'Lower slowly back to the starting position.'
        ],
        tips: 'Do not let the dumbbells touch at the top. Keep constant tension on the muscles.'
    },
    {
        id: 3,
        name: 'Pull-Ups',
        group: 'back',
        desc: 'The ultimate bodyweight exercise for back width and lats development.',
        steps: [
            'Grab the pull-up bar with an overhand grip slightly wider than shoulder-width.',
            'Hang freely with arms fully extended.',
            'Pull yourself up until your chin clears the bar.',
            'Lower yourself down with control.'
        ],
        tips: 'Initiate the pull by driving your elbows down, not just pulling with your biceps.'
    },
    {
        id: 4,
        name: 'Barbell Rows',
        group: 'back',
        desc: 'Builds back thickness and overall pulling strength.',
        steps: [
            'Stand over the bar, hinge at the hips keeping back straight.',
            'Grab the bar with an overhand grip.',
            'Pull the bar to your lower ribcage.',
            'Lower the bar back down with control.'
        ],
        tips: 'Do not use momentum. Keep your torso parallel to the floor if possible.'
    },
    {
        id: 5,
        name: 'Barbell Squat',
        group: 'legs',
        desc: 'The king of all leg exercises, targeting quads, hamstrings, and glutes.',
        steps: [
            'Rest the barbell across your upper back/traps.',
            'Stand with feet shoulder-width apart, toes pointed slightly out.',
            'Descend by pushing hips back and bending knees until thighs are parallel to the floor.',
            'Drive through your heels to return to the standing position.'
        ],
        tips: 'Keep your chest up, core braced, and knees tracking over your toes.'
    },
    {
        id: 6,
        name: 'Romanian Deadlift (RDL)',
        group: 'legs',
        desc: 'Excellent for hamstring and glute development.',
        steps: [
            'Hold a barbell at hip level with an overhand grip.',
            'Keeping legs mostly straight with a slight knee bend, hinge at the hips.',
            'Lower the bar down your legs until you feel a stretch in hamstrings.',
            'Squeeze glutes to stand back up.'
        ],
        tips: 'Keep the bar close to your body and maintain a neutral spine throughout.'
    },
    {
        id: 7,
        name: 'Overhead Press',
        group: 'shoulders',
        desc: 'Builds massive shoulders and pressing power.',
        steps: [
            'Stand with bar resting on front deltoids, hands shoulder-width apart.',
            'Brace core and press the bar straight up overhead.',
            'Lock out arms at the top.',
            'Lower bar under control back to the shoulders.'
        ],
        tips: 'Move your head slightly back as the bar goes up, then push head through at the top.'
    },
    {
        id: 8,
        name: 'Lateral Raises',
        group: 'shoulders',
        desc: 'Isolates the lateral deltoid for shoulder width.',
        steps: [
            'Stand holding dumbbells at your sides.',
            'Keeping a slight bend in the elbows, raise the weights out to the side.',
            'Stop when arms are parallel to the floor.',
            'Lower the weights slowly.'
        ],
        tips: 'Lead with your elbows, pouring water from a jug motion at the top.'
    },
    {
        id: 9,
        name: 'Bicep Curls',
        group: 'arms',
        desc: 'Classic isolation exercise for the biceps.',
        steps: [
            'Stand holding a barbell or dumbbells with an underhand grip.',
            'Keep upper arms stationary and curl the weights up.',
            'Squeeze at the top of the movement.',
            'Lower slowly.'
        ],
        tips: 'Do not swing your body. Control the negative (lowering) portion.'
    },
    {
        id: 10,
        name: 'Tricep Pushdowns',
        group: 'arms',
        desc: 'Isolates the triceps using a cable machine.',
        steps: [
            'Attach a rope or straight bar to a high cable pulley.',
            'Keep elbows tucked to your sides.',
            'Push the attachment down until arms are fully extended.',
            'Return to the starting position slowly.'
        ],
        tips: 'Keep your torso still and only move at the elbow joint.'
    },
    {
        id: 11,
        name: 'Hanging Leg Raises',
        group: 'abs',
        desc: 'Advanced core exercise targeting the lower abs.',
        steps: [
            'Hang from a pull-up bar with arms straight.',
            'Keeping legs straight (or bent for beginners), raise them until parallel to the floor.',
            'Lower them slowly under control.'
        ],
        tips: 'Avoid swinging. Use your core to lift, not momentum.'
    },
    {
        id: 12,
        name: 'Plank',
        group: 'abs',
        desc: 'Static hold for overall core stability.',
        steps: [
            'Get into a push-up position but rest on your forearms.',
            'Keep your body in a straight line from head to heels.',
            'Brace your core and hold the position.'
        ],
        tips: 'Do not let your hips sag or hike up into the air.'
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const exercisesContainer = document.getElementById('exercises-container');
const bmiForm = document.getElementById('bmi-form');
const bmiResult = document.getElementById('bmi-result');
const bmiValue = document.getElementById('bmi-value');
const bmiStatus = document.getElementById('bmi-status');
const bmiIndicator = document.getElementById('bmi-indicator');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Render Exercises
function renderExercises(filterGroup = 'all') {
    exercisesContainer.innerHTML = '';
    
    const filtered = filterGroup === 'all' 
        ? exercises 
        : exercises.filter(ex => ex.group === filterGroup);
        
    filtered.forEach(ex => {
        const stepsHTML = ex.steps.map(step => `<li>${step}</li>`).join('');
        
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <div class="ex-header">
                <h3>${ex.name}</h3>
                <span class="ex-badge">${ex.group}</span>
            </div>
            <p class="ex-desc">${ex.desc}</p>
            <button class="ex-toggle-btn">
                <span>View Details</span>
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="ex-details">
                <h4>How to perform:</h4>
                <ol>
                    ${stepsHTML}
                </ol>
                <h4><i class="fa-solid fa-lightbulb" style="color:var(--primary-color);"></i> Pro Tip:</h4>
                <p style="color:#ccc; font-size:0.9rem;">${ex.tips}</p>
            </div>
        `;
        
        exercisesContainer.appendChild(card);
    });

    // Add toggle functionality to new buttons
    const toggleBtns = document.querySelectorAll('.ex-toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const details = this.nextElementSibling;
            details.classList.toggle('open');
            
            if (this.classList.contains('active')) {
                this.querySelector('span').textContent = 'Hide Details';
            } else {
                this.querySelector('span').textContent = 'View Details';
            }
        });
    });
}

// Initial render
renderExercises();

// Filter Exercises
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        renderExercises(filter);
    });
});

// BMI Calculator
bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && heightCm > 0) {
        const heightM = heightCm / 100;
        const bmi = (weight / (heightM * heightM)).toFixed(1);
        
        bmiValue.textContent = bmi;
        bmiResult.classList.remove('hidden');
        
        let status = '';
        let percentage = 0;
        
        // Calculate position for indicator (assuming scale 15 to 40)
        let calcVal = parseFloat(bmi);
        if (calcVal < 15) calcVal = 15;
        if (calcVal > 40) calcVal = 40;
        
        percentage = ((calcVal - 15) / 25) * 100;
        bmiIndicator.style.left = `calc(${percentage}% - 2px)`;
        
        if (bmi < 18.5) {
            status = 'Underweight';
            bmiStatus.style.color = '#3498db';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'Normal Weight';
            bmiStatus.style.color = '#2ecc71';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = 'Overweight';
            bmiStatus.style.color = '#f39c12';
        } else {
            status = 'Obese';
            bmiStatus.style.color = '#e74c3c';
        }
        
        bmiStatus.textContent = status;
    }
});

// Contact Form Submit Mock
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = contactForm.querySelector('.submit-btn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> SENDING...';
    btn.disabled = true;
    
    // Simulate network request
    setTimeout(() => {
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        formMessage.classList.remove('hidden');
        
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 3000);
    }, 1500);
});

// Update task.md
// This is handled by Antigravity in python, not via JS.

document.addEventListener('DOMContentLoaded', function () {
    // Element references
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const loginBtn = document.querySelector('.login-btn');
    const authModal = document.getElementById('authModal');
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const signupMessage = document.getElementById('signup-message');
    const signinMessage = document.getElementById('signin-message');

    // Show login/signup modal
    if (loginBtn && authModal) {
        loginBtn.addEventListener('click', () => {
            authModal.classList.add('active');
        });

        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.classList.remove('active');
            }
        });
    }

    // Toggle between sign up and sign in panels
    if (signUpButton && signInButton && container) {
        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    }

    // Handle Sign Up form submission
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(signupForm);
            const userData = {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            };

            try {
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                });

                const data = await response.json();

                if (response.ok) {
                    signupMessage.innerHTML = `<p style="color: green;">${data.message}</p>`;
                    setTimeout(() => window.location.href = './index.html', 1500);
                } else {
                    signupMessage.innerHTML = `<p style="color: red;">${data.message}</p>`;
                }
            } catch (error) {
                signupMessage.innerHTML = '<p style="color: red;">An error occurred. Please try again.</p>';
                console.error('Signup Error:', error);
            }
        });
    }

    // Handle Sign In form submission
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(signinForm);
            const userData = {
                email: formData.get('email'),
                password: formData.get('password')
            };

            try {
                const response = await fetch('/api/signin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                });

                const data = await response.json();

                if (response.ok) {
                    signinMessage.innerHTML = `<p style="color: green;">${data.message}</p>`;
                    setTimeout(() => window.location.href = './index.html', 1500);
                } else {
                    signinMessage.innerHTML = `<p style="color: red;">${data.message}</p>`;
                }
            } catch (error) {
                signinMessage.innerHTML = '<p style="color: red;">An error occurred. Please try again.</p>';
                console.error('Signin Error:', error);
            }
        });
    }

    // Check authentication status
    async function checkAuthStatus() {
        try {
            const response = await fetch('/api/check-auth');
            const data = await response.json();

            if (response.ok && data.authenticated) {
                console.log('User is authenticated');
            } else {
                console.log('User is not authenticated');
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
        }
    }

    // Optionally run auth check immediately
    checkAuthStatus();
});document.addEventListener('DOMContentLoaded', function () {
    // Element references
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const loginBtn = document.querySelector('.login-btn');
    const authModal = document.getElementById('authModal');
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const signupMessage = document.getElementById('signup-message');
    const signinMessage = document.getElementById('signin-message');

    // Show login/signup modal
    if (loginBtn && authModal) {
        loginBtn.addEventListener('click', () => {
            authModal.classList.add('active');
        });

        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.classList.remove('active');
            }
        });
    }

    // Toggle between sign up and sign in panels
    if (signUpButton && signInButton && container) {
        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    }

    // Handle Sign Up form submission
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(signupForm);
            const userData = {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            };

            try {
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                });

                const data = await response.json();

                if (response.ok) {
                    signupMessage.innerHTML = `<p style="color: green;">${data.message}</p>`;
                    setTimeout(() => window.location.href = './index.html', 1500);
                } else {
                    signupMessage.innerHTML = `<p style="color: red;">${data.message}</p>`;
                }
            } catch (error) {
                signupMessage.innerHTML = '<p style="color: red;">An error occurred. Please try again.</p>';
                console.error('Signup Error:', error);
            }
        });
    }

    // Handle Sign In form submission
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(signinForm);
            const userData = {
                email: formData.get('email'),
                password: formData.get('password')
            };

            try {
                const response = await fetch('/api/signin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                });

                const data = await response.json();

                if (response.ok) {
                    signinMessage.innerHTML = `<p style="color: green;">${data.message}</p>`;
                    setTimeout(() => window.location.href = './index.html', 1500);
                } else {
                    signinMessage.innerHTML = `<p style="color: red;">${data.message}</p>`;
                }
            } catch (error) {
                signinMessage.innerHTML = '<p style="color: red;">An error occurred. Please try again.</p>';
                console.error('Signin Error:', error);
            }
        });
    }

    // Check authentication status
    async function checkAuthStatus() {
        try {
            const response = await fetch('/api/check-auth');
            const data = await response.json();

            if (response.ok && data.authenticated) {
                console.log('User is authenticated');
            } else {
                console.log('User is not authenticated');
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
        }
    }

    // Optionally run auth check immediately
    checkAuthStatus();
});

// Slider functionality
let slideIndex = 1;

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    // Show the current slide and activate the corresponding dot
    slides[slideIndex-1].classList.add('active');
    dots[slideIndex-1].classList.add('active');
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Auto slide change
function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

// Image Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider
    showSlides(slideIndex);
    setTimeout(autoSlide, 5000); // Start auto-sliding after 5 seconds
    
    // Set up image modal
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('full-image');
    const captionText = document.querySelector('.image-caption');
    const closeModal = document.querySelector('.close-image-modal');
    
    // Get all Learn More buttons
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute('data-image');
            captionText.innerHTML = this.parentElement.querySelector('h2').textContent;
        });
    });
    
    // Close the modal
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu functionality if needed
    
    // Program category selection
    const programCategories = document.querySelectorAll('.program-categories li');
    programCategories.forEach(category => {
        category.addEventListener('click', function() {
            programCategories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            // Add functionality to show relevant programs
        });
    });
    
    // Close button for quick links
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // Add functionality to close quick links panel
            const quickLinksSection = document.querySelector('.quick-links-section');
            if (quickLinksSection) {
                quickLinksSection.style.display = 'none';
            }
        });
    }
    
    // Mobile navigation toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.navbar').appendChild(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    });
    
    // Add responsive navigation for mobile
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            document.querySelector('.nav-links').classList.remove('show');
        }
    });
});

// Add hover effect for program cards
const programCards = document.querySelectorAll('.program-card');
programCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.05)';
    });
});
// Add this to your existing script.js file

// Tab switching functionality for educational paths
document.addEventListener('DOMContentLoaded', function() {
    const pathTabs = document.querySelectorAll('.path-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    pathTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            pathTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show the corresponding tab content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});


// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', function() {
    let testimonialIndex = 0;
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalSlides = testimonialSlides.length;
    
    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Hide all testimonials
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected testimonial and activate corresponding dot
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        
        // Update current index
        testimonialIndex = index;
    }
    
    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            let newIndex = testimonialIndex - 1;
            if (newIndex < 0) newIndex = totalSlides - 1;
            showTestimonial(newIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            let newIndex = testimonialIndex + 1;
            if (newIndex >= totalSlides) newIndex = 0;
            showTestimonial(newIndex);
        });
    }
    

// Define emerging fields data
const emergingFields = [
  {
    id: "emerging",
    title: "Emerging Fields"
  }
];
    // Event listeners for dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
        });
    });
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(function() {
        let newIndex = testimonialIndex + 1;
        if (newIndex >= totalSlides) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);
});
// Add this to your existing script.js file

// Add this to your existing script.js file or replace the payment modal functionality

// Payment Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const openPaymentBtn = document.getElementById('open-payment-btn');
    const paymentModal = document.getElementById('payment-modal');
    const closeModal = document.querySelector('.close-modal');
    const applyCodeBtn = document.getElementById('apply-code');
    const referralInput = document.getElementById('referral-code');
    const referralMessage = document.getElementById('referral-message');
    const finalPrice = document.getElementById('final-price');
    const timelinePrice = document.getElementById('timeline-price');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const expertPortal = document.getElementById('expert-portal');
    const cardNumber = document.getElementById('card-number');
    const expiration = document.getElementById('expiration');
    const cvv = document.getElementById('cvv');
    // Removed unused variable 'country'
    const zip = document.getElementById('zip');
    
    // Track validation state
    let isReferralValid = false;
    let isCardDetailsValid = false;
    
    // Original price
    // Removed unused variable 'originalPrice'
    
    // Open payment modal
    if (openPaymentBtn) {
        openPaymentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            paymentModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    // Close payment modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            paymentModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === paymentModal) {
            paymentModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });
    
    // Apply referral code
    if (applyCodeBtn) {
        applyCodeBtn.addEventListener('click', function() {
            const code = referralInput.value.trim();
            
            if (code === '2739') {
                finalPrice.textContent = '$0.00 USD';
                timelinePrice.textContent = '$0.00 USD';
                referralMessage.textContent = 'Referral code applied successfully! Your subscription is now free.';
                referralMessage.style.color = '#10b981'; // Success green
                isReferralValid = true;
                updateSubscribeButton();
            } else if (code === '') {
                referralMessage.textContent = 'Please enter a referral code.';
                referralMessage.style.color = '#ef4444'; // Error red
                isReferralValid = false;
                updateSubscribeButton();
            } else {
                referralMessage.textContent = 'Invalid referral code. Please try again.';
                referralMessage.style.color = '#ef4444'; // Error red
                isReferralValid = false;
                updateSubscribeButton();
            }
        });
    }
    
    // Validate card details
    function validateCardDetails() {
        // Simple validation for demonstration
        const isCardNumberValid = cardNumber.value.trim().length >= 16;
        const isExpirationValid = /^\d{2}\/\d{2}$/.test(expiration.value.trim());
        const isCvvValid = /^\d{3,4}$/.test(cvv.value.trim());
        const isZipValid = zip.value.trim().length >= 3;
        
        isCardDetailsValid = isCardNumberValid && isExpirationValid && isCvvValid && isZipValid;
        updateSubscribeButton();
        
        return isCardDetailsValid;
    }
    
    // Add input event listeners to card fields
    [cardNumber, expiration, cvv, zip].forEach(field => {
        field.addEventListener('input', validateCardDetails);
    });
    
    // Update subscribe button state
    function updateSubscribeButton() {
        if (isReferralValid || isCardDetailsValid) {
            subscribeBtn.classList.add('active');
            subscribeBtn.disabled = false;
        } else {
            subscribeBtn.classList.remove('active');
            subscribeBtn.disabled = true;
        }
    }
    
    // Initialize button state
    updateSubscribeButton();
    
    // Subscribe button functionality
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            // Check if either referral is valid or card details are valid
            if (isReferralValid || isCardDetailsValid) {
                // Simulate payment processing
                subscribeBtn.textContent = 'Processing...';
                subscribeBtn.disabled = true;
                
                setTimeout(function() {
                    // Hide payment modal
                    paymentModal.style.display = 'none';
                    
                    // Show expert portal
                    expertPortal.style.display = 'block';
                    
                    // Scroll to expert portal
                    expertPortal.scrollIntoView({ behavior: 'smooth' });
                    
                    // Reset button text
                    subscribeBtn.textContent = 'SUBSCRIBE NOW';
                    subscribeBtn.disabled = false;
                    
                    // Enable scrolling
                    document.body.style.overflow = 'auto';
                }, 2000);
            } else {
                // Show validation message if neither is valid
                if (!isReferralValid) {
                    referralMessage.textContent = 'Please enter a valid referral code or complete your payment details.';
                    referralMessage.style.color = '#ef4444'; // Error red
                }
            }
        });
    }
    
    // Communication buttons functionality
    const commButtons = document.querySelectorAll('.comm-btn');
    
    commButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.classList.contains('chat-btn') ? 'chat' : 
                         this.classList.contains('call-btn') ? 'call' :
                         this.classList.contains('video-btn') ? 'video' : 'meeting';
            
            alert(`You've selected to ${type} with our experts. This feature would connect you with our education counselors.`);
        });
    });
    
    // Social media icons functionality
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').classList.contains('fa-whatsapp') ? 'WhatsApp' :
                            this.querySelector('i').classList.contains('fa-instagram') ? 'Instagram' :
                            this.querySelector('i').classList.contains('fa-facebook') ? 'Facebook' :
                            this.querySelector('i').classList.contains('fa-linkedin') ? 'LinkedIn' : 'Twitter';
            
            alert(`You'll be connected with our experts on ${platform}. This would open our official ${platform} page.`);
        });
    });
});
// Add this function to your existing script.js file

// FAQ Toggle Functionality
function toggleFaq(element) {
    // Toggle active class on the clicked question
    element.classList.toggle('active');
    
    // Close all other open FAQs
    const allQuestions = document.querySelectorAll('.faq-question');
    allQuestions.forEach(question => {
        if (question !== element && question.classList.contains('active')) {
            question.classList.remove('active');
        }
    });
}

// Add event listeners for FAQ items when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Open the first FAQ item by default
    const firstFaqQuestion = document.querySelector('.faq-question');
    if (firstFaqQuestion) {
        firstFaqQuestion.classList.add('active');
    }
});
/* Collges filters in DomainNavigator.html */
// Sample College Data
const colleges = [
    { name: "IIT Madras", type: "IIT", annual_fees: 200000, avg_package: 1600000, entrance_exam: "JEE Advanced", location: "Chennai, Tamil Nadu", ranking: 1 },
    { name: "IIT Delhi", type: "IIT", annual_fees: 210000, avg_package: 1550000, entrance_exam: "JEE Advanced", location: "New Delhi", ranking: 2 },
    { name: "IIT Bombay", type: "IIT", annual_fees: 220000, avg_package: 1700000, entrance_exam: "JEE Advanced", location: "Mumbai, Maharashtra", ranking: 3 },
    { name: "IIT Kanpur", type: "IIT", annual_fees: 215000, avg_package: 1500000, entrance_exam: "JEE Advanced", location: "Kanpur, Uttar Pradesh", ranking: 4 },
    { name: "IIT Kharagpur", type: "IIT", annual_fees: 205000, avg_package: 1450000, entrance_exam: "JEE Advanced", location: "Kharagpur, West Bengal", ranking: 5 },
    
    // NITs
    { name: "NIT Trichy", type: "NIT", annual_fees: 125000, avg_package: 1000000, entrance_exam: "JEE Main", location: "Tiruchirappalli, Tamil Nadu", ranking: 8 },
    { name: "NIT Warangal", type: "NIT", annual_fees: 120000, avg_package: 950000, entrance_exam: "JEE Main", location: "Warangal, Telangana", ranking: 12 },
    { name: "NIT Surathkal", type: "NIT", annual_fees: 115000, avg_package: 900000, entrance_exam: "JEE Main", location: "Mangalore, Karnataka", ranking: 15 },
    
    // Tamil Nadu Top Colleges
    { name: "PSG College of Technology", type: "Private", annual_fees: 150000, avg_package: 800000, entrance_exam: "TNEA", location: "Coimbatore, Tamil Nadu", ranking: 25 },
    { name: "Coimbatore Institute of Technology", type: "Private", annual_fees: 130000, avg_package: 750000, entrance_exam: "TNEA", location: "Coimbatore, Tamil Nadu", ranking: 30 },
    { name: "Sri Ramakrishna Engineering College", type: "Private", annual_fees: 120000, avg_package: 650000, entrance_exam: "TNEA", location: "Coimbatore, Tamil Nadu", ranking: 45 },
    { name: "Kumaraguru College of Technology", type: "Private", annual_fees: 125000, avg_package: 700000, entrance_exam: "TNEA", location: "Coimbatore, Tamil Nadu", ranking: 40 },
    { name: "Sri Krishna College of Engineering and Technology", type: "Private", annual_fees: 110000, avg_package: 600000, entrance_exam: "TNEA", location: "Coimbatore, Tamil Nadu", ranking: 50 },
    { name: "KPR Institute of Engineering and Technology", type: "Private", annual_fees: 105000, avg_package: 550000, entrance_exam: "TNEA", location: "Coimbatore, Tamil Nadu", ranking: 55 },
    { name: "Thiagarajar College of Engineering", type: "Private", annual_fees: 115000, avg_package: 650000, entrance_exam: "TNEA", location: "Madurai, Tamil Nadu", ranking: 42 },
    { name: "SSN College of Engineering", type: "Private", annual_fees: 140000, avg_package: 750000, entrance_exam: "TNEA", location: "Chennai, Tamil Nadu", ranking: 35 },
    { name: "Kongu Engineering College", type: "Private", annual_fees: 100000, avg_package: 550000, entrance_exam: "TNEA", location: "Erode, Tamil Nadu", ranking: 60 },
    { name: "Sri Eshwar College", type: "Private", annual_fees: 100000, avg_package: 550000, entrance_exam: "TNEA", location: "Kinathukadavu, Tamil Nadu", ranking: 32 },
    // Private Universities
    { name: "BITS Pilani", type: "Private", annual_fees: 350000, avg_package: 1200000, entrance_exam: "BITSAT", location: "Pilani, Rajasthan", ranking: 10 },
    { name: "VIT University", type: "Private", annual_fees: 300000, avg_package: 900000, entrance_exam: "VITEEE", location: "Vellore, Tamil Nadu", ranking: 18 },
    { name: "SRM University", type: "Private", annual_fees: 280000, avg_package: 800000, entrance_exam: "SRMJEEE", location: "Chennai, Tamil Nadu", ranking: 22 },
    { name: "Manipal Institute of Technology", type: "Private", annual_fees: 320000, avg_package: 850000, entrance_exam: "MET", location: "Manipal, Karnataka", ranking: 20 },
    { name: "Amrita Vishwa Vidyapeetham", type: "Deemed", annual_fees: 250000, avg_package: 750000, entrance_exam: "AEEE", location: "Coimbatore, Tamil Nadu", ranking: 28 },
    
    // State Universities
    { name: "Anna University", type: "State", annual_fees: 80000, avg_package: 600000, entrance_exam: "TNEA", location: "Chennai, Tamil Nadu", ranking: 32 },
    { name: "Jadavpur University", type: "State", annual_fees: 75000, avg_package: 650000, entrance_exam: "WBJEE", location: "Kolkata, West Bengal", ranking: 30 },
    { name: "Delhi Technological University", type: "State", annual_fees: 90000, avg_package: 800000, entrance_exam: "JEE Main", location: "Delhi", ranking: 25 },
    
    // Additional Tamil Nadu Colleges
    { name: "Bannari Amman Institute of Technology", type: "Private", annual_fees: 95000, avg_package: 500000, entrance_exam: "TNEA", location: "Erode, Tamil Nadu", ranking: 65 },
    { name: "Sona College of Technology", type: "Private", annual_fees: 100000, avg_package: 520000, entrance_exam: "TNEA", location: "Salem, Tamil Nadu", ranking: 62 },
    { name: "Karunya Institute of Technology", type: "Private", annual_fees: 180000, avg_package: 600000, entrance_exam: "KCET", location: "Coimbatore, Tamil Nadu", ranking: 58 },
    { name: "Sastra University", type: "Private", annual_fees: 200000, avg_package: 650000, entrance_exam: "SASTRA", location: "Thanjavur, Tamil Nadu", ranking: 38 },
    { name: "Vel Tech University", type: "Private", annual_fees: 190000, avg_package: 550000, entrance_exam: "VTUEEE", location: "Chennai, Tamil Nadu", ranking: 52 },
    { name: "Hindustan Institute of Technology", type: "Private", annual_fees: 170000, avg_package: 500000, entrance_exam: "HITS", location: "Chennai, Tamil Nadu", ranking: 70 },
    { name: "St. Joseph's College of Engineering", type: "Private", annual_fees: 110000, avg_package: 480000, entrance_exam: "TNEA", location: "Chennai, Tamil Nadu", ranking: 75 },
    { name: "Rajalakshmi Engineering College", type: "Private", annual_fees: 120000, avg_package: 500000, entrance_exam: "TNEA", location: "Chennai, Tamil Nadu", ranking: 72 },
    { name: "Mepco Schlenk Engineering College", type: "Private", annual_fees: 105000, avg_package: 520000, entrance_exam: "TNEA", location: "Sivakasi, Tamil Nadu", ranking: 68 },
    { name: "Velammal Engineering College", type: "Private", annual_fees: 115000, avg_package: 490000, entrance_exam: "TNEA", location: "Chennai, Tamil Nadu", ranking: 78 },
    { name: "Panimalar Engineering College", type: "Private", annual_fees: 110000, avg_package: 470000, entrance_exam: "TNEA", location: "Chennai, Tamil Nadu", ranking: 80 },
    { name: "Saveetha Engineering College", type: "Private", annual_fees: 125000, avg_package: 480000, entrance_exam: "TNEA", location: "Chennai, Tamil Nadu", ranking: 82 }
  ];
  
  
  // Function to Display Colleges in Table
  function displayColleges(data) {
      const table = document.getElementById("collegeTable");
      table.innerHTML = ""; // Clear existing table
  
      data.forEach(college => {
          const row = `<tr>
              <td>${college.name}</td>
              <td>${college.type}</td>
              <td>₹${college.annual_fees.toLocaleString()}</td>
              <td>${(college.avg_package / 100000).toFixed(1)} LPA</td>
              <td>${college.entrance_exam}</td>
          </tr>`;
          table.innerHTML += row;
      });
  }
  
  // Function to Filter Colleges
  function filterColleges() {
      const selectedType = document.getElementById("collegeType").value;
      const maxFee = document.getElementById("feeRange").value;
  
      let filteredColleges = colleges;
  
      if (selectedType) {
          filteredColleges = filteredColleges.filter(college => college.type === selectedType);
      }
  
      if (maxFee) {
          filteredColleges = filteredColleges.filter(college => college.annual_fees <= Number(maxFee));
      }
  
      displayColleges(filteredColleges);
  }
  
  // Display All Colleges on Page Load
  window.onload = () => displayColleges(colleges);
  document.addEventListener('DOMContentLoaded', function() {
      const slider = document.getElementById('slider');
      const dots = document.querySelectorAll('.slider-dot');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let currentSlide = 0;
      const totalSlides = 3;
      
      // Function to update the slider position
      function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
          if (index === currentSlide) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
      
      // Next slide function
      function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
      }
      
      // Previous slide function
      function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
      }
      
      // Set up click events for arrows
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
      
      // Set up click events for dots
      dots.forEach(dot => {
        dot.addEventListener('click', function() {
          currentSlide = parseInt(this.getAttribute('data-index'));
          updateSlider();
        });
      });
      
      // Auto slide every 5 seconds
      let slideInterval = setInterval(nextSlide, 2000);
      
      // Pause auto sliding when hovering over the slider
      const sliderContainer = document.querySelector('.slider-container');
      
      sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
      });
      
      sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
      });
    });
    function showContent(contentType) {
      // Hide all content sections
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Show selected content section
      document.getElementById(contentType + '-content').classList.add('active');
      
      // Add active class to clicked tab
      if (contentType === 'entrance') {
        document.querySelectorAll('.tab')[0].classList.add('active');
      } else {
        document.querySelectorAll('.tab')[1].classList.add('active');
      }
    }
// Get all tabs and content sections
const tabs = document.querySelectorAll('.tab');
const contentSections = document.querySelectorAll('.content-section');

// Add click event listeners to each tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get the data-tab attribute value
        const tabId = tab.getAttribute('data-tab');
        
        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the corresponding content section
        document.getElementById(tabId).classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const interestsTextarea = document.getElementById('interests');
    const findDomainsButton = document.getElementById('find-domains');
    const startOverButton = document.getElementById('start-over');
    const exploreMoreButton = document.getElementById('explore-more');
    const inputSection = document.getElementById('input-section');
    const resultsSection = document.getElementById('results-section');
    const domainsContainer = document.getElementById('domains-container');
    const encouragementMessage = document.getElementById('encouragement-message');
    
    // Expanded domain recommendations data - much larger dataset for variety
    const allDomains = [
      // Technology domains
      { name: "Software Development", description: "Perfect for logical thinkers who enjoy problem-solving and creating digital solutions.", categories: ["technology", "problem-solving"] },
      { name: "Cybersecurity", description: "Great for detail-oriented individuals interested in protecting digital assets.", categories: ["technology", "analytical"] },
      { name: "Data Science", description: "Ideal for analytical minds who love finding patterns and insights in information.", categories: ["technology", "analytical", "math"] },
      { name: "Mobile App Development", description: "Great for creative problem-solvers who want to build tools people use every day.", categories: ["technology", "creative"] },
      { name: "Cloud Computing", description: "Excellent for those who enjoy building scalable systems and infrastructure.", categories: ["technology", "systems-thinking"] },
      { name: "DevOps Engineering", description: "Perfect for those who enjoy optimizing processes and improving efficiency.", categories: ["technology", "efficiency"] },
      { name: "Artificial Intelligence", description: "Ideal for those fascinated by how machines can learn and solve complex problems.", categories: ["technology", "math", "research"] },
      { name: "Blockchain Development", description: "Great for innovators interested in decentralized systems and security.", categories: ["technology", "security", "innovation"] },
      
      // Art domains
      { name: "Graphic Design", description: "Perfect for creative visual thinkers who enjoy expressing ideas through imagery.", categories: ["art", "creative", "visual"] },
      { name: "UI/UX Design", description: "Great for those who combine creativity with understanding user psychology.", categories: ["art", "psychology", "technology"] },
      { name: "Digital Content Creation", description: "Ideal for storytellers who enjoy creating engaging multimedia content.", categories: ["art", "creative", "communication"] },
      { name: "Animation", description: "Perfect for creative individuals who want to bring characters and stories to life.", categories: ["art", "storytelling", "creative"] },
      { name: "Photography", description: "Great for those with an eye for composition and visual storytelling.", categories: ["art", "visual", "creative"] },
      { name: "Fashion Design", description: "Ideal for creative innovators with an interest in style and self-expression.", categories: ["art", "design", "creative"] },
      { name: "Game Design", description: "Perfect for creative problem-solvers who understand player psychology and engagement.", categories: ["art", "technology", "psychology"] },
      { name: "Interior Design", description: "Great for spatial thinkers who enjoy creating functional and beautiful spaces.", categories: ["art", "design", "spatial"] },
      
      // Science domains
      { name: "Research & Development", description: "Perfect for curious minds who enjoy experimenting and discovering new solutions.", categories: ["science", "research", "problem-solving"] },
      { name: "Biotechnology", description: "Great for those passionate about applying science to improve health and wellbeing.", categories: ["science", "health", "innovation"] },
      { name: "Environmental Science", description: "Ideal for nature lovers interested in sustainability and conservation.", categories: ["science", "environment", "systems-thinking"] },
      { name: "Aerospace Engineering", description: "Perfect for those fascinated by flight, space, and complex mechanical systems.", categories: ["science", "engineering", "physics"] },
      { name: "Renewable Energy", description: "Great for innovators committed to sustainable technology solutions.", categories: ["science", "environment", "technology"] },
      { name: "Neuroscience", description: "Ideal for those curious about the brain, cognition, and human behavior.", categories: ["science", "psychology", "research"] },
      { name: "Chemistry", description: "Perfect for methodical thinkers who enjoy understanding matter and its transformations.", categories: ["science", "analytical", "research"] },
      { name: "Physics", description: "Great for those who love understanding the fundamental laws of the universe.", categories: ["science", "analytical", "math"] },
      
      // Business domains
      { name: "Entrepreneurship", description: "Perfect for self-starters who enjoy building and growing ventures.", categories: ["business", "leadership", "innovation"] },
      { name: "Marketing", description: "Great for creative strategists who understand human psychology and communication.", categories: ["business", "psychology", "communication"] },
      { name: "Project Management", description: "Ideal for organized individuals who excel at coordinating teams and resources.", categories: ["business", "organization", "leadership"] },
      { name: "Financial Analysis", description: "Perfect for analytical thinkers who enjoy working with numbers and economic systems.", categories: ["business", "analytical", "math"] },
      { name: "Human Resources", description: "Great for empathetic individuals who understand workplace dynamics and human potential.", categories: ["business", "psychology", "empathy"] },
      { name: "Business Strategy", description: "Ideal for big-picture thinkers who can identify opportunities and create plans.", categories: ["business", "strategy", "analytical"] },
      { name: "Sales", description: "Perfect for persuasive communicators who understand customer needs and build relationships.", categories: ["business", "communication", "empathy"] },
      { name: "E-commerce", description: "Great for entrepreneurial minds interested in digital retail and customer experience.", categories: ["business", "technology", "creativity"] },
      
      // Communication domains
      { name: "Content Strategy", description: "Perfect for those who enjoy crafting compelling messages across platforms.", categories: ["communication", "strategic", "creative"] },
      { name: "Public Relations", description: "Great for relationship builders who excel at managing perceptions.", categories: ["communication", "psychology", "relationship"] },
      { name: "Digital Marketing", description: "Ideal for creative analysts who understand both data and storytelling.", categories: ["communication", "analytical", "creative"] },
      { name: "Journalism", description: "Perfect for curious investigators who enjoy researching and telling important stories.", categories: ["communication", "research", "writing"] },
      { name: "Technical Writing", description: "Great for those who can explain complex concepts in accessible language.", categories: ["communication", "technology", "clarity"] },
      { name: "Social Media Management", description: "Ideal for those who understand digital engagement and community building.", categories: ["communication", "creative", "digital"] },
      { name: "Speech Writing", description: "Perfect for persuasive writers who can craft messages that move and inspire.", categories: ["communication", "writing", "persuasion"] },
      { name: "Language Translation", description: "Great for those with linguistic talents and cultural awareness.", categories: ["communication", "language", "cultural"] },
      
      // Education domains
      { name: "Educational Technology", description: "Perfect for innovators passionate about improving how people learn.", categories: ["education", "technology", "innovation"] },
      { name: "Curriculum Development", description: "Great for creative educators who design effective learning experiences.", categories: ["education", "creative", "organization"] },
      { name: "Special Education", description: "Ideal for patient, empathetic individuals who adapt teaching to diverse needs.", categories: ["education", "empathy", "adaptability"] },
      { name: "Adult Education", description: "Perfect for those who empower lifelong learning and professional development.", categories: ["education", "communication", "empathy"] },
      { name: "Educational Psychology", description: "Great for those interested in how people learn and develop cognitively.", categories: ["education", "psychology", "research"] },
      
      // Health domains
      { name: "Health Informatics", description: "Perfect for those interested in improving healthcare through technology.", categories: ["health", "technology", "analytical"] },
      { name: "Nutrition Science", description: "Great for those passionate about how food affects health and wellbeing.", categories: ["health", "science", "biology"] },
      { name: "Physical Therapy", description: "Ideal for those who enjoy helping others recover mobility and strength.", categories: ["health", "empathy", "physiology"] },
      { name: "Mental Health Counseling", description: "Perfect for empathetic listeners who help others navigate challenges.", categories: ["health", "psychology", "empathy"] },
      { name: "Public Health", description: "Great for those dedicated to improving health outcomes across communities.", categories: ["health", "research", "systems-thinking"] },
      
      // Interdisciplinary domains
      { name: "Human-Computer Interaction", description: "Perfect for those interested in how humans and technology interface.", categories: ["technology", "psychology", "design"] },
      { name: "Bioinformatics", description: "Great for analytical thinkers blending biology and computational methods.", categories: ["science", "technology", "analytical"] },
      { name: "Environmental Law", description: "Ideal for those passionate about legal frameworks protecting nature.", categories: ["law", "environment", "systems-thinking"] },
      { name: "Science Communication", description: "Perfect for translating complex scientific concepts to general audiences.", categories: ["science", "communication", "creativity"] },
      { name: "Cognitive Science", description: "Great for those curious about the mind from multiple disciplinary perspectives.", categories: ["psychology", "science", "research"] },
      
      // Creative domains
      { name: "Creative Writing", description: "Perfect for imaginative storytellers who craft compelling narratives.", categories: ["creative", "writing", "art"] },
      { name: "Music Production", description: "Great for those who combine technical skills with artistic expression.", categories: ["creative", "technology", "art"] },
      { name: "Film Direction", description: "Ideal for visual storytellers who can coordinate artistic and technical elements.", categories: ["creative", "leadership", "visual"] },
      { name: "Industrial Design", description: "Perfect for those who blend functionality with aesthetic appeal in products.", categories: ["creative", "design", "practical"] }
    ];
    
    // Keywords to match with interests - expanded for more nuanced matching
    const keywordMap = {
      technology: ['coding', 'programming', 'computers', 'tech', 'software', 'hardware', 'gaming', 'development', 'websites', 'apps', 'digital', 'IT', 'cyber', 'computer science', 'algorithms', 'automation'],
      art: ['creative', 'drawing', 'painting', 'design', 'music', 'writing', 'artistic', 'crafts', 'visual', 'aesthetics', 'illustration', 'beauty', 'photography', 'color', 'composition', 'fashion', 'animation'],
      science: ['research', 'biology', 'chemistry', 'physics', 'experiment', 'lab', 'scientific', 'nature', 'discovery', 'observation', 'hypothesis', 'theory', 'analysis', 'medicine', 'engineering', 'space', 'climate', 'environment'],
      business: ['leadership', 'management', 'entrepreneurship', 'business', 'marketing', 'organizing', 'planning', 'finance', 'economics', 'market', 'strategy', 'profit', 'company', 'startup', 'sales', 'commerce', 'negotiation', 'customer'],
      communication: ['speaking', 'writing', 'teaching', 'presenting', 'social', 'helping', 'communication', 'language', 'storytelling', 'persuasion', 'media', 'journalism', 'explanation', 'content', 'public speaking', 'blogging'],
      psychology: ['behavior', 'mind', 'thinking', 'cognitive', 'mental', 'personality', 'understanding people', 'emotions', 'therapy', 'counseling', 'human behavior', 'brain', 'perception'],
      math: ['mathematics', 'numbers', 'calculation', 'statistics', 'geometry', 'algebra', 'accounting', 'data', 'quantitative', 'probability', 'logic', 'reasoning'],
      analytical: ['analysis', 'solving problems', 'logical', 'critical thinking', 'evaluation', 'assessing', 'systematical', 'methodical', 'detailed', 'precise', 'accuracy', 'objective'],
      creative: ['creativity', 'imagination', 'innovative', 'original', 'artistic', 'inventive', 'novel', 'unique', 'expressive', 'conceptual', 'ideas', 'visionary', 'brainstorming'],
      empathy: ['caring', 'understanding', 'helping others', 'compassion', 'supportive', 'assisting', 'service', 'people-oriented', 'listening', 'counseling', 'nurturing', 'social skills'],
      leadership: ['leading', 'guiding', 'directing', 'managing', 'coaching', 'mentoring', 'inspiring', 'influencing', 'empowering', 'motivating', 'decision-making', 'responsibility'],
      research: ['investigating', 'exploring', 'analyzing', 'studying', 'learning', 'discovering', 'examining', 'curiosity', 'inquiry', 'questioning', 'knowledge', 'information'],
      visual: ['seeing', 'images', 'graphics', 'visual', 'spatial', 'design', 'aesthetic', 'artistic', 'pictures', 'drawing', 'visualization', 'illustration', 'observation'],
      problem_solving: ['solving problems', 'troubleshooting', 'finding solutions', 'fixing', 'resolving', 'overcoming challenges', 'strategizing', 'analytical', 'thinking', 'puzzles', 'intellectual challenges'],
      writing: ['written communication', 'authoring', 'composition', 'documenting', 'storytelling', 'content creation', 'journalism', 'blogging', 'reporting', 'transcribing', 'essays', 'creative writing'],
      health: ['wellness', 'medical', 'healthcare', 'fitness', 'nutrition', 'wellbeing', 'medicine', 'therapy', 'healing', 'body', 'exercise', 'diet', 'prevention'],
      physical: ['sports', 'athletics', 'exercise', 'movement', 'physical fitness', 'strength', 'endurance', 'coordination', 'dexterity', 'outdoors', 'activity'],
      environment: ['nature', 'sustainability', 'conservation', 'ecology', 'climate', 'green', 'outdoors', 'natural world', 'plants', 'animals', 'ecosystems', 'environmental protection'],
      education: ['teaching', 'learning', 'instructing', 'training', 'mentoring', 'tutoring', 'education', 'knowledge sharing', 'coaching', 'curriculum', 'pedagogy', 'development']
    };

    // Secondary attributes that might be mentioned
    const personalTraits = {
      organized: ['organized', 'structured', 'systematic', 'orderly', 'meticulous', 'detailed', 'planning', 'efficient', 'punctual', 'consistent'],
      adaptable: ['adaptable', 'flexible', 'versatile', 'adjustable', 'resilient', 'agile', 'open to change', 'dynamic', 'responsive'],
      innovative: ['innovative', 'inventive', 'groundbreaking', 'original', 'pioneering', 'creative', 'imaginative', 'unconventional', 'visionary'],
      analytical: ['analytical', 'logical', 'methodical', 'rational', 'systematic', 'critical thinker', 'detail-oriented', 'evaluative', 'observant'],
      social: ['social', 'outgoing', 'extroverted', 'people-person', 'friendly', 'personable', 'sociable', 'charismatic', 'communicative'],
      independent: ['independent', 'self-reliant', 'autonomous', 'self-directed', 'self-motivated', 'initiative', 'proactive', 'self-starter'],
      persistent: ['persistent', 'determined', 'tenacious', 'dedicated', 'committed', 'focused', 'driven', 'hardworking', 'diligent'],
      collaborative: ['collaborative', 'team player', 'cooperative', 'supportive', 'group-oriented', 'teamwork', 'helping', 'shared goals']
    };
    
    // Event listeners
    findDomainsButton.addEventListener('click', analyzeInterests);
    startOverButton.addEventListener('click', resetForm);
    exploreMoreButton.addEventListener('click', showMoreOptions);
    interestsTextarea.addEventListener('input', validateInput);
    
    // Validate input to enable/disable submit button
    function validateInput() {
      findDomainsButton.disabled = !interestsTextarea.value.trim();
    }

    // Function to get random items from an array
    function getRandomItems(array, count) {
      const shuffled = array.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
    
    // Main function to analyze interests and find matching domains
    function analyzeInterests() {
      const userInput = interestsTextarea.value.trim().toLowerCase();
      
      if (!userInput) return;
      
      findDomainsButton.textContent = "Finding Matches...";
      findDomainsButton.disabled = true;
      
      // Simulate processing delay
      setTimeout(() => {
        // Score all domains based on keyword matches
        const domainScores = {};
        const categoryMatches = {};
        
        // First, identify matching categories from keywords
        Object.keys(keywordMap).forEach(category => {
          const keywords = keywordMap[category];
          if (keywords.some(keyword => userInput.includes(keyword))) {
            categoryMatches[category] = true;
          }
        });
        
        // Also check for personal traits
        const traitMatches = {};
        Object.keys(personalTraits).forEach(trait => {
          const traitKeywords = personalTraits[trait];
          if (traitKeywords.some(keyword => userInput.includes(keyword))) {
            traitMatches[trait] = true;
          }
        });
        
        // Now score domains based on category matches and trait relevance
        allDomains.forEach(domain => {
          let score = 0;
          
          // Add points for each matching category
          domain.categories.forEach(category => {
            if (categoryMatches[category]) {
              score += 10; // Base points for category match
            }
          });
          
          // Add small random factor for variety
          score += Math.random() * 2;
          
          domainScores[domain.name] = score;
        });
        
        // Sort domains by score
        const rankedDomains = Object.keys(domainScores)
          .filter(name => domainScores[name] > 0)
          .sort((a, b) => domainScores[b] - domainScores[a])
          .map(name => allDomains.find(domain => domain.name === name));
        
        let recommendedDomains = [];
        
        if (rankedDomains.length >= 3) {
          // If we have enough matches, take the top 3
          recommendedDomains = rankedDomains.slice(0, 3);
        } else if (rankedDomains.length > 0) {
          // If we have some matches but fewer than 3, include them all
          recommendedDomains = rankedDomains;
          
          // Then add some random domains that might be interesting
          const remainingDomains = allDomains.filter(domain => !recommendedDomains.includes(domain));
          const additionalDomains = getRandomItems(remainingDomains, 3 - rankedDomains.length);
          recommendedDomains = [...recommendedDomains, ...additionalDomains];
        } else {
          // No specific matches, provide diverse general recommendations
          const generalDomains = [
            { name: "Interdisciplinary Studies", description: "Your unique combination of interests makes you well-suited for cutting-edge interdisciplinary fields." },
            { name: "Creative Problem Solving", description: "Your diverse strengths suggest you would excel in roles that require innovative thinking and adaptability." },
            { name: "Emerging Technologies", description: "Your profile indicates potential for success in rapidly evolving technological fields." },
            { name: "Strategic Communication", description: "Your skills suggest a talent for conveying complex ideas effectively to diverse audiences." },
            { name: "Human-Centered Design", description: "Your perspective would be valuable in creating user-friendly solutions to real-world problems." },
            { name: "Cultural Analysis", description: "Your thoughtful approach would excel in understanding social patterns and diverse perspectives." },
            { name: "Innovation Management", description: "Your abilities would help organizations navigate change and implement new ideas effectively." },
            { name: "Knowledge Integration", description: "Your mindset appears well-suited for connecting ideas across traditional boundaries." }
          ];
          
          recommendedDomains = getRandomItems(generalDomains, 3);
        }
        
        // Display results
        displayResults(recommendedDomains);
        
        // Reset button text
        findDomainsButton.textContent = "Find Matching Domains";
      }, 1500);
    }
    
    // Display the matching domains
    function displayResults(domains) {
      // Clear previous results
      domainsContainer.innerHTML = '';
      
      // Create domain cards
      domains.forEach(domain => {
        const domainCard = document.createElement('div');
        domainCard.className = 'domain-card';
        
        const domainName = document.createElement('div');
        domainName.className = 'domain-name';
        domainName.textContent = domain.name;
        
        const domainDescription = document.createElement('div');
        domainDescription.className = 'domain-description';
        domainDescription.textContent = domain.description;
        
        domainCard.appendChild(domainName);
        domainCard.appendChild(domainDescription);
        domainsContainer.appendChild(domainCard);
      });
      
      // Show results section, hide input section
      inputSection.classList.add('hidden');
      resultsSection.classList.remove('hidden');
      encouragementMessage.classList.remove('hidden');
    }
    
    // Reset the form to start over
    function resetForm() {
      interestsTextarea.value = '';
      resultsSection.classList.add('hidden');
      inputSection.classList.remove('hidden');
      encouragementMessage.classList.add('hidden');
      findDomainsButton.disabled = true;
    }
    
    // Show more domain options
    function showMoreOptions() {
      // Get current domains
      const currentDomainNames = Array.from(domainsContainer.querySelectorAll('.domain-name'))
        .map(el => el.textContent);
      
      // Get new random domains that aren't currently displayed
      const otherDomains = allDomains.filter(domain => !currentDomainNames.includes(domain.name));
      const newDomains = getRandomItems(otherDomains, 3);
      
      // Display new results
      displayResults(newDomains);
    }
    
    // Initialize
    validateInput();
  });
    // Stream data
const streams = [
    {
        id: "engineering",
        title: "Engineering",
        icon: "⚙️",
        iconClass: "engineering",
        subtitle: "Problem-solving & technical skills",
        description: "Apply scientific and mathematical principles to design and build solutions to technical problems.",
        subfields: [
            "Computer Science & Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Civil Engineering",
            "Chemical Engineering",
            "Aerospace Engineering",
            "Biotechnology Engineering",
            "Environmental Engineering"
        ],
        redirectUrl: "eng.html"
    },
    {
        id: "medicine",
        title: "Medical",
        icon: "🩺",
        iconClass: "medicine",
        subtitle: "Healthcare & wellness",
        description: "Study of diagnosing, treating, and preventing disease to improve health and well-being.",
        subfields: [
            "MBBS (Medicine)",
            "BDS (Dental)",
            "BAMS (Ayurveda)",
            "BHMS (Homeopathy)",
            "B.Pharm (Pharmacy)",
            "BSc Nursing",
            "BPT (Physiotherapy)",
            "B.Optom (Optometry)"
        ],
        redirectUrl: "f.html"
    },
    {
        id: "arts",
        title: "Arts and Science",
        icon: "🎭",
        iconClass: "journalism",
        subtitle: "Creative & analytical thinking",
        description: "Study of humanities, social sciences, and natural sciences to understand culture and the world.",
        subfields: [
            "BA in Literature",
            "BSc in Physics",
            "BSc in Chemistry",
            "BA in Psychology",
            "BA in Economics",
            "BSc in Mathematics",
            "BA in Sociology",
            "BA in History"
        ],
        redirectUrl: "arts.html"
    },
    {
        id: "government",
        title: "Government Services",
        icon: "🏛️",
        iconClass: "government",
        subtitle: "Public service & administration",
        description: "Careers in government institutions serving the public and implementing policies.",
        subfields: [
            "Civil Services",
            "Law Enforcement",
            "Judicial Services",
            "Public Administration",
            "Defense Services",
            "Foreign Services",
            "Revenue Services",
            "Social Welfare"
        ],
        redirectUrl: "law.html"
    },
    {
        id: "emerging",
        title: "Emerging Fields with AI",
        icon: "🚀",
        iconClass: "emerging",
        subtitle: "Innovation & future-focused",
        description: "Cutting-edge interdisciplinary fields with high growth potential in the near future.",
        subfields: [
            "Artificial Intelligence",
            "Machine Learning",
            "Data Science",
            "Robotics & Automation",
            "Quantum Computing",
            "Blockchain Technology",
            "Sustainable Energy",
            "Biotechnology"
        ],
        redirectUrl: "AI_home.html"
    },
    {
        id: "Gaming",
        title: "Gaming and Animation",
        icon: "🎮",
        iconClass: "animation",
        subtitle: "Creative & analytical thinking",
        description: "Cutting-edge interdisciplinary fields with high growth potential in the near future.",
        subfields: [
            "Game Design",
            "Animation",
            "VFX",
            "Motion Graphics",
            "3D Modeling",
            "Game Development",
            "Virtual Reality",
            "Augmented Reality"
        ],
        redirectUrl: "/html_codes/gamingguidance.html"
    }
];

// Generate cards from data
const streamGrid = document.getElementById('streams-grid');

streams.forEach(stream => {
const cardHTML = `
    <div class="card-container">
        <div class="card" id="${stream.id}-card">
            <div class="card-front">
                <div class="card-icon ${stream.iconClass}">${stream.icon}</div>
                <h3 class="card-title">${stream.title}</h3>
                <p class="card-subtitle">${stream.subtitle}</p>
                <p class="card-description">${stream.description}</p>
                <p class="subfields-title">Popular Subfields:</p>
                <div class="subfields-list">
                    ${stream.subfields.slice(0, 4).map(subfield => `
                        <div class="subfield-item">
                            <div class="subfield-bullet ${stream.iconClass}"></div>
                            ${subfield}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="card-back">
                <div class="back-content">
                    <div class="back-header">
                        <h3 class="card-title">${stream.title} Fields</h3>
                    </div>
                    <div class="subfields-list">
                        ${stream.subfields.map(subfield => `
                            <div class="subfield-item">
                                <div class="subfield-bullet" style="background-color: white;"></div>
                                ${subfield}
                            </div>
                        `).join('')}
                    </div>
                    <div class="back-footer">
                        <button class="explore-btn">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

streamGrid.innerHTML += cardHTML;
});

// Add click event listeners for card flipping
document.querySelectorAll('.card').forEach(card => {
card.addEventListener('click', function() {
    this.classList.toggle('flipped');
});
});

// Add functionality to explore buttons
document.querySelectorAll('.explore-btn').forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent card from flipping when button is clicked
        const stream = streams[index];
        if (stream && stream.redirectUrl) {
            window.location.href = stream.redirectUrl;
        }
    });
});

// Simple search functionality
const searchInput = document.querySelector('.search-container input');
searchInput.addEventListener('input', function() {
const searchTerm = this.value.toLowerCase();

document.querySelectorAll('.card-container').forEach(container => {
    const card = container.querySelector('.card');
    const streamId = card.id.replace('-card', '');
    const stream = streams.find(s => s.id === streamId);
    
    const titleMatch = stream.title.toLowerCase().includes(searchTerm);
    const subfieldMatch = stream.subfields.some(sub => sub.toLowerCase().includes(searchTerm));
    
    if (titleMatch || subfieldMatch || searchTerm === '') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});
});


    
  
  

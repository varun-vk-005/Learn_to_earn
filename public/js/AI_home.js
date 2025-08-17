// ----- Menu Toggle -----
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const navLinks = document.getElementById('navLinks');

if (menuOpen && menuClose && navLinks) {
  menuOpen.addEventListener('click', () => {
    navLinks.classList.add('active');
  });

  menuClose.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
}

// ----- Particle Animation -----
const particles = document.querySelectorAll('.particle');

function animateParticles() {
  particles.forEach((particle, index) => {
    // Add random movement to each particle
    const randomX = Math.random() * 10 - 5;
    const randomY = Math.random() * 10 - 5;
    
    // Apply the random movement
    particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Reset after a short delay
    setTimeout(() => {
      particle.style.transform = 'translate(0, 0)';
    }, 500);
  });
  
  // Repeat the animation at random intervals
  setTimeout(animateParticles, Math.random() * 5000 + 2000);
}

// Start the particle animation if particles exist
if (particles.length > 0) {
  setTimeout(animateParticles, 1000);
}

// ----- Quiz Functionality -----
const startQuizBtn = document.getElementById('startQuizBtn');
const quizModal = document.getElementById('quizModal');
const closeModal = document.querySelector('.close-modal');
const quizProgress = document.getElementById('quizProgress');
const questionText = document.getElementById('questionText');
const answerOptions = document.getElementById('answerOptions');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const quizResults = document.getElementById('quizResults');
const scoreDisplay = document.getElementById('scoreDisplay');
const starsEarned = document.getElementById('starsEarned');
const retakeQuizBtn = document.getElementById('retakeQuizBtn');
const questionContainer = document.getElementById('questionContainer');

// Sample quiz data for AI Fundamentals
const quizData = {
  'ai-fundamentals': [
    {
      question: "What is Artificial Intelligence?",
      options: [
        "A type of computer hardware",
        "The simulation of human intelligence in machines",
        "A programming language",
        "A cloud computing service"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is NOT a branch of AI?",
      options: [
        "Machine Learning",
        "Deep Learning",
        "Data Storage",
        "Natural Language Processing"
      ],
      correctAnswer: 2
    },
    {
      question: "What year was the term 'Artificial Intelligence' first coined?",
      options: [
        "1956",
        "1965",
        "1972",
        "1980"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of these is an example of AI in everyday life?",
      options: [
        "Basic calculator",
        "Voice assistants like Siri or Alexa",
        "Traditional thermostats",
        "Standard television remote"
      ],
      correctAnswer: 1
    },
    {
      question: "Which field of AI focuses on giving computers the ability to see and interpret visual information?",
      options: [
        "Natural Language Processing",
        "Robotics",
        "Computer Vision",
        "Expert Systems"
      ],
      correctAnswer: 2
    }
  ]
};

let currentQuiz = 'ai-fundamentals';
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Initialize quiz
function initQuiz(quizType) {
  currentQuiz = quizType;
  currentQuestion = 0;
  score = 0;
  showQuestion();
  updateProgress();
  
  if (quizResults) {
    quizResults.style.display = 'none';
  }
  
  if (questionContainer) {
    questionContainer.style.display = 'block';
  }
  
  if (nextQuestionBtn) {
    nextQuestionBtn.innerText = 'Next Question';
    nextQuestionBtn.disabled = true;
  }
}

// Show current question
function showQuestion() {
  selectedAnswer = null;
  
  if (!questionText || !answerOptions || !quizData[currentQuiz]) return;
  
  const currentQuizData = quizData[currentQuiz][currentQuestion];
  questionText.innerText = currentQuizData.question;
  
  answerOptions.innerHTML = '';
  
  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('answer-option');
    optionElement.innerHTML = option;
    optionElement.dataset.index = index;
    
    optionElement.addEventListener('click', () => {
      // Remove selected class from all options
      document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      
      // Add selected class to clicked option
      optionElement.classList.add('selected');
      
      // Enable next button
      if (nextQuestionBtn) {
        nextQuestionBtn.disabled = false;
      }
      
      // Store selected answer
      selectedAnswer = index;
    });
    
    answerOptions.appendChild(optionElement);
  });
}

// Update progress bar
function updateProgress() {
  if (!quizProgress || !quizData[currentQuiz]) return;
  
  const progressPercentage = (currentQuestion / quizData[currentQuiz].length) * 100;
  quizProgress.style.width = `${progressPercentage}%`;
}

// Handle next question or show results
function handleNextQuestion() {
  if (selectedAnswer === null) return;
  
  // Check if answer is correct
  const currentQuizData = quizData[currentQuiz][currentQuestion];
  if (selectedAnswer === currentQuizData.correctAnswer) {
    score++;
  }
  
  currentQuestion++;
  
  // Show next question or results
  if (currentQuestion < quizData[currentQuiz].length) {
    showQuestion();
    updateProgress();
    
    if (nextQuestionBtn) {
      nextQuestionBtn.disabled = true;
    }
  } else {
    showResults();
  }
}

// Show quiz results
function showResults() {
  if (!quizResults || !scoreDisplay || !starsEarned || !questionContainer || !nextQuestionBtn) return;
  
  questionContainer.style.display = 'none';
  quizResults.style.display = 'block';
  nextQuestionBtn.style.display = 'none';
  
  scoreDisplay.innerText = score;
  
  // Calculate stars based on score
  const totalQuestions = quizData[currentQuiz].length;
  const percentage = (score / totalQuestions) * 100;
  let stars = 0;
  
  if (percentage >= 80) stars = 5;
  else if (percentage >= 60) stars = 4;
  else if (percentage >= 40) stars = 3;
  else if (percentage >= 20) stars = 2;
  else stars = 1;
  
  // Display stars
  starsEarned.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const starIcon = document.createElement('i');
    starIcon.classList.add(i < stars ? 'fas' : 'far', 'fa-star');
    starsEarned.appendChild(starIcon);
  }
  
  // Update progress bar to 100%
  if (quizProgress) {
    quizProgress.style.width = '100%';
  }
}

// Open quiz modal
if (startQuizBtn && quizModal) {
  startQuizBtn.addEventListener('click', () => {
    quizModal.style.display = 'block';
    initQuiz('ai-fundamentals');
  });
}

// Close quiz modal
if (closeModal && quizModal) {
  closeModal.addEventListener('click', () => {
    quizModal.style.display = 'none';
  });
}

// Next question button
if (nextQuestionBtn) {
  nextQuestionBtn.addEventListener('click', handleNextQuestion);
}

// Retake quiz button
if (retakeQuizBtn) {
  retakeQuizBtn.addEventListener('click', () => {
    initQuiz(currentQuiz);
    nextQuestionBtn.style.display = 'block';
  });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === quizModal) {
    quizModal.style.display = 'none';
  }
});

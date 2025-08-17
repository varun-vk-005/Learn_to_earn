// ----- Topic Navigation -----
const topicTabs = document.querySelectorAll('.topic-tab');
const topicPanels = document.querySelectorAll('.topic-panel');

// Function to switch active topic
function switchTopic(topicId) {
  // Hide all panels
  topicPanels.forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Show selected panel
  const selectedPanel = document.getElementById(topicId);
  if (selectedPanel) {
    selectedPanel.classList.add('active');
  }
  
  // Update active tab
  topicTabs.forEach(tab => {
    if (tab.dataset.topic === topicId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  
  // Update URL hash
  window.location.hash = topicId;
}

// Add click event listeners to tabs
topicTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const topicId = tab.dataset.topic;
    switchTopic(topicId);
  });
});

// Handle URL hash changes
function handleHashChange() {
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    switchTopic(hash);
  } else if (topicPanels.length > 0) {
    // Default to first topic if no hash or invalid hash
    const firstTopicId = topicPanels[0].id;
    switchTopic(firstTopicId);
  }
}

// Initialize on page load
window.addEventListener('load', handleHashChange);
window.addEventListener('hashchange', handleHashChange);

// ----- Topic Quiz Functionality -----
const topicQuizBtns = document.querySelectorAll('.topic-quiz-btn');
const topicQuizModal = document.getElementById('topicQuizModal');
const topicCloseModal = document.querySelector('#topicQuizModal .close-modal');
const topicQuizProgress = document.getElementById('topicQuizProgress');
const topicQuestionText = document.getElementById('topicQuestionText');
const topicAnswerOptions = document.getElementById('topicAnswerOptions');
const topicNextQuestionBtn = document.getElementById('topicNextQuestionBtn');
const topicQuizResults = document.getElementById('topicQuizResults');
const topicScoreDisplay = document.getElementById('topicScoreDisplay');
const topicStarsEarned = document.getElementById('topicStarsEarned');
const topicRetakeQuizBtn = document.getElementById('topicRetakeQuizBtn');
const topicQuestionContainer = document.getElementById('topicQuestionContainer');
const quizTopicTitle = document.getElementById('quizTopicTitle');

// Additional topic quiz data
const topicQuizData = {
  'machine-learning': [
    {
      question: "Which of these is NOT a type of machine learning?",
      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Deterministic Learning",
        "Reinforcement Learning"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the main goal of supervised learning?",
      options: [
        "To find patterns in unlabeled data",
        "To learn from trial and error",
        "To predict outputs based on labeled training data",
        "To mimic human neural networks"
      ],
      correctAnswer: 2
    },
    {
      question: "Which algorithm is commonly used for classification problems?",
      options: [
        "Linear Regression",
        "K-means Clustering",
        "Decision Trees",
        "Principal Component Analysis"
      ],
      correctAnswer: 2
    },
    {
      question: "What does the 'training data' refer to in machine learning?",
      options: [
        "The hardware used to train models",
        "The dataset used to teach the algorithm",
        "The time spent training a model",
        "The team of experts training the AI"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of these is an example of unsupervised learning?",
      options: [
        "Predicting house prices based on historical data",
        "Grouping customers based on purchasing behavior",
        "Teaching a computer to play chess through rewards",
        "Classifying emails as spam or not spam"
      ],
      correctAnswer: 1
    }
  ],
  'deep-learning': [
    {
      question: "What is a neural network?",
      options: [
        "A computer networking protocol",
        "A biological network of neurons",
        "A layered computational model inspired by the human brain",
        "A specialized hardware for AI"
      ],
      correctAnswer: 2
    },
    {
      question: "What does CNN stand for in deep learning?",
      options: [
        "Computer Neural Network",
        "Convolutional Neural Network",
        "Connected Network Nodes",
        "Calculated Neuron Network"
      ],
      correctAnswer: 1
    },
    {
      question: "Which type of neural network is specifically designed for sequence data?",
      options: [
        "Convolutional Neural Network (CNN)",
        "Fully Connected Network (FCN)",
        "Recurrent Neural Network (RNN)",
        "Generative Adversarial Network (GAN)"
      ],
      correctAnswer: 2
    },
    {
      question: "What is 'backpropagation' in neural networks?",
      options: [
        "A way to visualize neural networks backwards",
        "An algorithm to propagate data back to its source",
        "A method for adjusting weights based on error gradients",
        "A technique to compress neural networks"
      ],
      correctAnswer: 2
    },
    {
      question: "Which technology relies heavily on deep learning?",
      options: [
        "Traditional databases",
        "Computer vision systems",
        "Basic web servers",
        "Standard office software"
      ],
      correctAnswer: 1
    }
  ],
  'generative-ai': [
    {
      question: "What is generative AI?",
      options: [
        "AI that only analyzes existing data",
        "AI that generates new content based on training data",
        "AI that can only generate computer code",
        "AI that works exclusively with numerical data"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of these is an example of generative AI?",
      options: [
        "A spam filter",
        "A face recognition security system",
        "DALL-E for creating images from text descriptions",
        "A recommendation system on an e-commerce site"
      ],
      correctAnswer: 2
    },
    {
      question: "What is a 'Large Language Model' (LLM)?",
      options: [
        "A dictionary with a large number of words",
        "A neural network trained on vast amounts of text data",
        "A model that can only translate between languages",
        "Software that exclusively analyzes grammar"
      ],
      correctAnswer: 1
    },
    {
      question: "Which architecture is commonly used in modern generative AI models?",
      options: [
        "Transformers",
        "Basic Feed-Forward Networks",
        "Simple Perceptrons",
        "Binary Decision Trees"
      ],
      correctAnswer: 0
    },
    {
      question: "What is 'fine-tuning' in the context of generative AI?",
      options: [
        "Adjusting the visual quality of AI-generated images",
        "Training a pre-trained model on specific data for specialized tasks",
        "Setting the parameters of a computer to run AI models faster",
        "The process of correcting errors in AI outputs manually"
      ],
      correctAnswer: 1
    }
  ],
  'prompt-engineering': [
    {
      question: "What is prompt engineering?",
      options: [
        "Writing code to create AI models",
        "Designing hardware specifically for AI",
        "The art of crafting effective inputs to get desired outputs from AI",
        "Engineering AI systems to respond faster"
      ],
      correctAnswer: 2
    },
    {
      question: "What is 'zero-shot prompting'?",
      options: [
        "When an AI fails to generate any response",
        "Getting an AI to perform a task without specific examples",
        "Using exactly zero words in a prompt",
        "Prompting an AI with images instead of text"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of these is a common prompt engineering technique?",
      options: [
        "Circuit design",
        "Chain-of-thought prompting",
        "Hardware optimization",
        "Database indexing"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a 'prompt template'?",
      options: [
        "A standardized format for organizing AI code",
        "A reusable pattern for creating effective prompts",
        "A document that lists all possible AI responses",
        "A user interface for AI systems"
      ],
      correctAnswer: 1
    },
    {
      question: "Why is prompt engineering important for working with generative AI?",
      options: [
        "It helps improve the hardware performance of AI systems",
        "It's required to install AI software correctly",
        "It determines the quality, relevance, and accuracy of AI outputs",
        "It's only important for programming new AI models"
      ],
      correctAnswer: 2
    }
  ],
  'ai-ethics': [
    {
      question: "What is AI bias?",
      options: [
        "When AI has a personal preference for certain brands",
        "When AI systems reflect and amplify human biases in their outputs",
        "When AI hardware is physically tilted to one side",
        "When AI is programmed to favor certain political viewpoints"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of these is a key ethical concern in AI development?",
      options: [
        "Making AI systems too expensive",
        "Using too much energy for AI processing",
        "Privacy and data protection",
        "Creating AI with colorful user interfaces"
      ],
      correctAnswer: 2
    },
    {
      question: "What does 'explainable AI' refer to?",
      options: [
        "AI that explains other AI systems",
        "AI systems that can justify their decisions in human-understandable terms",
        "AI that teaches humans how to code",
        "AI that comes with detailed instruction manuals"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a potential ethical concern with facial recognition technology?",
      options: [
        "It uses too much computational power",
        "The screens used to display results are too small",
        "It can be used for unwanted surveillance and privacy invasion",
        "The technology is too expensive to implement widely"
      ],
      correctAnswer: 2
    },
    {
      question: "According to most AI ethics frameworks, who should be responsible for AI system failures?",
      options: [
        "Only the AI itself",
        "Only the end users",
        "The developers, deployers, and organizations using the AI",
        "No one, as AI failures are inevitable"
      ],
      correctAnswer: 2
    }
  ]
};

// Merge all quiz data
const allQuizData = { ...quizData, ...topicQuizData };

let topicCurrentQuiz = '';
let topicCurrentQuestion = 0;
let topicScore = 0;
let topicSelectedAnswer = null;

// Open topic quiz modal
topicQuizBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const quizType = btn.dataset.quiz;
    if (topicQuizModal && quizType) {
      topicQuizModal.style.display = 'block';
      
      // Set quiz title based on the quiz type
      if (quizTopicTitle) {
        const quizTitles = {
          'ai-fundamentals': 'AI Fundamentals Quiz',
          'machine-learning': 'Machine Learning Quiz',
          'deep-learning': 'Deep Learning Quiz',
          'generative-ai': 'Generative AI Quiz',
          'prompt-engineering': 'Prompt Engineering Quiz',
          'ai-ethics': 'AI Ethics Quiz'
        };
        
        quizTopicTitle.innerText = quizTitles[quizType] || 'Topic Quiz';
      }
      
      initTopicQuiz(quizType);
    }
  });
});

// Initialize topic quiz
function initTopicQuiz(quizType) {
  topicCurrentQuiz = quizType;
  topicCurrentQuestion = 0;
  topicScore = 0;
  showTopicQuestion();
  updateTopicProgress();
  
  if (topicQuizResults) {
    topicQuizResults.style.display = 'none';
  }
  
  if (topicQuestionContainer) {
    topicQuestionContainer.style.display = 'block';
  }
  
  if (topicNextQuestionBtn) {
    topicNextQuestionBtn.innerText = 'Next Question';
    topicNextQuestionBtn.disabled = true;
    topicNextQuestionBtn.style.display = 'block';
  }
}

// Show current topic question
function showTopicQuestion() {
  topicSelectedAnswer = null;
  
  if (!topicQuestionText || !topicAnswerOptions || !allQuizData[topicCurrentQuiz]) return;
  
  const currentQuizData = allQuizData[topicCurrentQuiz][topicCurrentQuestion];
  topicQuestionText.innerText = currentQuizData.question;
  
  topicAnswerOptions.innerHTML = '';
  
  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('answer-option');
    optionElement.innerHTML = option;
    optionElement.dataset.index = index;
    
    optionElement.addEventListener('click', () => {
      // Remove selected class from all options
      document.querySelectorAll('#topicAnswerOptions .answer-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      
      // Add selected class to clicked option
      optionElement.classList.add('selected');
      
      // Enable next button
      if (topicNextQuestionBtn) {
        topicNextQuestionBtn.disabled = false;
      }
      
      // Store selected answer
      topicSelectedAnswer = index;
    });
    
    topicAnswerOptions.appendChild(optionElement);
  });
}

// Update topic progress bar
function updateTopicProgress() {
  if (!topicQuizProgress || !allQuizData[topicCurrentQuiz]) return;
  
  const progressPercentage = (topicCurrentQuestion / allQuizData[topicCurrentQuiz].length) * 100;
  topicQuizProgress.style.width = `${progressPercentage}%`;
}

// Handle next topic question or show results
function handleTopicNextQuestion() {
  if (topicSelectedAnswer === null) return;
  
  // Check if answer is correct
  const currentQuizData = allQuizData[topicCurrentQuiz][topicCurrentQuestion];
  if (topicSelectedAnswer === currentQuizData.correctAnswer) {
    topicScore++;
  }
  
  topicCurrentQuestion++;
  
  // Show next question or results
  if (topicCurrentQuestion < allQuizData[topicCurrentQuiz].length) {
    showTopicQuestion();
    updateTopicProgress();
    
    if (topicNextQuestionBtn) {
      topicNextQuestionBtn.disabled = true;
    }
  } else {
    showTopicResults();
  }
}

// Show topic quiz results
function showTopicResults() {
  if (!topicQuizResults || !topicScoreDisplay || !topicStarsEarned || !topicQuestionContainer || !topicNextQuestionBtn) return;
  
  topicQuestionContainer.style.display = 'none';
  topicQuizResults.style.display = 'block';
  topicNextQuestionBtn.style.display = 'none';
  
  topicScoreDisplay.innerText = topicScore;
  
  // Calculate stars based on score
  const totalQuestions = allQuizData[topicCurrentQuiz].length;
  const percentage = (topicScore / totalQuestions) * 100;
  let stars = 0;
  
  if (percentage >= 80) stars = 5;
  else if (percentage >= 60) stars = 4;
  else if (percentage >= 40) stars = 3;
  else if (percentage >= 20) stars = 2;
  else stars = 1;
  
  // Display stars
  topicStarsEarned.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const starIcon = document.createElement('i');
    starIcon.classList.add(i < stars ? 'fas' : 'far', 'fa-star');
    topicStarsEarned.appendChild(starIcon);
  }
  
  // Update progress bar to 100%
  if (topicQuizProgress) {
    topicQuizProgress.style.width = '100%';
  }
}

// Close topic quiz modal
if (topicCloseModal && topicQuizModal) {
  topicCloseModal.addEventListener('click', () => {
    topicQuizModal.style.display = 'none';
  });
}

// Next topic question button
if (topicNextQuestionBtn) {
  topicNextQuestionBtn.addEventListener('click', handleTopicNextQuestion);
}

// Retake topic quiz button
if (topicRetakeQuizBtn) {
  topicRetakeQuizBtn.addEventListener('click', () => {
    initTopicQuiz(topicCurrentQuiz);
  });
}

// Close topic modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === topicQuizModal) {
    topicQuizModal.style.display = 'none';
  }
});

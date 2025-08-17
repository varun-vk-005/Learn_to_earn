// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Navigation
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  
  // FAQ
  const faqCards = document.querySelectorAll('.faq-card');
  
  // Subject Cards
  const subjectCards = document.querySelectorAll('.subject-card');
  
  // Path Generator
  const interestTags = document.querySelectorAll('.interest-tag');
  const generatePathBtn = document.getElementById('generate-path-btn');
  const pathwayResult = document.getElementById('pathway-result');
  
  // Carousel
  const carouselPrev = document.querySelector('.carousel-control.prev');
  const carouselNext = document.querySelector('.carousel-control.next');
  const indicators = document.querySelectorAll('.indicator');
  const storyCards = document.querySelectorAll('.story-card');
  
  // Background Animation
  generateParticles();
  
  // Scroll Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Mobile Menu Toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      document.querySelectorAll('.mobile-menu-btn span').forEach(span => {
        span.classList.toggle('active');
      });
    });
  }
  
  // Navbar Scroll Effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // FAQ Accordion
  faqCards.forEach(card => {
    const question = card.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = card.classList.contains('active');
      
      // Close all cards
      faqCards.forEach(c => c.classList.remove('active'));
      
      // Open clicked card if it wasn't active
      if (!isActive) {
        card.classList.add('active');
      }
    });
  });
  
  // Subject Cards Interaction
  subjectCards.forEach(card => {
    card.addEventListener('click', function() {
      const subject = this.getAttribute('data-subject');
      updateIndustryShowcase(subject);
    });
  });
  
  // Interest Tags Selection
  interestTags.forEach(tag => {
    tag.addEventListener('click', function() {
      this.classList.toggle('selected');
    });
  });
  
  // Generate Path Button
  if (generatePathBtn) {
    generatePathBtn.addEventListener('click', function() {
      // Get selected interests
      const selectedInterests = Array.from(document.querySelectorAll('.interest-tag.selected'))
        .map(tag => tag.textContent);
      
      // Get custom input
      const customInput = document.querySelector('.custom-input').value;
      if (customInput) selectedInterests.push(customInput);
      
      // Show results if interests are selected
      if (selectedInterests.length > 0) {
        generateCareerPath(selectedInterests);
        pathwayResult.style.display = 'block';
        
        // Scroll to results
        setTimeout(() => {
          pathwayResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        alert('Please select at least one interest to generate your pathway.');
      }
    });
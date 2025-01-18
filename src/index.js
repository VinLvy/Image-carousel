import './style.css';

import './style.css'; // Ensure styles are applied

import image1 from './images/20241115210556.png';
import image2 from './images/20241115210607.png';
import image3 from './images/20241115210628.png';

// Dynamically set images
const slides = document.querySelector('.slides');
slides.innerHTML = `
  <img src="${image1}" alt="Image 1">
  <img src="${image2}" alt="Image 2">
  <img src="${image3}" alt="Image 3">
`;



const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const slideCount = slides.children.length;

// Function to update the slide position and active dot
function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Next slide function
window.nextSlide = function () {
  currentIndex = (currentIndex + 1) % slideCount;
  updateCarousel();
};

// Previous slide function
window.prevSlide = function () {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateCarousel();
};

// Go to specific slide
window.goToSlide = function (index) {
  currentIndex = index;
  updateCarousel();
};

// Auto-slide function
let slideInterval = setInterval(window.nextSlide, 5000);

// Pause auto-slide on hover
document.querySelector('.carousel').addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

// Resume auto-slide on mouse leave
document.querySelector('.carousel').addEventListener('mouseleave', () => {
  slideInterval = setInterval(window.nextSlide, 5000);
});

// Initialize carousel
updateCarousel();


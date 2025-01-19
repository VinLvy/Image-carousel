# Image-carousel

This project implements a reusable image carousel using JavaScript, CSS, and HTML. This README file provides an overview of the image carousel project, its functionality, and the structure of the provided code.

## Overview
This project implements an image carousel with the following features:
- Navigation arrows to move to the next or previous image.
- Navigation dots that indicate the current slide and allow direct navigation to any slide.
- Automatic slide transitions every 5 seconds.
- Pausing the auto-slide when the carousel is hovered over and resuming when the mouse leaves.

The carousel dynamically loads images using Webpack to ensure compatibility with modern JavaScript tooling.

---

## Code Explanation

### **1. Importing Dependencies**
```javascript
import './style.css';

import image1 from './images/20241115210556.png';
import image2 from './images/20241115210607.png';
import image3 from './images/20241115210628.png';
```
- The `style.css` file is imported to style the carousel.
- Images are dynamically imported using Webpack. This ensures proper handling of image paths during the build process.

### **2. Dynamically Setting Images**
```javascript
const slides = document.querySelector('.slides');
slides.innerHTML = `
  <img src="${image1}" alt="Image 1">
  <img src="${image2}" alt="Image 2">
  <img src="${image3}" alt="Image 3">
`;
```
- The `slides` container is populated dynamically with the imported images.
- This ensures modularity and avoids hardcoding image paths in the HTML.

### **3. Carousel State Management**
```javascript
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const slideCount = slides.children.length;
```
- `dots`: Represents the navigation dots.
- `currentIndex`: Tracks the currently active slide.
- `slideCount`: The total number of slides.

### **4. Slide Navigation Functions**
#### **Updating the Carousel**
```javascript
function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}
```
- Updates the `slides` container's position using CSS `transform`.
- Toggles the `active` class on the dots to reflect the current slide.

#### **Next and Previous Functions**
```javascript
window.nextSlide = function () {
  currentIndex = (currentIndex + 1) % slideCount;
  updateCarousel();
};

window.prevSlide = function () {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateCarousel();
};
```
- `nextSlide`: Advances to the next slide, looping back to the first slide if at the end.
- `prevSlide`: Moves to the previous slide, looping back to the last slide if at the beginning.

#### **Go To Specific Slide**
```javascript
window.goToSlide = function (index) {
  currentIndex = index;
  updateCarousel();
};
```
- Allows direct navigation to a specific slide when a dot is clicked.

### **5. Automatic Slide Transition**
```javascript
let slideInterval = setInterval(window.nextSlide, 5000);
```
- Automatically advances to the next slide every 5 seconds.

### **6. Pause and Resume Auto-Slide**
```javascript
document.querySelector('.carousel').addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

document.querySelector('.carousel').addEventListener('mouseleave', () => {
  slideInterval = setInterval(window.nextSlide, 5000);
});
```
- Pauses the auto-slide on `mouseenter`.
- Resumes the auto-slide on `mouseleave`.

### **7. Initialize the Carousel**
```javascript
updateCarousel();
```
- Ensures the carousel is in the correct state on page load.

---

## Usage
1. Clone the repository and install dependencies using `npm install`.
2. Add your images to the `images` folder.
3. Run the project using a local development server (e.g., Webpack Dev Server).
4. Access the carousel in your browser.

---

## Key Features
- Modular design with dynamic imports.
- Responsive and interactive carousel.
- Auto-slide with hover-to-pause functionality.

---

## Technologies Used
- **HTML**: Structure of the page.
- **CSS**: Styling the carousel.
- **JavaScript (ES6)**: Carousel logic.
- **Webpack**: Module bundling and asset management.

---

Feel free to customize and extend this project as needed!


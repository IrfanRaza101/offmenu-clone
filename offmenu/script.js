// Select the testimonials grid and control buttons
const testimonialsGrid = document.querySelector('.testimonials-grid');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize the current index to keep track of the active card
let currentIndex = 0;

// Function to show the testimonial card at the specified index
function showTestimonial(index) {
    testimonialsGrid.style.transform = `translateX(-${index * 100}%)`;
}

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1 ) % testimonialCards.length;
    showTestimonial(currentIndex);
});

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentIndex);
});

// Initialize the carousel by showing the first testimonial
showTestimonial(currentIndex);

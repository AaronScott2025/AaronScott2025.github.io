let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // Wrap the index to ensure it stays within bounds
    currentSlide = (index + totalSlides) % totalSlides;

    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));

    // Show the current slide
    slides[currentSlide].classList.add("active");
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the first slide
showSlide(0);

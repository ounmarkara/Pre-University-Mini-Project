document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-arrow.prev');
    const nextButton = document.querySelector('.carousel-arrow.next');
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    
    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Set initial position
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Move to slide function
    function moveToSlide(index) {
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    }

    // Show next slide
    nextButton.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    });

    // Show previous slide
    prevButton.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(prevIndex);
    });
});

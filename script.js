// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.clients-slider');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const clientWidth = document.querySelector('.client').offsetWidth + 20; // client width + margin
    let currentIndex = 0;

    const updateSlider = () => {
        const translateX = -currentIndex * clientWidth;
        slider.style.transform = `translateX(${translateX}px)`;
        updateButtons();
    };

    const updateButtons = () => {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= slider.children.length - Math.floor(document.querySelector('.clients-container').offsetWidth / clientWidth);
    };

    const slideNext = () => {
        const maxIndex = slider.children.length - Math.floor(document.querySelector('.clients-container').offsetWidth / clientWidth);
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Reset to the start when reaching the end
        }
        updateSlider();
    };

    const slidePrev = () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slider.children.length - Math.floor(document.querySelector('.clients-container').offsetWidth / clientWidth); // Go to the end if at the start
        }
        updateSlider();
    };

    nextBtn.addEventListener('click', slideNext);
    prevBtn.addEventListener('click', slidePrev);

    // Automatically slide every 3 seconds
    setInterval(slideNext, 3000);

    updateButtons(); // Initialize button state
});

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === currentSlide ? '1' : '0';
        });

        currentSlide = (currentSlide + 1) % totalSlides;
    }

    setInterval(changeSlide, 4000); // Troca de slide a cada 4 segundos
});

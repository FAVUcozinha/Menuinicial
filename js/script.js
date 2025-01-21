// Seleciona os slides
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

// Função para avançar os slides
function nextSlide() {
    slides[currentSlide].style.opacity = 0; // Oculta o slide atual
    currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide (retorna ao primeiro após o último)
    slides[currentSlide].style.opacity = 1; // Exibe o próximo slide
}

// Verifica a largura da tela
const isMobile = window.innerWidth <= 768;

// Inicia o slideshow com um intervalo menor para mobile (1.5 segundos) e maior para desktop (3 segundos)
const slideInterval = isMobile ? 1500 : 3000; // Ajustado para 1.5 segundos no mobile

// Inicia o slideshow com a transição conforme o intervalo determinado
setInterval(nextSlide, slideInterval);

// Inicializa o primeiro slide como visível
slides[currentSlide].style.opacity = 1;

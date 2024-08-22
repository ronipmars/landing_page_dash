document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});



const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let index = 0;

function showImage(index) {
    const translateXValue = -index * 100; // Cada imagem ocupa 100% de largura
    carouselImages.style.transform = `translateX(${translateXValue}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

// Auto-play (opcional)
setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
}, 5000); // Muda de imagem a cada 5 segundos

let currentIndex = 0;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function currentSlide(n) {
    showSlide(currentIndex = n);
}

function changeSlide(n) {
    showSlide(currentIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.gallery-item img');
    const lightboxImage = document.getElementById('lightbox-image');

    if (n >= slides.length) currentIndex = 0;
    if (n < 0) currentIndex = slides.length - 1;

    lightboxImage.src = slides[currentIndex].src;
}

// Initialize the lightbox image
document.querySelectorAll('.gallery-item img').forEach((img, index) => {
    img.addEventListener('click', () => {
        openLightbox();
        currentSlide(index + 1);
    });
});

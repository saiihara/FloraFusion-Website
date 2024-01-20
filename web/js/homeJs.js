

//SLIDE IMG HERO

const imgHero = document.querySelector('.img-hero');
const imgContainer = document.createElement('div');
const imgContainer2 = document.createElement('div');

imgContainer.classList.add('img-container');
imgContainer2.classList.add('img-container');

imgHero.appendChild(imgContainer);
imgHero.appendChild(imgContainer2);

const imageUrls = [
    './assets/photos/foto-header.jpg',
    './assets/photos/foto-header2.jpg',
    './assets/photos/foto-header3.jpg',
    './assets/photos/foto-header4.jpg',
];

let currentImageIndex = 0;

function changeImage() {
    const nextImageIndex = (currentImageIndex + 1) % imageUrls.length;

    imgContainer2.style.backgroundImage = `url('${imageUrls[nextImageIndex]}')`;

    // Force reflow to restart the animation
    void imgContainer2.offsetWidth;

    // Schedule the transition
    imgContainer2.style.transition = 'opacity 1s ease-in-out';
    imgContainer2.style.opacity = '1';

    // Schedule the container swap and reset
    setTimeout(() => {
        imgContainer.style.backgroundImage = `url('${imageUrls[nextImageIndex]}')`;
        imgContainer2.style.transition = 'none';
        imgContainer2.style.opacity = '0';
    }, 1000); 

    currentImageIndex = nextImageIndex;
}

// Initial image setup
imgContainer.style.backgroundImage = `url('${imageUrls[currentImageIndex]}')`;
imgContainer.style.opacity = '0'; // Change opacity to 0 initially
setTimeout(() => {
    // Schedule the initial transition
    imgContainer.style.transition = 'opacity 1s ease-in-out';
    imgContainer.style.opacity = '1';
}, 0);

setInterval(changeImage, 4000);



//slider services

const slides = document.querySelectorAll(".slide-service");
const circles = document.querySelectorAll(".circles-slider span");

let activeIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        changeSlide(index);
    });
});

document.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
    touchEndX = e.touches[0].clientX;
});

document.addEventListener("touchend", () => {
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left
        const nextIndex = (activeIndex + 1) % slides.length;
        changeSlide(nextIndex);
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right
        const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
        changeSlide(prevIndex);
    }
}

function changeSlide(index) {
    if (index === activeIndex) return;

    slides[activeIndex].classList.remove("active");
    circles[activeIndex].classList.remove("active");

    slides[index].classList.add("active");
    circles[index].classList.add("active");

    activeIndex = index;
}

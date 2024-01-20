const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper-high .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper-high .slide-button");
    const sliderScrollbar = document.querySelector(".high-container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition)); 

            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;

        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button);
            const direction = button.id === "prev-slide" ? -1 : 1; 
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block"; 
        slideButtons[1].style.display = imageList.scrollLeft >=  maxScrollLeft ? "none" : "block"; 
    }

    const  updateScrollThumbPosition = () =>{
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
}

window.addEventListener("load", initSlider);



// TESTIMONIALSSS

const testimonialsData = [
    {
        name: "Carol Smith",
        testimonial: "I can't express enough how delighted I am with Flora Fusion's interior design expertise. They effortlessly captured my vision and transformed my home into a stylish haven. From the first meeting to the final reveal, their commitment to detail and creative brilliance shone through. The Flora Fusion team seamlessly blended my preferences with their innovative ideas.",
        imageUrl: "./assets/photos/testi1.jpg"
    },

    {
        name: "Marina Sánchez",
        testimonial: "Ecstatic about the outstanding design work from Flora Fusion. They effortlessly translated my vision into a chic haven, showcasing unparalleled attention to detail and creative brilliance. From our first meeting to the final reveal, Harmony Interiors seamlessly blended my preferences with their innovative ideas, creating a space that surpasses expectations",
        imageUrl: "./assets/photos/testi2.jpg"
    },

    {
        name: "Antony Méndez",
        testimonial: "Thrilled with our eco-friendly abode! Moving in with my husband has been a joy, especially with our shared commitment to sustainability. Our new home, curated with eco-conscious choices, reflects our values. From energy-efficient fixtures to recycled furnishings, every detail echoes our dedication to a greener lifestyle",
        imageUrl: "./assets/photos/testi3.jpg"
    },

    {
        name: "Elysia Herr",
        testimonial: "Ecstatic about our eco-friendly nest! Settling into a sustainable lifestyle in my new home has been a joy. Every corner reflects my commitment to an eco-conscious life - from energy-efficient appliances to recycled furnishings. Living solo has never been more rewarding and environmentally friendly.",
        imageUrl: "./assets/photos/testi4.jpg"
    },
 
];

let currentIndex = 0;

document.querySelector('.circles-testi').addEventListener('click', (event) => {
    if (event.target.classList.contains('testi-dots')) {
        currentIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
        updateTestimonial();
    }
});

function updateTestimonial() {
    const testimonial = testimonialsData[currentIndex];
    const contentTestimonials = document.querySelector(".content-testimonials");
    const photoSliderTesti = document.querySelector(".photo-slider-testi");

    contentTestimonials.classList.add('fadeOut');
    photoSliderTesti.classList.add('fadeOut');

    setTimeout(() => {
        document.querySelector(".name-testi").textContent = testimonial.name;
        document.querySelector(".p-testimonial p").textContent = testimonial.testimonial;
        document.querySelector(".photo-slider-testi").style.backgroundImage = `url(${testimonial.imageUrl})`;

        document.querySelectorAll(".testi-dots").forEach(dot => dot.classList.remove("active-dot-testi"));

        document.querySelector(`.testi-dots:nth-child(${currentIndex + 1})`).classList.add("active-dot-testi");

        contentTestimonials.classList.remove('fadeOut');
        photoSliderTesti.classList.remove('fadeOut');
    }, 300); // Adjust the timeout to match the transition duration
}

// Initial testimonial display
updateTestimonial();
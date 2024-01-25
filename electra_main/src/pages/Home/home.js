document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    let counter = 1;
    const size = carouselImages[0].clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[counter].id === 'lastClone') {
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (carouselImages[counter].id === 'firstClone') {
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slide = document.querySelector('.carousel2-slide');
    let slideValue = 0;
    const slideStep = 20; // Adjust this value based on the percentage of each brand

    prevBtn.addEventListener('click', function () {
        slideValue += slideStep;
        if (slideValue > 0) {
            slideValue = -((slide.children.length - 5) * slideStep); // Assuming you want to show 5 logos at a time
        }
        slide.style.transform = `translateX(${slideValue}%)`;
    });

    nextBtn.addEventListener('click', function () {
        slideValue -= slideStep;
        if (slideValue < -((slide.children.length - 5) * slideStep)) {
            slideValue = 0; // Reset to the first slide
        }
        slide.style.transform = `translateX(${slideValue}%)`;
    });
});



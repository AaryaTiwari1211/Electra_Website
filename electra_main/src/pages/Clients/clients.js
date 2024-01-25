document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cardWidth = slider.querySelector('.feedback-card').offsetWidth + 20; // Get width of a card + margin

    let slideValue = 0;

    prevBtn.addEventListener('click', function () {
        slideValue += cardWidth; // Move by the width of one card
        if (slideValue > 0) slideValue = -(10 - 4) * cardWidth; // Adjust for the end
        slider.style.transform = `translateX(${slideValue}px)`;
    });

    nextBtn.addEventListener('click', function () {
        slideValue -= cardWidth; // Move by the width of one card
        if (slideValue < -(10 - 4) * cardWidth) slideValue = 0; // Adjust for the end
        slider.style.transform = `translateX(${slideValue}px)`;
    });
});

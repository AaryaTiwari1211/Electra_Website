// SimpleCarousel.js

import React, { useState, useEffect } from 'react';
import './BrandCarousel.css';

const BrandCarousel = ({ logos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const logosToShow = logos.slice(currentIndex, currentIndex + 5);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);

        return () => clearInterval(interval);
    }, [logos.length]);

    return (
        <div className="simple-carousel">
            <button className="prev-btn" onClick={prevSlide}>
                &#9665; 
            </button>
            <div className="slider">
                {logosToShow.map((logo, index) => (
                    <div key={index} className="logo">
                        <img src={logo} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="next-btn" onClick={nextSlide}>
                &#9655;
            </button>
        </div>
    );
};

export default BrandCarousel;

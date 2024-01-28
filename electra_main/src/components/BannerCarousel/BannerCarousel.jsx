

import React, { useState, useEffect } from 'react';
import './BannerCarousel.css';

const BannerCarousel = ({ banners }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="banner-carousel">
            <button className="prev-btn" onClick={prevSlide}>
                &#9665;
            </button>
            <div className="slider">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`banner ${index === activeIndex ? 'active' : ''}`}
                    >
                        <img src={banner} alt={`Banner ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="next-btn" onClick={nextSlide}>
                &#9655;
            </button>
        </div>
    );
};

export default BannerCarousel;

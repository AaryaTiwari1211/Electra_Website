import React from 'react'
import './Clients.css'
import { useRef } from 'react';
import { useState } from 'react';

const Clients = () => {
    const sliderRef = useRef(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const cardRef = useRef(null);
    const handlePrev = () => {
        const cardWidth = cardRef.current.offsetWidth + 20;
        setSlideIndex((prevSlideIndex) => (prevSlideIndex === 0 ? feedbackData.length - 1 : prevSlideIndex - 1));
        sliderRef.current.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
    };

    const handleNext = () => {
        const cardWidth = cardRef.current.offsetWidth + 20;
        setSlideIndex((prevSlideIndex) => (prevSlideIndex === feedbackData.length - 1 ? 0 : prevSlideIndex + 1));
        sliderRef.current.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
    };
    const feedbackData = [
        { name: 'John Doe', rating: '⭐⭐⭐⭐⭐', comment: 'Excellent service! Highly recommended.' },
        { name: 'Jane Smith', rating: '⭐⭐⭐⭐', comment: 'Great experience with the team.' },
        { name: 'Alice Johnson', rating: '⭐⭐⭐⭐⭐', comment: 'Fantastic service and quick response.' },
        { name: 'Bob Anderson', rating: '⭐⭐⭐⭐', comment: 'Very professional and courteous staff.' },
        { name: 'Charlie Brown', rating: '⭐⭐⭐⭐⭐', comment: 'Impressed with the quality of service.' },
        { name: 'Eva Miller', rating: '⭐⭐⭐⭐', comment: 'Timely delivery and great communication.' },
        { name: 'David Wilson', rating: '⭐⭐⭐⭐', comment: 'Efficient and friendly customer support.' },
        { name: 'Sophie Turner', rating: '⭐⭐⭐⭐⭐', comment: 'Exceptional attention to detail.' },
        { name: 'George Harris', rating: '⭐⭐⭐⭐', comment: 'Reliable and trustworthy service.' },
        { name: 'Olivia Davis', rating: '⭐⭐⭐⭐⭐', comment: 'Always exceed expectations.' },
        // ... add more feedback objects as needed
    ];

    return (
        <>
            <div className="clients-section1">
                <img src="/clients-banner.png" />
                <p>
                    We thrive on enduring partnerships, crafting success stories through tailored solutions. Our evolution
                    is fueled by collaborative achievements, and we treasure the relationships we've built, eagerly
                    anticipating many more triumphs together.
                </p>
            </div>
            <div className="slider-container">
                <h1>What Our Clients Say</h1>
                <div className="carousel-container">
                    <div ref={sliderRef} className="carousel-wrapper">
                        {feedbackData.map((feedback, index) => (
                            <div key={index} className="feedback-card" ref={cardRef}>
                                <h2 className="name">{feedback.name}</h2>
                                <div className="rating">{feedback.rating}</div>
                                <p className="comment">{feedback.comment}</p>
                            </div>
                        ))}
                    </div>
                    <button className="prev-btn" onClick={handlePrev}>&#8249;</button>
                    <button className="next-btn" onClick={handleNext}>&#8250;</button>
                </div>
            </div>
            <div className="clients-section3">
                <h1>Our Clients</h1>
                <div className="logo-container">
                    <img src="https://via.placeholder.com/150" alt="Logo 1" className="logo-item" />
                    <img src="https://via.placeholder.com/150" alt="Logo 2" className="logo-item" />
                    <img src="https://via.placeholder.com/150" alt="Logo 3" className="logo-item" />
                    <img src="https://via.placeholder.com/150" alt="Logo 4" className="logo-item" />
                </div>
                <div className="logo-container">
                    <img src="https://via.placeholder.com/150" alt="Logo 1" className="logo-item" />
                    <img src="https://via.placeholder.com/150" alt="Logo 2" className="logo-item" />
                    <img src="https://via.placeholder.com/150" alt="Logo 3" className="logo-item" />
                    <img src="https://via.placeholder.com/150" alt="Logo 4" className="logo-item" />
                </div>
                <div className="logo-container">
                    <img src="https://via.placeholder.com/150" alt="Logo 1" className="logo-item" />
                    <img src="https://via.placeholder.com/150" alt="Logo 2" className="logo-item" />
                    <img src="https://via.placeholder.com/150" alt="Logo 3" className="logo-item" />
                    <img src="https://via.placeholder.com/150" alt="Logo 4" className="logo-item" />
                </div>
            </div>
        </>
    )
}

export default Clients
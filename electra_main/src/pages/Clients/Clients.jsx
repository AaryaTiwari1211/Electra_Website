import React from 'react'
import './Clients.css'
import { useRef } from 'react';
import { useState } from 'react';
import { clientsData } from '../../utils/clients';

const Clients = () => {
    const { feedbackData, clients } = clientsData;
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
                    {clients.map((client, index) => (
                        <img key={index} src={client.img} alt={client.alt} className='logo-item' />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Clients
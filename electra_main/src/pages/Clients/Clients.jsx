import React from 'react'
import './Clients.css'
import { useRef } from 'react';
import { useState } from 'react';
import { clientsData } from '../../utils/clients';


const FeedbackCard = ({ feedback }) => {
    return (
        <div className="feedback-card">
            <h2 className="name">{feedback.name}</h2>
            <p className="comment">{feedback.comment}</p>
        </div>
    )

}

const Clients = () => {
    const { feedbackData, clients } = clientsData;

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
            <div className='clients-feedback'>
                <h1>What Our Clients Say</h1>
                <div className="carousel-wrapper">
                    {feedbackData.map((feedback, index) => (
                        <FeedbackCard key={index} feedback={feedback} />
                    ))}
                </div>
            </div >
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
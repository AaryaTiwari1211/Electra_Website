import React from 'react'
import './ContactUs.css'
import { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        query: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === '' || formData.email === '' || formData.contact === '' || formData.query === '') {
            alert('All fields must be filled out');
        } else {
            console.log('Form submitted:', formData);
        }
    };
    return (
        <div className="contact-section">
            <div className="contact-text">Contact Us</div>
            
        </div>
    )
}

export default ContactUs
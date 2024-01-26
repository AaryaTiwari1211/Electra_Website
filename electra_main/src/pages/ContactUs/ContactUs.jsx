import React from 'react'
import './ContactUs.css'

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
        <div class="contact-section">
            <div class="contact-text">Contact Us</div>
            <div class="contact-section-add">
                <div class="address-info">
                    <h2>Electra Enterprises</h2>
                    <p class="bold-text">Head Office,</p>
                    <p>Gat No.229, Alandi-Markal Road,</p>
                    <p>Opp. Caparo India, Markal</p>
                    <p>Pune-412105</p>
                    <p>Maharashtra, India</p>
                    <p class="bold-text">Telephone: 91-2135-306915</p>
                    <p class="bold-text">Fax No: 91-2135-306915</p>
                </div>
                <div class="map-container">
                    <h2 class="map-heading">Google Maps Location</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1617492043357!2d73.9566929!3d18.6698933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c58eaaaaaaab%3A0xd42d7475ccde5889!2sElectra%20Enterprises!5e0!3m2!1sen!2sin!4v1638868683875!5m2!1sen!2sin"
                        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            <div class="browse">
                <div class="browse-section">
                    <button class="browse-button" onclick="openProductsPage()">Browse<span
                        class="catalog-icon">🔍</span></button>
                </div>
            </div>
            <div class="enquire-section">
                <h2 class="enquire-heading">Enquire</h2>
                <form className="enquire-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact Number:</label>
                        <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="product">Product:</label>
                        <input type="text" id="product" name="product" value={formData.product} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="query">Query:</label>
                        <textarea id="query" name="query" rows="4" value={formData.query} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
import React from 'react';
import './home.css';

const Footer = () => {
    return (
        <div className="footer">
            {/* 1st Column: Logo */}
            <div className="footer-column">
                <img src="path-to-logo.png" alt="Logo" className="footer-logo" />
            </div>

            {/* 2nd Column: Navbar Links */}
            <div className="footer-column">
                <div className="footer-links">
                    <a href="#">About Us</a>
                    <a href="#">Products/Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>

            {/* 3rd Column: Address and Contact Info */}
            <div className="footer-column">
                <p>123 Main St</p>
                <p>City, Country</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1234567890</p>
            </div>

            {/* 4th Column: Social Media Links */}
            <div className="footer-column">
                <div className="footer-social">
                    <a href="#"><img src="footer/facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="footer/twitter.png" alt="Twitter" /></a>
                    <a href="#"><img src="footer/instagram.jpg" alt="Instagram" id="insta" /></a>
                    <a href="#"><img src="footer/linkedin.png" alt="LinkedIn" /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
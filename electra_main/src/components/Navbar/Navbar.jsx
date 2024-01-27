import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <span>Electra Logo</span>
            </div>
            <div className="nav-links">
                <a href="#">About Us</a>
                <a href="#">Products/Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    );
}

export default Navbar;
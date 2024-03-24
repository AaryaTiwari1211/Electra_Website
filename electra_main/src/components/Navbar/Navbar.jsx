import React from 'react';
import './Navbar.css';
import { navbarData } from '../../utils/navbar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { logo, links } = navbarData;
    const Navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="logo" onClick={()=>Navigate('/')}>
                <img src={logo} alt="Electra Logo" style={{
                    cursor: 'pointer'
                }} />
            </div>
            <div className="nav-links">
                {
                    links.map((link, index) => {
                        return (
                            <a href={link.url} key={index} className=''>{link.title}</a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Navbar;
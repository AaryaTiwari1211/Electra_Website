import React, { useState } from 'react';
import './Navbar.css';
import { navbarData } from '../../utils/navbar';
import { useNavigate } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import logo from '../../assets/logo1.jpg';
import { useEffect } from 'react';


const useClickOutside = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}
const Navbar = () => {
    const { logo, links } = navbarData;
    const Navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawerRef = React.useRef(null);
    useClickOutside(drawerRef, () => setDrawerOpen(false));

    return (
        <div className="navbar">
            <div className="logo" onClick={() => Navigate('/')}>
                <img src={logo} alt="Logo" />
            </div>

            <div className="nav-links">
                {links.map((link, index) => (
                    <a href={link.url} key={index}>{link.title}</a>
                ))}
            </div>

            <button className="menu-icon" onClick={toggleDrawer}>
                <img src={menu} alt="" />
            </button>

            <div ref={drawerRef} className={`drawer ${drawerOpen ? 'open' : ''}`}>
                <img src={logo} alt="" width={50} height={50} onClick={()=> Navigate('/') } style={{ cursor: 'pointer'}} />
                {links.map((link, index) => (
                    <a href={link.url} key={index} onClick={toggleDrawer}>{link.title}</a>
                ))}
                <a href="/aboutus/infrastructure" onClick={toggleDrawer}>Infrastructure</a>
                <a href="/aboutus/qualitypolicy" onClick={toggleDrawer}>Quality Policy</a>
            </div>
        </div>
    );
}

export default Navbar;

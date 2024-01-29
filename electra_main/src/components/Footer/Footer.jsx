import React from 'react';
import './Footer.css';
import { FooterData as data } from '../../utils/footer';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-column">
                <img src={data.logo} alt="Logo" className="footer-logo" />
            </div>
            <div className="footer-column">
                <div className="footer-links">
                    {
                        data.links.map((link, index) => {
                            return (
                                <a href={link.url} key={index} className=''>{link.title}</a>
                            )
                        })
                    }
                </div>
            </div>
            <div className="footer-column">
                {
                    data.address.map((address, index) => {
                        return (
                            <p>{address}</p>
                        )
                    })
                }
            </div>
            <div className="footer-column">
                <div className="footer-social">
                    {
                        data.social_media.map((social, index) => {
                            return (
                                <a href={social.url} key={index} className=''><img src={social.image} alt="Social Media" /></a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Footer;
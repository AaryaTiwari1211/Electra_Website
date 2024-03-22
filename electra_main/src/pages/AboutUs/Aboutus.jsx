import React from 'react'
import './AboutUs.css'
import { AboutUsData } from '../../utils/aboutus'
import { useState } from 'react'


const CollapsibleMenu = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapsible = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="content-main">
            <div className="about-text">
                <h2>About Us</h2>
            </div>
            <button className="collapsible-btn" onClick={toggleCollapsible}>
                Learn More
            </button>
            {!isCollapsed && (
                <div className="collapsible-content" id="collapsibleContent">
                    <div className="main1-links">
                        <a href="#">Infrastructure</a>
                        <a href="#">Quality Policy</a>
                    </div>
                </div>
            )}
        </div>
    );
};

const AboutUs = () => {
    const { companySection, thoughtsSection, visionSection, missionSection } = AboutUsData
    return (
        <>
            <CollapsibleMenu />
            <div className="content-comp-info">
                <div className="content-main2-img">
                    <img src={companySection.img} alt="Company Image" />
                </div>
                <div className="content-main2-info">
                    <h1 className="content-main2-info-head">{companySection.head}</h1>
                    <p className='content-main2-info-body'>
                        {companySection.content}
                    </p>
                </div>
            </div>
            <div className="our-thoughts-section">
                <div className="content-main2-info">
                    <h1 className="content-main2-info-head">{thoughtsSection.head}</h1>
                    <p className='content-main2-info-body'>
                        {thoughtsSection.content}
                    </p>
                </div>
                <div className="content-main2-img">
                    <img src={thoughtsSection.img} alt="Our Thoughts Image" />
                </div>
            </div>
            <div className="content-electra-vision">
                <div className="content-main2-img">
                    <img src={visionSection.img} alt="Electra's Vision Image" />
                </div>
                <div className="content-main2-info">
                    <h1 className="content-main2-info-head">{visionSection.head}</h1>
                    <p className='content-main2-info-body'>
                        {visionSection.content}
                    </p>
                </div>
            </div>
            <div className="electras-mission-section">
                <div className="content-main2-info">
                    <h1 className="content-main2-info-head">{missionSection.head}</h1>
                    <p className='content-main2-info-body'>
                        {missionSection.content}
                    </p>
                </div>
                <div className="content-main2-img">
                    <img src={missionSection.img} alt="Electra's Mission Image" />
                </div>
            </div>
        </>
    )
}

export default AboutUs
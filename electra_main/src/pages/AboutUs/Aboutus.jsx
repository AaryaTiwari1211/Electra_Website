import React from 'react'
import './AboutUs.css'
import { AboutUsData } from '../../utils/aboutus'

const AboutUs = () => {
    const { companySection, thoughtsSection, visionSection, missionSection } = AboutUsData
    return (
        <>
            <div class="content-main">
                <div class="about-text">
                    <h2>About Us</h2>
                </div>
                <button class="collapsible-btn" onclick="toggleCollapsible()">Learn More</button>
                <div class="collapsible-content" id="collapsibleContent">
                    <div class="main1-links">
                        <a href="#">Infrastructure</a>
                        <a href="#">Quality Policy</a>
                    </div>
                </div>
            </div>
            <div class="content-comp-info">
                <div class="content-main2-img">
                    <img src={companySection.img} alt="Company Image" />
                </div>
                <div class="content-main2-info">
                    <h1 class="content-main2-info-head">{companySection.head}</h1>
                    <p className='content-main2-info-body'>
                        {companySection.content}
                    </p>
                </div>
            </div>
            <div class="our-thoughts-section">
                <div class="content-main2-info">
                    <h1 class="content-main2-info-head">{thoughtsSection.head}</h1>
                    <p className='content-main2-info-body'>
                        {thoughtsSection.content}
                    </p>
                </div>
                <div class="content-main2-img">
                    <img src={thoughtsSection.img} alt="Our Thoughts Image" />
                </div>
            </div>
            <div class="content-electra-vision">
                <div class="content-main2-img">
                    <img src={visionSection.img} alt="Electra's Vision Image" />
                </div>
                <div class="content-main2-info">
                    <h1 class="content-main2-info-head">{visionSection.head}</h1>
                    <p className='content-main2-info-body'>
                        {visionSection.content}
                    </p>
                </div>
            </div>
            <div class="electras-mission-section">
                <div class="content-main2-info">
                    <h1 class="content-main2-info-head">{missionSection.head}</h1>
                    <p className='content-main2-info-body'>
                        {missionSection.content}
                    </p>
                </div>
                <div class="content-main2-img">
                    <img src={missionSection.img} alt="Electra's Mission Image"/>
                </div>
            </div>
        </>
    )
}

export default AboutUs
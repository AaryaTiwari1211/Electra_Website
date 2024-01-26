import React from 'react'
import './AboutUs.css'
const AboutUs = () => {
    function toggleCollapsible() {
        var collapsibleContent = document.getElementById("collapsibleContent");
        collapsibleContent.classList.toggle("active");
    }
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
                    <img src="your-image.jpg" alt="Company Image" />
                </div>
                <div class="content-main2-info">
                    <h1 class="content-main2-info-head">Company Information</h1>
                    <p>
                        Electra Enterprises stands as a beacon of excellence in the realm of electrical engineering
                        services,
                        headquartered in the vibrant city of Pune. Since our inception in 1987, we've been synonymous with
                        professionalism and innovation, consistently delivering unparalleled value to our clients.
                    </p>
                </div>
            </div>
            <div class="our-thoughts-section">
                <div class="our-thoughts-info">
                    <h1 class="our-thoughts-head">Our Thoughts</h1>
                    <p>
                        At the heart of our success is a robust infrastructure that ensures swift and efficient service
                        delivery,
                        catering to the diverse needs of our clients. We take pride in adhering to international standards,
                        adopting cutting-edge technologies, and leveraging our R&D capabilities to manufacture high-quality
                        products.
                    </p>
                </div>
                <div class="our-thoughts-img">

                    <img src="your-image.jpg" alt="Our Thoughts Image" />
                </div>
            </div>
            <div class="content-electra-vision">
                <div class="content-electra-img">
                    <img src="your-image.jpg" alt="Electra's Vision Image" />
                </div>
                <div class="content-electra-info">
                    <h1 class="content-electra-info-head">Electra’s Vision</h1>
                    <p>
                        Positioned as a distinguished service provider, we offer a comprehensive suite of premium services,
                        ranging
                        from Electrical Contractor Services to Transformer Oil Filtration, Voice and Data Integration
                        Solutions, Breaker
                        Panel Erection, and meticulous Fabrication & Installation of Cable Trays. Beyond our service
                        commitment, we've
                        ventured into manufacturing, establishing ourselves as a trusted exporter and supplier. Our
                        specialization
                        encompasses G.I., M.S., Alu., S.S., and FRP Cable Trays, Cable Tray Support Systems, Industrial
                        Safety Equipment,
                        and a variety of other high-quality products. Our unwavering dedication is at the core of delivering
                        excellence,
                        both in our services and manufacturing pursuits.
                    </p>
                </div>
            </div>
            <div class="electras-mission-section">
                <div class="electras-mission-info">
                    <h1 class="electras-mission-head">Electra’s Mission</h1>
                    <p>
                        Our mission is to carve a global identity as a premier provider of data and voice services, offering
                        end-to-end
                        solutions from design and installation to comprehensive user training. What sets us apart is not
                        just our products
                        and services, but the enduring relationships we build with our clients, driven by personalized
                        attention and an
                        unwavering commitment to excellence. Electra Enterprises: Where Innovation Meets Reliability.
                    </p>
                </div>
                <div class="electras-mission-img">
                    {/* <img src="your-image.jpg" alt="Electra's Mission Image"> */}
                </div>
            </div>
        </>
    )
}

export default AboutUs
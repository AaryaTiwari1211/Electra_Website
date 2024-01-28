import React from 'react'
import './Home.css'
import { HomeData as data } from '../../utils/home'
import BrandCarousel from '../../components/BrandCarousel/BrandCarousel'
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel'

const ServicesLeft = ({ obj }) => {
    return (
        <div className="service">
            <img src={obj.image} alt="Sample Photo" className="service-image" />
            <div className="service-text">
                <h3>{obj.title}</h3>
            </div>
        </div>
    )
}

const ServicesCard = ({ src, title }) => {
    return (
        <div className="section2-card">
            <img src={src} alt="Sample Photo" className="card-img-top" />
            <div className="section2-read-more-banner">
                <p>{title}</p>
            </div>
        </div>
    )
}

const ProductSection = () => {
    return (
        <div className="section2">
            <div className="section2-inner">
                <div className=" section2-left">
                    <h1>Services</h1>
                    {
                        data.homeServices.map((service, index) => {
                            return (
                                <div className="service" key={index}>
                                    <img src={service.image} alt="Sample Photo" className="service-image" />
                                    <div className="service-text">
                                        <h3>{service.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="section2-right">
                    <div width="100%"></div>
                    {
                        data.homeServices.map((service, index) => {
                            return (
                                <ServicesCard src={service.image} title={service.title} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
const ServicesSection = () => {
    return (
        <div className="section3">
            <div className="section3-inner">
                Our Products
                <div className="card-container">
                    <div className="card">
                        <img src="https://via.placeholder.com/300" alt="Sample Photo" className="card-img-top" />
                        <div className="read-more-section">
                            <button className="read-more-btn">Read More</button>
                            <span className="arrow">&#8594;</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://via.placeholder.com/300" alt="Sample Photo" className="card-img-top" />
                        <div className="read-more-section">
                            <button className="read-more-btn">Read More</button>
                            <span className="arrow">&#8594;</span>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="https://via.placeholder.com/300" alt="Sample Photo" className="card-img-top" />
                        <div className="read-more-section">
                            <button className="read-more-btn">Read More</button>
                            <span className="arrow">&#8594;</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://via.placeholder.com/300" alt="Sample Photo" className="card-img-top" />
                        <div className="read-more-section">
                            <button className="read-more-btn">Read More</button>
                            <span className="arrow">&#8594;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <>
            <BannerCarousel banners={data.carouselImages} />
            <div className="section1">
                <h1>About Us</h1>
                <div className="section1-content">
                    <img src={data.carouselImages[0]} alt="Sample Photo" className='about-us-Image' />
                    <p className='section1-text'>
                        {data.aboutUsText}
                    </p>
                </div>
            </div>
            <ProductSection />
            <ServicesSection />
            <BrandCarousel logos={data.brandCarouselImages} />
        </>
    )
}

export default Home


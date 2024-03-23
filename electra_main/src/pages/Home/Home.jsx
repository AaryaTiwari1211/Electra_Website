import React from 'react'
import './Home.css'
import { HomeData as data } from '../../utils/home'
import BrandCarousel from '../../components/BrandCarousel/BrandCarousel'
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel'
import ProductCard from '../../components/ProductCard/ProductCard'
import ServicesCard from '../../components/ServicesCard/ServicesCard'


const ServicesSection = () => {
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
const ProductSection = () => {
    return (
        <div className="section3">
            <div className="section3-inner">
                Our Products
                <div className="card-container">
                    {
                        data.homeProducts.map((product, index) => {
                            return (
                                <ProductCard src={product.image} title={product.title} key={index} />
                            )
                        })
                    }
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
            <ServicesSection />
            <ProductSection />
            <div className='brand-carousel-container'>
                <h2 className=''>Our Brands</h2>
                <BrandCarousel logos={data.brandCarouselImages} />
            </div>
        </>
    )
}

export default Home


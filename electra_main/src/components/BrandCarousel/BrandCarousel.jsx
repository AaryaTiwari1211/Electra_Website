import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeData } from '../../utils/home';
import './BrandCarousel.css';

const LogoCarousel = () => {
    const { brandCarouselImages } = HomeData;
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,  
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {brandCarouselImages.map((image, index) => (
                <div key={index} className='logo-outer'>
                    <img src={image} alt="Brand" width={100} height={80} />
                </div>
            ))}
        </Slider>
    );
};

export default LogoCarousel;
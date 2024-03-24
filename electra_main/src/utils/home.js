
import carouselImage1 from '../assets/home/carousel/image1.jpg';
import carouselImage2 from '../assets/home/carousel/image2.jpg';
import carouselImage3 from '../assets/home/carousel/image3.jpg';
import carouselImage4 from '../assets/home/carousel/image4.jpg';
import carouselImage5 from '../assets/home/carousel/image5.jpg';

import brandCarouselImage1 from '../assets/home/lower brand carousel/Alfa laval.png';
import brandCarouselImage2 from '../assets/home/lower brand carousel/Danobat.png';
import brandCarouselImage3 from '../assets/home/lower brand carousel/Firstcry.png';
import brandCarouselImage4 from '../assets/home/lower brand carousel/hul.jpg';
import brandCarouselImage5 from '../assets/home/lower brand carousel/JSW.png';
import brandCarouselImage6 from '../assets/home/lower brand carousel/Jupiter hospital.png';
import brandCarouselImage7 from '../assets/home/lower brand carousel/KIRLOSKAR.jpg';
import brandCarouselImage8 from '../assets/home/lower brand carousel/L and t.png';
import brandCarouselImage9 from '../assets/home/lower brand carousel/Philips.jpg';

import productImage1 from '../assets/home/products/Cable-Tray-.jpg';
import productImage2 from '../assets/home/products/MCC_Panel_1.jpg';
import productImage3 from '../assets/home/products/PLC.jpg';
import productImage4 from '../assets/home/products/power-control-centre-panel.jpg';

import serviceImage1 from '../assets/home/services/service1.jpg';
import serviceImage2 from '../assets/home/services/service2.jpg';
import serviceImage3 from '../assets/home.page.images/Services/3.jpg';
import serviceImage4 from '../assets/Product.and.Services.Page.images/Services/Transformer Installation.png';

import readMoreImage1 from '../assets/home/services/Read-more-image.jpg';

import logo from '../assets/home/final_logo.jpg';

export const HomeData = {
    logo: logo,
    carouselImages: [
        carouselImage1,
        carouselImage2,
        carouselImage3,
        carouselImage4,
        carouselImage5
    ],
    brandCarouselImages: [
        brandCarouselImage1,
        brandCarouselImage2,
        brandCarouselImage3,
        brandCarouselImage4,
        brandCarouselImage5,
        brandCarouselImage6,
        brandCarouselImage7,
        brandCarouselImage8,
        brandCarouselImage9
    ],
    homeProducts: [
        {
            id: 5,
            image: productImage1,
            title: 'Cable Tray'
        },
        {
            id: 0,
            image: productImage2,
            title: 'MCC Panel'
        },
        {
            id: 2,
            image: productImage3,
            title: 'PLC'
        },
        {
            id: 1,
            image: productImage4,
            title: 'Power Control Centre Panel'
        }
    ],
    homeServices1: [
        {
            image: serviceImage1,
            title: 'Bustduct Installation',
        },
        {
            image: serviceImage2,
            title: 'Leading Turnkey Electrical Contractor'
        }
    ],
    homeServices2: [
        {
            id: 7,
            image: serviceImage3,
            title: 'Interior and Exterior Electrification Solutions',
        },
        {
            id: 12,
            image: serviceImage4,
            title: 'Transformer Installation',
        },

    ],
    readMoreImage: readMoreImage1,
    aboutUsText: `Electra Enterprises is a  professionally managed firm , founded in 1987 , and 
    engaged in manufacturing an array of sheet metal components for control 
    panels , switchgears , acoustic enclosures and distribution  panels . These are 
    available in custom finishes as required by our clients . Complete assembly of 
    Components based on customer requirement is also provided . The strength 
    of the company lies in its Excellent manufacturing capabilities . Located on 
    the Alandi Markal Road, the  company's Infrastructure comprises of a
    state-of-the-art production facility . `
}
import React from 'react'
import './Home.css'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const carouselSlide = document.querySelector('.carousel-slide');
        const carouselImages = document.querySelectorAll('.carousel-slide img');

        let counter = 1;
        const size = carouselImages[0].clientWidth;

        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        nextBtn.addEventListener('click', () => {
            if (counter >= carouselImages.length - 1) return;
            carouselSlide.style.transition = 'transform 0.4s ease-in-out';
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

        prevBtn.addEventListener('click', () => {
            if (counter <= 0) return;
            carouselSlide.style.transition = 'transform 0.4s ease-in-out';
            counter--;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

        carouselSlide.addEventListener('transitionend', () => {
            if (carouselImages[counter].id === 'lastClone') {
                carouselSlide.style.transition = 'none';
                counter = carouselImages.length - 2;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            if (carouselImages[counter].id === 'firstClone') {
                carouselSlide.style.transition = 'none';
                counter = carouselImages.length - counter;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
    }, []);
    return (
        <>
            <div className="carousel-container">
                <div className="carousel-slide">
                    <img src="https://via.placeholder.com/1600x800" alt="Sample Photo" />
                    <img src="https://via.placeholder.com/1600x800" alt="Sample Photo" />
                    <img src="https://via.placeholder.com/1600x800" alt="Sample Photo" />
                    <img src="https://via.placeholder.com/1600x800" alt="Sample Photo" />
                </div>
                <button className="prev-btn">Prev</button>
                <button className="next-btn">Next</button>
            </div>
            <div className="section1">
                <h1>About Us</h1>
                <div className="section1-content">
                    <div className="section1-img">
                        <img src="https://via.placeholder.com/500x300" alt="Sample Photo" />
                    </div>
                    <div className="section1-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rutrum diam. Praesent
                            magna odio, aliquam vitae vehicula id, vestibulum nec lorem. className aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos himenaeos. Sed sollicitudin at ante a congue.
                            Praesent in pharetra ipsum. Phasellus eget pellentesque ligula. Mauris elit elit, ultrices eget
                            ultricies ut, tempus sollicitudin felis. Maecenas pretium euismod est. Sed cursus eget lacus vel
                            semper. Aliquam porta fringilla felis porttitor pretium. Curabitur et odio tincidunt, tincidunt
                            nisi fringilla, scelerisque ex. Praesent lacus nibh, consequat vitae lacinia at, interdum et
                            nisl. Donec accumsan enim vel nulla eleifend, eu tempor tellus condimentum. Donec eu nunc quis
                            sapien iaculis porta.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rutrum diam. Praesent
                            magna odio, aliquam vitae vehicula id, vestibulum nec lorem. className aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos himenaeos. Sed sollicitudin at ante a congue.
                            Praesent in pharetra ipsum. Phasellus eget pellentesque ligula. Mauris elit elit, ultrices eget
                            ultricies ut, tempus sollicitudin felis. Maecenas pretium euismod est. Sed cursus eget lacus vel
                            semper. Aliquam porta fringilla felis porttitor pretium. Curabitur et odio tincidunt, tincidunt
                            nisi fringilla, scelerisque ex. Praesent lacus nibh, consequat vitae lacinia at, interdum et
                            nisl. Donec accumsan enim vel nulla eleifend, eu tempor tellus condimentum. Donec eu nunc quis
                            sapien iaculis porta.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="section2-inner">
                    <div className=" section2-left">
                        <h1>Services</h1>
                        <div className="section2-img1">
                            <div className="section2-relimg"></div>
                            <div className="section2-absimg"></div>
                        </div>
                        <div className="section2-img1">
                            <div className="section2-relimg2"></div>
                            <div className="section2-absimg2"></div>
                        </div>
                    </div>
                    <div className="section2-right">
                        <div width="100%"></div>
                        <div className="section2-card">
                            <img src="https://via.placeholder.com/300" alt="Sample Photo" className="section2-card-img-top" />
                            <div className="section2-read-more-banner">
                                <p>Read More</p>
                            </div>
                        </div>
                        <div className="section2-card">
                            <img src="https://via.placeholder.com/300" alt="Sample Photo" className="card-img-top" />
                            <div className="section2-read-more-banner">
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className="carousel2-container">
                <button id="prevBtn"><i className="fas fa-chevron-left"></i></button>
                <div className="carousel2-slide">
                    <img src="https://via.placeholder.com/100x50?text=Brand1" alt="Brand 1" />
                    <img src="https://via.placeholder.com/100x50?text=Brand2" alt="Brand 2" />
                    <img src="https://via.placeholder.com/100x50?text=Brand3" alt="Brand 3" />
                    <img src="https://via.placeholder.com/100x50?text=Brand4" alt="Brand 4" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                    <img src="https://via.placeholder.com/100x50?text=Brand5" alt="Brand 5" />
                </div>
                <button id="nextBtn"><i className="fas fa-chevron-right"></i></button>
            </div>
        </>
    )
}

export default Home


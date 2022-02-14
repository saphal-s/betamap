import React from 'react';
import './styles.css';

const HeroSection = () => {

    return <div id="carouselExampleCaptions" className="carousel slide hero-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active ">
                <img src="./images/banner.jpg" className="d-block w-100" alt="carousel" />
                <div className="carousel-caption d-md-block carousel-block">
                    <p><i className="fas fa-long-arrow-alt-left"></i> Map Education Consultancy <i className="fas fa-long-arrow-alt-right"></i></p>
                    <h5 className='pb-3'>Do you want <br /> to study Aboard?</h5>
                    <div className="carousal-button">
                        <button>
                            Apply Now <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="./images/7.webp" className="d-block w-100" alt="carousel" />
                <div className="carousel-caption  d-md-block carousel-block">
                    <p><i className="fas fa-long-arrow-alt-left"></i> Map Education Consultancy <i className="fas fa-long-arrow-alt-right"></i></p>
                    <h5 className='pb-3'>Do you want <br /> to study Aboard?</h5>
                    <div className="carousal-button">
                        <button>
                            Apply Now <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="./images/banner3.jpg" className="d-block w-100" alt="carousel" />
                <div className="carousel-caption d-md-block carousel-block">
                    <p><i className="fas fa-long-arrow-alt-left "></i> Map Education Consultancy <i className="fas fa-long-arrow-alt-right"></i></p>
                    <h5 className='pb-3'>Do you want <br /> to study Aboard?</h5>
                    <div className="carousal-button">
                        <button>
                            Apply Now <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
    </div>
};

export default HeroSection;

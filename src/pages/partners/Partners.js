import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

const settings = {
    className: "center",
    // centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
};

const Partners = () => {
    return (
        <div className='partner' >
            <Slider {...settings}>
                <div className="partner-image">
                    <img src="./images/ministry of education.jpg" alt="partner__img" />
                </div>
                <div className="partner-image">
                    <img src="./images/think-new.png" alt="partner__img" />
                </div>
                <div className="partner-image">
                    <img src="./images/atmc.png" alt="partner__img" />
                </div>
                <div className="partner-image">
                    <img src="./images/IIBIT FED.jpg" alt="partner__img" />
                </div>
                <div className="partner-image">
                    <img src="./images/Apeiro institute.jpg" alt="partner__img" />
                </div>
                <div className="partner-image">
                    <img src="./images/USC.jpg" alt="partner__img" />
                </div>
                <div className="partner-image">
                    <img src="./images/federation.jpg" alt="partner__img" />
                </div>
                <div className="partner-image">
                    <img src="./images/QEAC.jpg" alt="partner__img" />
                </div>
                <div className="partner-image">
                    <img src="./images/Excelsia-College-Logo.jpg" alt="partner__img" />
                </div>
                <div className="partner-image">
                    <img src="./images/SABT.jpg" alt="partner__img" />
                </div>
            </Slider>
        </div>
    )
}

export default Partners
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 320,
                settings: { arrows: false, slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true }
            },
            {
                breakpoint: 768,
                settings: { arrows: false, slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1, infinite: true,
                    arrows: false, dots: true
                }
            }
        ]
    };

    return (
        <div className='testimo'>
            <Slider {...settings}>
                <div className="cds">
                    <div className="inner-card m-lg-5">
                        <div className="quote-opens">
                            <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="cards">
                            <p>
                            </p><p>Map team is really very helpful. I got lot of support in arranging the documents and
                                searching good college.
                                They gave their full effort in making my visa process successful. Thank
                                you Map, for your help.</p>
                        </div>
                        <div className="cds-footer d-flex">
                            <div className="cds-footer-img">
                                <img src="./images/barsha.jpg" alt="testimonial__image" />
                            </div>
                            <div className="cds-footer-text">
                                <h6>Barsha Gautam</h6>
                                <p>Student</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cds">
                    <div className="inner-card m-lg-5">
                        <div className="quote-opens">
                            <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="cards">
                            <p>
                            </p><p>Map team is really very helpful. I got lot of support in arranging the documents and
                                searching good college.
                                They gave their full effort in making my visa process successful. Thank
                                you Map, for your help.</p>
                        </div>
                        <div className="cds-footer d-flex">
                            <div className="cds-footer-img">
                                <img src="./images/sijan.jpg" alt="testimonial__image" />
                            </div>
                            <div className="cds-footer-text">
                                <h6>Sijan Shrestha</h6>
                                <p>Student(Diploma of IT)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cds">
                    <div className="inner-card m-lg-5">
                        <div className="quote-opens">
                            <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="cards">
                            <p>
                            </p><p>I was in Dilemma whether to apply for Bachelors or Diploma regarding my finances and the massive refusals of
                                Diploma course but I got the right course and college including the guidance to boost my score in IELTS. I really
                                got a big help throughout the processing and making my
                                SOP stronger which led to approval of my VISA. Thanks to MAP team.</p>
                        </div>
                        <div className="cds-footer d-flex">
                            <div className="cds-footer-img">
                                <img src="./images/bhawana.jpg" alt="testimonial__image" />
                            </div>
                            <div className="cds-footer-text">
                                <h6>Bhawana Thapa</h6>
                                <p>Student(Diploma of Community Services)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cds">
                    <div className="inner-card m-lg-5">
                        <div className="quote-opens">
                            <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="cards">
                            <p>
                            </p><p>I was impressed by the way the teacher here guides you for your IELTS examination, So I
                                was able to score 6.5 overall no less than 6.0 and was able to pursue my Master of Nursing course at UNE, Sydney.
                                Thanks to the map team as they always guided me
                                not only for the IELTS exam but also for university selection and visa process.</p>
                        </div>
                        <div className="cds-footer d-flex">
                            <div className="cds-footer-img">
                                <img src="./images/monika.jpg" alt="testimonial__image" />
                            </div>
                            <div className="cds-footer-text">
                                <h6>Monika Pokharel</h6>
                                <p>Student(Master of nursing)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cds">
                    <div className="inner-card m-lg-5">
                        <div className="quote-opens">
                            <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="cards">
                            <p>
                            </p><p>I am pleased with the services of Map Education Team. They guided me right from the selection of college that fits
                                my budget and obtaining the student visa. Their application procedure is precise and quick.
                                Now I am studying MBA/MPA at Holmes institute, Sydney because of them.</p>
                        </div>
                        <div className="cds-footer d-flex">
                            <div className="cds-footer-img">
                                <img src="./images/soniya.jpg" alt="testimonial__image" />
                            </div>
                            <div className="cds-footer-text">
                                <h6>Soniya Tamang</h6>
                                <p>Student(MBA/MPA)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Testimonials
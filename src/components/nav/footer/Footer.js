import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../img/flogo.png'
import './style.css'

function Footer() {
    return (
        <footer className="page-foot bg-ebony-clay context-dark footer ps-sm-4">
            <div className="section-40 section-md-75">
                <div className="container pt-5">
                    <div className="row justify-content-sm-center pt-3">
                        <div className="col-sm-9 col-md-11 col-xl-12">
                            <div className="row row-50">
                                <div className="col-md-6 col-lg-10 col-xl-3 wow fadeInUp" data-wow-delay="0s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'fadeInUp' }}>
                                    <div className="inset-xl-right-20" style={{ maxWidth: '510px' }}>
                                        <img src={logo} alt="logo" width='210px' height='130px' /><br /><br />
                                        <div className=" group-sm group-middle d-flex">
                                            <p className="font-italic text-white">Follow Us:</p>
                                            <ul className="list-inline list-inline-reset">
                                                <li><a href="https://www.facebook.com/mapconsultancy/?rc=p" target='__blank'><i className="fab fa-facebook-square"></i></a></li>
                                                <li><i className="fab fa-twitter-square"></i></li>
                                                <li><i className="fab fa-google-plus-square"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                    <h6 className="text-uppercase">Study Aboard <i className="fas fa-chevron-down"></i></h6>
                                    <div className="row" style={{ maxWidth: '270px' }}>
                                        <div className="col-6">
                                            <ul className="list-marked-variant-2 auc">
                                                <li><Link to='/study-australia' className='d-flex'><i className="fas fa-chevron-right"></i> <span>australia</span></Link></li>
                                                <li><Link to='/study-usa' className='d-flex'><i className="fas fa-chevron-right"></i> <span>usa</span></Link></li>
                                                <li><Link to='/study-canada' className='d-flex'><i className="fas fa-chevron-right"></i> <span>canada</span></Link></li>
                                                <li><Link to='/study-newzealand' className='d-flex'><i className="fas fa-chevron-right"></i> <span>new zealand</span></Link></li>
                                                <li><Link to='/study-japan' className='d-flex'><i className="fas fa-chevron-right"></i> <span>japan</span></Link></li>
                                                <li><Link to='/study-europe' className='d-flex'><i className="fas fa-chevron-right"></i> <span>europe</span></Link></li>
                                                <li><Link to='/study-uk' className='d-flex'><i className="fas fa-chevron-right"></i> <span>uk</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                    <h6 className="text-uppercase">Quick links</h6>
                                    <div className="row" style={{ maxWidth: '270px' }}>
                                        <div className="col-6">
                                            <ul className="list-marked-variant-2 hsa">
                                                <li ><Link to='/' className='d-flex'><i className="fas fa-chevron-right"></i> <span>Home</span></Link></li>
                                                <li ><Link to='/services' className='d-flex'><i className="fas fa-chevron-right"></i> <span>Services</span></Link></li>
                                                <li ><Link to='/about-us' className='d-flex'><i className="fas fa-chevron-right"></i> <span>About</span></Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-marked-variant-2 hsa">
                                                <li><Link to='/courses' className='d-flex'><i className="fas fa-chevron-right"></i> <span>Courses</span></Link></li>
                                                <li><Link to='/register' className='d-flex'><i className="fas fa-chevron-right"></i> <span>Register</span></Link></li>
                                                <li><Link to='/events' className='d-flex'><i className="fas fa-chevron-right"></i> <span>Events</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                                    <h6 className="text-uppercase">Contact us</h6>
                                    <address className="contact-info text-left ">
                                        <li><i className="fas fa-map-marker-alt" id='icon'></i><span>Putalisadak, Kathmandu Nepal</span></li>
                                        <li><i className="fas fa-envelope" id='icon'></i><span>info@mapeducation.com.np</span></li>
                                        <li><i className="fas fa-phone-alt" id='icon'></i><span>0977-1-443 2225</span></li>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr />
            </div>
            <div className="page-foot section section-15 bg-ebony-clay context-dark">
                <div className="container text-center wow fadeInUp" data-wow-delay="0s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'fadeInUp' }}>
                    <div className="row row-15 flex-row-md-reverse justify-content-md-between align-items-md-center">
                        <div className="col-md-12">
                            <p className="rights text-white"><span className="copyright-year">2022</span><span>&nbsp;©&nbsp;</span><span>Map Education Consultancy Pvt. Ltd.&nbsp;</span> | Powered by <a className="link-white" href="http://smartinnovation.com.np/"target='__blank' >Smart Innovation</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'
function Service() {
  return <div className='services-section'>
    <div className="service-container d-flex">
      <div className="col-md-1 ms-md-3" ></div>
      <p className='service-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
      <p className='service-text-service'>Service</p>
    </div>
    <div className="service-section">
      <div className="pt-5 pb-5">
        <div className="container pb-4">
          <h3 className="text-lg-center">Services Overview</h3>
        </div>
        <div className="service-text ms-3">
          <p className="text-center">We offer our <span style={{ color: 'orange' }}>#1</span> best service without any hesitation to meet your needs.</p>
        </div>
        <div className="service-list d-flex ms-3">
          <div className="col-md-1"></div>
          <div className="col-md-1"></div>
          <div className="col-md-1"></div>
          <div className="col-md-1"></div>
          <ul className='ms-lg-3'>
            <li><i className="fal fa-check"></i> Academic and abroad study counseling</li>
            <li><i className="fal fa-check"></i> Universities and Colleges selection and admission</li>
            <li><i className="fal fa-check"></i> Documentation and Visa processing services</li>
            <li><i className="fal fa-check"></i> Language preparation classes</li>
            <li><i className="fal fa-check"></i> Geared exposure</li>
            <li><i className="fal fa-check"></i> Financial advice</li>
            <li><i className="fal fa-check"></i> Cross-cultural awareness seminars</li>
            <li><i className="fal fa-check"></i> Scholarship arrangement for genuine students</li>
            <li><i className="fal fa-check"></i> Guidance for employment possibilities and CV preparation.</li>
            <li><i className="fal fa-check"></i> Guidance for Visitor or Tourist Visa application</li>
            <li><i className="fal fa-check"></i> Guidance for Student Dependent visa processing</li>
            <li><i className="fal fa-check"></i> Airport assistance</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="service-footer">
      <h3 className="medium" style={{ fontFamily: '"Kalam", cursive' }}>"Need more wise Guidance!</h3>
      <div className="cbh">
        <div className="carousal-button">
          <button>
           <Link to='/register' className='slink'> Apply Now</Link>
          </button>
        </div>
      </div>
    </div>
  </div>;
}

export default Service;

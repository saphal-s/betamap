import React from 'react';
import './style.css'

const Headerf = () => {
  return(
    <div className="first-nav">
      <div className="first-nav-link">
        <li><i className="fas fa-map-marker-alt" id='icon'></i><span>Putalisadak, Kathmandu Nepal</span></li>
        <li><i className="fas fa-envelope" id='icon'></i><span>info@mapeducation.com.np</span></li>
        <li><i className="far fa-clock" id='icon'></i><span>Sun – Fri: 9:00am–6:30pm. Saturday CLOSED</span></li>
        <li><i className="fas fa-phone-alt" id='icon'></i><span>0977-1-443 2225</span></li>
      </div>
      <div className="nav-social-link">
        <li><a href="https://www.facebook.com/mapconsultancy/?rc=p" target='__blank'><i className="fab fa-facebook-square"></i></a></li>
        <li><i className="fab fa-twitter-square"></i></li>
        <li><i className="fab fa-google-plus-square"></i></li>
      </div>
    </div>)
};

export default Headerf;

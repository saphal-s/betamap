import React from 'react';
import { Link } from 'react-router-dom';
import './event.css'
const Events = () => {
  return <div>
    <div className="event-head d-flex">
      <div className="col-md-1 ms-md-3" ></div>
      <p className='event-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
      <p className='event-text-event'>Courses</p>
    </div>
    <div className="event-body">
      <div className="event-body-head pt-5 pb-3">
        <h4>Your Career Starts Here</h4>
        <p className="text-gray-05">Follow up our latest events and for further enquiry please 
        <Link to='/contact-us'> &nbsp;contact us</Link></p>
      </div>
      <div className="row w-100">
        <div className="col-md-6">
          <div className="event-cards p-md-5 p-4">
            <div className="event-image">
              <img src="./images/event4.jpg" className='w-100' alt="event__img" />
            </div>
            <div className="event-content">
              <div className="event-content-heading pt-3">
                <h5>Heading</h5>
                <h6><i className="fas fa-calendar-alt"></i> 2022-11-2</h6>
              </div>
              <div className="event-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="event-cards p-md-5 p-4">
            <div className="event-image">
              <img src="./images/event5.jpg" className='w-100' alt="event__img" />
            </div>
            <div className="event-content">
              <div className="event-content-heading pt-3">
                <h5>Heading</h5>
                <h6><i className="fas fa-calendar-alt"></i> 2022-11-2</h6>
              </div>
              <div className="event-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Events;

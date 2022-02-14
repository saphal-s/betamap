import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div>
            <div className="contact-container d-flex">
                <div className="col-md-1 ms-md-3" ></div>
                <p className='contact-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
                <p className='contact-text-contact'>contact</p>
            </div>
            <div className="contact-body">
                <div className="row w-100 pb-5">
                    <div className="col-md-6">
                        <div className="col-md-8 offset-md-2">
                            <div className="find-us ps-md-4 ms-md-4 pt-5 ms-3">
                                <h4 className='pb-2'>How to Find Us</h4>
                                <p>If you have any questions, just fill in the contact form, and we will answer you shortly.
                                    If you need more information, please come visit us at our opening hours.
                                </p>
                            </div>
                            <div className="main-office  ps-md-4 ms-md-4 pt-3 ms-3">
                                <h5>Main Office</h5>
                                <p className="text-uppercase">Putalisadak, Kathmandu Nepal</p>
                                <dl className="list-terms-inline d-flex">
                                    <dt>Telephone : </dt>&nbsp;
                                    <dd><a className="link-secondary" href="#">0977-1-443 2225</a></dd>
                                </dl>
                                <dl className="list-terms-inline d-flex">
                                    <dt>E-mail : </dt>&nbsp;
                                    <dd><a className="email" href="#">info@mapeducation.com.np</a></dd>
                                </dl>
                            </div>
                            <div className="office-time  ps-md-4 ms-md-4 pt-3 ms-3">
                                <h5>Office Time</h5>
                                <dl className="list-terms-inline d-flex">
                                    <dt>Sun – Fri : </dt> &nbsp;
                                    <dd><a className="link-secondary" href="#">9:00am–6:30pm</a></dd>
                                </dl>
                                <p className="text-uppercase">Saturday CLOSED !</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 row">
                        <div className="col-md-10">
                            <div className="contact-form-head pt-5 ms-3">
                                <h3>Get in Touch</h3>
                            </div>
                            <div className="contact-form ms-3 pt-4">
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <input type="text" placeholder='Name' className='w-100' />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input type="text" placeholder='Email' className='w-100' />
                                        </div>
                                    </div>
                                    <div className="form-text-area pt-4">
                                        <div className="text-area me-3">
                                            <textarea name="message" id="" cols="30" rows="7" className='w-100'
                                                placeholder='Message'></textarea>
                                        </div>
                                    </div>
                                    <div className="contact-button p-3">
                                        <button>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
            <div className="consultancy-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.49302228981!2d85.3230657!3d27.7057596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c53ebf722c3ccd!2sMap%20Education%20Consultancy!5e0!3m2!1sen!2snp!4v1644567279078!5m2!1sen!2snp" 
                className='w-100' height={400} style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>
        </div>
    )
}

export default Contact
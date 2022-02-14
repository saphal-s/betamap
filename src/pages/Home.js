import React from 'react';
import HeroSection from '../components/herosection/HeroSection';
import Partners from './partners/Partners';
import './style.css'
import Testimonials from './testimonial/Testimonials';

function Home() {
  return <div>
    <HeroSection />
    <div className="map-welcome pt-3">
      <div className="row w-100 p-3 p-md-3">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="photo">
            <img src="./images/welcome.jpg" alt="welcome__image" className='w-100' />
          </div>
        </div>
        <div className="col-lg-6 col-md-12" >
          <div className="details-content ms-md-5">
            <div className="welcome-heading pt-md-5 mt-md-3 mt-lg-4 pb-3">
              <h3>Welcome To Map Education</h3>
            </div>
            <div className="details">
              <p>
                Map Education consultancy Pvt.Ltd. which is also recognised thereafter as
                MEC is a place for all international education and career needs. It provides opportunity to
                know more about overseas education and career facilities for students, fresh graduate and
                professional people and seeking opportunities to study and working abroad. MEC looks into
                every parameter with a single mind approach in tailoring education and career paths to
                suit individual profiles within the parameters that may prevail in each case. <br />

                We provide information regarding higher education opportunity in various countries for
                instance USA, UK, Portugal, Australia, New Zealand, Canada, Denmark, Ireland, Germany,
                Japan and many others around map. We offer a unique range of services dedicated to advising
                students and their parents at all stages of education abroad from pre-school to
                post-university. We dispel all the myths usually associated with Study Abroad and which has
                brought the concept of overseas education and career to the doorstep of every student and
                professional people to enhance
                their career further at affordable price with best solutions in reliable way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* where to apply */}

    <div className="study-selection pt-5">
      <div className="study-title">
        <h3>Where Do You Want To Study</h3>
      </div>
      <div className="selection-card row w-100 mt-4 mt-md-5">
        <div className="selection-img col-md-4">
          <img src="./images/countries/aus.jpg" alt="australia__image" className='w-100' />
          <div className="sec-con">
            <div className="select-text">
              <h5>Study In</h5>
              <h5>AUSTRALIA</h5>
            </div>
          </div>
        </div>
        <div className="selection-img col-md-4">
          <img src="./images/countries/usa.jpg" alt="usa__image" className='w-100' />
          <div className="sec-con">
            <div className="select-text">
              <h5>Study In</h5>
              <h5>USA</h5>
            </div>
          </div>
        </div>
        <div className="selection-img col-md-4">
          <img src="./images/countries/canada.jpg" alt="canada__image" className='w-100' />
          <div className="sec-con">
            <div className="select-text">
              <h5>Study In</h5>
              <h5>CANADA</h5>
            </div>
          </div>
        </div>
        <div className="selection-img col-md-4">
          <img src="./images/countries/newz.jpg" alt="newzealand__image" className='w-100' />
          <div className="sec-con">
            <div className="select-text">
              <h5>Study In</h5>
              <h5>NEW ZEALAND</h5>
            </div>
          </div>
        </div>
        <div className="selection-img col-md-4">
          <img src="./images/countries/japan.jpg" alt="japan__image" className='w-100' />
          <div className="sec-con">
            <div className="select-text">
              <h5>Study In</h5>
              <h5>JAPAN</h5>
            </div>
          </div>
        </div>
        <div className="selection-img col-md-4">
          <img src="./images/countries/europe.jpg" alt="europe__image" className='w-100' />
          <div className="sec-con">
            <div className="select-text">
              <h5>Study In</h5>
              <h5>EUROPE</h5>
            </div>
          </div>
        </div>
        <div className="selection-img col-md-4">
          <img src="./images/countries/england.jpg" alt="england__image" className='w-100' />
          <div className="sec-con">
            <div className="select-text">
              <h5>Study In</h5>
              <h5>UK</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* chairman sectiion */}

    <div className="chairman-section mt-md-5 ps-lg-5">
      <div className="row ps-lg-3" style={{ width: '100%', margin: '0px' }}>
        <div className="col-md-6 pt-5 chairman">
          <div className="chair-man-img  col-md-10 offset-md-1">
            <img src="./images/chairman.jpg" alt="chairman__img" className='w-100' />
          </div>
          <div className="chairman-text col-md-8 offset-md-2 mb-sm-3">
            <h4 className='pt-3 mt-3' style={{ fontStyle: 'italic' }}><img src="./images/icon-quote.png" alt="icon-quote" /> Message From Chairman</h4>
            <p>
              Being Managing Director, I am pleased to express my appreciation to all those who have supported and guided me to become
              a part of an entrepreneurial company. To build a unique position in the academic arena, this role has very serious
              responsibility to enlighten new
              generation towards quality education across international markets.
            </p>
            <span>-Prakash Barakoti</span>
          </div>
        </div>
        <div className="col-md-6" style={{ margin: '0px', padding: '0px' }}>
          <div className="coose-image">
            <div className="select-section p-4">
              <div className="why-us p-5">
                <div className="choose-title pt-4 pb-3">
                  <h3>Why Choose Us</h3>
                </div>
                <div className="choose-option d-flex pt-4">
                  <div className="img">
                    <img src="./images/sup.png" alt="icon" />
                  </div>
                  <div className="detail">
                    <h6> Counselling Professionals</h6>
                    <p> We work in an atmosphere of trust and camaraderie,<br />
                      by qualified counsellers.
                    </p>
                  </div>
                </div>
                <div className="choose-option d-flex pt-4">
                  <div className="img">
                    <img src="./images/icon1.png" alt="icon" />
                  </div>
                  <div className="detail">
                    <h6> Superior Service</h6>
                    <p> We are committed to providing students with <br />
                      the best value and service in Aborad Study.</p>
                  </div>
                </div>
                <div className="choose-option d-flex pt-4">
                  <div className="img">
                    <img src="./images/suc.png" alt="icon" />
                  </div>
                  <div className="detail">
                    <h6> Sucess visa Processing</h6>
                    <p> Full assistance in documentation for visa processing & <br />
                      mock training from our experienced Visa counselors.</p>
                  </div>
                </div>
                <div className="choose-option d-flex pt-4">
                  <div className="img">
                    <img src="./images/prep.png" alt="icon" />
                  </div>
                  <div className="detail">
                    <h6>Preparation Classes & Guidance</h6>
                    <p>We prepare students with IELTS/TOEFFL classes & <br />
                      quality guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*  latest news */}

    <div className="latest-news ps-lg-3 pe-lg-3 pt-5 pb-5">
      <div className="news-head text-center mt-4">
        <h3>Latest News</h3>
      </div>
      <div className="news-card ps-4 pe-3 pt-4">
        <div className="card" >
          <img src="./images/news1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">IELTS is being popular day by day, It grows to 3.5 million a year</h5>
            <p>2019-12-12 &nbsp; &nbsp;  | &nbsp;&nbsp;&nbsp; By <span>Admin</span></p>
          </div>
        </div>
        <div className="card" >
          <img src="./images/news2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Computer-delivered IELTS embraced by test takers around the world</h5>
            <p>2019-12-12 &nbsp; &nbsp;  | &nbsp;&nbsp;&nbsp; By <span>Admin</span></p>
          </div>
        </div>
        <div className="card">
          <img src="./images/news3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">IELTS successfully linked to China’s Standards of English Language Ability</h5>
            <p>2019-12-12 &nbsp; &nbsp;  | &nbsp;&nbsp;&nbsp; By <span>Admin</span></p>
          </div>
        </div>
        <div className="card">
          <img src="./images/news4.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">IELTS assists Vietnam military hospital with their peacekeeping aims</h5>
            <p>2019-12-12 &nbsp; &nbsp;  | &nbsp;&nbsp;&nbsp; By <span>Admin</span></p>
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="testimonials">
      <div className="testimonials-head text-center pt-5">
        <h3 className='pt-3'>Testimonials</h3>
      </div>
      <div className="testimonials-body pt-3">
        <Testimonials/>
      </div>
    </div>
    <div className="partners p-md-5">
      <Partners/>
    </div>
  </div>;
}

export default Home;

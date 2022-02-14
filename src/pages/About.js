import React from 'react';
import './about.css'
const About = () => {
  return <div>
    <div className="about-container d-flex">
      <div className="col-md-1 ms-md-3" ></div>
      <p className='about-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
      <p className='about-text-about'>About</p>
    </div>
    <div className="about-content">
      <div className="row w-100 ">
        <div className="col-md-6 pt-5">
          <div className="about-us-header pb-4">
            <h3>About Us</h3>
          </div>
          <div className="about-us-text ps-lg-5 col-md-10 float-end">
            <p className='atext ms-3'>Map Education consultancy Pvt.Ltd. which is trading as MEC will be recognised thereafter as MEC is
              an authorised representative of several international universities and colleges. It is registered with
              Company Register Office of government of Nepal. These days’ Nepalese students are
              inclined towards modern education system. The emergent trend towards international education demands effective counselling
              by which students are able to get correct information of international education systems. In this regard MEC support
              Nepalese students keen to study abroad.

              MEC conduct preparation classes of IELTS/ TOEFL/ GMAT/ GRE/ SAT and many more that assist students
              going abroad to get international degrees. The company also provide up to date information on rules and regulations
              of international affairs that supports students to prepare themselves the likely surrounding of the abroad countries.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-us-img col-md-10 pt-5 pb-5 ps-lg-5 pe-lg-5">
            <div className="img ms-3">
              <img src="./images/about.jpg" alt="about-us__img" className='w-100' />
            </div>
          </div>
        </div>
      </div>
      <div className="mission-objective mt-5">
        <div className="row w-100" style={{ margin: '0px' }}>
          <div className="col-md-6 mission">
            <div className="mission-content col-md-10 ps-4 ps-lg-5 float-end">
              <div className="mission-head pt-3 pt-md-5 mt-md-4">
                <h3>Our Mission</h3>
              </div>
              <div className="mission image">
                <img src="./images/mission.jpg" alt="mission__img" className='w-100' />
              </div>
              <div className="texta">
                <p>Our goal is to maximize investor return and minimize any potential loss by applying these principles
                  in a disciplined and pragmatic process. We rely on facts, not speculation to purchase high return, predictable
                  companies at significant discounts to intrinsic values.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 objective">
            <div className="objective-start pt-5">
              <div className="col-md-11 col-lg-10 ps-5 pe-5 to-front offset-md-1 objec">
                <div className="objective-head pt-5">
                  <h3>Objectives</h3>
                </div>
                <p className="tw">MEC has established certain objectives that help to fullfil mission of the company.</p>
                <ul className="list-marked">
                  <li className="text-white"><i className="fal fa-check"></i> <span>To disseminate the ideas on international educational interchanges and encourages approaching candidates towards better opportunities available.</span></li>
                  <li className="text-white"><i className="fal fa-check"></i> <span>To become a complete service provider from counseling, required language classes required documentations to visa processing and travel arrangement.</span></li>
                  <li className="text-white"><i className="fal fa-check"></i> <span>To clarify Nepalese students going abroad about multi-cultural settings before they leave.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="meet-our-team pt-5 pb-3 pb-md-5">
        <div className="team-header pb-4">
          <h3>Meet Our Team</h3>
        </div>
        <div className="team-section">
          <div className="team">
            <div className="team-card">
              <div className="img">
                <img src="./images/team/Prakash_Barakoti.jpg" alt="team__img" />
              </div>
              <div className="team-content pt-3">
                <h5>Prakash Barakoti</h5>
                <p>Chairman</p>
              </div>
            </div>
            <div className="team-card">
              <div className="img">
                <img src="./images/team/Shekhar_Khadka.jpg" alt="team__img" />
              </div>
              <div className="team-content pt-3">
                <h5>Shekhar Sen khadka</h5>
                <p>Marketing Director</p>
              </div>
            </div>
            <div className="team-card">
              <div className="img">
                <img src="./images/team/Jaya Ram_Khadka.jpg" alt="team__img" />
              </div>
              <div className="team-content pt-3">
                <h5>Jaya Ram khadka</h5>
                <p>Operation Manager/Senior Counsellor</p>
              </div>
            </div>
            <div className="team-card">
              <div className="img">
                <img src="./images/team/Kabita_Thapa.jpg" alt="team__img" />
              </div>
              <div className="team-content pt-3">
                <h5>C.A. Kabita Thapa( Sydney,Australia)</h5>
                <p>International Advisor</p>
              </div>
            </div>
            <div className="team-card">
              <div className="img">
                <img src="./images/team/Binesh_Khadka.jpg" alt="team__img" />
              </div>
              <div className="team-content pt-3">
                <h5>Er. Binesh Khadka(Loughborough,United Kingdom)</h5>
                <p>International Advisor</p>
              </div>
            </div>
            <div className="team-card">
              <div className="img">
                <img src="./images/team/Bimal_Khadka.jpg" alt="team__img" />
              </div>
              <div className="team-content pt-3">
                <h5>Bimal Khadka(Sydney,Australia)</h5>
                <p>International Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default About;

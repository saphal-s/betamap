import React from 'react'
import './style.css'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const Uk = () => {
    return (
        <div>
            <div className="uk-head pt-md-5 pb-4 pt-4 pb-md-5">
                <div className="study-container d-flex pt-md-4 pb-md-4 ms-3 ms-md-0">
                    <div className="col-md-1 ms-md-3" ></div>
                    <p className='study-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
                    <div className="d-flex">
                        <p className='sab'>Study Abroad /</p>
                        <p className='study-text-study'>UK</p>
                    </div>
                </div>
            </div>
            <div className="study-body mt-5">
                <div className="study-body-head">
                    <div className="col-md-6 col-lg-12 height-fill wow fadeInUp" data-wow-delay="0s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'fadeInUp' }}>
                        <div className="quote-default-offset ps-5">
                            <div className="quote-opens">
                                <svg version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21px" height="15px" viewBox="0 0 21 15" overflow="scroll" xmlSpace="preserve">
                                    <path d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316            c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37            C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316            c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37            C20.106,7.145,20.987,8.493,20.987,10.412z" />
                                </svg>
                            </div>
                            <div className="quote-body pt-4">
                                <p>
                                    The United Kingdom is one of the world’s leaders in many field of education which includes engineering, science, arts and designs, business and management. The UK has their own kind of reputation and legacy for scientific researches making them a home for legendary scientists and researchers. They offer a variety of education across the world homing more than 500,000 international students each year for courses ranging from English language courses to PhD and more than 90 % of the educational system in the UK are public or government funded..

                                </p>
                            </div>
                            <div className="quote-closes">
                                <svg version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21px" height="15px" viewBox="0 0 21 15" overflow="scroll" xmlSpace="preserve">
                                    <path d="M11.39,4.593c0-1.306,0.473-2.399,1.418-3.277C13.752,0.44,14.869,0,16.157,0c1.287,0,2.414,0.44,3.382,1.316            c0.966,0.879,1.448,1.931,1.448,3.154c0,1.226-0.58,2.716-1.739,4.473l-3.865,6.062h-3.737l2.384-6.37            C12.271,7.86,11.39,6.512,11.39,4.593z M0,4.593c0-1.306,0.473-2.399,1.418-3.277C2.362,0.44,3.478,0,4.768,0            c1.288,0,2.415,0.44,3.381,1.316c0.966,0.879,1.45,1.931,1.45,3.154c0,1.226-0.582,2.716-1.74,4.473l-3.865,6.062H0.259l2.382-6.37            C0.881,7.86,0,6.512,0,4.593z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="head-text pt-4 pt-md-5">
                    <h3>UK</h3>
                </div>
                <div className="study-details mb-5">
                    <Tabs tabPosition={'left'}>
                        <TabPane tab={<>UK Education Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="1">
                            <div className="actives">
                                <p /><p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}><span style={{ backgroundColor: 'white' }}>The education system in the UK is divided into four main parts, primary education, secondary education, further education and higher education. Children in the UK have to legally attend primary and secondary education which runs from about 5 years old until the student is 16 years old.</span></span></span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><a href="http://usa.britishcouncil.org/education/" target="__blank"><strong><span style={{ fontSize: '14.0pt' }}>Primary Education</span></strong></a></span></span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Primary education begins in the UK at age 5 and continues until age 11, comprising key stages one and two under the UK educational system.</span></span></span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><a href="https://www.internationalstudent.com/study_uk/education_system/secondary_education/" target='__blank'><strong><span style={{ fontSize: '14.0pt' }}>Secondary Education</span></strong></a></span></span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>From age 11 to 16, students will enter secondary school for key stages three and four and to start their move towards taking the GCSE's - learn more about secondary education in the UK and what it will involve. Primary and secondary education is mandatory in the UK; after age 16, education is optional.</span></span></span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><a href="https://www.internationalstudent.com/study_uk/education_system/further_education/" target='__blank'><strong><span style={{ fontSize: '14.0pt' }}>Further Education</span></strong></a></span></span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Once a student finishes secondary education they have the option to extend into further education to take their A-Levels, GNVQ's, BTEC's or other such qualifications. UK students planning to go to college or university must complete further education.</span></span></span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><a href="https://www.internationalstudent.com/study_uk/education_system/higher_education/" target='__blank'><strong><span style={{ fontSize: '14.0pt' }}>Higher Education</span></strong></a></span></span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Probably the most important subject area on this site, this explains more about the higher education system in the UK and how it works for international students. Most international students will enter directly into the UK higher education system, after completing their home country’s equivalent to the UK’s “further education.”</span></span></span></span></p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Education Fee Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="2">
                            <div className="actives">
                                <p /><p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}><span style={{ backgroundColor: 'white' }}>The cost of tuition in the UK will vary depending on a number of factors. Things such as the location of the school, the type of course you plan to attend, the length of the course, etc., will all have a bearing on how much it will all total to.</span></span></span></span></p>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '13.5pt' }}><span style={{ backgroundColor: 'white' }}><strong><span style={{ fontSize: '14.0pt' }}>ESL Programs</span></strong></span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontSize: '14.0pt' }}>The best advice for ESL schools is to do your research and find a school that is in a good location, offers good student support, and have low class numbers. Although London will be a popular attraction for many students, it will be more expensive. Look further and see if other parts of the UK would interest you. This will also allow you to see more of the rest of the country.</span></span></span></p>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '13.5pt' }}><span style={{ backgroundColor: 'white' }}><strong><span style={{ fontSize: '14.0pt' }}>Undergraduate Degree</span></strong></span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontSize: '14.0pt' }}>University fees for international students vary in the same way that ESL program fees vary. It is dependent on the course, the location of the university, etc... As a guideline you can expect to pay at least £10,000 year for courses. If your course is specialized, such as a clinical program for doctors, this can be as much as £38,000 per year. You will have to factor in that most university degrees last for 3 years, and 4 year sandwich programs are becoming a lot more popular.</span></span></span></p>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '13.5pt' }}><span style={{ backgroundColor: 'white' }}><strong><span style={{ fontSize: '14.0pt' }}>Post-Graduate Degree</span></strong></span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontSize: '14.0pt' }}>As a post-graduate student, the course length will generally be shorter, and class sizes will be much smaller. For this reason, fees will be higher ranging up to £14,620 for a course. If you are taking an MBA program, competition may firstly be fierce. Have your application and funds ready.</span></span></span></p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Procedure To Apply <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="3">
                            <div className="actives" >
                                <p /><p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontSize: '14.0pt' }}>The UK Government provides an opportunity to international students to study in the country but as a prerequisite, you’ll have to obtain a student visa first. The visa you need will depend on your age and the type of study you wish to pursue. Here’s an overview of the types of study visas and their application requirements:</span></span></span><br />
                                    &nbsp;</p>
                                <table align="left" cellSpacing={0} className="Table" style={{ background: 'white', borderCollapse: 'collapse', border: 'none', marginLeft: '6.75pt', marginRight: '6.75pt', width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ backgroundColor: '#156fad', height: '39.75pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif', color: '#fff' }}><span style={{ fontSize: '12.0pt' }}>Types of student visa</span></span></span></p>
                                            </td>
                                            <td style={{ backgroundColor: '#156fad', height: '39.75pt', width: '416.6pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif', color: '#fff' }}><span style={{ fontSize: '12.0pt' }}>Who can apply?</span></span></span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ backgroundColor: '#f1f1f1', width: '118.5pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '12.0pt' }}>Tier 4 (Child)</span></span></span></p>
                                            </td>
                                            <td style={{ backgroundColor: 'white', width: '416.6pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '12.0pt' }}>You can apply for the Tier 4 (Child) student visa if you’re aged between 4 and 17 and want to study in the UK. If you are between 4-15 years old you must be coming to the UK to be educated at an independent fee-paying school.</span></span></span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ backgroundColor: '#f1f1f1', width: '118.5pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '12.0pt' }}>Standard&nbsp;Visitor</span></span></span></p>
                                            </td>
                                            <td style={{ backgroundColor: 'white', width: '416.6pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '12.0pt' }}>You can apply for a child visitor visa if you are 17 years old or under and want to study in the UK for up to 6 months.&nbsp;You cannot switch to a Tier 4 child visa. If you want to apply for a Tier 4 child visa you must apply from your home country.</span></span></span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ backgroundColor: '#f1f1f1', width: '118.5pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '12.0pt' }}>Tier 4 (General)</span></span></span></p>
                                            </td>
                                            <td style={{ backgroundColor: 'white', width: '416.6pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '12.0pt' }}>You can apply for a Tier 4 (General) student visa to study in the UK if you’re 16 or over and have been offered a place on a course.</span></span></span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ backgroundColor: '#f1f1f1', width: '118.5pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '12.0pt' }}>Short Term Study</span></span></span></p>
                                            </td>
                                            <td style={{ backgroundColor: 'white', width: '416.6pt' }}>
                                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '12.0pt' }}>You can apply for a Short-term study visa if you’re doing a short course of study in the UK. This visa will allow you to come to the UK if you are 18 years or older and want to enter for up to 6 months to study a short course, up to 11 months to study an English language course or do a short&nbsp;period&nbsp;of research up to 6 months as part of a degree course of your overseas&nbsp;study.</span></span></span></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>&nbsp;</div>
                                <div style={{ marginTop: '10px' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><strong><span style={{ fontSize: '14.0pt' }}>To be eligible for a Tier 4 student visa, you must:</span></strong></span></span></span></div>
                                <ul style={{ listStyle: 'disc' }}>
                                    <li><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Have an unconditional offer of a place on a course with a licensed Tier 4 sponsor</span></span></span></span></li>
                                    <li><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Be able to speak, read, write and understand English</span></span></span></span></li>
                                    <li><span style={{ backgroundColor: 'white' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Have enough money to support yourself and pay for your course.</span></span></span></span></span></li>
                                </ul>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><strong><span style={{ fontSize: '14.0pt' }}>When applying for your Tier 4 visa, you will generally need:</span></strong></span></span></span></p>
                                <ul style={{ listStyle: 'disc' }}>
                                    <li><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>A current passport or other valid travel documentation</span></span></span></span></li>
                                    <li><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Evidence of funds to provide your living expenses for the duration of your course</span></span></span></span></li>
                                    <li><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Confirmation of Acceptance for Studies (CAS) reference number and documents used to obtain CAS</span></span></span></span></li>
                                    <li><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Passport-sized colour photograph</span></span></span></span></li>
                                    <li><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Tuberculosis screening (if required)</span></span></span></span></li>
                                    <li><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Assessment documentation</span></span></span></span></li>
                                    <li><span style={{ backgroundColor: 'white' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Academic Technology Approval Scheme (ATAS) clearance certificate (if required)</span></span></span></span></span></li>
                                </ul><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Why Study Here? <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="4">
                            <div className="actives">
                                <p /><p><span style={{ fontSize: '14.0pt' }}>The UK has become one of the top destinations to study around the world. With traditions of excellence dating back hundreds of years, high class institutions on every corner, and much more flexibility than many other countries, the United Kingdom has much to offer international students that other English-speaking countries cannot.</span></p>
                                <br />
                                <ul style={{ listStyle: 'disc' }}>
                                    <li><span style={{ fontSize: '14.0pt' }}>Growing Destination</span></li>
                                    <li><span style={{ fontSize: '14.0pt' }}>Worldwide Recognition</span></li>
                                    <li><span style={{ fontSize: '14.0pt' }}>Lower Education Cost</span></li>
                                    <li><span style={{ fontSize: '14.0pt' }}>Higher Work Opportunities</span></li>
                                    <li><span style={{ fontSize: '14.0pt' }}>Scholarship/Loan Available</span></li>
                                    <li><span style={{ fontSize: '14.0pt' }}>Gateway to Europe</span></li>
                                    <li><span style={{ fontSize: '14.0pt' }}>Multicultural Nation</span></li>
                                </ul><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Courses Offered <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="5">
                            <div className="actives" id="tabs-2-5">
                                <p /><p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Students can choose their higher education from a wide range of universities, academic areas and their preferred subjects. Some of the most sought after courses in the United Kingdom by Nepalese students are:</span></span></span></span></p>
                                <ul style={{ listStyle: 'disc' }}>
                                    <li><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Accounting &amp; Finance</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Art &amp; Design</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Architecture</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Business &amp; Management Studies</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Computer Science</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Civil Engineering</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Economics</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Education</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Hospitality, Tourism &amp; Event Management</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Law</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Marketing</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Mechanical &amp; Electrical Engineering</span></span></span></span></li>
                                    <li value={5}><span style={{ fontSize: '11pt' }}><span style={{ backgroundColor: 'white' }}><span style={{ fontFamily: 'Calibri,sans-serif' }}><span style={{ fontSize: '14.0pt' }}>Health Science and many more….</span></span></span></span></li>
                                </ul><p />
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Uk
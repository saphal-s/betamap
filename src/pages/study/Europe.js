import React from 'react'
import './style.css'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const Europe = () => {
    return (
        <div>
            <div className="europe-head pt-md-5 pb-4 pt-4 pb-md-5">
                <div className="study-container d-flex pt-md-4 pb-md-4 ms-3 ms-md-0">
                    <div className="col-md-1 ms-md-3" ></div>
                    <p className='study-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
                    <div className="d-flex">
                        <p className='sab'>Study Abroad /</p>
                        <p className='study-text-study'>EUROPE</p>
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
                                    DID YOU KNOW EUROPEAN INVEST IN THEIR HIGHER EDUCATION SYSTEMS TO HELP MAKE EDUCATION AFFORDABLE FOR STUDENTS, WHILST MAINTAINING HIGH-QUALITY STANDARDS?.

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
                    <h3>Europe</h3>
                </div>
                <div className="study-details mb-5">
                    <Tabs tabPosition={'left'}>
                        <TabPane tab={<>EUROPE Education Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="1">
                            <div className="actives">
                                <p /><p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The Study in Europe website covers higher education in 33 European Countries.</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Each country has its own individual higher education system – but all are part of the European Higher Education Area (EHEA).</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The EHEA system helps ensure that higher education systems across Europe are compatible - and that students, researchers and academics in Europe can collaborate and study or work abroad more easily.</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Qualifications across Europe are comparable through the European Qualifications Framework</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Most study programmes involve lectures and classes, with assessment through essays, exams, and coursework.</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Many also involve a period of time working in industry or working on industry-related projects.</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The aim of a doctorate is to break new ground – to produce new information and ideas or to conduct original research to help advance your subject.</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> You may be expected to produce papers throughout your programme, and to produce a thesis for evaluation<span style={{ color: '#0782c1' }}>.</span></p>
                                <p>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Education Fee Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="2">
                            <div className="actives">
                                <p /><p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Tuition fees in Europe are generally very low compared to other continents, while many European universities are placed at the top of the international university rankings</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Of course, this differs per country, and it also depends on if you come from Europe (the European Economic Area) or not.</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Average tuition fees for Bachelor's degrees in Europe are:</p>
                                <ul>
                                    <li>4.500 EUR/year for EU/EEA-students;</li>
                                    <li>8.600 EUR/year for students outside EU/EEA.</li>
                                </ul>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Average tuition fees for Master's degrees in Europe:</p>
                                <ul>
                                    <li>5.100 EUR/year for EU/EEA-students;</li>
                                    <li>10.170 EUR/year for students outside EU/EEA.</li>
                                </ul>
                                <p>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Procedure To Apply <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="3">
                            <div className="actives">
                                <p /><h2><strong><span style={{ fontSize: '16px' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />Documents you need for your university application</span></strong></h2>
                                <p><span style={{ fontSize: '11pt' }}><span style={{ fontSize: '12.0pt' }}>1. Cover letter</span></span></p>
                                <p><span style={{ fontSize: '11pt' }}><span style={{ fontSize: '12.0pt' }}>2. Curriculum vitae (CV, or resume)</span></span></p>
                                <p><span style={{ fontSize: '11pt' }}><span style={{ fontSize: '12.0pt' }}>3. Previous degree certificates or grade transcripts</span></span></p>
                                <p><span style={{ fontSize: '11pt' }}><span style={{ fontSize: '12.0pt' }}>4. Proof of English proficiency (usually IELTS or TOEFL)</span></span></p>
                                <p><span style={{ fontSize: '11pt' }}><span style={{ fontSize: '12.0pt' }}>5. Copy of your passport or national ID</span></span></p>
                                <p><span style={{ fontSize: '11pt' }}><span style={{ fontSize: '12.0pt' }}>6. Academic reference letters (sometimes)</span></span></p>
                                <p><span style={{ fontSize: '11pt' }}><span style={{ fontSize: '12.0pt' }}>7. Documentation for programme-specific requirements</span></span></p>
                                <p><span style={{ fontSize: '16px' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> <strong>PROCESS FOR APPLICATION</strong></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>1. Choose a university</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>2. Check the admission requirements&nbsp;</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>3. Get your finances in order&nbsp;</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>4. Apply!</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>5. Take out health insurance</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>6. Get a German student visa</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>7.&nbsp;Find accommodation</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>8. Enroll</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}>&nbsp;</p>
                                <h2>&nbsp;</h2><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Why Study Here? <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="4">
                            <div className="actives">
                                <p /><h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}>1. Study in Europe: the boost for your career</span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>International experience has become more and more important in recent years. Large and small companies alike look for employees who have left their “comfort zone”. By studying abroad in Europe, you set the course for your career success. Many European countries also make an effort to convince foreign graduates to stay after university. That means if you decide to study in Europe, the chances are good that you will get a job offer and can stay for the longer term.</span></p>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}>2. Europe offers world-class education and research</span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>Many of the world’s best universities are located in Europe. Cross-border cooperations within Europe have shaped a strong international academic community that conducts cutting-edge research.</span></p>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}>3. A wide range of education options</span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>There are thousands of universities in Europe, offering tens of thousands of study programmes in English. You can find programmes in any academic discipline from Arts to Zoology; small, intimate universities or large international research centers; cutting edge academic research programmes or practice-oriented taught education. There is something for everybody.</span></p>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}>4. Tuition fees are low</span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>Compared to countries like the US, Canada or Australia, the tuition fees at most public universities in Europe are very low. In some European countries, there aren’t even any tuition fees - studying at university is free of charge! There are also lots of scholarship opportunities and other options for financial support during your studies.</span></p>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}>5. It’s easy to travel and discover the whole continent</span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>When you study in Europe, you should use the chance to see more countries than just one. Thanks to a wealth of cheap flight, train and bus connections, and relatively short travel times, that is even possible on a limited student budget and with tight semester schedules.</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}>6. You can study in English</span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}>Not only are there several thousand Bachelors and Masters in English that you can choose from. In most European countries, the proficiency in English is generally very high. That means even if you struggle to learn the basics in Polish, Portuguese or Swedish, you can always get by with English in everyday situations.</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Courses Offered <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="5">
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Europe
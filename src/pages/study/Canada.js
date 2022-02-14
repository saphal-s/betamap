import React from 'react'
import './style.css'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const Canada = () => {
    return (
        <div>
            <div className="canada-head pt-md-5 pb-4 pt-4 pb-md-5">
                <div className="study-container d-flex pt-md-4 pb-md-4">
                    <div className="col-md-1 ms-md-3" ></div>
                    <p className='study-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
                    <div className="d-flex">
                        <p className='sab'>Study Abroad /</p>
                        <p className='study-text-study'>Canada</p>
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
                                    DID YOU KNOW CANADA IS THE WORLD'S SECOND LARGEST COUNTRY (by area) AND HAS STABLE PARLIAMENTARY DEMOCRACY?.
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
                    <h3>Canada</h3>
                </div>
                <div className="study-details mb-5">
                    <Tabs tabPosition={'left'}>
                        <TabPane tab={<>CANADA Education Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="1">
                            <div className="actives">
                                <p />
                                <p style={{ textAlign: 'justify' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Education in Canada is under the complete jurisdiction of the provinces and territories (States) and as such, there is no Federal(Central) education system in Canada.</p>
                                <p style={{ textAlign: 'justify' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> In keeping with the national commitment to education, public education in Canada is free up to and including secondary school (12th Std), in all the provinces.</p>
                                <p style={{ textAlign: 'justify' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> At the post-secondary level, institutions are divided into community colleges and universities.</p>
                                <p style={{ textAlign: 'justify' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> A significant number of university graduates attend college upon completion of their degree in order to acquire vocational skills for employment.</p>
                                <h4><input defaultChecked="checked" type="checkbox" className="checkbox-custom" /><span className="checkbox-custom-dummy" />Types of Certification</h4>
                                <ul>
                                    <li><strong>Certificate</strong> : Is a qualification awarded upon successful completion of a programme which is usually one year in length.</li>
                                    <li><strong>Diploma</strong> : Is a qualification awarded on the basis of one or two year's of successful study.</li>
                                </ul>
                                <ul>
                                    <li><strong>Bachelors Degrees</strong> : Are awarded by Universities/ University Colleges/ Community Colleges after four years of full-time study and lead to graduate level studies.</li>
                                </ul>
                                <ul>
                                    <li><strong>Post Graduate Diplomas / Certificates</strong> : It lead to a Masters Degree. These programs have work terms which provide full-time opportunities to gain practical experience along with theoretical studies. A typical co-op term lasts 12 to 17 weeks. The prerequisites to participate in these programs is a Bachelors Degree of 3 or 4 years duration.</li>
                                </ul>
                                <ul>
                                    <li><strong>Masters Degree :</strong> Is an option for Bachelors Degree. Graduates who have an interest in further learning and research, and for those who want to broaden their career possibilities. It is for 2 yrs duration and can be pursued after a 4 yrs Bachelors or a 3yrs Bachelors &amp; a 1year Post Graduate Diploma from Canada.</li>
                                </ul>
                                <ul>
                                    <li><strong>Doctorate or PhD </strong>: Is a degree ranking above the Masters Degree and generally requires four to seven years to complete.</li>
                                </ul>
                                <p><u><strong><input defaultChecked="checked" type="checkbox" className="checkbox-custom" /><span className="checkbox-custom-dummy" /> EARNING WHILE STUDYING IN CANADA</strong></u></p>
                                <p style={{ textAlign: 'justify' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Full-time students registered in a degree or diploma-granting course are allowed to work on the campus of the institution at which they are registered without the need for an employment authorization.</p>
                                <p style={{ textAlign: 'justify' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> This includes on-campus employment for graduate, teaching or research assistants.</p>
                                <p style={{ textAlign: 'justify' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Spouses of full-time students are eligible for open or open/restricted employment authorizations, depending on medical requirements having been met.</p>
                                <p style={{ textAlign: 'justify' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Students whose intended employment forms an integral part of their course of study such as undergraduate co-op programs, some programs offered by career colleges or language schools and some high school programs.</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Education Fee Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="2">
                            <div className="actives">
                                <p /><h2>&nbsp;</h2>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Tuition fees in Canada vary by institution and province, but the cost is more affordable when compared to other countries around the world.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The average price for international undergraduate&nbsp;students is around CAD$25,180 (USD$20,540) per year.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The average price for international postgraduate&nbsp;students is around CAD$42,000 (US$31,243) per year.&nbsp;</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Institutions which do not grant degrees to students are usually cheaper than universities. &nbsp;</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> For more specialized fields of study, tuition fees in Canada range from CAD$12,183&nbsp;(US$9,143)&nbsp;for nursing graduate programs or CAD$13,962&nbsp;(US$10,478) for Education degree, to CAD$53,105 (US$39,855) for an undergraduate&nbsp;dentistry&nbsp;degree.&nbsp;</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Scholarships are available for both undergraduate and graduate studies and they can be helpful covering tuition fees in Canada, and some of them also cover living expenses. Start early to search for scholarships or grants, it takes time to gather all the documents and prepare an outstanding application.&nbsp;</p>
                                <p className='mt-4'>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Procedure To Apply <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="3">
                            <div className="actives">
                                <p /><p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />To study in Canada, you will need to obtain a Canadian study permit, which serves as a student visa for the duration of your stay.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />You do not need a Canadian study permit if your course or program lasts six months or less. Applying for a study permit costs CA$150 (~US$120).</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />Fees to apply to universities in Canada will vary depending on the university and your country of origin. For example, the University of&nbsp; British Columbia charges undergraduate Canadian students (and permanent residents, refugees and diplomats) CA$68 (~US$55) and international students CA$114 (~US$90).</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />You may be able to get this fee waived if you are an international student from a developing country.</p>
                                <p className='mt-4'>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Why Study Here? <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="4">
                            <div className="actives">
                                <p /><p>WHY STUDY IN CANADA?</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The cost of living and tuition fees for international students are generally lower than in other countries such as the United States and the United Kingdom.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> A Canadian degree, diploma or certificate is globally recognized as being equivalent to those obtained from the United States or Commonwealth countries.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The United Nations consistently ranks Canada as one of the best places in the world to live. As an international student in Canada, you’ll enjoy all of the same freedoms which protect Canadians – respect for human rights, equality, and a stable and peaceful society.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Since research is one of the key components of a Canadian post-secondary education, you’ll have ample opportunity to become a part of this vibrant aspect of education.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> International students with Canadian credentials and Canadian work experience may apply for permanent residency without having to leave Canada Ranked as one of the best places in the world to live by the United Nations</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Possibility of Permanent Residency after study</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Post Study Work Permit for up to 3 years after study</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> A peaceful, politically stable and safe country</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Lower tuition fees than many comparable programs in the US and UK</p><p />
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

export default Canada
import React from 'react'
import './style.css'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const Usa = () => {
    return (
        <div>
            <div className="usa-head pt-md-5 pb-4 pt-4 pb-md-5">
                <div className="study-container d-flex pt-md-4 pb-md-4">
                    <div className="col-md-1 ms-md-3" ></div>
                    <p className='study-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
                    <div className="d-flex">
                        <p className='sab'>Study Abroad /</p>
                        <p className='study-text-study'>Usa</p>
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
                                    DID YOU KNOW OVER THE PAST FEW YEARS, THE U.S. HAS DOMINATED THE GLOBE IN BEING THE MOST POPULAR UNIVERSITY DESTINATION FOR STUDENTS FROM ALL OVER THE WORLD?.
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
                    <h3>Usa</h3>
                </div>
                <div className="study-details mb-5">
                    <Tabs tabPosition={'left'}>
                        <TabPane tab={<>USA Education Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="1">
                            <div className="actives">
                                <p /><p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>In the USA, compulsory education varies from state to state, but most children must attend school between ages 6 and 18. The education system is divided into primary, secondary and higher education.</span></span></p>
                                <h4 className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '11.0pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /><strong>Ages 5-11</strong></span></span></span></h4>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>Children attend elementary school (kindergarten to grade 5).</span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '11.0pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> <strong>Ages 11-14</strong></span></span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>Children attend middle school (grades 6-8).</span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '11.0pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> <strong>Ages 14-18</strong></span></span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>Students attend high school (grades 9–12).</span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>They &nbsp;complete</span> coursework in English, Math, Science, Social Studies and Physical Education, and can choose optional courses from Arts, Foreign Languages and other departments.</span></p>
                                <h4 className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '11.0pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /><strong>Ages 18+</strong></span></span></span></h4>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>Students can choose to study a <strong>bachelor’s</strong> (or “undergraduate”) degree at a college or university.</span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>US bachelor’s degrees usually last 4 years. Students take classes in a variety of departments before officially declaring a “major” (primary subject of focus) by the end of their 2nd year. They develop critical thinking, writing and presentation skills, and build on other areas to prepare them for their careers.</span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>Studying an Undergraduate Program or Bachelor's Degree Completion Program can prepare you for progression to an undergraduate degree in the USA.</span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>After a bachelor’s degree, some students continue on to a <strong>master’s</strong> degree (also called a “graduate” degree).</span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>An American master’s degree usually lasts 2–3 years, but fast-track 1 year programs are available. Graduate-level education lets students study a subject in greater depth, and can either be academic or more career-focused.</span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '11.0pt' }}>Studying a Graduate Pathway Program can prepare you for progression to a postgraduate degree in the USA.</span></span></p>
                                <p className='mt-3' style={{ marginLeft: '0in', marginRight: '0in' }}>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Education Fee Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="2">
                            <div className="actives">
                                <p /><p><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> US Universities fall under two major categories: public (state supported), and private (independent) institutions. <input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> International students’ tuition expenses at state schools are based on nonresident costs, which are still usually less expensive than those of private universities. </span></span></span></p>
                                <p className='mt-4' ><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> It’s important to note that the cost of a program in a US school does not necessarily affect its quality. A brief idea can be got from the following table:</span></span></span></p>
                                <p>&nbsp;</p>
                                <table align="center" style={{ border: 'undefined', width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}><strong>University Type</strong></span></span></span></td>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}><strong>Average Tuition Fees<br />
                                                (annual in U.S. Dollars)</strong></span></span></span></td>
                                        </tr>
                                        <tr>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}>Private Institutions (High Cost)</span></span></span></td>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}>$ 35,000</span></span></span></td>
                                        </tr>
                                        <tr>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'Verdana' }}>Private Institutions (Low Cost)</span></span></td>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}>$ 18,000</span></span></span></td>
                                        </tr>
                                        <tr>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}>State Institutions (High Cost)</span></span></span></td>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}>$ 25,000</span></span></span></td>
                                        </tr>
                                        <tr>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}>State Institutions (Low Cost)</span></span></span></td>
                                            <td style={{ verticalAlign: 'top' }}><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}>$ 12,000</span></span></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><span style={{ fontSize: 'small' }}><span style={{ fontFamily: 'MS Sans Serif' }}><span style={{ color: '#000000' }}>* The tuition fee is different for different universities and varies widely with courses. It can vary from as low as $ 10000 a year for state universities to as much as $ 35000 per annum for some private universities.</span></span></span></p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Procedure To Apply <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="3">
                            <div className="actives">
                                <p /><h4>How to Apply</h4>
                                <h5 className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Step 1</h5>
                                <p>Complete the Nonimmigrant Visa Electronic Application(DS-160) form</p>
                                <h5 className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Step 2</h5>
                                <p>Pay the visa application fee.</p>
                                <h5 className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Step 3</h5>
                                <p>Schedule your appointment . You will need the following information in order to schedule your appointment:</p>
                                <ul>
                                    <li>Your passport number</li>
                                    <li>The receipt number from your Visa Fee receipt.</li>
                                    <li>The ten (10) digit barcode number from your DS-160 confirmation page</li>
                                </ul>
                                <h5 className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Step 4</h5>
                                <p>Visit the U.S Embassy on the date and time of your visa interview. You must bring a printed copy of your appointment letter, your DS-160 confirmation page, one photograph taken within the last six months, your current and all old passports, and the original visa fee payment receipt. Applications without all of these items will not be accepted.</p>
                                <h4 className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />Supporting Documents</h4>
                                <p>1. Supporting documents are only one of many factors a consular officer will consider in your interview. Consular officers look at each application individually and consider professional, social, cultural and other factors during adjudication. Consular officers may look at your specific intentions, family situation, and your long-range plans and prospects within your country of residence. Each case is examined individually and is accorded every consideration under the law.</p>
                                <p><strong><span style={{ color: 'red' }}>**Caution: </span>Do not</strong> present false documents. Fraud or misrepresentation can result in permanent visa ineligibility. If confidentiality is a concern, you should bring your documents to the U.S. Embassy or Consulate in a sealed envelope. The U.S. Embassy or Consulate will not make your information available to anyone and will respect the confidentiality of your information.</p>
                                <p>2. You should bring the following documents to your interview:</p>
                                <ul>
                                    <li>Documents demonstrating strong financial, social, and family ties to your home country that will compel you to return to your country after your program of study in the United States ends.</li>
                                    <li>Financial and any other documents you believe will support your application and which give credible evidence that you have enough readily-available funds to meet all expenses for the first year of study and that you have access to funds sufficient to cover all expenses while you remain in the United States. M-1 applicants must demonstrate the ability to pay all tuition and living costs for the entire period of their intended stay.</li>
                                    <li>Photocopies of bank statements will not be accepted unless you can also show original copies of bank statements or original bank books.</li>
                                    <li>If you are financially sponsored by another person, bring proof of your relationship to the sponsor (such as your birth certificate), the sponsor's most recent original tax forms and the sponsor's bankbooks and/or fixed deposit certificates.</li>
                                    <li>Academic documents that show scholastic preparation. Useful documents include school transcripts (original copies are preferred) with grades, public examination certificates (A-levels, etc.), standardized test scores (SAT, TOEFL, etc.), and diplomas.</li>
                                </ul><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Why Study Here? <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="4">
                            <div className="actives">
                                <p /><p className='mt-4'>WHY STUDY IN USA?</p>
                                <p className='mt-4'>* Ranked No. 1 Education Destination in the World.<br />
                                    * Academic excellence. 80% of the World research is happening in USA.<br />
                                    * Excellent Employment Chances - part-time and full-time.<br />
                                    * Employment opportunities at all levels.<br />
                                    * Employment opportunities at all levels.<br />
                                    * USA is many years ahead of other countries in the field of Education, Technology &amp; Research.<br />
                                    * Flexibility in Education System.<br />
                                    * Wide range of Educational Programs – more than 2,000!<br />
                                    * Thousands of universities and programs to choose from – 4,500+ colleges and universities.<br />
                                    * Diverse culture is the backbone of USA. Hence, invites students from all over the globe with open arms.<br />
                                    * Scholarships &amp; Assistantships.<br />
                                    * Co-op. (Paid and with-credits internship) Programs.<br />
                                    * Opportunity to spend one to three years in the US getting valuable and relevant work experience.<br />
                                    * Support services (campus orientation, assistance in resume preparation, campus placements etc.).</p><p />
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

export default Usa
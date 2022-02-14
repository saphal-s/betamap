import React from 'react'
import './style.css'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const Australia = () => {
    return (
        <div>
            <div className="australia-head pt-md-5 pb-4 pt-4 pb-md-5">
                <div className="study-container d-flex pt-md-4 pb-md-4">
                    <div className="col-md-1 ms-md-3" ></div>
                    <p className='study-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
                    <div className="d-flex">
                        <p className='sab'>Study Abroad /</p>
                        <p className='study-text-study'>Australia</p>
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
                                    DID YOU KNOW AUSTRALIA HAS THE THIRD HIGHEST NUMBER OF INTERNATIONAL STUDENTS IN THE WORLD?.
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
                    <h3>Australia</h3>
                </div>
                <div className="study-details mb-5">
                    <Tabs tabPosition={'left'}>
                        <TabPane tab={<>AUSTRALIA Education Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="1">
                            <div className="actives" >
                                <p /><p><span style={{ fontSize: '12pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Australian education qualifications are regulated through "The Australian Qualifications Framework " (AQF), which links Australian schools into one national system. </span></p>
                                <p className='pt-3'><span style={{ fontSize: '12pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> This allows students in Australia to easily move from one education level to the next within a nationally-accredited system. </span></p>
                                <p className='pt-3'><span style={{ fontSize: '12pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The Australian education system has three main sectors of higher education: universities, vocational institutions, and English language institutions. </span></p>
                                <p className='pt-3'><span style={{ fontSize: '12pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The week before the start of the semester, higher education schools in Australia usually arrange an Orientation Week to help international students get to know the campus and student life in Australia. </span></p>
                                <p className='pt-3'><span style={{ fontSize: '12pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Different student organizations provide information about their activities and recruit new members. </span></p>
                                <p className='pt-3'><span style={{ fontSize: '12pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Orientation Week also includes social activities – the perfect opportunity to make new friends.&nbsp;</span></p>
                                <p className='pt-3'><span style={{ fontSize: '12pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Australian educational institutions have nurtured the needs of international students for many years; most have departments with competent staff whose job it is to help international students specifically coming to study in Australia.</span></p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Education Fee Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="2">
                            <div className="actives">
                                <p /><p className='pt-1'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> The costs of studying in Australia depend on the institution and the level of study you choose.</p>
                                <p className='pt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> As an international student, your tuition fees are payable before you study.</p>
                                <p className='pt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> You can use the Course Search on this website to find courses and see details such as their tuition fees.</p>
                                <p className='pt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> There may be additional costs for your course, including course materials and access to institutional facilities.</p>
                                <p className='pt-3'><input defaultChecked="checked" type="checkbox" className="checkbox-custom" /><span className="checkbox-custom-dummy" /> The list below gives you an indication of the range of course costs for different types of qualifications.</p>
                                <p className='pt-3'><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> School</strong> - $7,800 to $30,000</p>
                                <p className='pt-3'><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> English language studies</strong> - Around $300 per week depending on course length</p>
                                <p className='pt-3'><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Vocational Education and Training</strong> (Certificates I to IV, Diploma and Advanced Diploma) - $4,000 to $22,000</p>
                                <p className='pt-3'><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Undergraduate Bachelor Degree</strong> - $15,000 to $33,000*</p>
                                <p className='pt-3'><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Postgraduate Masters Degree</strong> - $20,000 to $37,000*</p>
                                <p className='pt-3'><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Doctoral Degree</strong> - $14,000 to $37,000*</p>
                                <p className='pt-3'><strong>* Note:</strong> This does not include high-value courses such as veterinary and medical. Please visit institution websites directly to see costs for these courses.</p>
                                <p className='pt-3'>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Procedure To Apply <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="3">
                            <div className="actives">
                                <p /><p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> To study in Australia you'll need to apply for both admission to an institution and also for a student visa from the Australian Government.</p>
                                <p className='mt-3'><input defaultChecked="checked" type="checkbox" className="checkbox-custom" /><span className="checkbox-custom-dummy" />There are a number of steps you must go through including:</p>
                                <p className='mt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Deciding on your preferred course and institution.</p>
                                <p className='mt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Submitting your application to the institution.</p>
                                <p className='mt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Receiving and accepting a Letter of Offer.</p>
                                <p className='mt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Receiving your electronic Confirmation of Enrolment (eCoE).</p>
                                <p className='mt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Applying for your student visa.</p>
                                <p className='mt-3'>There is a range of entry requirements that you will need to meet both for you institution application and your visa application. This can include:</p>
                                <p className='mt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Academic requirements.</p>
                                <p className='mt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> English language requirements.</p>
                                <p className='mt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Evidence of funds to support your study.</p>
                                <p className='mt-3'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Overseas student health cover.</p>
                                <p className='mt-3'>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Why Study Here? <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="4">
                            <div className="actives">
                                <p /><p>When you’re researching overseas study, choosing a country is likely one of your first considerations. So why is Australia such a great option? Read on as we share ten reasons to study ‘down under’.</p>
                                <p className='mt-3'><strong>1. Approach</strong></p>
                                <p className='mt-3'>The approach of the Australian Universities to technical and vocational education is being recognised as one of the best in the world. Keeping this in mind, we at ’The Chopras’ are able to guide our students accordingly, and get the confusion in their heads cleared. We are able to assist them in their applications so that there are less chances of these being rejected.</p>
                                <p className='mt-3'><strong>2. Reputation</strong></p>
                                <p className='mt-3'>The top universities have the reputation of being able to adopt new technologies in the world faster than other countries.&nbsp; With the guidance of thorough professionals in all our offices, we ensure a caring atmosphere for both the parents and the students.</p>
                                <p className='mt-3'><strong>3. Recognition</strong></p>
                                <p className='mt-3'>The qualification in Australia is recognised globally so students do not face any hassles getting into the job front. ’The Chopras’ make sure that the students, who are interested in travelling to Australia are assisted fully, as we also have the different representatives of these universities visiting our offices and we can get you an appointment, if notified.</p>
                                <p className='mt-3'><strong>4. Assurances</strong></p>
                                <p className='mt-3'><strong>Study in Australia scholarships</strong> makes it easier for the students to choose it as their destination for further studies and as the students and their parents are given a service which is unparallel, besides the financial protection, we do suggest Australia to many of our students, that is, if it matches the course they are interested in.</p>
                                <p className='mt-3'><strong>5. Value for money</strong></p>
                                <p className='mt-3'>The cost of living here is more suitable as compared to other places due to the conversion rates. Keeping this factor in mind, we also have the visa formalities for Australia more easy and convenient; obviously it becomes a preferred choice. Since ’The Chopras’ help the student with the visa formalities too, it is like the icing on the cake.</p>
                                <p className='mt-3'><strong>6. Opportunities</strong></p>
                                <p className='mt-3'>Going for higher education, the aim of all students is to find a suitable job where there is ample growth. Australia does not keep any preferences in the job sector, and offers jobs in most of the sectors, be it aeronautics, agriculture and actuaries. The job permit is also easier here. We believe in guiding students not only with the courses but also planning their careers.</p>
                                <p className='mt-3'><strong>7. Scholarships</strong></p>
                                <p className='mt-3'>Study in Australia Scholarships are anytime welcome as they ease the burden on your finances, and keeping this factor in mind, ’The Chopras’ advises you accordingly and help you to get them. Australia does offer more scholarship opportunities as compared to other places</p>
                                <p className='mt-3'><strong>8. Research</strong></p>
                                <p className='mt-3'>Professionals who are eligible are offered enough opportunities to research in Australia. The selection is based on merit and a proven record of the excellence in academics, is absolutely essential Contacting ’The Chopras’ for further studies will be a great help, as we have our professionals who know of all the benefits of your option to choose Australia.</p>
                                <p className='mt-3'><strong>9. Language</strong></p>
                                <p className='mt-3'>English being the primary language here, it gets easier for the students to grasp and pursue their studies, understanding it with ease.</p>
                                <p className='mt-3'><strong>10. Society</strong></p>
                                <p className='mt-3'>Wanting to study abroad, you need to look into the set up so that you are comfortable and at ease. With Australia being a safe, friendly and multicultural society you can be in your comfort zone and make best of the opportunities offered.</p><p />
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

export default Australia
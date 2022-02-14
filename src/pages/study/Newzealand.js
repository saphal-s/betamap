import React from 'react'
import './style.css'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const Newzealand = () => {
    return (
        <div>
            <div className="newz-head pt-md-5 pb-4 pt-4 pb-md-5">
                <div className="study-container d-flex pt-md-4 pb-md-4 ms-3 ms-md-0">
                    <div className="col-md-1 ms-md-3" ></div>
                    <p className='study-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
                    <div className="d-flex">
                        <p className='sab'>Study Abroad /</p>
                        <p className='study-text-study'>New Zealand</p>
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
                                    DID YOU KNOW NEW ZEALAND OFFERS A HIGH-QUALITY LEARNING EXPERIENCE THROUGH IT'S 8 INTERNATIONALLY WELL-RECOGNIZED UNIVERSITIES?.
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
                    <h3>New Zealand</h3>
                </div>
                <div className="study-details mb-5">
                    <Tabs tabPosition={'left'}>
                        <TabPane tab={<>NEW ZEALAND Education Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="1">
                            <div className="actives">
                                <p /><p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> New Zealand has a reputation as a provider of quality education offering excellent study opportunities and support services in a safe learning environment.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> It is fast becoming a popular choice for international students seeking high-quality education away from home.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Academic, profession and vocation studies are offered at universities, polytechnics, colleges of education, secondary schools and private training establishments.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />A number of English Language Institutes and private English Language Schools are also throughout the country.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />New Zealand's national education system is based on the British system. Research indicates New Zealand students have ranked amongst the top in the world academically.</p>
                                <p className='mt-4'><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />All New Zealand's international student education providers are required to be signatories to the Code of Practice for the Pastoral Care of International Students. The code is a document introduced in 2002 designed to ensure all signatories provide a high standard of pastoral care to meet the needs of international students studying in New Zealand.</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Education Fee Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="2">
                            <div className="actives">
                                <p /><h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '10.0pt' }}><span style={{ color: '#1f3763' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Bachelors</span></span></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '10.0pt' }}><span style={{ color: '#1f3763' }}>Approximate tuition fees: $23,260 - $32,455</span></span></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '10.0pt' }}><span style={{ color: '#1f3763' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Masters</span></span></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '10.0pt' }}>Approximate tuition fees: $27,970 - $35,465 (120pts); $37,440 - $51,000 (180pts)</span></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '10.0pt' }}><span style={{ color: '#1f3763' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Graduate Diplomas and Certificates</span></span></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '10.0pt' }}>Approximate tuition fees: $23,260 - $32,455</span></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '10.0pt' }}><span style={{ color: '#1f3763' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Postgraduate Diplomas and Certificates</span></span></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '10.0pt' }}>Approximate tuition fees: $27,970 - $36,525</span></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '10.0pt' }}><span style={{ color: '#1f3763' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Higher Research Degrees (PhD, Research Thesis, MPhil, EdD)</span></span></span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '10.0pt' }}>Approximate costs: $6,018 - $6,748 (domestic entitlement) or $29,535 - $38,840</span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '10.0pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> How your fees are calculated</span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ fontSize: '10.0pt' }}>Your tuition fees are calculated on a per-paper basis. You will enrol in a number of papers during each year of study. These can be found in the Catalogue of Papres. Each paper has a set fee based on the degree area and the level of the paper. You only pay for the papers which you choose to take. If you know the papers that you wish to study, you can use the Fees Calculator to work out the total cost for your programme of study.</span></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}>&nbsp;</p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Procedure To Apply <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="3">
                            <div className="actives" id="tabs-2-3">
                                <p /><h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><strong><span style={{ fontSize: '11.0pt' }}><span style={{ color: '#1f3763' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Application Process</span></span></strong></span></span></h4>
                                <p><span style={{ fontSize: '11pt' }}>1. Fully completed Student Visa/Permit application form</span></p>
                                <p><span style={{ fontSize: '11pt' }}>2. A valid passport</span></p>
                                <p><span style={{ fontSize: '11pt' }}>3. Application fee</span></p>
                                <p><span style={{ fontSize: '11pt' }}>4. A recent passport-sized photograph</span></p>
                                <p><span style={{ fontSize: '11pt' }}>5. An acceptance letter of a place at an educational provider (eg: a university) in New Zealand</span></p>
                                <p><span style={{ fontSize: '11pt' }}>6. Receipt showing payment of course fee (if your student visa application has been approved in principle)</span></p>
                                <p><span style={{ fontSize: '11pt' }}>7. Evidence of sufficient funds for maintenance, via letter/bank statement or the Financial Undertaking form</span></p>
                                <p><span style={{ fontSize: '11pt' }}>8. Evidence of sufficient funds to purchase an outward ticket.</span></p>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><strong><span style={{ fontSize: '11.0pt' }}><span style={{ color: '#1f3763' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" />Exam</span></span></strong></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '11.0pt' }}>You will need to take the International English Language Testing System (IELTS) for getting an admission to any New Zealand institution. The school may also have additional tests for graduate students who are prospective teaching assistants.</span></span></span></h4>
                                <h4 style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '12pt' }}><span style={{ color: '#1f3763' }}><span style={{ fontSize: '11.0pt' }}>This test is accepted in New Zealand: IELTS</span></span></span></h4>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Why Study Here? <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="4">
                            <div className="actives">
                                <p /><p><strong>1. &nbsp; Universities are at the forefront of health research in New Zealand</strong></p>
                                <p>Universities were awarded over 85% of the $83 million allocated in the latest round of Health Research Council funding and employ most of New Zealand’s researchers.</p>
                                <p><strong>2. &nbsp; New Zealand has the 2nd&nbsp;highest degree completion rates in the OECD</strong></p>
                                <p>At 81%, New Zealand’s bachelor’s degree completion rates (three years out from the theoretical duration of a programme) are equal with Denmark and second only to the UK. This is well above the completion rates seen in Australia (70%) and the OECD average (69%).</p>
                                <p><strong>3. &nbsp; International education is New Zealand’s 4th&nbsp;largest export earner</strong></p>
                                <p>Last year international education overtook wood to become our 4th&nbsp;largest export earner behind tourism, dairy and meat.&nbsp; Universities alone generated at least $1,040 million per year for New Zealand, representing 1.7% of all New Zealand’s exports.<sup> </sup></p>
                                <p><strong>4. &nbsp; A university degree produces a lifetime benefit of $1.3 to 4 million</strong></p>
                                <p>New Zealand university graduates earn&nbsp;between $1.3-$4 million more over their careers than a non-graduate&nbsp;after&nbsp;their costs of study are taken into account.</p>
                                <p><strong>5. &nbsp; New Zealand’s universities generate $500+ million each year through commercialising their research</strong></p>
                                <p>Universities develop and share their knowledge through teaching, publications and research collaborations. They also partner with starts up and established businesses to commercialise products, conduct research and provide consulting services.</p>
                                <p><strong>6. &nbsp; Universities increase GDP</strong></p>
                                <p>New Zealand’s Gross Domestic Product (GDP) is 3 to 6% higher because of the impact that a university education has had on the productivity of the workforce (28% of the workforce had a university qualification in 2014).</p>
                                <p><strong>7. &nbsp; Universities underpin the export education market</strong></p>
                                <p>Last year nearly 28,000 students chose to study in New Zealand universities, up 6% on the previous year. Key markets are China, USA, India, Malaysia and Vietnam.<sup> </sup></p>
                                <p><strong>8. &nbsp; Graduates have a positive effect on the workplace</strong></p>
                                <p>Universities generate 43,000+ graduates a year, not just providing New Zealand with a highly skilled workforce, but also having a positive effect on the jobs and wages of non-graduates.&nbsp;International research shows that having more graduates in the economy creates new jobs and, through workforce productivity gains, lifts&nbsp;the wages of workers without a degree by an estimated 1.6-1.9%.</p>
                                <p><strong>9. &nbsp; Māori doctoral graduates on the rise</strong></p>
                                <p>Māori doctoral students have increased by 21% since 2008 – and it’s paying off. Māori doctoral graduates earn more than non-Māori graduates 5 years after study.</p>
                                <p><strong>10. &nbsp;All New Zealand’s universities are ranked in the top 500 of universities in the world</strong></p>
                                <p>New Zealand is thought to be the only country in the world to have all its universities ranked in the top 3% of universities worldwide.</p><p />
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

export default Newzealand
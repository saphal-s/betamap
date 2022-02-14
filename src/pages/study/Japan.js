import React from 'react'
import './style.css'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const Japan = () => {
    return (
        <div>
            <div className="japan-head pt-md-5 pb-4 pt-4 pb-md-5">
                <div className="study-container d-flex pt-md-4 pb-md-4 ms-3 ms-md-0">
                    <div className="col-md-1 ms-md-3" ></div>
                    <p className='study-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
                    <div className="d-flex">
                        <p className='sab'>Study Abroad /</p>
                        <p className='study-text-study'>JAPAN</p>
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
                                    DID YOU KNOW THAT, ACCORDING TO THE NEWEST STUDY, CHILDREN FROM JAPAN LEAD THE WORLD IN NUMERACY AND LITERACY SKILLS?.
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
                    <h3>JAPAN</h3>
                </div>
                <div className="study-details mb-5">
                    <Tabs tabPosition={'left'}>
                        <TabPane tab={<>JAPAN Education Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="1">
                            <div className="actives">
                                <p /><p>There are many different ways of studying in Japan. Regardless of the course, you choose, from Japanese-language training to postgraduate studies, you will come in touch with Japanese culture and lifestyles will prove to be an invaluable experience for you. Foreign students can enroll in one of five types of institutions of higher learning:</p>
                                <p><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Universities (undergraduate courses)</strong><br />
                                    There are about 700 universities in Japan, including national, public and private ones. The length of study in an undergraduate university is four years with the exception of medicine, dentistry and veterinary science department, which require six years of study.<br />
                                    &nbsp;</p>
                                <p><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Graduate schools</strong><br />
                                    The length of study in a graduate school depends on whether you are matriculated in a master's program or doctor's program. Master's program: lasts for two years. Doctor's program: lasts for five years. For information regarding specific graduate schools, please refer to the Asian Students Cultural Association web site.<br />
                                    &nbsp;</p>
                                <p><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Junior colleges</strong><br />
                                    The length of study is two years or three years depending on the department. The majority of the department are those related to home economics, humanities, education, and sociology.<br />
                                    &nbsp;</p>
                                <p><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Special training colleges (post-secondary courses)</strong><br />
                                    Special training schools that offer post-secondary courses are called special training colleges. Such schools are positioned as higher educational institutions in Japan. They provide vocational education as well as education in the skills, technology, and knowledge needed in life. The length of study is one year or more, but most courses are two years in length.<br />
                                    &nbsp;</p>
                                <p><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Colleges of technology</strong><br />
                                    Colleges of technology provide junior high school graduates with five years (five and a half years for merchant shipping courses) of education. There are about 60 colleges of technology in Japan. They offer courses related to engineering, merchant shipping as well as other fields.</p>
                                <h4 style={{ textAlign: 'left' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Exchange Programs</h4>
                                <p style={{ textAlign: 'left' }}>Short-term student exchange primarily refers to a student enrolled in a university in his or her own country going abroad to study for a short period of time under an inter-university student exchange agreement. In such cases, the student remains registered at the original university and usually spends less than one year studying at the university or other institutes in the foreign country. The purpose is not necessarily to earn a degree and includes such aims as learning the language or gaining experience in a foreign culture. The short-term exchange student studies at the foreign university for one semester or more and earns credits or receives research guidance. Classes are conducted either in the student's mother tongue or in a foreign language.</p>
                                <h4 style={{ textAlign: 'left' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Academic Year</h4>
                                <p>The academic year at a Japanese school normally begins in April and ends the following March. Some classes are run year-round, but classes are usually divided into semesters, lasting through the first semester (April - September) or the second semester (October - March). Students normally enroll in April, but some universities permit students to enter at a different time, such as in October. There are usually three long vacations at Japanese institutions of higher education during the academic year: the summer break (late July - late August), winter break (late December - early January) and spring break (late February - early April).</p>
                                <p>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Education Fee Structure <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="2">
                            <div className="actives">
                                <p /><p>The cost of studying abroad in Japan is significantly lower than in the United Kingdom or United States, without sacrificing the quality of education. Here’s what you need to know to begin financing your study abroad!</p>
                                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> How much does it cost?</p>
                                <p>Tuition at Japanese universities depends on what type of university you plan on attending and the programme you are enrolled in. Most students are also required to pay a fee for admission, but this varies by university as well.</p>
                                <p>Be sure to check with your programme for the exact amount you will be required to pay!</p>
                                <p><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Public and National Universities</strong></p>
                                <p>These universities usually charge around ¥540,000 (or £3,400) for annual tuition and a ¥280,000 (or £1,750) admission fee for both graduate and undergraduate programmes.</p>
                                <p><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Private Universities</strong></p>
                                <p>Private universities can, at times, be more expensive than Public or National universities. Tuition often ranges from ¥875,000 to ¥3,700,000 (£5,500 to £24,000) with an admission fee of ¥235,000 to ¥1,300,000 (£1,500 to £8,200) for an undergraduate degree.</p>
                                <p>Graduate degrees cost a little less, ranging from ¥515,000 to ¥1,250,000 (£3,300 to £8,000) for annual tuition and an admission fee of ¥190,000 to ¥225,000 (£1,200 to £1,500).</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Procedure To Apply <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="3">
                            <div className="actives">
                                <p /><p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Criteria for application</strong></span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}>Students who have completed their Intermediate level or +2 are eligible to apply in Japan.<br />
                                    Students currently appearing in college or university are preferable.<br />
                                    Students should stdy Japanese Language class in this institute for at least 6 months or 240 Hours in Course A. Their forms and necessary documents will be processed at appropriate time. (Please refer to the chart on the next page for the application deadline and the date of the result for corresponding session )<br />
                                    Sponsor must be financially sound to support for the student`s study in Japan.</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}><span style={{ fontSize: '11pt' }}><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Document Required:</strong></span></p>
                                <p><span style={{ fontSize: '11pt' }}>1. Photocopies of all Academic Certificate.</span></p>
                                <p><span style={{ fontSize: '11pt' }}>2. Latest Character Certificate and Academic Transcript(original copy)</span></p>
                                <p><span style={{ fontSize: '11pt' }}>3. Recommendation letter from present college.(for students present studying in Campus)</span></p>
                                <p><span style={{ fontSize: '11pt' }}>4. Certificate of minimum 6 months (250 Hrs) of Japanese Language Training.</span></p>
                                <p><span style={{ fontSize: '11pt' }}>5. 12 piece photographs of passport size or “3cm x 4cm”.</span></p>
                                <p><span style={{ fontSize: '11pt' }}>6. Photocopies of Citizenship Certificate.</span></p>
                                <p><span style={{ fontSize: '11pt' }}>7. Photocopies of a valid passport if you have.</span></p>
                                <p><span style={{ fontSize: '11pt' }}>8. Certificate from a registered doctor confirming the student to be physically and mentally fit. (Applicable to certain schools.)</span></p>
                                <p><span style={{ fontSize: '11pt' }}>9. Certificate of work experience if any.(Optional)</span></p>
                                <p><span style={{ fontSize: '11pt' }}>10. Certificate of Relationship verification with the sponsor (i.e. Father, Mother.) From V.D.C. or Municipality</span></p>
                                <p><span style={{ fontSize: '11pt' }}>11. Certificate of Annual Income for the last three consecutive years.{'{'}From V.D.C. or Municipality{'}'}</span></p>
                                <p><span style={{ fontSize: '11pt' }}>12. Certificate of Tax Clearance of Income of the sponsor.{'{'}From V.D.C. or Municipality{'}'}</span></p>
                                <p><span style={{ fontSize: '11pt' }}>13. Certificate of Occupation Certificate.{'{'}From V.D.C. or Municipality{'}'}</span></p>
                                <p><span style={{ fontSize: '11pt' }}>14. Certificate of Bank Balance with minimum 6 months transaction.</span></p>
                                <p><span style={{ fontSize: '11pt' }}>15. Certificate of good conduct, confirming non involvement in any criminal activities from the District police Head Quarters.(Police Report)</span></p>
                                <p style={{ marginLeft: '0in', marginRight: '0in' }}>&nbsp;</p><p />
                            </div>
                        </TabPane>
                        <TabPane tab={<>Why Study Here? <i className="far fa-angle-right" style={{ color: '#fff' }}></i></>} key="4">
                            <div className="actives">
                                <p /><p><strong>1. Quality</strong></p>
                                <p>The quality of education within Japan is extremely high as attested by Japan being home to more than 20 Nobel Prize winners.</p>
                                <div style={{ display: 'block', height: '0px' }}>&nbsp;</div>
                                <div id="_forkInArticleAdContainer" style={{ height: '0px', width: '0px' }}>
                                    <div id="beacon_ccc85d4632" style={{ left: '0px', position: 'absolute', top: '0px', visibility: 'hidden' }}><ins><img alt="" src="https://wtf2.forkcdn.com/www/delivery/lg.php?bannerid=0&campaignid=0&zoneid=2360&loc=https%3A%2F%2Fgulfnews.com%2Fgn-focus%2Fcountry-guides%2Freports%2Fjapan%2Ftop-10-reasons-to-study-in-japan-1.1679405&referer=https%3A%2F%2Fwww.google.com%2F&cb=ccc85d4632" style={{ height: '0px', width: '0px' }} /></ins></div>
                                </div>
                                <p><strong>2. Safety</strong></p>
                                <p>Japan is considered one of the safest countries in the world while also very clean and hygienic. Furthermore, many amenities are generally within walking distance, making Japan a wonderful and easy place to live.</p>
                                <p><strong>3. Culture</strong></p>
                                <div className="advert in-article mod" id="ad_5727791" style={{ clear: 'both' }}>&nbsp;</div>
                                <p>Japanese culture is rich and unique. Students have the opportunity to not only receive high-quality education but also experience everything from traditional arts, crafts, sport and music to modern subculture movements in animation, manga and fashion.</p>
                                <p><strong>4. Cost</strong></p>
                                <p>Universities offer quality education with great value. Additionally, despite the misconceptions, the cost of living in Japan is also considerably less when compared to western destinations.</p>
                                <p><strong>5. Opportunities</strong></p>
                                <p>Most universities have an excellent alumni network well connected within key industries. A degree from a Japanese university is an advantage in today’s competitive job market.</p>
                                <p><strong>6. Lifestyle</strong></p>
                                <p>Opportunities for an active lifestyle abound, whether it be joining a university sports or martial arts club, or simply taking advantage of Japan’s great outdoors.</p>
                                <p><strong>7. Scholarships</strong></p>
                                <p>There are many opportunities for grants and scholarships, as well as full tuition exemption/waiver programmes.</p>
                                <p><strong>8. Specialisation</strong></p>
                                <p>Universities in Japan provide education throughout a myriad of disciplines. In addition to the popular engineering and business courses, students can enrol for animation, CGI, visual design and game-related courses. These disciplines are not only unique in their offering but are also taught by professors with years of experience.</p>
                                <p><strong>9. Variety</strong></p>
                                <p>Japan has more than 800 universities with countless additional vocational and language schools. With the recent government initiative to increase the number of international students, foreign students are not only warmly welcomed but proactively encouraged to attend, with renowned universities providing flexible course structures to accommodate them.</p>
                                <p><strong>10. Development</strong></p>
                                <p>Japan is unique in many ways and can provide a profound effect on visitors. Studying in Japan will not only improve language and professional skills, but will provide a different perspective on life, business and society. Studying in Japan offers excellent experiences in the development of truly international professionals.</p><p />
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

export default Japan
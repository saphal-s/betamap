import React from 'react';
import './courses.css'
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;

const Course = () => {
  const callback = (key) => {
    console.log(key)
  }
  return <div>
    <div className="courses-head d-flex">
      <div className="col-md-1 ms-md-3" ></div>
      <p className='courses-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
      <p className='courses-text-courses'>Courses</p>
    </div>
    <div className="course-container pt-5 pb-5">
      <div className="row w-100">
        <div className="col-md-9">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="IELTS" key="1">
              <p className='pt-4'>CHECK RESULT HERE &nbsp;
                <a href="https://results.ieltsessentials.com/?_ga=2.162341180.1006434656.1536046034-1237947926.1524381083" target="_blank"><input name="IDP" type="button" defaultValue="IDP" /></a>&nbsp; <a href="https://ielts.britishcouncil.org/CheckResults.aspx" target="_blank">
                  <input name="BCO" type="button" defaultValue="BCO" /></a></p>

              <p className='pt-4'>IELTS?</p>

              <p className='pt-3'><span style={{ fontSize: '11pt' }}>1. If you have successfully taken an IELTS test, you are able to apply to study at many international schools, universities, and also can satisfy English language requirements of foreign employers, immigration authorities and professional bodies. So,
                IELTS is useful not only for study abroad but for all steps of life.</span></p>

              <p className='pt-2'><span style={{ fontSize: '11pt' }}>2. IELTS is accepted as evidence of English language proficiency by over 9,000 organizations be it academic or professional, in over 135 countries, for education, immigration, and professional purposes<strong>.</strong> Besides having a stellar international reputation, this the most widely recognized English test across the
                globe owing to the rigorous quality control criteria of overall test.</span></p>

              <p className='pt-2'><span style={{ fontSize: '11pt' }}>3. IELTS covers both British English and American English judging it in terms of spelling, grammar, and choice of words. What this means is that whether you want to study in the US, in the UK or even in another English-speaking country such as Australia, Canada or New Zealand, IELTS gives
                you the chance to prove your English language competency everywhere.</span></p>

              <p className='pt-2'><span style={{ fontSize: '11pt' }}>4. If you take the IELTS test, you will be applying your English knowledge as if you were in an everyday situation with English native speakers, across four sections reading, listening, writing and speaking, speaking live conversation with an evaluator. So, this test prepares you for real-life situations and practical applications, taking your abilities to communicate
                and understand English clearly up a notch<strong>.</strong></span></p>

            </TabPane>
            <TabPane tab="SAT" key="2">
              <h2 className='pt-5'><span style={{ fontSize: '11pt' }}><input defaultChecked="checked" type="radio" className="radio-custom" />
                <span className="radio-custom-dummy" /><span style={{ fontSize: '16px' }}><strong> </strong></span><span style={{ fontSize: '18px' }}>
                  <strong>SAT(Scholastic Aptitude Test)</strong></span></span></h2>

              <p className='p-3'>Scholastic Aptitude Test of the past and now just the SAT is a standardized test for graduating high-schoolers entering their
                freshman year in four-year colleges and universities. SAT has gone through some changes in the past years but its value and
                demand have just risen more and more. Scored on a scale of 1600, it is often considered one of the best-standardized tests
                in existence. 800 marks for the math section, 800 for Reading and Writing
                with an optional essay, SAT is taken by over a million students all over the world, every year.
              </p>

              <h3><span style={{ fontSize: '16px' }}><input defaultChecked="checked" type="radio" className="radio-custom" />
                <span className="radio-custom-dummy" /> Why take SAT Exams?</span></h3>

              <div className="sat-content-text">
                <p className='ps-3 pt-3'>1. First things first, SAT scores are a pre-requisite for more than 78% universities and colleges in the USA because
                  it acts as a common judging platform for students who apply to the USA from all over the world. The crux of the matter
                  is that if you don’t have SAT scores, you can’t apply to more than 3000 institutions in the US.
                  So, it is a primary requirement, as important as your high school diploma.
                </p>

                <p className='ps-3'>2. Scholarships and aids are given to students based on merit using SAT scores as the benchmark for allocation of funds.
                  Better the SAT scores, better scholarships you get, up to a full ride (100% scholarships).
                </p>

                <p className='ps-3 pt-2'>3. For those students with grade point average (GPA) that is on lower ends of the average spectrum, better SAT
                  scores can act as an equalizer. Such students can prove their genuine intention
                  of studying through better SAT scores and hence increases visa success for the USA.
                </p>
                <p className='ps-3 pt-2'>4. If you are to start the professional job in the USA after completion of the undergraduate degree, many
                  employers look at the SAT scores to determine your analytical ability as well
                  as time management skills. So, SAT scores affect job chances and job security as well.
                </p>
                <p className='ps-3 pt-2'>5. Even for the students who have no intention of going to the States, for those preparing their medical or
                  engineering entrances or CMAT/KUMAT, SAT imparts valuable skills of thinking fast and on your feet. So, the SAT is equally beneficial for all students regardless of whether
                  you intend to go abroad or study in Nepal because it promotes your holistic development of aptitude.
                </p>
              </div>
            </TabPane>
            <TabPane tab="GRE" key="3">
              <div className="show pt-5">
                <p><span style={{ fontSize: '16px' }}><strong><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> GRE(Graduate Record Examinations)</strong></span></p>
                <p className='p-3'>The Graduate Record Examinations (GRE)&nbsp;is a standardized test that is an admissions requirement for many graduate schools in the United States. In other English-speaking countries and for English-taught graduate and business programs worldwide. Created and administered by Educational Testing Service (ETS) in 1949. The exam aims to measure verbal reasoning, quantitative reasoning, analytical writing and critical thinking skills that have been acquired over a long period of time and that are not related to any specific field of study. The GRE General Test is offered as a computer-based, computer adaptive exam administered by selected qualified testing centers; however, paper-based exams are offered in areas of the world where computer-based testing is not available.</p>
                <p><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> <span style={{ fontSize: '16px' }}><strong>Why GRE?</strong></span></p>
                <p className='ps-3 pt-2'>1. Whether you are planning to go to graduate school, including business or law — or just exploring your options — you are taking an important step toward your future.</p>
                <p className='ps-3 pt-2'>2. It is a smart move to show schools your best and with the GRE General Test, you can!</p>
                <p className='ps-3 pt-2'>3. The GRE General Test helps you do your best on test day. With the GRE General Test, you decide which scores to send to schools.</p>
                <p className='ps-3 pt-2'>4. If you feel you didn't do your best on test day, that's okay. You can retake the test and then send only the scores you want schools to see. It's all part of the ScoreSelect option, only available with GRE tests.</p>
                <p className='ps-3 pt-2'>5. Plus, the GRE General Test is the only admissions test for graduate or business school that lets you skip questions within a section, go back and change answers, and have control to tackle the questions within a section you want to answer first.</p>
                <p className='ps-3 pt-2'>6. The GRE General Test features question types that closely reflect the kind of thinking you'll do in graduate or business school.</p>
              </div>
            </TabPane>
            <TabPane tab="TOEFL" key="4">
              <div className="tshow pt-5">
                <h2 ><span style={{ fontSize: '16px' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> <strong>TOEFL (Test of English as a Foreign Language)</strong></span></h2>
                <p className='p-3'>The Test of English as a Foreign Language (TOEFL) is an internet-based test(iBT). The TOEFL iBT measures your ability to use and understand English at the university level and evaluates how well you combine your listening, reading, speaking and writing skills to perform academic tasks. TOEFL is the second most used test of the English language for the satisfaction of entry requirements to universities, organizations and so on. More than 9,000 colleges, agencies, and other institutions in over 140 countries accept TOEFL scores today.</p>
                <h3><strong><span style={{ fontSize: '16px' }}><input defaultChecked="checked" type="radio" className="radio-custom" /><span className="radio-custom-dummy" /> Why TOEFL</span></strong><strong><span style={{ fontSize: '16px' }}>?</span></strong></h3>
                <p className='ps-3 pt-2'>1. All international students who wish to attend an English-speaking university or college but have learned English as a foreign language should take the TOEFL before applying to their chosen school, meaning Nepalese students have to take it because many schools require the scores from this test for admission.</p>
                <p className='ps-3 pt-2'>2. Having a great TOEFL score, even if your school does not explicitly need it means you will have the advantage over all other international applicants to school and hence increases your chances of getting accepted.</p>
                <p className='ps-3 pt-2'>3. When studying in a foreign university, you will need to be able to hear lectures, write papers, and communicate verbally with teachers and classmates in English. Preparing for and taking the TOEFL test can give you the practice and boost your confidence in a new learning environment.</p>
                <p className='ps-3 pt-2'>4. Almost every single one of the universities in English speaking countries, such as the U.S., U.K., Australia, Canada, and New Zealand, use TOEFL scores as one of the methods to determine whether or not international students can be admitted to their programs, receive scholarships, or enter graduate school.</p>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className="col-md-3">
          <div className="study-abroad ps-3">
            <div className="course-second-head pt-5">
              <h5>study abroad</h5>
            </div>
            <div className="countries-link">
              <ul className="list-marked">
                <li><Link to='/study-australia'  className='d-flex'><i className="fas fa-chevron-right"></i> <span>australia</span></Link></li>
                <li><Link to='/study-usa'  className='d-flex'><i className="fas fa-chevron-right"></i> <span>usa</span></Link></li>
                <li><Link to='/study-canada'  className='d-flex'><i className="fas fa-chevron-right"></i> <span>canada</span></Link></li>
                <li><Link to='/study-newzealand'  className='d-flex'><i className="fas fa-chevron-right"></i> <span>new zealand</span></Link></li>
                <li><Link to='/study-japan'  className='d-flex'><i className="fas fa-chevron-right"></i> <span>japan</span></Link></li>
                <li><Link to='/study-europe' className='d-flex'><i className="fas fa-chevron-right"></i> <span>europe</span></Link></li>
                <li><Link  to='/study-uk' className='d-flex'><i className="fas fa-chevron-right"></i> <span>uk</span></Link></li>
              </ul>
            </div>
          </div>
          <div className="recent-events ps-3">
            <div className="course-second-head pt-3">
              <h5>recent events</h5>
            </div>
            <div className="d-flex pt-3 mb-3">
              <div className="col-4">
                <img src="./images/event1.jpg" alt="events__img" />
              </div>
              <div className="heading-date">
                <h6>Heading</h6>
                <p>Feb 11, 2022</p>
              </div>
            </div>
            <div className="d-flex pt-3 mb-3">
              <div className="col-4">
                <img src="./images/event2.jpg" alt="events__img" />
              </div>
              <div className="heading-date">
                <h6>Heading</h6>
                <p>Feb 11, 2022</p>
              </div>
            </div>
            <div className="d-flex pt-3 mb-3">
              <div className="col-4">
                <img src="./images/event3.jpg" alt="events__img" />
              </div>
              <div className="heading-date">
                <h6>Understanding the Money Value of Time</h6>
                <p>Feb 11, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Course;

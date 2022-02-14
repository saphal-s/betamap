import React from 'react'
import './register.css'

const Register = () => {
    return (
        <div>
            <div className="register-container d-flex">
                <div className="col-md-1 ms-md-3" ></div>
                <p className='register-text-home ms-md-4'>Home <span><i className="fal fa-angle-left"></i><i className="fal fa-angle-left"></i></span></p>
                <p className='register-text-register'>register</p>
            </div>
            <div className="register-body">
                <div className="register-head pt-4 pb-5">
                    <h3>Registration Form</h3>
                </div>
                <div className="register-form  p-md-5 mb-5">
                    <form action="" className='ms-3 pt-4'>
                        <div className="row w-100">
                            <div className="col-md-6 mb-4">
                                <input type="text" placeholder='Name' className='w-100' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" placeholder='Email' className='w-100' />
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-md-6 mb-4">
                                <input type="text" placeholder='Phone' className='w-100' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" placeholder='Address' className='w-100' />
                            </div>
                        </div>
                        <h5>Highest Qualification</h5>
                        <div className="row w-100">
                            <div className="col-md-6 mb-4">
                                <input type="text" placeholder='Education Level' className='w-100' />
                            </div>
                            <div className="col-md-6 row">
                                <div className="col-md-6  mb-4">
                                    <input type="text" placeholder='Completion Year' className='w-100' />
                                </div>
                                <div className="col-md-6  mb-4">
                                    <input type="text" placeholder='Score' className='w-100' />
                                </div>
                            </div>
                        </div>
                        <h5>English Proficiency Test Score</h5>
                        <div className="row w-100">
                            <div className="col-md-6 mb-4 d-flex radio-input">
                                <input type="radio" id="ielts" name="fav_language" defaultValue="IELTS" />
                                &nbsp; <label htmlFor="ielts">IELTS</label> &nbsp;&nbsp;
                                &nbsp; <input type="radio" id="toefl" name="fav_language" defaultValue="TOEFL" />
                                &nbsp; <label htmlFor="toefl">TOEFL</label>&nbsp;&nbsp;
                                &nbsp; <input type="radio" id="pte" name="fav_language" defaultValue="PTE" />
                                &nbsp; <label htmlFor="pte">PTE</label>
                            </div>
                            <div className="col-md-6 row mb-4">
                                <div className="col-md-6 mb-4">
                                    <input type="text" placeholder='Exam Date' className='w-100' />
                                </div>
                                <div className="col-md-6  mb-4">
                                    <input type="text" placeholder='Overall Score' className='w-100' />
                                </div>
                            </div>
                        </div>
                        <div className="text-area me-3">
                            <textarea name="message" id="" cols="30" rows="10" className='w-100'
                            placeholder='Please add anything else which you could not mention above'></textarea>
                        </div>
                        <div className="reg-button p-3">
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png'
import { Modal, Button} from 'antd';
import './style.css';
import Drawers from './Drawers';
import Sidedrop from './Sidedrop';

const Headers = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <nav className="navbar">
            <Drawers/>
            <NavLink  to="/"><img src={logo} alt="map__logo" /></NavLink>
            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/about-us"
            >
                about us
            </NavLink>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/services"
            >
                service
            </NavLink>
            <li className="dropdown">study abroad <i className="fas fa-chevron-down"></i>
                <ul className="drop-list">
                    <li><Link to='/study-australia' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>stydy in australia</span></Link></li>
                    <li><Link to='/study-usa' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>stydy in usa</span></Link></li>
                    <li><Link to='/study-canada' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>stydy in canada</span></Link></li>
                    <li><Link to='/study-newzealand' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>stydy in new zealand</span></Link></li>
                    <li><Link to='/study-japan' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>stydy in japan</span></Link></li>
                    <li><Link to='/study-europe' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>stydy in europe</span></Link></li>
                    <li><Link to='/study-uk' className='d-flex slink'><i className="fas fa-chevron-right"></i> <span>stydy in uk</span></Link></li>
                </ul>
            </li>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/events"
            >
                events
            </NavLink>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/courses"
            >
                courses
            </NavLink>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/register"
            >
                register
            </NavLink>
            <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/contact-us"
            >
                contact us
            </NavLink>
            <div className='search-btn'>
                <Button type="primary" onClick={showModal}>
                    <i className="fas fa-search"></i>
                </Button>
                <Modal title={
                    <>
                        <input type='text' placeholder='Search' id='input' ></input>
                        <i className="fas fa-search" id='sicon' style={{ color: '#fff' }}></i>
                    </>
                } visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                </Modal>
            </div>
            <Sidedrop/>
        </nav>)
};

export default Headers;

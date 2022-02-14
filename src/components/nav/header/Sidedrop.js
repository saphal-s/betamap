import React from 'react';
import './style.css'
import {Dropdown } from 'antd';

const menu = (
    <div className='dots-link'>
            <li><i className="fas fa-map-marker-alt" id='icon'></i><span>Putalisadak, Kathmandu Nepal</span></li>
            <li><i className="fas fa-envelope" id='icon'></i><span>info@mapeducation.com.np</span></li>
            <li><i className="far fa-clock" id='icon'></i><span>Sun – Fri: 9:00am–6:30pm. Saturday CLOSED</span></li>
            <li><i className="fas fa-phone-alt" id='icon'></i><span>0977-1-443 2225</span></li>
            <div className="nav-social-link mt-3">
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-twitter-square"></i></li>
                <li><i className="fab fa-google-plus-square"></i></li>
            </div>
    </div>
);

const Sidedrop = () => {
    return <div className='three-dots ps-4'>
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </a>
        </Dropdown>
    </div>;
};

export default Sidedrop;

import React, { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { Menu } from 'antd';
import logo from '../../../img/logo.png'
import './style.css'
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Drawers = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <MenuOutlined className='menuicon'
                onClick={showDrawer} />
            <Drawer title={<>
                <img src={logo} alt="map__logo" />
            </>} placement="left" width="270px"
                onClose={onClose} visible={visible}>
                <Menu
                    style={{ width: 226 }}
                    mode="inline"
                >
                    <Menu.Item key="1">
                        <Link to='/' onClick={onClose}>HOME</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/about-us' onClick={onClose}>ABOUT US</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/services' onClick={onClose}>SERVICE</Link>
                    </Menu.Item>
                    <SubMenu key="sub2" id='sub-menu' title="STUDY ABROAD">
                        <Menu.Item key="5">
                            <Link to='/study-australia' onClick={onClose}>STUDY IN AUSTRALIA</Link>
                        </Menu.Item>
                        <Menu.Item key="a">
                            <Link to='/study-usa' onClick={onClose}>STUDY IN USA</Link>
                        </Menu.Item>
                        <Menu.Item key="b">
                            <Link to='/study-canada' onClick={onClose}>STUDY IN CANADA</Link>
                        </Menu.Item>
                        <Menu.Item key="c">
                            <Link to='/study-newzealand' onClick={onClose}>STUDY IN NEW ZEALAND</Link>
                        </Menu.Item>
                        <Menu.Item key="d">
                            <Link to='/study-japan' onClick={onClose}>STUDY IN JAPAN</Link>
                        </Menu.Item>
                        <Menu.Item key="e">
                            <Link to='/study-in-europe'onClick={onClose}>STUDY IN EUROPE</Link>
                        </Menu.Item>
                        <Menu.Item key="f">
                            <Link to='/study-uk' onClick={onClose}>STUDY IN UK</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4">
                        <Link to='/events' onClick={onClose}>EVENTS</Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to='courses' onClick={onClose}>COURSES</Link>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Link to='/register' onClick={onClose}>REGISTER</Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to='/contact-us' onClick={onClose}>CONTACT US</Link>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </>
    )
}

export default Drawers

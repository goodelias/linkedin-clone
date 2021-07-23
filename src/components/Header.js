import React from 'react';
import './styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../components/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="" id="" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption title='Me' avatar="https://media-exp1.licdn.com/dms/image/C4D03AQG3PQPQZZeWZg/profile-displayphoto-shrink_800_800/0/1623257156163?e=1631750400&v=beta&t=Lvr2uHI7u8kQ9MSwFxOJSH_zDScr8y3SIhMJbtnJy78"/>
            </div>
        </div>
    )
}

export default Header

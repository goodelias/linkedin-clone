import { Avatar } from '@material-ui/core';
import React from 'react';
import './styles/Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Ilia Cepchin</h2>
                <h4>iliya.chepkin@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1,023</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react')}
                {recentItem('programming')}
                {recentItem('frontenddevelopment')}
                {recentItem('developer')}
                {recentItem('design')}
            </div>
        </div>
    )
}

export default Sidebar

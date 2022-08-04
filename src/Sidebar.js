import React from 'react'
import './Sidebar.css'
import Avatar from 'react-avatar';
import background from './images/background.png';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';

export default function Sidebar() {

  const user = useSelector(selectUser)



  const recentItem = (topic) => ( <div className="sidebar_recentItem">
    <span className="sidebar_hash">
      #
    </span>
    <p>{topic}</p>
  </div> )


  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={background} alt="" />
        <Avatar size={60} round="50px" src={user.photoURL}className='sidebar_avatar'>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p className="sidebar_stat_para">Who viewed you</p>
          <p className="sidebar_statNumber">2,456</p>
        </div>
        <div className="sidebar_stat">
          <p className="sidebar_stat_para">Views on post</p>
          <p className="sidebar_statNumber">2,856</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('react.js')}
        {recentItem('Programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>


    </div>
  )
}

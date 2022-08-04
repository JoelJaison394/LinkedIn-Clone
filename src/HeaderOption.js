import React from 'react'
import "./HeaderOption.css"
import Avatar from 'react-avatar';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';

function HeaderOption({avatar, Icon , title , onClick}) {
    const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar size={40} round="50px" className="headeroption_icon" src={avatar}>{user?.email[0]}</Avatar>
      )}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
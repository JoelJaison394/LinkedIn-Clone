import React from 'react'
import './Header.css'
import { FaSearch} from 'react-icons/fa';
import { FaHome} from 'react-icons/fa';
import { FaUserFriends} from 'react-icons/fa';
import { MdInsertComment } from "react-icons/md";
import { FaToolbox } from 'react-icons/fa';
import { AiFillBell } from "react-icons/ai";
import HeaderOption from './HeaderOption';
import {useDispatch} from 'react-redux';
import {logout} from './features/userSlice';
import { auth } from "./firebase";


function Header() {
  const dispatch = useDispatch();



  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();

  }


  return (
    <div className='header'>

      <div className="header_left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

        <div className="header_search">
          <FaSearch/>
          <input placeholder='search' type="text" />
        </div>

      </div>
      <div className="header_right">
        <HeaderOption Icon={FaHome} title="Home"/>
        <HeaderOption Icon={FaUserFriends} title="My Network" />
        <HeaderOption Icon={FaToolbox} title="Jobs" />
        <HeaderOption Icon={MdInsertComment} title="Messaging" />
        <HeaderOption Icon={AiFillBell} title="My Network" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />

      </div>



    </div>
  )
}

export default Header
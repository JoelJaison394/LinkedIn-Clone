import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import {useDispatch} from 'react-redux';
import './App.css';

import { login , logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Feed from './Feed';
import Login from './Login';
import Header from './Header';
import Widgets from './Widgets';
import Sidebar from './Sidebar';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
        );

      }else {
        dispatch(logout());

      }
    })

  }, []);



  return (
    <div className="app">
      <Header />


        {!user ? <Login /> :(
      <div className="app_body">
      <Sidebar />
      <Feed />
      <Widgets/>
    </div>
        )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react' 
import './Feed.css'
import { MdCreate } from "react-icons/md";
import { MdImage} from "react-icons/md";
import { MdVideoLibrary} from "react-icons/md";
import { MdEventNote} from "react-icons/md";
import { MdArticle} from "react-icons/md";
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';
import FlipMove from 'react-flip-move';

function Feed() {
  const [input, setInput] = useState('')
  const [posts,setPosts] = useState([])
  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id:doc.id,
          data: doc.data(),
        }
      ) ))
    ) 
    );

  },[]);

  const sendPost = e => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");

  };



  return (
    <div className="feed">
      <div className="feed_inputContainer">

        <div className="feed_input">
          <MdCreate />
          <form action="">
            <input value={input}   onChange={e => setInput(e.target.value)}  type="text" />
            <button onClick={sendPost}  type='submit'>Send</button>
          </form>
        </div>

        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={MdImage} color="#70B5F9" />
          <InputOption title="Video" Icon={MdVideoLibrary} color="#E7A33E" />
          <InputOption title="Event" Icon={MdEventNote} color="#C0CBCD" />
          <InputOption title="Write article" Icon={MdArticle} color="#7Fc15E" />
        </div>
      </div>
      <FlipMove>
      {posts.map(({id, data: {name, description,message,photoUrl } }) =>(
        <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
      ) )}
      </FlipMove>
    </div>
  )
}

export default Feed
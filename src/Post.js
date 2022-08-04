import React, {forwardRef} from 'react'
import Avatar from 'react-avatar'
import './Post.css'
import { FaThumbsUp} from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import InputOption from './InputOption';
import { MdSend } from "react-icons/md";


const Post = forwardRef ( ( {name, description, message , photoUrl}, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
      <Avatar  src={photoUrl}twitterHandle="sitebase" size="40" />
        <div className="post_info">
          <h2 className='post_headerName'>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
      <InputOption  Icon={FaThumbsUp} title='Like' color='gray'/>
      <InputOption  Icon={BiComment} title='Comment' color='gray'/>
      <InputOption  Icon={BiShareAlt} title='Share' color='gray'/>
      <InputOption  Icon={MdSend} title='Send' color='gray'/>
      </div>
    </div>
  )
})

export default Post
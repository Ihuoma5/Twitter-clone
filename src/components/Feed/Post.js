import React from 'react'
import './Post.css'
import {Avatar} from "@material-ui/core"
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

function Post() {
  return (
    <div className='post'>
      <div className='post_avatar'>
      <Avatar src='https://ihuoma5.netlify.app/images/profile.jpeg' alt="profile"/>
      </div>
      <div className='post_body'>
      <div className='post_header'>
      <div className='post_headerText'>
        <h3>Ndukwe Ihuoma {""}</h3>
      </div>
      <div className='post_headerDescription'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Aenean lacus massa, sollicitudin vitae magna eu, aliquam luctus dui. Cras eu nisl sapien. <br></br> Curabitur sapien sapien,</p>
        </div>
      </div>
      <img src='https://ihuoma5.netlify.app/images/profile.jpeg' alt="profile" className='postImage'/>
      <div className='post_footer'>
        <InsertCommentIcon fontSize='small'/>
        <LoopIcon fontSize='small'/>
        <FavoriteBorderIcon fontSize='small'/>
        <IosShareIcon fontSize='small'/>
        </div>
      </div>
    </div>

  )
}

export default Post
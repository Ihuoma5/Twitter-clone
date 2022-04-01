import React from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

import './Feed.css'

function Feed() {
  return <div className='feed'>
      {/* {Header} */}
      <div className='feed-header'>
          <h2 >Home</h2>
          <StarBorderRoundedIcon/>
      </div>
      {/* {Tweet box} */}
      <TweetBox />
      {/* {Post} */}
      <Post />
      <Post/>
      <Post/>
  </div>;
}

export default Feed;

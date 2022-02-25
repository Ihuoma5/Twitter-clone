import React from 'react';
import TweetBox from './TweetBox';
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
  </div>;
}

export default Feed;

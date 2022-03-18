import React from 'react'
import "./TweetBox.css"
import { Avatar, Button} from "@material-ui/core"
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
            <div className='tweetbox-header'>
            <Avatar src='https://ihuoma5.netlify.app/images/profile.jpeg'/>
            <input placeholder="What's happening?"></input>
            </div>
            <div className='tweetbox-footer'>
            <ul>
              <li><ImageIcon /> </li>
              <li><GifBoxIcon /></li>
              <li><BarChartIcon/></li>
              <li><EmojiEmotionsIcon /></li>
              <li><CalendarTodayIcon/></li>
              <li><LocationOnIcon/></li>
            </ul>
            <Button variant="outlined" className='tweet-button'>Tweet</Button>
            </div>
            
            </div>
        </form>
    </div>
  )
}

export default TweetBox
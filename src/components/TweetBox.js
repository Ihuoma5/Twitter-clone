import React from 'react'
import "./TweetBox.css"
import { Avatar, Button} from "@material-ui/core"

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
            <Avatar src='https://twitter.com/ihu_oma5'/>
            <input placeholder="What's happening"></input>
            {/* <input placeholder="WSelect image url"></input> */}
            <Button>Tweet</Button>
            </div>
        </form>
    </div>
  )
}

export default TweetBox
import React from 'react';
import './SideBar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotesIcon from '@mui/icons-material/Notes';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button} from "@material-ui/core"
import SideBarOption from './SideBarOption';

function NavBar() {
  return (
    <div className='sidebar'>
      {/* {Twitter Icon} */}
      <TwitterIcon />
      {/* {SideBar option} */}
      <SideBarOption active Icon={HomeIcon} text ="Home"/>
      <SideBarOption Icon={TagIcon} text ="Explore"/>
      <SideBarOption Icon={NotificationsIcon} text ="Notification"/>
      <SideBarOption Icon={MailOutlineIcon} text ="Message"/>
      <SideBarOption Icon={BookmarkIcon} text ="Bookmarks"/>
      <SideBarOption Icon={NotesIcon} text ="Lists"/>
      <SideBarOption Icon={AccountBoxIcon} text ="Profile"/>
      <SideBarOption Icon={MoreHorizIcon} text ="More"/>
      
      {/* {Button -> tweet} */}
      <Button variant="outlined" className='sidebar-button'>Tweet</Button>
    </div>
  )
}

export default NavBar;

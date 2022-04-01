import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return <div className='widgets'>
      <div className='widgets_input'>
        <SearchIcon className='widgets_searchIcon'/>
        <input placeholder='Search Twitter' type='text'/>
      </div>
      <div className='widgetsContainer'>
        <h2>What's happening</h2>
        
      </div>
  </div>;
}

export default Widgets;

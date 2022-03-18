import React from 'react';


function Profile({Icon,text,handle}) {
  return <div className='profile'>
      <Icon  className="profileImg"/>
      <div className='names'>
      <h3>{text}</h3>
      <h4>{handle}</h4>
      </div>
  </div>;
}

export default Profile;

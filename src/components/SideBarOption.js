import React from 'react';
import './SideBarOption.css'

function SideBarOption({active,text, Icon}) {
  return <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>
  </div>;
}

export default SideBarOption;

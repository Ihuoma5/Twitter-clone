import './App.css';
import SideBar from './components/Sidebar/SideBar';
import { useState } from 'react';
import Feed from './components/Feed/Feed';
import FeedData from './components/data/FeedData';
import Widgets from './components/Widgets/Widgets';

function App() {
  const [feedText, setFeedText ] = useState(FeedData)

  return (
    <div className="app">
     <SideBar />
     {/* {Feed} */}
     <Feed />
     {/* {Widgets} */}
     <Widgets />
    </div>
  );
}

export default App;

import './App.css';
import SideBar from './components/SideBar';
import { useState } from 'react';
import Feed from './components/Feed';
import FeedData from './components/data/FeedData';
import Widgets from './components/Widgets';

function App() {
  const [feedText, setFeedText] = useState(FeedData)

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

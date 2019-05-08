import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

const App = () => {
  const apiKey = '2e1f969d4e8f4ca79a1c75000f96d706';

  const [currentSource, setCurrentSource] = useState('the-new-york-times');
  const [sidebarIsHidden, hideShowSidebar] = useState(false);

  useEffect(() => {
    console.log(sidebarIsHidden);
  }, [sidebarIsHidden]);

  return (
    <div id="app">
      <Header
        sidebarIsHidden={sidebarIsHidden}
        hideShowSidebar={hideShowSidebar}
      />
      <div className="wrapper">
        <Sidebar
          apiKey={apiKey}
          currentSource={currentSource}
          setCurrentSource={setCurrentSource}
          sidebarIsHidden={sidebarIsHidden}
        />
        <Main
          apiKey={apiKey}
          currentSource={currentSource}
          sidebarIsHidden={sidebarIsHidden}
        />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { HashRouter } from "react-router-dom";
import Routes from './routes';
import Frame from './layout/Frame';

function App() {
  return (<HashRouter>
    <Frame>
      <Routes/>
    </Frame>
  </HashRouter>
  );
}

export default App;

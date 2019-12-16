import React from 'react';
import { HashRouter } from 'react-router-dom'
import MapRouter from './route/MapRouter';
import route from './route/routes.config'

function App() {
  return (
    <HashRouter>
      <MapRouter route={route} />
    </HashRouter>
  );
}

export default App;

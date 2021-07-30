import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './style.css';

import Menu from './components/layout/menu/Menu';
import Content from './components/layout/content/Content';

function App() {
  return (
    <div className="App">
        <Router>
            <Menu />
            <Content />
        </Router>
    </div>
  );
};

export default App;

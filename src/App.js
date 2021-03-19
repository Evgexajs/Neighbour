import React from 'react';
import './style/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu.jsx'
import Main from './components/Main.jsx'
import Profile from './components/Profile.jsx'
import Settings from './components/Settings.jsx'
import Messages from './components/Messages.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="main">
          <Menu />
          <Route path='/main' component={Main}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/messages' component={Messages}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

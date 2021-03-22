import React from 'react';
import './style/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu.jsx'
import Main from './components/Main.jsx'
import Profile from './components/Profile.jsx'
import Settings from './components/Settings.jsx'
import Messages from './components/dialogs/Messages.jsx'

function App(props) {
  return (
    <BrowserRouter>
      <div className="main">
          <Menu />
          <Route path='/main' render={ () => <Main />}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/settings' component={Settings}/>
          <Route path='/messages' render={ () => <Messages />}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

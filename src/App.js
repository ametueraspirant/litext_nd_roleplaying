import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Forum, Login, Register } from './pages';
import Headbar from './pages/partials/Headbar.js';

function App() {
  const [user, setUser] = useState({
    name: 'No user logged in',
    phone: '+0 000 000 000',
    id: -1
  });

  return (
    <BrowserRouter>
      <div>
        <Headbar />
        <Switch>
          <Route exact path = "/" component = { Home } />
          <Route exact path = "/forum" component = { Forum } />
          <Route exact path = "/login" component = { Login } />
          <Route exact path = "/register" component = { Register } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

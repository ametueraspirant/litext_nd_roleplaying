import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Forum, Login, Register } from './pages';
import { Headbar } from './pages/partials';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    ismod: false,
    loggedin: false
  });

  useEffect(()=> {
    axios.post('/api/user')
    .then(res => {
      if(res.data.user)
      {
        console.log(res.data.user);
        setUser({
          username: res.data.user.username,
          password: res.data.user.password,
          ismod: res.data.user.ismod,
          loggedin: true
        });
      };
    });
  },[]);

  return (
    <BrowserRouter>
      <div>
        <Headbar user = { user } setUser = { setUser } />
        <Switch>
          <Route exact path = "/" render = { (props) => <Home {...props} user = {user} setUser = {setUser} /> } />
          <Route exact path = "/forum" render = { (props) => <Forum {...props} user = {user} setUser = {setUser} /> } />
          <Route exact path = "/login" render = { (props) => <Login {...props} user = {user} setUser = {setUser} /> } />
          <Route exact path = "/register" render = { (props) => <Register {...props} user = {user} setUser = {setUser} /> } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

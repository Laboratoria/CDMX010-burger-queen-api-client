// import React from "react";
import React from 'react';
import { useEffect, useState } from "react";
import { auth } from './firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./components/Login/Login";
import DashboardWaiter from "./pages/DashboardWaiter/DashboardWaiter";

import './App.css';

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user is logged in')
        setUser(user)
      } else {
        console.log('user is logged out')
        setUser(false)
      }
    })
  }, [])

  return (
    <>
     {user !== null ? (
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login user={user}/>
            </Route>
            <Route path="/dashboard-waiter">
              <DashboardWaiter user={user}/>
            </Route>
          </Switch>
      </Router>
     ) : <p>Loading ...</p>
     }
    </> 
  );
};
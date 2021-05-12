import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './assets/logo-burgerqueen.png';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="div-button-menu">
      <div id="logo"><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="button-waiter">
                <button className="button-orders active">
                  <Link to="/">New Order</Link>
                </button>
                <button className="button-orders">
                  <Link to="/pendingOrder">Pending Order</Link>
                </button>
                <button className="button-orders">
                  <Link to="/doneOrder">Done Order</Link>
                </button>
         </div>
         <p>CLIENT_045</p>
         <div className="main-box">
            <div className="box-one">
              <p>Morning</p>
              <p>All day</p>
            </div>
            <div className="box-two">
              <p>$5  Café americano</p>
              <p>$7  Café con leche</p>
              <p>$10 Sándwich jamón y queso</p>
              <p>$7 Jugo de frutas</p>
            </div>
         </div>
         <p className="total">Total: $</p>
         <div className="box-send">
            <button className="button-send">
              <Link to="/doneOrder">ENVIAR</Link>
            </button>
         </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pendingOrder">
            <About />
          </Route>
          <Route path="/doneOrder">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  

}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// function pendingOrder() {
//   let match = useRouteMatch();
//   return (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <link to=
//         {`${match.url}/components`}>Components</link>
//       </li>
//       <li>
//         <link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </link>
//       </li>
//     </ul>
//   </div>)
// }



//import logo from './logo.svg'; 
// import React, { useState } from "react";
// import styled from "styled-components";
// import logo from './assets/logo-burguerqueen.png';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div id="ButtonWaiter">
//           <button>New Order</button>
//           <button>Pending Order</button>
//           <button>Done Order</button>
//         </div>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


/*<img src={'./assets/logo-burguerqueen.png'}/>*/
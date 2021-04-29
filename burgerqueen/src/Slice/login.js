// import logo from './logo.svg'; 
// import React, { useState } from "react";
// import styled from "styled-components";
import logo from './assets/logo-burguerqueen.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="ButtonWaiter">
          <button>New Order</button>
          <button>Pending Order</button>
          <button>Done Order</button>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;










// const login = () => {`
//     <div>
//         <div>
//             <h1>Burger Queen</h1>
//             <h2>¡Bienvenidxs!</h2>
//             <img src=HAMBURGUESA />
//         </div>
//         <form>
//             <select name="workers">
//             <option value="">Waiter</opion>
//             <option value="Gold">Chef</opion>
//             <option value="Silver">Admin</option>
//             </select>
//             <input type='name'></input>
//             <input type='password'></input>
//             <button>SUBMIT</button>
//         </form>
//     </div> 
// `};
import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import './Welcome.css';
import logo from '../assets/logo-burgerqueen.png';

const Login = () => {
  return <div className='login-container'>
    <div className='logo-welcome'>
        <img src={logo} className='burgerqueen-logo' alt='logo' />
        <h2>¡Bienvenidxs!</h2>
    </div>
    <div className='form-container'>
      <form className='formLogin'>
          {/* <FlavorForm /> */}
          <input type='text' className='inputLogin' placeholder="hola@queen.com"></input>
          <input type='password' className='inputLogin' placeholder="********"></input>
          <button className='Welcome'><Link to="/RouterForWaiter">SUBMIT</Link></button>
      </form>
    </div>
  </div>
}

export default Login;

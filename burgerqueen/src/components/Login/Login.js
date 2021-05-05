import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import logo from '../../assets/logo-burgerqueen.png';
import './Login.css';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='logo-welcome'>
          <img src={logo} className='burgerqueen-logo' alt='logo' />
          <h2>¡Bienvenidxs!</h2>
      </div>
      <div className='form-container'>
        <form className='formLogin'>
            <input type='text' className='inputLogin' placeholder="miri@queen.com"></input>
            <input type='password' className='inputLogin' placeholder="********"></input>
            <button className='Welcome'><Link to="/dashboard-waiter">SUBMIT</Link></button>
        </form>
      </div>
    </div>
  )
};

export default Login;

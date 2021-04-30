import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
// import logo from '../assets/logo-burgerqueen.png';

// NEW ORDER
function NewOrder() {
    return <div>
      <p id="client-name">CLIENT_045</p>
      <div className="main-box">
        <div className="box-menus">
          <Link to="/morningOrder"><p>Morning ✔</p></Link>
          <Link to="/allOrder"><p>All day</p></Link>
        </div>
        <div className="select-food-products">
          <p>$5  Café americano</p>
          <p>$7  Café con leche</p>
          <p>$10 Sándwich jamón y queso</p>
          <p>$7 Jugo de frutas</p>
        </div>
      </div>
      <p className="total">Total: $</p>
      <div className="box-send-waiter">
        <button className="button-send-waiter">
          <Link to="/doneOrder">ENVIAR</Link>
        </button>
      </div>
    </div>
  }

  export default NewOrder;
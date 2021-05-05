import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import './NewOrder.css';

const NewOrder = () => {
    return (
      <div>
        <p id="client-name">CLIENT_045</p>
        <div className="main-box">
          <div className="box-menus">
            <Link to="/morningOrder"><p>Morning ✔</p></Link>
            <Link to="/allOrder"><p>All day</p></Link>
          </div>
          <div className="select-food-products">
            <div className="products-line">
              <button className="button-products">$5  Café americano</button>
              <button className="button-product-signal">-</button><p>1</p>
            </div>
            <div className="products-line">
              <button className="button-products">$7  Café con leche</button>
              <button className="button-product-signal">-</button><p>1</p>
            </div>
            <div className="products-line">
              <button className="button-products">$10 Sándwich jamón y queso</button>
              <button className="button-product-signal">-</button><p>1</p>
            </div>
            <div className="products-line">
              <button className="button-products">$7 Jugo de frutas</button>
              <button className="button-product-signal">-</button><p>1</p>
            </div>
          </div>
        </div>
        <p className="total">Total: $ 29</p>
        <div className="box-send-waiter">
          <button className="button-send-waiter">
            <Link to="/doneOrder">ENVIAR</Link>
          </button>
        </div>
      </div>
  )
};

export default NewOrder;
import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import OrdersClient from "../stateApi/stateApi"
import './NewOrder.css';

const NewOrder = () => {
  return (
    <div>
      <p id="client-name">CLIENT_045</p>
      <div className="main-box">
         <div className="box-menus">
          <Link to="/morningOrder"><p>Morning</p></Link>
          <Link to="/allOrder"><p>All day</p></Link>
         </div>
         <div className="select-food-products">
           <div className="products-line">
            <OrdersClient />
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

{/* <Link to="/morningOrder"><Link to="/allOrder"> */}

import React from "react";
import { useState } from 'react';
import {
  BrowserRouter as Link,
} from "react-router-dom";
import ApiBreakfast from "../apiBreakfast/ApiBreakfast"
import ApiLunch from "../apiLunch/ApiLunch"
import './NewOrder.css';

const NewOrder = () => {
  const [Breakfast, setBreakfast] = useState(true); 
  const [Lunch, setLunch] = useState(true); 

  const handlerBreakfast = () => {
    setBreakfast(!Breakfast);
  };

  const handlerLunch = () => {
    setLunch(!Lunch);
  };

  return (
    <div>
      <div className="clientName"><label htmlFor="name">Name:</label></div>
      <input type="name" className="inputClient" />
      <div className="main-box">
         <div className="box-menus">
          <button className='button-box-menu' onClick={handlerBreakfast}><p>Morning</p></button>
          <button className='button-box-menu' onClick={handlerLunch}><p>All day</p></button>
            <div id="total">
              <label htmlFor="value" className="totalLabel">Total: </label>
              <input type="value" className="totalInput"></input>
            </div>
         </div>
         <div className="select-food-products">
           <div className="products-line">
            { (Breakfast === true) &&
              <ApiBreakfast />
            }
            { (Lunch === true) &&
              <ApiLunch />
            } 
          </div>
         </div>
      </div>
      <div className="box-send-waiter">
         <button className="button-send-waiter">
            <Link to="/doneOrder">ENVIAR</Link>
         </button>
      </div>
      
      {/* { (Breakfast === 'breakfast') &&
          <Order done={done}/>
      } */}
    </div>
)
};
export default NewOrder;

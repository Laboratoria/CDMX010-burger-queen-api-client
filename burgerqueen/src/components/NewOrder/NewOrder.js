import React from "react";
import { useState } from 'react';
import {
  BrowserRouter as Link,
} from "react-router-dom";
import ApiBreakfast from "../apiBreakfast/ApiBreakfast"
import ApiLunch from "../apiLunch/ApiLunch"
import ObjectOrderLunch from "../crudAPI/CrudApiLunch";
import './NewOrder.css';

const NewOrder = (props) => {
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
      <label htmlFor="name" className="clientName">Name: </label>
      <input type="name" className="inputClient" />
      <div className="main-box">
         <div className="box-menus">
          <button className='button-box-menu' onClick={handlerBreakfast}><p>Morning</p></button>
          <button className='button-box-menu' onClick={handlerLunch}><p>All day</p></button>
         </div>
         <div className="select-food-products">
           <div className="products-line">
            { (Breakfast === true) &&
              <ApiBreakfast breakfast={props.breakfast}/>
            }
            { (Lunch === true) &&
              <ApiLunch lunch={props.lunch}/>
            } 
          </div>
         </div>
      </div>
      <label htmlFor="value" className="totalLabel">Total: </label>
      <input type="value" className="totalInput"></input>
      <div className="box-send-waiter">
         <button type ="submit" className="button-send-waiter" onClick={ObjectOrderLunch}>
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

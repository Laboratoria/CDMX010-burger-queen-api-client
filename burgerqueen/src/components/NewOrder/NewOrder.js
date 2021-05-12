import React from "react";
import { useState } from 'react';
import ApiBreakfast from "../apiBreakfast/ApiBreakfast"
import ApiLunch from "../apiLunch/ApiLunch";
import Order from "../Order/Order";
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

  const handleAddItem = (item) => {
    props.setList({...props.list, items:[...props.list.items,item]})
  }

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
              <ApiBreakfast breakfast={props.breakfast} handleAddItem={handleAddItem}/>
            }
            { (Lunch === true) &&
              <ApiLunch lunch={props.lunch} handleAddItem={handleAddItem}/>
            } 
          </div>
         </div>
      </div>
      <Order setList={props.setList} list={props.list}/>
      <label htmlFor="value" className="totalLabel">Total: </label>
      <input type="value" className="totalInput"></input>
      <div className="box-send-waiter">
         <button type ="submit" className="button-send-waiter">Enviar</button>
      </div>
      
      {/* { (Breakfast === 'breakfast') &&
          <Order done={done}/>
      } */}
    </div>
)
};
export default NewOrder;

import React,{useState, useEffect} from "react";
//import Orders from "../Order/Order"

import './apiBreakfast.css';

const ApiBreakfast =(props)=>{
    return(
        <div className="select-food-products-2">
            {
                props.breakfast.map((items) => {
                    return<div className='products-line-2'>
                        <button type="button" className="button-products-2" value={items}>${items.price} {items.item}</button>
                        <button className="button-product-signal-2">-</button>
                        <input type="value" className="inputNumItem"></input>
                    </div>
                })
            }
        </div>
    )
}

export default ApiBreakfast;

//className="select-food-products"className="margin-bottom"
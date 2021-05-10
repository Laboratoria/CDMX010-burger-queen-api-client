import React,{useState, useEffect} from "react";
//import Orders from "../Order/Order"
import ObjectOrderLunch from "../crudAPI/CrudApiLunch"

import './apiLunch.css';

const ApiLunch =(props)=>{
    return(
        <div className="select-food-products-3">
                {
                    props.lunch.map((items) => {
                        return<div className='products-line-3'>
                            <button className="button-products-3">${items.price} {items.item}</button>
                            <button className="button-product-signal-3">-</button>
                            <input type="value" className="inputNumItem"></input>
                        </div>
                    })
                }
        </div>
    )
}

export default ApiLunch;
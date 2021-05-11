import React,{useState} from "react";
//import Orders from "../Order/Order"

import './apiBreakfast.css';

const ApiBreakfast =(props)=>{
    const [count, setCount] = useState(0);
    return(
        <div className="select-food-products-2">
            {
                props.breakfast.map((items) => {
                    return<div className='products-line-2'>
                        <button type="button" className="button-products-2" onClick={() => setCount(count + 1)}>${items.price} {items.item}</button>
                        <button className="button-product-signal-2" onClick={() => setCount(count - 1)}>-</button>
                        <input type="value" className="inputNumItem" value={count}></input>
                    </div>
                })
            }
        </div>
    )
}

export default ApiBreakfast;

//className="select-food-products"className="margin-bottom"
import React,{useState} from "react";

import './apiLunch.css';

const ApiLunch =(props)=>{
    const [count, setCount] = useState(0);
    return(
        <div className="select-food-products-3">
                {
                    props.lunch.map((items) => {
                        return<div className='products-line-3'>
                            <button className="button-products-3" onClick={() => setCount(count + 1)}>${items.price} {items.item}</button>
                            <button className="button-product-signal-3" onClick={() => setCount(count - 1)}>-</button>
                            <input type="value" className="inputNumItem" value={count}></input>
                        </div>
                    })
                }
        </div>
    )
}

export default ApiLunch;
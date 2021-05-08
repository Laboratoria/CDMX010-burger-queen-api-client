import React,{useState, useEffect} from "react";
//import Orders from "../Order/Order"

import './apiBreakfast.css';

const ApiBreakfast =()=>{
    const url = 'http://localhost:5000/breakfast'
    const [breakfast, setBreakfast] = useState([]);
    const fetchApi = async() => {
        const response = await fetch(url)
        console.log(response.status)
        //statusText
        const data = await response.json()
        setBreakfast(data)
        console.log(data)
    }
        
    useEffect(()=>{
        fetchApi()
    },[])
    return(
        <div className="select-food-products-2">
            {
                breakfast.map((items) => {
                    return<div className='products-line-2'>
                        <button className="button-products-2" value={items.price, items.item}>${items.price} {items.item}</button>
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
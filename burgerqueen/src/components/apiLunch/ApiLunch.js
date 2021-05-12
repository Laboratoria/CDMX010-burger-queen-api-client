import React,{useState, useEffect} from "react";
//import Orders from "../Order/Order"

import './apiLunch.css';

const ApiLunch =()=>{
    const url = 'http://localhost:5000/lunch'
    const [Lunch, setLunch] = useState([]);
    const fetchApi = async() => {
        const response = await fetch(url)
        console.log(response.status)
        //statusText
        const data = await response.json()
        setLunch(data)
        console.log(data)
    }
        
    useEffect(()=>{
        fetchApi()
    },[])
    return(
        <div className="select-food-products-3">
                {
                    Lunch.map((items) => {
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
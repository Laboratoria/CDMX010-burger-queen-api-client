import React,{useState, useEffect} from "react";
//import Orders from "../Order/Order"

//import '../Orders/Orders.css';

const OrdersClient =()=>{
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
        <div>
                {
                    breakfast.map((items) => {
                        return<div className='products-line'>
                            <button className="button-products">${items.price} {items.item}</button>
                            <button className="button-product-signal">-</button><p>1</p>
                        </div>
                    })
                }
        </div>
    )
}

export default OrdersClient;

//className="select-food-products"className="margin-bottom"
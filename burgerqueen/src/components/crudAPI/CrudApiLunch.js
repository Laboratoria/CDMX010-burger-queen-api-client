import React,{useState, useEffect} from "react";
//import Order from "../Order/Order";

const ObjectOrderLunch =()=>{
    const url = "http://localhost:3002/Orders"
    const [Orders, setOrders] = useState([]);
    
    const fetchApi = async() => {
        const response = await fetch(url, JSON.stringify());
        console.log(response.status, "Crear")
        //statusText
        const data = await response.json()
        setOrders(data)
        console.log(data)
    }
    
    const forEachItem = (items) => {
        items.array.forEach(product => {
            return(<>
                <p>{product.item}</p>
                <p>{product.price}</p>
            </>)
        });
    }
    
    useEffect(()=>{
        fetchApi()
    },[])
    return(
        <>
            {
                Orders.forEach((items) => {
                    <>
                    <h4>{items.client}</h4>
                    {forEachItem}
                    <p>{items.totalPrice}</p>
                    console.log({items.price}, {items.item})
                    </>
                })

            }
        </>
    )
}

export default ObjectOrderLunch;
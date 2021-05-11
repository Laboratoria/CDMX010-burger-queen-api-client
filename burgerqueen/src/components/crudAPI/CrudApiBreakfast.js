import React,{useState, useEffect} from "react";
//tener un objeto vacio donde al final le pongamos toda l información
//Tendriamos un input para nombre de cliente
//tener botones con ITEM Y PRICE, que al darles click manden la info al bojeto vacio.
//registrar si se les da mas de un click y repetir las veces clikeadas
//Eliminar si se dio algun click de más
//poner todo en un objeto vacio y con post mandarlo al db.json
//tener una operación que sume todos los precios de lo clickeado y poner un total.



const ObjectOrderBreakfast =()=>{
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
        <div className="Object-order">
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

export default ObjectOrderBreakfast;
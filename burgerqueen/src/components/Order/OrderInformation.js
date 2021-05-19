import React,{useState,useEffect} from 'react';

import './Orders.css';

const OrderInformation=()=>{
  const url = "http://localhost:5000/breakfast"
  const [breakfast, setBreakfast] = useState()
  const fetchApi = async() => {
    const response = await fetch(url)
    console.log(response.statusText)
    const data = await response.json()
    setBreakfast(data)
    console.log(data);
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return(
      <>
        {!breakfast ? 'cargando...'
        :breakfast.map((breakfast, index) => {
          return <div className="box-pending-order-product">
          ${breakfast.price}  {breakfast.item}
            </div>
        })
        }
      </>
  )
}

export default OrderInformation;
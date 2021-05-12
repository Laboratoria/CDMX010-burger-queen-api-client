// import React from "react";
import React,{useState,useEffect} from 'react';
// import db from "../../data/db.json"

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
//   const [data,setData]=useState([]);

//   fetch('../../data/db.json'
//   ,{
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }
//   }
//   )
//     .then(function(response){
//       console.log(response)
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log(myJson);
//     });
// }
// useEffect(()=>{
//   getData()
// },[])
// return (
//   <div className="box-pending-order">
//    {
//      data && data.length>0 && data.map((item)=><p>{item.id}</p>)
//    }
//   </div>
// );
// export default OrderInformation;

// function OrderInformation(props) {
//     return (
//       <div className="box-pending-order-product">
//         <h3>Menu: Morning</h3>
//         <h4>CLIENT-048</h4>
//         <p>Products:</p>
//         <li>${props.id}</li>
//         <li>${props.item}</li>
//         <li>${props.price}</li>
//       </div>
//     )
//   }



//           

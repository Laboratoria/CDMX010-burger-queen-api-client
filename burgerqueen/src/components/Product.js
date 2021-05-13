import React,{useState} from "react";
import './Product.css';

const Product = (props) => {
    const [count, setCount] = useState(0);
    const {item, price} = props.item;
    return(<>
            <button type="button" className="button-products-2" onClick={() => {props.handleAddItem(props.item); setCount(count + 1)}}>${price} {item}</button>
            <button className="button-product-signal-2" onClick={() => {setCount(count - 1)}}>-</button>
            <input type="number" min='0' className="inputNumItem" value={count} onChange={(e)=> setCount(e.target.value)}></input>
        </>)
}
//imput de tipo
export default Product;
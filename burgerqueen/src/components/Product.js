import React,{useState} from "react";
import './Product.css';

const Product = (props) => {
    const [count, setCount] = useState(0);
    const {item, price} = props.item;
    return(<div className="product">
            <button type="button" className="button-products-2" onClick={() => {props.handleAddItem(props.item); setCount(count + 1)}}>${price} {item}</button>
            <button className="button-product-signal-2" onClick={() => {props.handleAddItem(props.item); setCount(count - 1)}}>-</button>
            <input type="number" className="inputNumItem" id="inputNumItem" min='0' value={count} onChange={(e)=> setCount(e.target.value)}></input>
        </div>)
}
//imput de tipo
export default Product;
import React,{useState} from "react";
import './Product.css';

const Product = (props) => {
    const [count, setCount] = useState(0);

    return(<div className="product">
            <button type="button" className="button-products-2" onClick={() => setCount(count + 1)}>${props.item.price} {props.item.item}</button>
            <button className="button-product-signal-2" onClick={() => setCount(count - 1)}>-</button>
            <input className="input-products" type="number" min='0' value={count} onChange={(e)=> setCount(e.target.value)}></input>
        </div>)
}
//imput de tipo
export default Product;
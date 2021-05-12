import React,{useState} from "react";

const Product = (props) => {
    const [count, setCount] = useState(0);

    return(<>
            <button type="button" className="button-products-2" onClick={() => setCount(count + 1)}>${props.item.price} {props.item.item}</button>
            <button className="button-product-signal-2" onClick={() => setCount(count - 1)}>-</button>
            <input type="number" min='0' value={count} onChange={(e)=> setCount(e.target.value)}></input>
        </>)
}
//imput de tipo
export default Product;
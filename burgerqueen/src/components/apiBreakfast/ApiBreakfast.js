import Product from "../Product";

import './apiBreakfast.css';

const ApiBreakfast =(props)=>{
    return(
        <div className="select-food-products-2">
            {props.breakfast.map((item) => <Product  item={item} key={item.id}/>)}
        </div>
    )
}

export default ApiBreakfast;

//className="select-food-products"className="margin-bottom"
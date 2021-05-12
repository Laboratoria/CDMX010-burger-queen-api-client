import Product from "../Product";

import './apiLunch.css';

const ApiLunch =(props)=>{
    return(
        <div className="select-food-products-3">
            {props.lunch.map(item => <Product  item={item} key={item.id} handleAddItem={props.handleAddItem}/>)}
        </div>
    )
}

export default ApiLunch;
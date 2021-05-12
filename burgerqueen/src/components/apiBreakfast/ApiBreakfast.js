import Product from "../Product";

const ApiBreakfast =(props)=>{
    return(
        <div className="select-food-products-2">
            {props.breakfast.map((item) => <Product  item={item} key={item.id} handleAddItem={props.handleAddItem}/>)}
        </div>
    )
}

export default ApiBreakfast;

//className="select-food-products"className="margin-bottom"
import Product from "../Product";

const ApiLunch =(props)=>{
    return(
        <div className="select-food-products-3">
            {props.lunch.map(item => <Product  item={item} key={item.id} handleAddItem={props.handleAddItem}/>)}
        </div>
    )
}

export default ApiLunch;
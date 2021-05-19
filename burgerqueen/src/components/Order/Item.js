import React from "react";

const Item = (props) => {
    return(
        <>
        <ul>Product: <strong>{props.item.item}</strong>, {props.item.price}</ul>
        </>
    )}

export default Item;
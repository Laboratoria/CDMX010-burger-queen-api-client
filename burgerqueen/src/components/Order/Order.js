import React from "react";
import Item from "./Item";

import './Orders.css';

//El props va solo.
const Order = (props) => {

    return (
        <div>
            <div className="main-box-pending">
                <div className="box-pending-order">
                    <h4>Clientx:</h4>
                    <h4>Items:</h4>
                    {props.list.items.map(item => <Item item={item}/>)}
                    <h4>Total:</h4>
                </div>
            </div>
            <div className="margin-bottom"></div>
        </div>
    )
};

export default Order;
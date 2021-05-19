import React from "react";
import Item from "./Item";
import Timer from "./Timer";

import './Orders.css';

const Order = (props) => {

    return (
        <>
            <div className="main-box-pending">
                <div className="box-pending-order">
                    <div className="timer-div"><Timer /></div>
                    <h4>Items:</h4>
                    {props.list.items.map(item => <Item item={item}/>)}
                    <h4>Total:</h4>
                </div>
            </div>
        </>
    )
};

export default Order;

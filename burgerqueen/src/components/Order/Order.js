import React from "react"
import Timer from './Timer';
import OrderInformation from './OrderInformation';

import './Orders.css';

//El props va solo.
const Order = (props) => {
    return (
        <div>
            <div className="main-box-pending">
                <div className="box-pending-order">
                    <h3>MORNING</h3>
                    <h4>{props.name}</h4>
                    <p>{props.item}</p>
                    <p>{props.price}</p>
                    <p>{props.totalPrice}</p>

                </div>
            </div>
            <div className="margin-bottom"></div>
        </div>
    )
};

export default Order;

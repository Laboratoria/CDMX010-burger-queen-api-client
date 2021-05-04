import React from "react";

import './Orders.css';

const Order = ({pending, done}) => {
    return (
        <div>
            <div className="main-box-pending">
                <div className="box-pending-order">
                    {pending &&
                        <p>Pending</p>
                    }
                    <h3>Morning</h3>
                    <h4>CLIENT-048</h4>
                    <p>$5  Café americano</p>
                    <p>$7  Café con leche</p>
                    <p>$10 Sándwich jamón y queso</p>
                    <p>$7 Jugo de frutas</p>
                    {done &&
                        <p>DONE</p>
                    }
                </div>
                <div id="rootOrder"></div>
            </div>
            <div className="margin-bottom"></div>
        </div>
    )
};

export default Order;
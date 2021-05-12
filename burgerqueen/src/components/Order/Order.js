import React from "react"
import Timer from './Timer';
import OrderInformation from './OrderInformation';

import './Orders.css';

const Order = ({props, pending, done}) => {
    return (
        <div>
            <div className="main-box-pending">
                <div className="box-pending-order">
                    <h3>MORNING</h3>
                    <h4>CLIENT-048</h4>
                    {/* <p>{props.db.workers.worker.firstName}</p> */}
                    {/* <p>$5  Café americano</p>
                    <p>$7  Café con leche</p>
                    <p>$10 Sándwich jamón y queso</p>
                    <p>$7 Jugo de frutas</p> */}
                    {done &&
                        <div className="timer">DONE</div>
                    }
                    {pending &&
                        <>
                        <OrderInformation />
                        <div className="timer"><Timer /></div>
                        </>
                    }
                </div>
                <div id="rootOrder"></div>
            </div>
            <div className="margin-bottom"></div>
        </div>
    )
};

export default Order;

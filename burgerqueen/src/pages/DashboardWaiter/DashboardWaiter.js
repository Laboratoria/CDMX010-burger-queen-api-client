import React from 'react';
import { useState } from 'react';

import NewOrder from '../../components/NewOrder/NewOrder';
import Order from '../../components/Order/Order';

import logo from '../../assets/logo-burgerqueen.png';

const DashboardWaiter = () => {
    const [order, setOrder] = useState(true);
    const [pending, setPending] = useState(true);
    const [done, setDone] = useState(true);

    const handlerOrder = () => {
        setOrder(!order);
    };

    return (
        <div className="waiter-container">
            <div className="logo-waiter">
                <img src={logo} alt="logo" />
            </div>
            <div className="container-buttons-order">
                    <button className="button-order" onClick={handlerOrder}>
                        New Order
                    </button>
                    <button className="button-order" onClick={handlerOrder}>
                        Pending Order
                    </button>
                    <button className="button-order" onClick={handlerOrder}>
                        Done Order
                    </button>
            </div>
            { order &&
                <NewOrder />
            }
            { (!order) &&
                <Order pending={pending}/>
            } 
            { done &&
                <Order done={done}/>
            }
        </div> 
    )
};

export default DashboardWaiter;
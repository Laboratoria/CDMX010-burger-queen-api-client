import React from 'react';
import { useState } from 'react';

import NewOrder from '../../components/NewOrder/NewOrder';
import Order from '../../components/Order/Order';

import logo from '../../assets/logo-burgerqueen.png';

const DashboardWaiter = () => {
    const [view, setView] = useState('new'); 
    const [pending] = useState('pending');
    const [done] = useState('done');

    return (
        <div className="waiter-container">
            <div className="logo-waiter">
                <img src={logo} alt="logo" />
            </div>
            <div className="container-buttons-order">
                    <button className="button-order" onClick={()=> setView('new')}>
                        New Order
                    </button>
                    <button className="button-order" onClick={()=> setView('pending')}>
                        Pending Order
                    </button>
                    <button className="button-order" onClick={()=> setView('done')}>
                        Done Order
                    </button>
            </div>
            { (view === 'new') &&
                <NewOrder />
            }
            { (view === 'pending') &&
                <Order pending={pending}/>
            } 
            { (view === 'done') &&
                <Order done={done}/>
            }
        </div> 
    )
};

export default DashboardWaiter;
import React, { useEffect } from 'react';
import { useState } from 'react';

import NewOrder from '../../components/NewOrder/NewOrder';

import logo from '../../assets/logo-burgerqueen.png';

const DashboardWaiter = () => {
    const [view, setView] = useState('new'); 
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/breakfast`)
        .then(response => response.json())
        .then(data => setBreakfast(data))
    },[])
        
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_API_URL}/lunch`)
            .then(response => response.json())
            .then(data => setLunch(data))
    },[])

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
                <NewOrder breakfast={breakfast} lunch={lunch} />
            }
            {/* { (view === 'pending') &&
                <Order />
            } 
            { (view === 'done') &&
                <Order />
            } */}
        </div> 
    )
};

export default DashboardWaiter;
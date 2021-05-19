import React, { useEffect, useState } from 'react';

import NewOrder from '../../components/NewOrder/NewOrder';

import logo from '../../assets/logo-burgerqueen.png';
import { Redirect } from 'react-router-dom';


const DashboardWaiter = (props) => {
    const [view, setView] = useState('new'); 
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [list, setList] = useState({
        client:"",
        items:[],
        total:0,
        status:"pending",
    });

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

    if (!props.user) {
        return <Redirect to="/" />
    }


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
                <NewOrder breakfast={breakfast} lunch={lunch} setList={setList} list={list}/>
            }
        </div> 
    )
};

export default DashboardWaiter;
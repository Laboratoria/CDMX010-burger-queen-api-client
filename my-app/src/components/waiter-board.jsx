import React from 'react'
import '../style/App.css'
import Header from './header'

const WaiterBoard = () => {
    return (
        <div className="container">
            <Header />
            <h1>PEDIDOS</h1>
            <a href="/new-order">
                <div className="button green">
                    <p>PEDIDO NUEVO</p>
                </div>
            </a>

            <a href="/orders-to-deliver">
                <div className="button green">
                    <p>PEDIDOS LISTOS</p>
                </div>
            </a>
        </div>
    )
}

export default WaiterBoard
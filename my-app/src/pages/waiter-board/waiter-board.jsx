import React from 'react'
import './waiter-board.css'
import Header from '../../components/header/header'

const WaiterBoard = () => {
    return (
        <div>
            <Header />
            <h1>PEDIDOS</h1>
            <div className="container">
                <a href="/new-order" className="button bgGreen white">PEDIDO NUEVO</a>

                <a href="/orders-to-deliver" className="button bgGreen white">
                    PEDIDOS LISTOS
                </a>
            </div>
        </div>
    )
}

export default WaiterBoard
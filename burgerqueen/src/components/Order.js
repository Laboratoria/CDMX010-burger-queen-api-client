import React from "react";
// import Order from "./order";

const Order = () => {
    return <div>
        <div className="main-box-pending">
            <div className="box-pending-order">
                <h3>Morning</h3>
                <h4>CLIENT-048</h4>
                <p>$5  Café americano</p>
                <p>$7  Café con leche</p>
                <p>$10 Sándwich jamón y queso</p>
                <p>$7 Jugo de frutas</p>
            </div>
            <div id="rootOrder"></div>
        </div>
        <div className="margin-bottom"></div>
     </div>
}

export default Order;

//<p className="done">✔</p>
    {/* TENER SOLO 1 COMPONENTE QUE NOS MUESTRE LAS TARJETAS DE LAS ORDENES Y QUE VAYA CAMBIENDO CON LOS PROPS O PROPIEDADES QUE TIENE EL COMPONENTE  */}
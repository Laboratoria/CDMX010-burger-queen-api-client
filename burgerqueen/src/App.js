import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './assets/logo-burgerqueen.png';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="div-button-menu">
      <div id="logo"><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="button-waiter">
                <button className="button-orders">
                  <Link to="/">New Order</Link>
                </button>
                <button className="button-orders">
                  <Link to="/pendingOrder">Pending Order</Link>
                </button>
                <button className="button-orders">
                  <Link to="/doneOrder">Done Order</Link>
                </button>
         </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pendingOrder">
            <About />
          </Route>
          <Route path="/doneOrder">
            <Users />
          </Route>
          {/* <Route path="/MenuAllDay">
            <MenuAllDay />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
    <p>CLIENT_045</p>
    <div className="main-box">
      <div className="box-one">
        <Link to="/morningOrder"><p>Morning ✔</p></Link>
        <Link to="/allOrder"><p>All day</p></Link>
      </div>
      <div className="box-two">
        <p>$5  Café americano</p>
        <p>$7  Café con leche</p>
        <p>$10 Sándwich jamón y queso</p>
        <p>$7 Jugo de frutas</p>
      </div>
    </div>
    <p className="total">Total: $</p>
    <div className="box-send">
      <button className="button-send">
                <Link to="/doneOrder">ENVIAR</Link>
      </button>
    </div>
  </div>
}

// function MenuAllDay() {
//   return <div>
//     <p>CLIENT_045</p>
//     <div className="main-box">
//       <div className="box-one">
//         <Link to="/morningOrder"><button>Morning</button></Link>
//         <Link to="/allOrder"><button>All day ✔</button></Link>
//       </div>
//       <div className="box-two">
//         <p>$10  Hamburguesa simple</p>
//         <p>$15  Hamburguesa doble</p>
//         <p>$5 Papas fritas</p>
//         <p>$5 Aros de cebolla</p>
//         {/* <p>$5 Agua 500ml</p>
//         <p>$7 Agua 750ml</p> */}
//       </div>
//     </div>
//     <p className="total">Total: $</p>
//     <div className="box-send">
//       <button className="button-send">
//                 <Link to="/doneOrder">ENVIAR</Link>
//       </button>
//     </div>
//   </div>
// }

function About() {
  return <div>
    {/* <p>CLIENT_047</p> */}
    <div className="main-box-pending">
      <div className="box-one-pending">
        <h3>Morning</h3>
        <h4>CLIENT-045</h4>
        <p>$5  Café americano</p>
        <p>$7  Café con leche</p>
        <p>$10 Sándwich jamón y queso</p>
        <p>$7 Jugo de frutas</p>
      </div>
      <div className="box-two-pending">
        <h3>All day</h3>
        <h4>CLIENT-046</h4>
        <p>$5  Café americano</p>
        <p>$7  Café con leche</p>
        <p>$10 Sándwich jamón y queso</p>
        <p>$7 Jugo de frutas</p>
      </div>
    </div>
    <div className="second-box-pending">
      <div className="box-three-pending">
        <h3>All day</h3>
        <h4>CLIENT-047</h4>
        <p>$5  Café americano</p>
        <p>$7  Café con leche</p>
        <p>$10 Sándwich jamón y queso</p>
        <p>$7 Jugo de frutas</p>
      </div>
      <div className="box-three-pending">
        <h3>Morning</h3>
        <h4>CLIENT-048</h4>
        <p>$5  Café americano</p>
        <p>$7  Café con leche</p>
        <p>$10 Sándwich jamón y queso</p>
        <p>$7 Jugo de frutas</p>
      </div>
    </div>
    <div className="margin-bottom">
      {/* <button className="button-send">
                <Link to="/doneOrder">OK</Link>
      </button> */}
    </div>
  </div>
}

function Users() {
  return <div>
  {/* <p>CLIENT_047</p> */}
  <div className="main-box-pending">
    <div className="box-one-pending">
      <h3>Morning</h3>
      <h4>CLIENT-044</h4>
      <p>$5  Café americano</p>
      <p>$7  Café con leche</p>
      <p>$10 Sándwich jamón y queso</p>
      <p>$7 Jugo de frutas</p>
      <p className="done">✔</p>
    </div>
    <div className="box-two-pending">
      <h3>All day</h3>
      <h4>CLIENT-043</h4>
      <p>$5  Café americano</p>
      <p>$7  Café con leche</p>
      <p>$10 Sándwich jamón y queso</p>
      <p>$7 Jugo de frutas</p>
      <p className="done">✔</p>
    </div>
  </div>
  <div className="second-box-pending">
    <div className="box-three-pending">
      <h3>All day</h3>
      <h4>CLIENT-042</h4>
      <p>$5  Café americano</p>
      <p>$7  Café con leche</p>
      <p>$10 Sándwich jamón y queso</p>
      <p>$7 Jugo de frutas</p>
      <p className="done">✔</p>
    </div>
    <div className="box-three-pending">
      <h3>Morning</h3>
      <h4>CLIENT-041</h4>
      <p>$5  Café americano</p>
      <p>$7  Café con leche</p>
      <p>$10 Sándwich jamón y queso</p>
      <p>$7 Jugo de frutas</p>
      <p className="done">✔</p>
    </div>
  </div>
  <div className="margin-bottom">
    {/* <button className="button-send">
              <Link to="/doneOrder">OK</Link>
    </button> */}
  </div>
</div>
}

//ESTO ES EL CODIGO ORIGINAL
//okokokok

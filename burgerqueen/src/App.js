import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
  import logo from './assets/logo-burgerqueen.png';
  import './App.css';
  import Login from "./components/Welcome";
  import NewOrder from "./components/NewOrder";
  import DoneOrder from "./components/DoneOrder";
  import PendingOrder from "./components/PendingOrder";
  
export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/RouterForWaiter">
            <RouterForWaiter />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

const RouterForWaiter = () => {
  // esto es un hook que nos da el match
  const match = useRouteMatch();
    return  <Router>
    <div className="waiter-container">
      <div className="logo-waiter">
        <img src={logo} alt="logo" />
      </div>
      <div className="container-buttons-order">
            <button className="button-order">
              <Link to={`${match.url}/`}>New Order</Link> 
            </button>
            <button className="button-order">
              <Link to={`${match.url}/pendingOrder`}>Pending Order</Link> 
            </button>
            <button className="button-order">
              <Link to={`${match.url}/doneOrder`}>Done Order</Link> 
            </button>
      </div>
      {/* //esto subruta pra el menu  */}
      <Switch>      
        <Route path={`${match.path}/doneOrder`}> 
          <DoneOrder />
        </Route>
        <Route path={`${match.path}/pendingOrder`}> 
          <PendingOrder />
        </Route>
        <Route path={`${match.path}/`}>
          <NewOrder />
        </Route>
      </Switch>
    </div>
  </Router>
}

  // si vamos a usar clases de React, conocer bien sobre componentes de clase, de react//
  // cambiar componente de clase por componente de función / TENER FUNCIONES DENTRO DE UNA FUNCION Y EL RETURN DIRECTO / EL CONSTRUCTOR
  // TAMPOCO EXITE / DE THIS.STATE A USE.STATE / LEER SOBRE STATE DE REACT


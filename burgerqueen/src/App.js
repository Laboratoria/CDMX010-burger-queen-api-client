import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./components/Login/Login";
import DashboardWaiter from "./pages/DashboardWaiter/DashboardWaiter";

import './App.css';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/dashboard-waiter">
            <DashboardWaiter />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
};

  // si vamos a usar clases de React, conocer bien sobre componentes de clase, de react//
  // cambiar componente de clase por componente de función / TENER FUNCIONES DENTRO DE UNA FUNCION Y EL RETURN DIRECTO / EL CONSTRUCTOR
  // TAMPOCO EXITE / DE THIS.STATE A USE.STATE / LEER SOBRE STATE DE REACT
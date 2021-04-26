import './style/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WaiterBoard from './components/waiter-board';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Titulo 1</h1>
        <Switch>
        <Route path='/waiter-board'>
          <waiterBoard />
        </Route>

        <Route path='/new-order'>
          <h1>New Order</h1>
        </Route>

        <Route path='/orders-to-deliver'>
          <OrdersToDeliver />
        </Route>

        <Route path='/'>
          <h1>Inicio</h1>
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;

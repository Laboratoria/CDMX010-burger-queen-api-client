import './style/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WaiterBoard from './components/waiter-board';
import OrdersToDeliver from './components/orders-to-deliver';
import NewOrder from './components/new-order';
import Login from './components/login';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Titulo 1</h1>
        <Switch>
        <Route path='/waiter-board'>
          <WaiterBoard />
        </Route>

        <Route path='/new-order'>
          <NewOrder />
        </Route>

        <Route path='/orders-to-deliver'>
          <OrdersToDeliver />
        </Route>

        <Route path='/'>
          <Login />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;

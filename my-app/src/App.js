import './style/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WaiterBoard from './pages/waiter-board/waiter-board';
import OrdersToDeliver from './pages/orders-to-deliver/orders-to-deliver';
import NewOrder from './pages/new-order/new-order';
import Login from './pages/login/login';


function App() {
  return (
    <Router>
      <div className="App">
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

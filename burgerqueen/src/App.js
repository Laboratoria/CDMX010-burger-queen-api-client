// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import logo from './assets/logo-burgerqueen.png';
 // import Menu from './Slice/menu';
  
  export default function App() {
    return (
      <Router>
          <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  
  const Login = () => {
    return <div className='login'>
    <div className='logo'>
        <h1>Burger Queen</h1>
        <h2>¡Bienvenidxs!</h2>
        <img src={logo} className='App-logo' alt='logo' />
    </div>
    <form className='formLogin'>
        <FlavorForm />
        <input type='name' className='inputLogin'></input>
        <input type='password' className='inputLogin'></input>
        <button className='Welcome active'><Link to="/menu">SUBMIT</Link></button>
    </form>
    </div>
  }
  
  class FlavorForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: "Waiter"};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('You are: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
          
              <select value={this.state.value} onChange={this.handleChange} className='checkboxLogin' type='text'>
                <option value="Waiter" className='text-checkboxLogin' type='text'>Waiter</option>
                <option value="Chef" className='text-checkboxLogin' type='text'>Chef</option>
                <option value="Admin" className='text-checkboxLogin' type='text'>Admin</option>
              </select>
            </label>
          </form>
        );
      }
    }
  
const Menu = () => {
    return <div className="div-menu">
        <div id="logo"><img src={logo} className="logo" alt="logo" /></div>
        <div className="button-waiter">
            <button className="button-orders active">
                <Link to="/">New Order</Link>
            </button>
            <button className="button-orders">
                <Link to="/pendingOrder">Pending Order</Link>
            </button>
            <button className="button-orders">
                <Link to="/doneOrder">Done Order</Link>
            </button>
        </div>
    </div>
}

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
  </div>
</div>
}

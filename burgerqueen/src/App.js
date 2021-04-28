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

    


// function Login() {
//   return <div>
//       <div>
//           <h1>Burger Queen</h1>
//           <h2>¡Bienvenidxs!</h2>
          
//       </div>
//       <form>
//           <select name="workers">
//           <option value="Waiter">{Waiter}</option>
//           <option value="Chef">{Chef}</option>
//           <option value="Admin">{Admin}</option>
//           </select>
//           <input type='name'></input>
//           <input type='password'></input>
//           <button>SUBMIT</button>
//       </form>
//   </div>;
// }
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
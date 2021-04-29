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
 // import Menu from './Slice/menu';
  
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
  
  const Login = () => {
    return <div className='login-container'>
      <div className='logo-welcome'>
          <img src={logo} className='burgerqueen-logo' alt='logo' />
          <h2>¡Bienvenidxs!</h2>
      </div>
      <div className='form-container'>
        <form className='formLogin'>
            <FlavorForm />
            <input type='name' className='inputLogin'></input>
            <input type='password' className='inputLogin'></input>
            <button className='Welcome active'><Link to="/RouterForWaiter">SUBMIT</Link></button>
        </form>
      </div>
    </div>
  }

  // si vamos a usar clases de React, conocer bien sobre componentes de clase, de react//
  // cambiar componente de clase por componente de función / TENER FUNCIONES DENTRO DE UNA FUNCION Y EL RETURN DIRECTO / EL CONSTRUCTOR
  // TAMPOCO EXITE / DE THIS.STATE A USE.STATE / LEER SOBRE STATE DE REACT
  class FlavorForm extends React.Component {  
      constructor(props) {
        super(props);
        this.state = {value: "Waiter"};
    //entender .bind / clase / constructor = usando solo fucniones y no clases 
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
          <Users />
        </Route>
        <Route path={`${match.path}/pendingOrder`}> 
          <About />
        </Route>
        <Route path={`${match.path}/`}>
          <NewOrder />
        </Route>
      </Switch>
    </div>
  </Router>
}

// NEW ORDER
function NewOrder() {
  return <div>
    <p id="client-name">CLIENT_045</p>
    <div className="main-box">
      <div className="box-menus">
        <Link to="/morningOrder"><p>Morning ✔</p></Link>
        <Link to="/allOrder"><p>All day</p></Link>
      </div>
      <div className="select-food-products">
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

// DONE ORDER // renombrar por -> OrdenDetail + Order
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
    {/* EMPLEAR EL CONCEPTO DE RENDERIZAR LISTAS DE COMPONENTES EN REACT*/}
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

// PENDING ORDER
function About() {
  return <div>
    {/* TENER SOLO 1 COMPONENTE QUE NOS MUESTRE LAS TARJETAS DE LAS ORDENES Y QUE VAYA CAMBIENDO CON LOS PROPS O PROPIEDADES QUE TIENE EL COMPONENTE  */}
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


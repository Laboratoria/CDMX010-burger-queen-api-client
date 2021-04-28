// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   //Link
// } from "react-router-dom";
// import logo from './assets/logo-burgerqueen.png';
// //import Login from '../Slice/login';

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <div>
//             <h1>Burger Queen</h1>
//             <h2>¡Bienvenidxs!</h2>
//             <img src={logo} className='App-logo' alt='logo' />
//         </div>
//         <form>
//             <FlavorForm />
//             <input type='name'></input>
//             <input type='password'></input>
//             <button>SUBMIT</button>
//         </form>
      

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }




// class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: "Waiter"};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('You are: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
        
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="Waiter">Waiter</option>
//               <option value="Chef">Chef</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

// function Home() {
// return <h2>Home</h2>;
// }

// function About() {
//     return <h2>About</h2>;
//   }
  
// function Users() {
// return <h2>Users</h2>;
// }
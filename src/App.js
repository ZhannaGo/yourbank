import {
  BrowserRouter as Router,
  Routes,
  Route
  } from 'react-router-dom';
import ReactDOM from "react-dom"
import logo from './logo.svg';
// Navigate to a saved (gifs) page
// Navigate to a search
import Home from './components/home';
import NavBar from './components/navbar';
import Spa from "./components/index"
import Balance from "./components/balance"
import AllData from "./components/alldata"
import Card from "./components/context"
import CreateAccount from './components/createaccount';
import Deposit from "./components/deposit";
import Home from "./components/home"
import Withdraw from './components/withdraw';
//import Login from './components/Login';

import './App.css';

function App() {
  console.log("INSIDE APP")
  return (
    <div className="App">
      {/* */}
      <Spa/>
    {/* <NavBar></NavBar>
    <Home></Home> */}
  
      {/* <GifSearch /> */}
    </div>
  );
}

export default App
import React from './react';
import Nav from './Navbar';
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import RegisterCus from "./RegisterCus";

function App() {
  return (  
    <>
    <Nav/>
    <Login/>
    <Register/>
    <Forgot/>
    <RegisterCus/>
    </>
  );
}

export default App;

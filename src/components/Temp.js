import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Nav from "./Navbar";
import Forgot from "./Forgot";
import "../style/Login.css";
// import FooterComponent from "./Footer";

//   rrr ;12345678 http://3.109.247.241:6778/api/v2/customer/signin
//  http://3.109.247.241:6678/api/auth/login imohit; mohit1234

async function loginUser(credentials) {
  return fetch("http://3.109.247.241:6678/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    // <div className="login-wrapper">
    // <h1>Please Log In</h1>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     <p>Username</p>
    //     <input type="text" onChange={e => setUserName(e.target.value)} />
    //   </label>
    //   <label>
    //     <p>Password</p>
    //     <input type="password"  onChange={e => setPassword(e.target.value)}/>
    //   </label>
    //   <div>
    //     <button type="submit">Submit</button>
    //   </div>
    // </form>
    // </div>

    <>
      {/* <Nav /> */}
      <div class="pgaddressrow">
        <Nav />
        <h1 class="heading">Login / Register</h1>
        <h4 className="smheading">
          <a style={{ textDecoration: "none" }} href="/home ">
            Home
          </a>{" "}
          / Login /{" "}
          <a style={{ textDecoration: "none" }} href="/vendor ">
            Register
          </a>
        </h4>
      </div>
      <div class="loginformCon">
        <h4>Welome Back</h4>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div class="loginforminputs">
            <div class="form-group">
              <label>Username or email address</label>
              <input
                class="form-control"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                class="form-control"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="loginbtnrow">
              <button class="loginbtn" type="submit">
                LOG IN
              </button>
              <input
                type="checkbox"
                id="rememberme"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />{" "}
              Remember me
            </div>



            <div class="lostyourpasswordrw">

              <a href="/forgot">Lost your password?</a>

            </div>

          </div>
        </form>
        <Router>

          <Redirect to="/home">

          </Redirect>

        </Router>
      </div>
      {/* <FooterComponent /> */}
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

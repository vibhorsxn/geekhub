import React from 'react'
import "../style/Login.css";

const Login = () => {
  return (
    <div>

      <div className="pgaddressrow">
        <h1 className="heading">Login / Register</h1>
        <h4 className="smheading"><a href=" ">Home</a> / login / <a href=" ">Register</a></h4>
      </div>
      <div className="loginformCon">
        <h4>Welome Back</h4>
        <h2>LOGIN</h2>
        <div className="loginforminputs">
          <div className="form-group">
            <label>Username or email address</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" />
          </div>
          <div className="loginbtnrow">
            <button className="loginbtn" type="button">LOG IN</button>
            <input type="checkbox" id="rememberme" style={{ "marginLeft": "10px", "marginRight": "10px" }} /> Remember me
          </div>
          <div className="lostyourpasswordrw"><a href=" ">Lost your password?</a></div>
        </div>
      </div>

    </div>
  )
}

export default Login

import React from 'react';
import "../style/Login.css";

const Register = () => {
    return (
        <div>
            <div class="loginwrap">
      <div class="pgaddressrow">
        <h1 class="heading">Login / Register</h1>
        <h4 class="smheading"><a href=" ">Home</a> / login / <a href=" ">Register</a></h4>
      </div>
      <div class="loginformCon signup">
        <h4>HELLO</h4>
        <h2>SIGNUP</h2>
        <div class="loginforminputs">

          <div class="imvendwrap">
          <div class="row clearfix">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>First Name</label>
                    <input class="form-control" type="text" placeholder="" />
                  </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Last Name</label>
                    <input class="form-control" type="text" placeholder="" />
                  </div>
            </div>
        </div>
        
        {/* Password */}
        <div class="row clearfix">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="email" placeholder="" />
                  </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" type="password" placeholder="" />
                  </div>
            </div>
        </div>

        <div class="row clearfix">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Shop URL</label>
                    <input class="form-control" type="text" placeholder="" />
                  </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Phone Number</label>
                    <input class="form-control" type="text" placeholder="" />
                  </div>
            </div>
        </div>
        <div class="clearfix">
            <div class="form-group">
                <label>Shop Name</label>
                <textarea class="form-control"></textarea>
            </div>
        </div>
     </div>
      

          <div class="chooseonerow clearfix">
            <div class="form-group">
                <div class="chooseone" style={{"display": "inline-block", "verticalAlign": "middle"}}>
                    <input type="radio" name="radio-group" style={{"marginRight": "5px"}}/> I am a customer
                </div>
                <div class="chooseone" style={{"display": "inline-block", "verticalAlign": "middle", "marginLeft": "20px"}}>
                    <input type="radio" name="radio-group" style={{"marginRight": "5px"}}/> I am a vendor
                </div>
            </div>
        </div>
        
        <div class="signupterms">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href=" ">privacy policy.</a>
        </div>
          <div class="loginbtnrow">
            <button class="loginbtn" type="button">REGISTER</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Register

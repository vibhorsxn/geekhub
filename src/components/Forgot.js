import React, { useState } from "react";
import "../style/Login.css";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");

  function saveChanges() {
    console.warn({ email });
    let data = { email };
    fetch("http://3.109.247.241:6678/api/users/forget_password", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: userToken.userData.data.token,
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn("result", result);
    });
  }

  return (
    <div className="container">
      <div class="loginwrap">
        <div class="pgaddressrow">
          <h1 class="heading">Login / Register</h1>
          <h4 class="smheading">
            <a href="/home ">Home</a> / Login / <a href="/forgot ">Forgot</a>
          </h4>
        </div>
        <div class="loginformCon signup">
        <h4>FORGOT</h4>
        <h2>PASSWORD</h2>
          <div class="loginforminputs">
            <div class="imvendwrap">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      class="form-control"
                      type="email"
                      placeholder="Enter Your Email Address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-warning"
              onClick={saveChanges}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;

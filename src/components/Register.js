import React from "react";
import "../style/Login.css";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    shopurl: "",
    phoneno: "",
    shopname: "",
    username:""
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()

      .required("Required")
      .min(3, "Too short Name"),
    username: Yup.string()

      .required("*Required")
      .min(3, "Too short Name"),
    // .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,"Number & special character is restricted"),

    // last: Yup.string().last("Enter valid LastName").require("Required")
    // .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,"Number & special character is restricted"),

    email: Yup.string().email("Enter valid Email").required("Required"),

    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("*Required")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),

    shopurl: Yup.string()
      .required("*Required")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"Website should be a valid URL"),

<<<<<<< HEAD
    phoneno: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("*Required"),
=======
>>>>>>> b25d3fa2f38240b59e46d7e841fe8413caa6d9c4

    shopname: Yup.string()

      .required("*Required")
      .min(3, "Too short Name"),
    user: Yup.string().required("*Required"),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    // const phoneno = event.target.phoneno.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const shopname = event.target.shopname.value;
    const shopurl = event.target.shopurl.value;
    const username = event.target.username.value;
    const user = event.target.user.value;
    const data = {
      firstName,
      lastName,
      // phoneno,
      email,
      password,
      user,
      shopurl,
      shopname,
      username,
    };
    //  -TEAM_A
    //  http://3.109.247.241:6778/api/v2/customer/signup -TEAM_B
    axios
      .post("http://3.109.247.241:6678/api/auth/register", data)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const onSubmit = (values, props) => {
  //   console.log(values);
  //   // console.log(props)
  //   setTimeout(() => {
  //     props.resetForm();
  //     props.setSubmitting(false);
  //   }, 2000);
  // };

  return (
    <div>
      <div class="pgaddressrow">
        <h1 class="heading">Login / Register</h1>
        <h4 class="smheading">
          <a href="/">Home</a> / Login / <a href="/signup ">Register</a>
        </h4>
      </div>
      <div class="loginformCon signup">
        <h4>HELLO</h4>
        <h2>SIGNUP</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          
        >
          {(props) => (
            <Form onSubmit={onSubmit}>
              <div class="loginforminputs">
                <div class="imvendwrap">
                  <div class="row clearfix">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>First Name</label>
                        <Field
                          name="firstName"
                          class="form-control"
                          type="text"
                          placeholder="Enter First Name"
                        />
                        {/* <ErrorMessage name="first" /> */}
                        <div className="error">
                          <ErrorMessage name="firstName" />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <Field
                          name="lastName"
                          class="form-control"
                          type="text"
                          placeholder="(Optional)"
                        />
                        {/* <ErrorMessage name="last" /> */}
                        <div className="error">
                          <ErrorMessage name="lastName" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Password */}
                  <div class="row clearfix">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email</label>
                        <Field
                          name="email"
                          class="form-control"
                          type="email"
                          placeholder="Enter Email-ID"
                        />
                        {/* <ErrorMessage name="email" /> */}
                        <div className="error">
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Password</label>
                        <Field
                          name="password"
                          class="form-control"
                          type="password"
                          placeholder="Enter Password"
                        />
                        {/* <ErrorMessage name="password" /> */}
                        <div className="error">
                          <ErrorMessage name="password" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row clearfix">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Shop URL</label>
                        <Field
                          name="shopurl"
                          class="form-control"
                          type="text"
                          placeholder="Enter Shop-URL"
                        />
                        {/* <ErrorMessage name="shopurl" /> */}
                        <div className="error">
                          <ErrorMessage name="shopurl" />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Username</label>
                        <Field
                          name="username"
                          class="form-control"
<<<<<<< HEAD
                          type="text"
                          placeholder="Username"
                        />
                        {/* <ErrorMessage name="phoneno" /> */}
                        <div className="error">
                          <ErrorMessage name="username" />
                        </div>
=======
                          type="text" placeholder="" 
                          disabled/>
                        
>>>>>>> b25d3fa2f38240b59e46d7e841fe8413caa6d9c4
                      </div>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="form-group">
                      <label>Shop Name</label>
                      <Field
                        name="shopname"
                        class="form-control"
                        placeholder="Enter Shop Name"
                      ></Field>
                      {/* <ErrorMessage name="shopname" /> */}
                      <div className="error">
                        <ErrorMessage name="shopname" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="chooseonerow clearfix">
                  <div class="form-group">
                    <div
                      class="chooseone"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <Field
                        type="radio"
                        name="radio-group "
                        style={{ marginRight: "5px" }}
                        disabled
                      />{" "}
                      <a
                        href="/signup "
                        className="signupterms"
                        style={{ fontFamily: "inherit" }}
                      >
                        I am a Customer
                      </a>{" "}
                    </div>
                    <div
                      class="chooseone"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginLeft: "20px",
                      }}
                    >
                      <div className="error">
                        <ErrorMessage name="user" />
                      </div>
                      <Field type="radio" name="user" value="Vendor" /> I am a
                      Vendor
                      {/* <Field
                        type="radio"
                        name="radio-group "
                        style={{ marginRight: "5px" }}
                      />{" "}
                      <a
                        href="/register "
                        className="signupterms"
                        // style={{ color: "gold" }}
                      >
                        I am a Vendor
                      </a> */}
                    </div>
                    {/* <ErrorMessage  name="first"/> */}
                  </div>
                </div>

                <div class="signupterms">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a href=" ">privacy policy.</a>
                </div>
                <div class="loginbtnrow">
                  <button
                    class="loginbtn"
                    disabled={props.isSubmitting}
                    type="submit"
                  >
                    {props.isSubmitting ? "Loading" : "REGISTER"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
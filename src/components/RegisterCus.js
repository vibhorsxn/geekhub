import React from 'react';
import "../style/Login.css";
import { Form, Field, Formik, ErrorMessage, } from "formik";
import * as Yup from "yup";


const Customer = () => {

  const initialValues = {
    first: '',
    last: '',
    email: '',
    password: '',
    shopurl: '',
    phoneno: '',
    shopname: '',
    user:''

  }

  const validationSchema = Yup.object().shape({
    first: Yup.string()

      .required("Required")
      .min(3, "Too short Name")
    .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,"Number & special character is restricted"),

     last: Yup.string()
     .min(3, "Too short Name")
    .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,"Number & special character is restricted"),

    email: Yup.string().email("Enter valid Email").required("Required"),

    password: Yup.string().min(8, "Password minimum length should be 8").required("Required")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),

    shopurl: Yup.string()
      .required("Required")
      .matches(/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, "Website should be a valid URL"),

    phoneno: Yup.number().typeError("Enter valid Phone Number").required('Required'),

    shopname: Yup.string()

      .required("Required")
      .min(3, "Too short Name"),

      user:Yup.string()
      .required("Required")
  })

  const onSubmit = (values, props) => {
    console.log(values);
    // console.log(props)
    setTimeout(() => {

      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }

  return (
    <div>
      <div class="pgaddressrow">
        <h1 class="heading">Login / Register</h1>
        <h4 class="smheading"><a href="/">Home</a> / Register / <a href="/login">login</a></h4>
      </div>
      <div class="loginformCon signup">
        <h4>HELLO</h4>
        <h2>SIGNUP</h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
          {(props) => (
            <Form>
              <div class="loginforminputs">

                <div class="imvendwrap">
                  <div class="row clearfix">
                    <div class="col-sm-6">
                      <div class="form-group">

                        <label>First Name</label>
                        <Field
                          name="first"
                          class="form-control"
                          type="text"
                          placeholder="" />
                        <div className="error"><ErrorMessage name="first" /></div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">

                        <label>Last Name</label>
                        <Field
                          name="last"
                          class="form-control"
                          type="text" placeholder="(Optional)" />
                        <div className="error"><ErrorMessage name="last" /></div>
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
                          type="email" placeholder="" />
                        <div className="error"><ErrorMessage name="email" /></div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">

                        <label>Password</label>
                        <Field
                          name="password"
                          class="form-control"
                          type="password" placeholder="" />
                        <div className="error"><ErrorMessage name="password" /></div>
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
                          type="text" placeholder="" 
                          disabled/>
                        <div className="error"><ErrorMessage name="shopurl" /></div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">

                        <label>Phone Number</label>
                        <Field
                          name="phoneno"
                          class="form-control"
                          type="text" placeholder="" 
                          disabled/>
                        <div className="error"><ErrorMessage name="phoneno" /></div>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="form-group">

                      <label>Shop Name</label>
                      <Field
                        name="shopname"
                        class="form-control"
                        disabled/>
                      <div className="error"><ErrorMessage name="shopname" /></div>
                    </div>
                  </div>
                </div>

                {/* Mode of User */}

                <div class="chooseonerow clearfix">
                  <div class="form-group">
                    <div class="chooseone" style={{ "display": "inline-block", "verticalAlign": "middle" }}>
                      {/* <Field

                        type="radio"
                        name="radio-group "
                        style={{ "marginRight": "5px" }} />  */}
                        <a href="/vendor">I am a Vendor</a>
                        
                    </div>
                    <div class="chooseone" style={{ "display": "inline-block", "verticalAlign": "middle", "marginLeft": "20px" }}>
                       {/* <Field
                        type="radio"
                        name="radio-group vendor"
                        style={{ "marginRight": "5px" }} />  */}
                        <div className="error"><ErrorMessage name="user"/></div>
                        <Field type="radio" name="user" value="Customer" /> I am a Customer 
                    </div>

                  </div>
                </div>

                <div class="signupterms">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                  <a href=" ">privacy policy.</a>
                </div>
                <div class="loginbtnrow">
                  <button
                    class="loginbtn"
                    disabled={props.isSubmitting}
                    type="submit">{props.isSubmitting ? "Loading" : "REGISTER"}</button>
                </div>
              </div>
            </Form>
          )}

        </Formik>

      </div>

    </div>
  )
}

export default Customer

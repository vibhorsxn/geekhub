import React, { useState } from 'react'
import useToken from './useToken';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "../style/EditProfile.css";


const EditProfile = () => {
    const userToken = useToken();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    

    function saveChanges() {
        console.warn({ firstName, lastName });
        let data = { firstName, lastName }
        fetch("http://3.109.247.241:6678/api/users/editProfile", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "token": "bearer " + userToken.token,
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.warn("result", result)
        })
    }

    return (


        <div className="container">
            <div className="profiledetailinputs">

                <div className="imvendwrap">

                    <div className="row clearfix">


                        <div className="control-group file-upload" id="file-upload1">
                            <div className="image-box text-center">
                                <p>Upload Image</p>
                                <img src="" alt="" />
                            </div>
                            <div className="controls" style={{ "display": "none" }}>
                                <input type="file" name="contact_image_1" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" value={firstName}
                                onChange={(e) => { setFirstName(e.target.value) }}
                                placeholder="Firstname: " />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" value={lastName}
                                onChange={(e) => { setLastName(e.target.value) }}
                                placeholder="Lastname " />
                        </div>

                    </div>
                    <div className="loginbtnrow">
                        <button type="submit" className="loginbtn" onClick={saveChanges}>Save Changes</button>

                    </div>
                    {/* <Router>

          <Redirect to="/profile">

          </Redirect>

        </Router> */}
                </div>
            </div>
        </div>




    )
}

export default EditProfile

import React from 'react';
import "../style/Profile.css";
import useToken from './useToken';

const Profile = () => {
  const userToken = useToken();
  const userData = userToken.userData;


  // useEffect(() => {
  // const user = fetch('http://3.109.247.241:6678/api/users/profile/' + userToken.id, {

  //     method: 'GET',
  //     headers: {

  //       'token': 'bearer ' + userToken.token,
  //       'Content-Type': 'application/json'
  //     },
  //     // body: JSON.stringify(credentials)

  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(responseData);
  //       return responseData;
  //     })
  //     .catch(error => console.warn(error));
  // }, []);

  //  console.log("aa", user);
  return (


    <div>
      <div class="loginwrap">
        <div class="pgaddressrow">
          <h1 class="heading">My Account</h1>
          <h4 class="smheading"><a href="/home">Home</a> / profile / <a href=" )">Detail</a></h4>
        </div>

{/* Edit profile button */}


<div className="col-sm-2" style={{ textAlign: "right",marginLeft:"950px",fontStyle:"initial" }}>
          <br/>
          <button className="btn btn-warning"><a href="/editProfile" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}>EDIT PROFILE</a></button>
        </div>



        <div class="container">

          <div class="profilinputs">

            <div class="imvendwrap">

              <div class="row clearfix">

                <div class="col-sm-4">
                  <div class="control-group file-upload" id="file-upload1">
                    <div class="image-box text-center">
                      {/*  team-B API <p>{userData.profilePic}</p> */}
                      <p>{userData.profilePic}</p>
                      <img src="" alt=" " />
                    </div>

                    <div class="controls" style={{ "display": "none" }}>
                      <input type="file" name="contact_image_1" />
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="nameconbox">
                    <h4>Name</h4>


                    {/* Team-B API <p class="paratrxt">{userData.data.user.firstName} {userData.data.user.lastName}</p> */}
                    <p class="paratrxt">{userData.firstName} {userData.lastName}</p>
                  </div>

                  <div class="emailconbox">
                    <h4>Email ID</h4>
                    {/* Team-B API <p class="paratrxt">{userData.data.user.email}</p> */}
                    <p class="paratrxt">{userData.email}</p>
                  </div>
                </div>
                <br />
                {/* <button className="btn btn-warning">
                  <a
                    href="/editProfile"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Edit Profile
                  </a>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile

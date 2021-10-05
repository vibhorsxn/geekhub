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

        <div class="container">

          <div class="profilinputs">

            <div class="imvendwrap">

              <div class="row clearfix">

                <div class="col-sm-4">
                  <div class="control-group file-upload" id="file-upload1">
                    <div class="image-box text-center">
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

                    <p class="paratrxt">{userData.firstName} {userData.lastName}</p>
                  </div>

                  <div class="emailconbox">
                    <h4>Email ID</h4>
                    <p class="paratrxt">{userData.email}</p>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="phoneconbox">
                    <h4>Phone No</h4>
                    <p class="paratrxt paranumar">91-7217643966</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile

import React, { useState, useEffect } from "react";
import useToken from "./useToken";
import "../style/Address.css"

const Address = () => {
  const userToken = useToken();
  const [address, setAddress] = useState([]);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": "bearer " + userToken.token
      },
      // body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    fetch("http://3.109.247.241:6678/api/address/allAddress", requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        // console.log(userToken.userData.data.token);

        setAddress([...responseData.allAddress]);

        // responseData.data.map((e)=>address.push(e))
        // setAddress(...address);
        console.log("Array Data in Address:", address);
        console.log(responseData);

      })

     
      // .then(response=>setAddress(response))
      // console.log(response)

      .catch((error) => console.warn(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, );

  return (
    <div>

      <div class="pgaddressrow">
        <h1 class="heading">My Address</h1>
        <h4 class="smheading"><a href="/home">Home</a> / saved Address </h4>
      </div>


      <div className="col-sm-2" style={{ textAlign: "right", marginLeft: "950px", fontStyle: "initial" }}>
        <br />
        <button className="btn btn-warning"><a href="/AddAddress" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}>Add Address</a></button>
      </div>

      {
        address.map(add => {
          return (
            <>
              <div class="container">
                <div class="profilinputs">

                  <div class="imvendwrap">

                    <div class="row clearfix">
                      <div class="col-sm-8">
                        <div class="nameconbox">
                          <h4>{add.fullName}</h4>
                        </div>

                        <div class="nameconbox">
                          <h4>{add.address}{add.city}{add.state},{add.pincode}</h4>

                        </div>
                        <div class="nameconbox">
                          <h4>{add.mobile}</h4>

                        </div>
                        <div class="nameconbox">
                          <h4 class="edittext">Edit <span>Remove</span></h4>

                        </div>
                      </div>

                      <div >
                
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )
        }
        )
      }
    </div>

  )
};

export default Address



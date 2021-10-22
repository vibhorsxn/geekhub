import React, { useState, useEffect } from "react";
import Featured from "./home/Featured";
import Category from "./home/Brand";
import Banner from "./home/Banner";
import useToken from "./useToken";


const Main = () => {
    const userToken = useToken();
    const [banner, setBanner] = useState([]);
    const [feature, setFeature] = useState([]);
    const [category, setCategory] = useState([]);


    //   const [address, setAddress] = useState();

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": userToken.token,
            },
            // body: JSON.stringify({ title: "React Hooks POST Request Example" }),
        };
        fetch("http://3.109.247.241:6678/api/product/all", requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                // console.log(responseData);
                // console.log(userToken.userData.data.token);

                // setAddress([...responseData.data]);
                // setBanner(responseData.banner[0].image)

                //Note: response will be get from the name given the D.B

                setFeature([...responseData.featuredProduct])
                setCategory([...responseData.Categories])
                setBanner([...responseData.banner])
                // responseData.data.map((e)=>address.push(e))
                // setAddress(...address);
                console.log("feature", feature);
                console.log("Banner Data:", banner);
                console.log(responseData);

            })
            // .then(response=>setAddress(response))
            // console.log(response)

            .catch((error) => console.warn(error));
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, );

    return (
        <div>
            <h1>home page:</h1>
            {
                //   address.map(e=>

                //         <p>FirstName:{e.landmark}</p>
                //<img src={banner} alt=" "/>
                //     )


                // feat.map(e=>
                //return <Product image={e.img},title={e.title}/>
                // )


                feature.map(feat =>
                    // <h3 key={feat._id}> Title: {feat.title} {feat.img}</h3>

                    <Featured key={feat.id} title={feat.title} image={feat.img} />

                )

            }

            {
                category.map((cat) => (
                    // <h3 key={feat._id}> Title: {feat.title} {feat.img}</h3>

                    <Category key={cat._id} icon={cat.icon} />
                ))
            }

            {
                banner.map(ban =>
                    <Banner image={ban.image} />
                )
            }


        </div>

    )
};

export default Main


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import RegisterCus from "./RegisterCus";
// import Login from './Login';
import Nav from "./Navbar";
import Home from "./Home";
import Login from "./Temp";
import Forgot from "./Forgot";
import Profile from "./Profile";
import Register from "./Register";
import useToken from "./useToken";
import Products from "./AllProduct";

import Address from "./Address";
import AddAddress from "./AddAddress";

import Main from "./Main";
import Featured from "./home/Featured";
import FetchAddress from "./FetchAddress";
import EditProfile from "./EditProfile";


// import FooterComponent from "./Footer";
// import Signup from "./signup";
// import axios from 'axios';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  // Logout
  const logOut = () => {
    localStorage.clear();
  };

  return (
    <>
      <Nav />
      <div className="container">
        <h4 class="smheading">
          {/* <a href="/home"> Home </a> / <a href="/profile">My Profile</a> /{" "} */}
          <a href="/vendor" > Vendor Reg.</a> / <a href="/login" onClick={logOut}>LogOut</a>
          {/* / <a href="/vendor">Logout</a> */}
        </h4>
      </div>
      {/* <Login/> */}
      <Router>
        <Switch>
          <Route exact path="/home"> <Home /> </Route>
          <Route path="/vendor"> <Register /> </Route>
          <Route path="/profile"><Profile /></Route>
          <Route path="/forgot"> <Forgot /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/products"><Products /></Route>

          <Route path="/address"><Address /></Route>          
          <Route path="/addAddress"><AddAddress /></Route>    

          <Route path="/main"><Main /></Route>          
          <Route path="/feat"><Featured /></Route>      
          <Route path="/fetchAdd"><FetchAddress/></Route>    
          <Route path="/editProfile"><EditProfile/></Route>    

          {/* <Route path="/signup">
            <Signup />
          </Route> */}

          {/* <Route path="/logout"><Logout /></Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;

// {/* <Nav/>
//     <Login/>
//     <Register/>
//     <Forgot/>
//     <RegisterCus/>
// ***
//      <Router>
//       <Nav />
//       <Switch>
//       <Route path="/"  exact component={Home} />
//         {/* <Route path="/login" component={Login} /> */}
//         {/* <Route path="/customer" component={RegisterCus} />
//         <Route path="/vendor" component={Register} />
//         <Route path="/forgot" component={Forgot} />
//       </Switch> */}
//     {/* </Router>  */}

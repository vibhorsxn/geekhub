import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Forgot from './Forgot';
import Profile from "./Profile";
import Register from './Register';
import Nav from './Navbar';
import Login from "./Temp";
import useToken from './useToken';
// import axios from 'axios';

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  // Logout
  const logOut = () => {
    localStorage.clear();
  };

  return (
    <>
      <Nav/>
      
        
        <h4 class="smheading">
          {/* <a href="/home">Home</a> */}
          {/* / <a href="/profile">My Profile</a> */}
          <a href="/vendor">Vendor Reg.</a>/ <a href="/login" className="nav-link" onClick={logOut}>LogOut</a>
        </h4>


        <Router>
             
          <Switch>
            
          <Route path="/home"><Home /></Route>
            <Route path="/vendor"><Register /></Route>
            <Route path="/profile"><Profile /></Route>
            <Route path="/forgot"><Forgot /></Route>

      
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
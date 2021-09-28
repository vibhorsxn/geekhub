import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Navbar';
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import Home from "./Home";
import RegisterCus from "./RegisterCus";

function App() {
  return (
    <>
    <Router>
      <Nav />  
      <Switch>
      <Route path="/"  exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/customer" component={RegisterCus} />
        <Route path="/vendor" component={Register} />
        <Route path="/forgot" component={Forgot} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

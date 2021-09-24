import React from 'react';
import '../style/Navbar.css';
import {Navbar,Container} from 'react-bootstrap';
import logo from "../assets/images/logo.png";
const Nav = () => {
    return (
        <div className="Nav__head">
         
        <Navbar  bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="75"
              height="78"
              className="d-inline-block align-top"
              alt="Geeks-Hub-logo"
            />

          </Navbar.Brand>
        </Container>
        </Navbar>
        <div className="Nav__links">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Latest Products</li>
          <li>Contact us</li>
          <li>Shop</li>
        </ul>

        </div>
        
        <div className="Nav__icons">
          <div className="icons">
            <ul>
          <li><img alt="" src="https://img.icons8.com/material-sharp/24/000000/guest-male.png"/></li>
          <li><img alt="" src="https://img.icons8.com/ios-glyphs/24/000000/like--v1.png"/></li>
          <li><img alt="" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/></li>
          <li><img alt="" src="https://img.icons8.com/ios-filled/24/000000/search--v1.png"/></li>
</ul>
          </div>
          <div className="icon__name">
        <ul>
          <li>Account</li>
          <li>Wishlist</li>
          <li>Cart</li>
          <li>Search</li>
        </ul>
        </div>

        </div>

        
        </div>
    )
}

export default Nav

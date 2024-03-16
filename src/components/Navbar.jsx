import React, { useEffect, useState } from 'react';
import { useAuth } from '../context';
import { Link } from 'react-router-dom';
function Navbar() {

  const { isLoggedIn, login, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{fontWeight:"700",fontSize:"27px"}}>Karo Abhyas</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className={"nav-item mx-2"}>
            <Link className="nav-link" to="/">Join Us</Link>
          </li>
          <li className={"nav-item mx-2"}>
            <Link to="/classes" className="nav-link">Classes</Link>
          </li>
          <li className={"nav-item mx-2"}>
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className={"nav-item mx-2"}>
            <Link to="/aboutus" className="nav-link">About Us</Link>
          </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to={!isLoggedIn?'/login':'/profile'}><i class="fa fa-user"></i></Link>
            </li>
            <li className="nav-item mx-2">
              {isLoggedIn && <Link className="nav-link" to="/cart"><i class="fa fa-shopping-cart"></i></Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

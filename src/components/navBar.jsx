import React from "react";
import logo from "./../D-Logo-512-05.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} width="30" height="30" alt="" />
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            <span className="text-white">Login</span>
          </NavLink>
          <NavLink className="nav-link" to="/join">
            <span className="text-white">Join</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

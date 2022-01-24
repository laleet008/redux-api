import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo_container">
        <img
          src="https://naxa.com.np/ac468ef024692c042053c13a69625759.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav_elements">
        <ul className="nav_items">
          <li>
            <NavLink className="nav_item" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_item" to="/careers">
              Career
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_item" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_item" to="/services">
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

// https://naxa.com.np/ac468ef024692c042053c13a69625759.png

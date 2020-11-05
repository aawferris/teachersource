import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-elements">
          <ul>
            <li>About</li>
            <li>Training</li>
            <NavLink className="link" to="/dashboard"><li>Lesson Plans</li>
            </NavLink>
            <li>Forums</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="nav-dropdown">
          <select onChange={() => window.location.href = "/dashboard"}>
            <option>My Account</option>
            <option >My Dashboard</option>
            <option>Help</option>
            <option>Contact Us</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-elements">
          <ul>
            <li>About</li>
            <li>Training</li>
            <li>Lesson Plans</li>
            <li>Forums</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="nav-dropdown">
          <select onChange={() => window.location.href = "https://teacher-source.netlify.app/dashboard"}>
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

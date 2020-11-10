import React from "react";
import Dropdown from "react-bootstrap/Dropdown"
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
        <Dropdown id="nav-dropdown">
          <Dropdown.Toggle id="nav-toggle">Menu</Dropdown.Toggle>

          <Dropdown.Menu id='nav-menu'>
            <Dropdown.Item href="/login" className="dropdown-item">My Account</Dropdown.Item>
            <Dropdown.Item href="/dashboard" className="dropdown-item">My Dashboard</Dropdown.Item>
            <Dropdown.Item href="/" className="dropdown-item">Help</Dropdown.Item>
            <Dropdown.Item href="/" className="dropdown-item">Contact Us</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Nav;

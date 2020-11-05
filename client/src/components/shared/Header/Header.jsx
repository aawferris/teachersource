import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="header">
        <NavLink className="logo" to="/"> {/* Add in logo here later */}
          <img id="apple-icon" src="/assets/teacher-source-icon.png" alt="Apple Icon" />
        </NavLink>
        <div className="links"> 
          <form>
            <select id="site-dropdown">
              <option className="drop-option">Entire Site</option>
            </select>
          <label htmlFor="search"/>
            <input id="search-bar" type="search" placeholder="Search" />
            <img id="magnifying-glass" src="/assets/magnifying-glass.png"  alt="magnifying glass icon" />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Nav;

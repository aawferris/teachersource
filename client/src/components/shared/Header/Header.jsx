import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="header">
        <NavLink className="logo" to="/"> {/* Add in logo here later */}
          <img src="/assets/teacher-source-icon.png" />
        </NavLink>
        <div className="links"> {/* Add in dropdown here later */}
          <p>Entire Site ^ _____________Search</p>
          {/* Add in Search bar here later */}
        </div>
      </div>
    </header>
  );
};

export default Nav;

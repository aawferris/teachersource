import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="header">
        <NavLink className="logo" to="/"> {/* Add in logo here later */}
          Teacher Source
        </NavLink>
        <div className="links"> {/* Add in dropdown here later */}
          <NavLink className="link" to="/dashboard">
            Entire Site
          </NavLink>
          {/* Add in Search bar here later */}
        </div>
      </div>
    </header>
  );
};

export default Nav;

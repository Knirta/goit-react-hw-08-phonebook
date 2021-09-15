import React from "react";
import { NavLink } from "react-router-dom";
import "./AuthMenu.scss";

const AuthMenu = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className="Navlink"
        activeClassName="activeNavlink"
      >
        Registration
      </NavLink>
      <NavLink to="/login" className="Navlink" activeClassName="activeNavlink">
        Login
      </NavLink>
    </div>
  );
};

export default AuthMenu;

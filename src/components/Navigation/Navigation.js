import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";
import "./Navigation.scss";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <NavLink exact to="/" className="Navlink" activeClassName="activeNavlink">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className="Navlink"
          activeClassName="activeNavlink"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;

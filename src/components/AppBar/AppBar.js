import React from "react";
import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
import AuthMenu from "components/AuthMenu";
import UserMenu from "components/UserMenu";
import authSelectors from "redux/auth/auth-selectors";
import "./AppBar.scss";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className="Header">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

export default AppBar;

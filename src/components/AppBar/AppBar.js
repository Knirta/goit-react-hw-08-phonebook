import React from "react";
import Navigation from "components/Navigation";
import AuthMenu from "components/AuthMenu";
import UserMenu from "components/UserMenu";
import "./AppBar.scss";

const AppBar = () => {
  return (
    <header className="Header">
      <Navigation />
      <AuthMenu />
      <UserMenu />
    </header>
  );
};

export default AppBar;

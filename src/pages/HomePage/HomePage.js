import React from "react";
import phonebook from "./phonebook.jpg";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="wrapper">
      <img src={phonebook} className="img" width="120" alt="phonebook" />
      <span className="caption">Wellcome to yout favorite Phonebook</span>
    </div>
  );
};

export default HomePage;

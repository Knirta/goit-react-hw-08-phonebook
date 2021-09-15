import React from "react";

const RegistrationPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Enter your name"></input>
        <input type="text" name="email" placeholder="Enter your email"></input>
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
        ></input>
        <button type="submit">Register now</button>
      </form>
    </div>
  );
};

export default RegistrationPage;

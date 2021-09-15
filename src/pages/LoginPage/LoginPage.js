import React from "react";

const LoginPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="email" placeholder="Enter your email"></input>
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;

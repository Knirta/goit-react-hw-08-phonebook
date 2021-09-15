import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;

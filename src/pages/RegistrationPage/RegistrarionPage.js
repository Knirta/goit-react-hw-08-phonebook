import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);

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
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange}
          ></input>
        </label>
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
        <button type="submit">Register now</button>
      </form>
    </div>
  );
};

export default RegistrationPage;

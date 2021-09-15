import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import authOperations from "redux/auth/auth-operations";
import "./RegistrationPage.scss";

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
      <h1 className="title">Registration</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          className="input"
          label="Name:"
          variant="outlined"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <TextField
          className="input"
          label="Email:"
          variant="outlined"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <TextField
          className="input"
          label="Password:"
          variant="outlined"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <Button type="submit" variant="outlined" color="primary">
          Register now
        </Button>
      </form>
    </div>
  );
};

export default RegistrationPage;

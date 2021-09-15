import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import authOperations from "redux/auth/auth-operations";
import "./LoginPage.scss";
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
      <h1 className="title">Please log in</h1>
      <FormControl autoComplete="off">
        <TextField
          margin="normal"
          label=" Email:"
          variant="outlined"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <TextField
          margin="normal"
          label=" Password:"
          variant="outlined"
          name="password"
          value={password}
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="outlined"
          color="primary"
        >
          Log In
        </Button>
      </FormControl>
    </div>
  );
};

export default LoginPage;

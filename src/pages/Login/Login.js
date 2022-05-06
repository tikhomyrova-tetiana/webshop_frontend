import React from "react";
import axios from "axios";
import "./styles.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

function Login(props) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const token = await axios.post("http://localhost:4000/auth/login", {
        email: inputEmail,
        password: inputPassword,
      });
      props.setToken(token.data);
      console.log(token.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-form">
      {!props.token ? (
        <div>
          <div>
            <h1>Login</h1>
            <h2>Welcome! Log in</h2>
          </div>
          <div>
            <h3>Email Address</h3>
            <input
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
            ></input>
          </div>
          <div>
            <h3>Password</h3>
            <input
              value={inputPassword}
              onChange={(event) => setInputPassword(event.target.value)}
            ></input>
          </div>
          <div>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </Button>
          </div>
        </div>
      ) : (
        <div>You are logged in!</div>
      )}
    </div>
  );
}

export default Login;

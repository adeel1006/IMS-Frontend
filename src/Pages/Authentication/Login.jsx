import React, { useState } from "react";
import { Box } from "@mui/material";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // Handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  //handle email and password functions
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    // setPassword(event.target.value);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const isValidPassword = passwordRegex.test(event.target.value);

    if (isValidPassword) {
      setPassword(event.target.value);
      setPasswordError("");
    } else {
      setPassword("");
      setPasswordError(
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long."
      );
    }
  };
  return (
    <>
      <Box className="login-container">
        <Box className="logo">
          <img src={logo} alt="Gigalabs" />
        </Box>
        <Box className="container-login">
          <h4>Welcome Back!</h4>
          <p>Enter your credentials to access your account</p>
          <form className="login-form">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              onChange={handleEmailChange}
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <p className="password-warning">{passwordError}</p>
            )}
            <button
              type="submit"
              className="signin-btn"
              onClick={handleSubmit}
              disabled={passwordError}
            >
              Sign In
            </button>
          </form>
        </Box>
        <p className="reset-password-link">
          Forgot your Password? <Link to="/forgotPassword">Reset Password</Link>
        </p>
      </Box>
    </>
  );
};

export default Login;

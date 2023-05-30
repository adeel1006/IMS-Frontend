import React, { useState } from "react";
import { Box } from "@mui/material";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  // Handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <Box className="login-container">
        <Box className="logo">
          <img src={logo} alt="Gigalabs" />
        </Box>
        <Box className="container-login">
          <h4>Forgot Password?</h4>
          <p>
            Don't worry, enter below your email and a verification code will be
            sent to your mail
          </p>
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
            <button type="submit" className="signin-btn" onClick={handleSubmit}>
              Send Verification Code
            </button>
          </form>
        </Box>
        <p className="reset-password-link">
          Enterted wrong credentials? Go back to <Link to="login">Login</Link>
        </p>
      </Box>
    </>
  );
};

export default ForgotPassword;

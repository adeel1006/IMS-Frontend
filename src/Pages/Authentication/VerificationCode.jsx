import React, { useState } from "react";
import { Box } from "@mui/material";
import logo from "../../Assets/logo.png";

const styles = {
  resend: {
    textAlign: "center",
    color: "gray",
    fontSize: "x-small,",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

const VerificationCode = () => {
  const [vCode, setVcode] = useState("");
  // Handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleVerificationCode = (event) => {
    setVcode(event.target.value);
  };
  return (
    <Box className="login-container">
      <Box className="logo">
        <img src={logo} alt="Gigalabs" />
      </Box>
      <Box className="container-login">
        <h4>Verification Code</h4>
        <p>Enter Verification code sent to your email to continue</p>
        <form className="login-form">
          <label>Verification Code</label>
          <input
            type="text"
            placeholder="Enter Verification Code"
            required
            title="Please enter a valid Verification Code"
            onChange={handleVerificationCode}
          />
          <button type="submit" className="signin-btn" onClick={handleSubmit}>
            Continue
          </button>
          <p style={styles.resend}>Resend code in (25 sec)</p>
        </form>
      </Box>
    </Box>
  );
};

export default VerificationCode;

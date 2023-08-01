import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Alert, AlertTitle, Box } from "@mui/material";
import logo from "../../Assets/logo.png";
import { resetPassword } from "./authApi";

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
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigateTo = useNavigate();

  const otpMutation = useMutation(resetPassword, {
    onSuccess: (data) => {
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        navigateTo("/login");
      }, 3000);
    },
    onError: (error) => {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        navigateTo("/login");
      }, 6000);
    },
  });
  const email =
    location.state && location.state.email ? location.state.email : "";

  // Handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    otpMutation.mutate({ email, newPassword, otp });
  };
  const handleOtp = (event) => {
    setOtp(event.target.value);
  };

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  return (
    <Box className="login-container">
      <Box className="logo">
        <img src={logo} alt="Gigalabs" />
      </Box>
      <Box className="container-login">
        <h4>Verification Code</h4>
        <p>Enter Verification code sent to your email to continue</p>
        {success && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Password reset successful! Navigating to login page...
          </Alert>
        )}
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Password reset failed. Please try again later, Navigating to login
            page...
          </Alert>
        )}
        <form className="login-form">
          <label>Verification Code</label>
          <input
            type="text"
            placeholder="Enter Verification Code"
            required
            title="Please enter a valid Verification Code"
            onChange={handleOtp}
          />
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter New Password"
            required
            minLength={8}
            onChange={handleNewPassword}
          />

          <button type="submit" className="signin-btn" onClick={handleSubmit}>
            Continue
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default VerificationCode;

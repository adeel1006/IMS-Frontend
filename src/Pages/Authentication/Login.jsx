import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { Box } from "@mui/material";
import {
  setUserRole,
  setUserId,
  setAccessToken,
  setError,
} from "../../Redux/Reducers/authSlice";
import { httpRequest, loginUrl } from "../../Utils/httpRequestsStrings";
import "./Login.css";
import logo from "../../Assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const loginMutation = useMutation(
    async (formData) => {
      const response = await axios.post(`${httpRequest + loginUrl}`, formData);
      return response.data?.access_token;
    },
    {
      onError: (error) => {
        dispatch(setError(error.message));
      },
      onSuccess: (data) => {
        dispatch(setAccessToken(data));
        handleRedirect(data);
      },
    }
  );

  const handleRedirect = (accessToken) => {
    const decodedToken = JSON.parse(atob(accessToken.split(".")[1]));
    const userRole = decodedToken.role;
    const userId = decodedToken.userId;
    dispatch(setUserRole(userRole));
    dispatch(setUserId(userId));

    switch (userRole) {
      case "SUPER_ADMIN":
        navigateTo("/superAdminDashboard");
        break;
      case "ADMIN":
        navigateTo("/adminDashboard");
        break;
      case "EMPLOYEE":
        navigateTo("/employeeDashboard");
        break;
      default:
        navigateTo("/");
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const isValidPassword = passwordRegex.test(password);

    if (isValidPassword) {
      loginMutation.mutate({ email, password });
      setEmail("");
      setPassword("");
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long."
      );
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
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
          <form className="login-form" onSubmit={handleSubmit}>
            {loginMutation.isError && (
              <p className="error-message">
                Invalid email or password. Please try again.
              </p>
            )}
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              required
              title="Please enter a valid email address"
              onChange={handleEmailChange}
              value={email}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <p className="password-warning">{passwordError}</p>
            )}
            <button
              type="submit"
              className="signin-btn"
              disabled={passwordError || loginMutation.isLoading}
            >
              {loginMutation.isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="reset-password-link">
            <Link to="/forgotPassword">
              Forgot your Password? Reset Password
            </Link>
          </p>
        </Box>
      </Box>
    </>
  );
};

export default Login;

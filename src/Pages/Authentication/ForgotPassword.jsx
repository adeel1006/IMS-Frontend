import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import logo from "../../Assets/logo.png";
import { setError } from "../../Redux/Reducers/authSlice";
import { seaGreenBtn, redBtn } from "../../Utils/ColorConstants";
import {
  forgotPasswordUrl,
  httpRequest,
} from "../../Utils/httpRequestsStrings";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const forgotPasswordMutation = useMutation(
    async (formData) => {
      const response = await axios.post(
        `${httpRequest + forgotPasswordUrl}`,
        formData
      );
      return response.data;
    },
    {
      onError: (error) => {
        dispatch(setError(error.message));
      },
      onSuccess: () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          navigate("/verificationCode", { state: { email } });
        }, 2000);
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    forgotPasswordMutation.mutate({ email });
    setEmail("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    return () => {
      //sets the success message false when loads
      setShowSuccessMessage(false);
    };
  }, []);

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
          {forgotPasswordMutation.isError && (
            <p style={{ fontWeight: "bold", color: redBtn }}>
              Entered Email Does Not Exist!
            </p>
          )}
          {showSuccessMessage && (
            <p style={{ fontWeight: "bold", color: seaGreenBtn }}>
              Success! Check your email inbox for the OTP.
            </p>
          )}
          <form className="login-form">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              onChange={handleEmailChange}
              value={email}
            />
            <button
              type="submit"
              className="signin-btn"
              onClick={handleSubmit}
              disabled={forgotPasswordMutation.isLoading}
            >
              {forgotPasswordMutation.isLoading
                ? "Sending..."
                : "Send Verification Code"}
            </button>
          </form>
        </Box>
        <p className="reset-password-link">
          <Link to="/login"> Enterted wrong credentials? Go back to Login</Link>
        </p>
      </Box>
    </>
  );
};

export default ForgotPassword;

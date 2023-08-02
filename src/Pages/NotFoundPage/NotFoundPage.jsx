import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../Assets/logo.png";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <Box className="not-found-container">
      <img className="image-logo" src={logo} alt="Logo" />
      <Typography className="not-found-title" fontWeight="bold" variant="h2">
        404 - Page Not Found
      </Typography>
      <Typography className="not-found-message">
        The page you are looking for does not exist.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;

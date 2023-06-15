import React from "react";
import { Box, Typography } from "@mui/material";
// import "./NotFoundPage.css";
import logo from "../../Assets/logo.png";

const Unauthorized = () => {
  return (
    <Box className="not-found-container">
      <img className="image-logo" src={logo} alt="Logo" />
      <Typography className="not-found-title" fontWeight="bold" variant="h2">
        Unauthorized!
      </Typography>
      <Typography className="not-found-message">
        You have no access permission!
      </Typography>
    </Box>
  );
};

export default Unauthorized;

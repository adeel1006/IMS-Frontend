import React from "react";
import "./AdminDetails.css";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import avatar from "../../../Assets/avatar.png";
import logo from "../../../Assets/logoBlack.png";
import { Box, Button, Typography, Divider } from "@mui/material";

const AdminDetails = () => {
  return (
    <>
      <Box className="container">
        <Box className="details-header component-header">
          <Box className="left-header-content">
            <Button style={{ color: "gray" }}>
              <BackArrow />
              Back
            </Button>
            <Typography fontWeight="bold" variant="h4">
              Admin Details
            </Typography>
          </Box>
          <Divider />
          {/* <Box className="right-header-content"><BasicMenu /></Box> */}
        </Box>
        <Box className="admin-info">
          <Box className="profile-pic">
            <img src={avatar} alt="profile pic " />
          </Box>
          <Box className="admin-details">
            <span className="pri-heading">John Smith</span>
            <p className="gray-text">john@gmail.com</p>
            <p className="gray-text">(555) 555-5555</p>
          </Box>
        </Box>
        <Divider />
        <Box className="admin-organization">
          <Typography fontWeight="bold" variant="h5">
            Organization
          </Typography>
          <Box className="admin-organization">
            <Box className="org-info-main">
              <Box className="profile-pic">
                <img src={logo} alt="logo" />
              </Box>
              <Box className="rep-data">
                <Typography fontWeight="bold" variant="h5">
                  Gigalabs Pvt. Ltd.
                </Typography>
                <p>contact@gigalabs.co</p>
              </Box>
            </Box>

            <Box className="org-det-field">
              <Typography fontWeight="bold">Representative Name</Typography>
              <Typography>John Doe:</Typography>
            </Box>
            <Box className="rep-contact org-det-field ">
              <Typography fontWeight="bold">Representative Contact:</Typography>
              <Typography>(555) 555-5555</Typography>
            </Box>
            <Box className="no-border org-det-field">
              <Typography fontWeight="bold">Bio:</Typography>
              <Typography>
                Gigalabs is a web and mobile development firm that has expertise
                in over 12 technology stacks including various frameworks.
              </Typography>
            </Box>
            <Box className="no-border org-det-field">
              <Typography fontWeight="bold">Address</Typography>
              <Typography>123 Main Street, Anytown, CA 91234</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminDetails;

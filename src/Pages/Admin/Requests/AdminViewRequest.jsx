import React from "react";
import "./AdminViewRequest.css";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Box, Typography, Button, Divider } from "@mui/material";
import avatar from "../../../Assets/avatar.png";
import { dangerButton, seaGreenBtn } from "../../../Utils/ColorConstants";
const reqBtnStyle = {
  color: "white",
  borderRadius: "8px",
  padding: "3%",
  fontWeight: "bold",
  margin: "0% 2%",
};
const AdminViewRequest = () => {
  return (
    <>
      <Box className="container">
        <Box className="component-header">
          <Box className="left-header-content">
            <Button style={{ color: "gray" }}>
              <BackArrow />
              Back
            </Button>
            <h1>Request ID : 354634</h1>
            <Button
              style={{
                backgroundColor: "rgb(38, 150, 255)",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Pending
            </Button>
            <Typography sx={{ margin: "0% 2%", fontWeight: "bold" }}>
              Submission Date: 11/03/23
            </Typography>
          </Box> 
          <Box className="right-header-req">
            <Button
              style={{
                ...reqBtnStyle,
                backgroundColor: dangerButton,
              }}
            >
              Reject Request
            </Button>

            <Button
              style={{
                ...reqBtnStyle,
                backgroundColor: seaGreenBtn,
              }}
            >
              Approve Request
            </Button>
          </Box>
        </Box>

        <Box className="request-info">
          <Box className="description-heading">Description</Box>
          <Box className="request-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              I'm writing to request a new gadget for my office. I'm currently
              using a very old and outdated computer, and it's starting to show
              its age. I'm having trouble running the latest software, and the
              hardware is starting to fail. I'm requesting a new laptop that
              would be able to handle the demands of my work. I would also like
              a new printer, as the current one is constantly jamming. I'm
              confident that these new gadgets would help me to be more
              productive in my work, and I would be grateful for your
              consideration
            </Typography>
          </Box>
        </Box>

        <Box className="request-info">
          <Box className="description-heading">Item Name</Box>
          <Box className="request-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              Macbook Pro
            </Typography>
          </Box>
        </Box>

        <Box className="request-info">
          <Box className="description-heading">Category</Box>
          <Box className="request-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              Electronics
            </Typography>
          </Box>
        </Box>
        <Box className="request-info">
          <Box className="description-heading">Sub-Category</Box>
          <Box className="request-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              Notebooks & Laptops
            </Typography>
          </Box>
        </Box>
        <Divider />

        <Box className="req-info">
          <Box className="profile-pic">
            <img src={avatar} alt="profile pic " />
          </Box>
          <Box className="req-details">
            <span className="pri-heading">John Smith</span>
            <p className="gray-text">john@gmail.com</p>
            <p className="gray-text">(555) 555-5555</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminViewRequest;

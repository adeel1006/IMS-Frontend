import React from "react";
import "./ViewRequest.css";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Box, Typography, Button } from "@mui/material";

const ViewRequest = () => {
  return (
    <>
      <Box className="container">
        <Box className="component-header">
          <Box className="left-header-content">
            <Button style={{ color: "gray" }}>
              <BackArrow />
              Back
            </Button>
            <h1>Complaint ID : 4646</h1>
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
              Submission Date: 11/11/22
            </Typography>
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
      </Box>
    </>
  );
};

export default ViewRequest;

import React from "react";
import "./ViewComplain.css";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Box, Typography, Button } from "@mui/material";

const ViewComplain = () => {
  return (
    <>
      <Box className="container">
        <Box className="component-header">
          <Box className="left-header-content">
            <Button style={{ color: "gray" }}>
              <BackArrow />
              Back
            </Button>
            <h1>Complaint ID : 1234</h1>
            <Button
              style={{
                backgroundColor: "rgb(38, 150, 255)",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Pending
            </Button>
            <Typography sx={{ margin: "0% 2%", fontWeight:"bold" }}>
              Submission Date: 11/11/22
            </Typography>
          </Box>
        </Box>

        <Box className="complaint-info">
          <Box className="description-heading">Title</Box>
          <Box className="complaint-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              AC Not working
            </Typography>
          </Box>
        </Box>

        <Box className="complaint-info">
          <Box className="description-heading">Description</Box>
          <Box className="complaint-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              Dear Gigalabs, I am writing to express my disappointment with the
              recent customer service I received from your company. Despite
              multiple attempts to resolve my issue, I found the level of
              support provided to be inadequate and unhelpful. I kindly request
              a prompt resolution to this matter to restore my faith in your
              organization.
            </Typography>
          </Box>
        </Box>

        <Box className="complaint-info">
          <Box className="description-heading">Suggestion</Box>
          <Box className="complaint-content">
            <Typography
              className="description-content"
              style={{ textAlign: "justify" }}
            >
              Hope it will resolve soon
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ViewComplain;

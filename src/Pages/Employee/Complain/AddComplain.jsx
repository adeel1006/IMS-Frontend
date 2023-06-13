import React from "react";
import { Box, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./AddComplain.css";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import { useNavigate } from 'react-router-dom';

const AddComplain = () => {
  const navigateTo = useNavigate();
  const handleGoBack = () => {
    navigateTo(-1);
  };
  return (
    <>
      <Box className="container">
        <Box className="inner-content">
          <Box className="new-org-header">
            <Box className="left-btns header-org-btns">
              <button onClick={handleGoBack} className="back-btn">
                <KeyboardBackspaceIcon fontSize="small" />
                Back
              </button>
              <h1>Add New Complain</h1>
            </Box>
            <Box className="right-btns header-org-btns">
              <button onClick={handleGoBack} className="cancel-btn btn">Cancel</button>
              <button style={{backgroundColor: seaGreenBtn}} className="save-btn btn">Submit</button>
            </Box>
          </Box>

          <Box className="new-complain-form">
            <Box className="name data-field">
              <span className="form-left">Title</span>
              <TextField
                className="input-field"
                required
                placeholder="Enter Title..."
              ></TextField>
            </Box>

            <Box className="email data-field">
              <span className="form-left">Description</span>

              <TextField
                className="input-field"
                required
                multiline
                rows={6}
                placeholder="Enter Description..."
              />
            </Box>

            <Box className="contact data-field">
              <span className="form-left">Suggestion</span>
              <TextField
                className="input-field"
                required
                multiline
                rows={6}
                type="text"
                placeholder="Enter Suggestion..."
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddComplain;

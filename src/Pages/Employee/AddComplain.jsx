import React from "react";
import { Box, Divider, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./AddComplain.css";
const AddComplain = () => {
  return (
    <>
      <Box className="container">
        <Box className="inner-content">


        

        <Box className="new-adm-header">
          <Box className="left-btns header-adm-btns">
            <button className="back-btn">
              <KeyboardBackspaceIcon fontSize="small" />
              Back
            </button>
            <h1>Add New Complain</h1>
          </Box>
          <Box className="right-btns header-adm-btns">
            <button className="cancel-btn btn">Cancel</button>
            <button className="save-btn btn">Submit</button>
          </Box>
        </Box>

        <Box className="new-complain-form">
          <Box className="name data-field">
            <span className="form-left">Title</span>
            <TextField required size="small" placeholder="Enter Title..."></TextField>
          </Box>

          <Box className="email data-field">
            <span className="form-left">Description</span>

            <TextField required size="small" multiline rows={7} placeholder="Enter Description..." />
          </Box>

          <Box className="contact data-field">
            <span className="form-left">Suggestion</span>
            <TextField required size="small" multiline rows={7} type="text" placeholder="Enter Suggestion..." />
          </Box>
        </Box>

        </Box>
      </Box>
    </>
  );
};

export default AddComplain;

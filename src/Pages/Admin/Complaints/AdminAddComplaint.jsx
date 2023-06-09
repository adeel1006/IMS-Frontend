import React from "react";
import "./AdminAddComplaint.css";
import { Box, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
const AdminAddComplaint = () => {
  return (
    <>
      <Box className="container">
        <Box className="inner-content">
          <Box className="new-org-header">
            <Box className="left-btns header-org-btns">
              <button className="back-btn">
                <KeyboardBackspaceIcon fontSize="small" />
                Back
              </button>
              <h1>Add New Complain</h1>
            </Box>
            <Box className="right-btns header-org-btns">
              <button className="cancel-btn btn">Cancel</button>
              <button
                style={{ backgroundColor: seaGreenBtn }}
                className="save-btn btn"
              >
                Submit
              </button>
            </Box>
          </Box>

          <Box className="new-complain-form">
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
              <span className="form-left">Image</span>
              <Box className="logo-uploadd">
                <img src={imgPlaceHolder} alt="image" />
              </Box>

              <label
                style={{ marginLeft: "5%" }}
                htmlFor="upload-btn"
                className="upload-img-btn"
              >
                <DriveFolderUploadIcon />
                Upload
              </label>
              <input id="upload-btn" type="file" hidden />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminAddComplaint;

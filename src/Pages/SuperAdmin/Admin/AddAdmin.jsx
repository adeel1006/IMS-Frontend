import React from "react";
import { Box, TextField, Select } from "@mui/material";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./AddAdminStyle.css";

const AddAdmin = () => {
  return (
    <>
      <Box className="container">
        <Box className="new-adm-header">
          <Box className="left-btns header-adm-btns">
            <button className="back-btn">
              <KeyboardBackspaceIcon fontSize="small" />
              Back
            </button>
            <h1>Add New Admin</h1>
          </Box>
          <Box className="right-btns header-adm-btns">
            <button className="cancel-btn btn">Cancel</button>
            <button className="save-btn btn">Save</button>
          </Box>
        </Box>

        <Box className="new-adm-form">
            <Box className="img-upload">
                <Box className="logo-upload">
                <img src={imgPlaceHolder} alt="image" />
                </Box>
                <Box className="heading">
                <span className="Box-heading">Admin's Picture *</span>
                <p>Upload a high-res picture with face is clear</p>
                </Box>
                <label htmlFor="upload-btn" className="upload-img-btn">
                <DriveFolderUploadIcon />
                Upload
                </label>
                <input id="upload-btn" type="file" hidden />
            </Box>

          <Box className="name data-field">
            <span className="form-left">Name</span>
            <TextField size="small" placeholder="Full Name"></TextField>
          </Box>

          <Box className="email data-field">
            <span className="form-left">Email Address</span>

            <TextField size="small" placeholder="Email Address" />
          </Box>

          <Box className="org-name data-field">
            <span className="form-left">Organization Name</span>
            <Select placeHolder={"Select Organization"} />
          </Box>

          <Box className="contact data-field">
            <span className="form-left">Contact Number</span>
            <TextField size="small" type="text" placeholder="Contact Number" />
          </Box>

          <Box className="credentials">
            <span className="Box-heading">Credentials</span>
            <p>
              Below are the one-time created credentials. These will be sent to
              the mentioned email.
            </p>
            <Box className="crd-email data-field" style={{ border: "none" }}>
              <span className="form-left">Email Address</span>

              <TextField size="small" type="text" placeholder="Email Address" />
            </Box>

            <Box className="crd-password data-field" style={{ border: "none" }}>
              <span className="form-left">Password</span>

              <TextField size="small" type="text" placeholder="Password" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddAdmin;

import React from "react";
import { Box, TextField } from "@mui/material";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./AddOrganization.css";

const AddOrganization = () => {
  return (
    <>
      <Box className="container">
        <Box className="new-org-header">
          <Box className="left-btns header-org-btns">
            <button className="back-btn">
              <KeyboardBackspaceIcon fontSize="small" />
              Back
            </button>
            <h1>Add New Organization</h1>
          </Box>
          <Box className="right-btns header-org-btns">
            <button className="cancel-btn btn">Cancel</button>
            <button className="save-btn btn">Save</button>
          </Box>
        </Box>

        <Box className="new-org-form">
          <Box className="img-upload">
            <Box className="logo-upload">
              <img src={imgPlaceHolder} alt="image" />
            </Box>
            <Box className="heading">
              <span className="Box-heading">Organization Logo</span>{" "}
              <span className="mandatory-asterik">*</span>
              <p>Upload a high-res picture with face is clear</p>
            </Box>
            <label htmlFor="upload-btn" className="upload-img-btn">
              <DriveFolderUploadIcon />
              Upload
            </label>
            <input id="upload-btn" type="file" hidden />
          </Box>

          <Box className="name data-field">
            <span className="form-left">Name of Organization</span>
            <TextField
              size="small"
              placeholder="Name of Organization"
            ></TextField>
          </Box>

          <Box className="email data-field">
            <span className="form-left">Email Address</span>

            <TextField size="small" placeholder="Email Address" />
          </Box>

          <Box className="bio data-field">
            <span className="form-left">Bio</span>

            <TextField size="large" placeholder="Short Bio here..." />
          </Box>

          <Box className="address data-field">
            <span className="form-left">Address</span>
            <Box className="address-fields">
              <TextField sx={{ mt: 2 }} size="small" placeholder="Address" />
              <TextField sx={{ mt: 2 }} size="small" placeholder="City" />
              <TextField sx={{ mt: 2 }} size="small" placeholder="Country" />
              <TextField sx={{ mt: 2 }} size="small" placeholder="Zip Code" />
            </Box>
          </Box>

          <Box className="contact data-field">
            <span className="form-left">Representative Name</span>
            <TextField
              size="small"
              type="text"
              placeholder="Representative Name"
            />
          </Box>

          <Box className="contact data-field">
            <span className="form-left">Representative Contact No.</span>
            <TextField
              size="small"
              type="text"
              placeholder="Representative Contact No."
            />
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

export default AddOrganization;

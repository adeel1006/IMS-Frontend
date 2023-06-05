import React from "react";
import "./EditProfile.css";
import { Box, TextField } from "@mui/material";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SelectBox from "../../../Components/SelectBox";
import { options } from "../../../Utils/testingData";

//fields width
let inputWidth = {width:"600px"}
const EditProfile = () => {
  return (
    <>
      <Box className="container">
        <Box className="new-profile-header">
          <Box className="left-btns header-profile-btns">
            <button className="back-btn">
              <KeyboardBackspaceIcon fontSize="small" />
              Back
            </button>
            <h1>Edit Profile</h1>
          </Box>
          <Box className="right-btns header-profile-btns">
            <button className="save-btn btn">Save</button>
          </Box>
        </Box>

        <Box className="new-profile-form">
          <Box className="img-upload">
            <Box className="logo-upload">
              <img src={imgPlaceHolder} alt="image" />
            </Box>
            <Box className="heading">
              <span className="Box-heading">Profile Picture</span>
              <span className="mandatory-asterik"> *</span>
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
            <TextField sx={inputWidth} size="small" placeholder="Enter Full Name"></TextField>
          </Box>

          <Box className="email data-field">
            <span className="form-left">Email Address</span>

            <TextField sx={inputWidth} size="small" placeholder="Enter Email Address" />
          </Box>

          <Box className="desg data-field">
            <span className="form-left">Designation</span>

            <TextField sx={inputWidth} size="small" placeholder="Enter Designation" />
          </Box>

          <Box className="org-name data-field">
            <span className="form-left">Department</span>

            <SelectBox
              className="selectBox"
              minWidth="600px"
              marginLeft="0px"
              marginRight="0px"
              placeHolder={"Select Department"}
              options={options}
            />
          </Box>

          <Box className="contact data-field">
            <span className="form-left">Contact Number</span>
            <TextField sx={inputWidth} size="small" type="text" placeholder="Enter Contact Number" />
          </Box>

          <Box className="edu data-field">
            <span className="form-left">Education</span>
            <TextField sx={inputWidth} size="small" type="text" placeholder="Enter Education" />
          </Box>


          <Box className="exp data-field">
            <span className="form-left">Company Experience (years)</span>
            <TextField sx={inputWidth} size="small" type="text" placeholder="Enter Company Experience" />
          </Box>


          <Box className="contact data-field">
            <span className="form-left">Total Experience (years)</span>
            <TextField sx={inputWidth} size="small" type="text" placeholder="Enter Total Experience" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EditProfile;

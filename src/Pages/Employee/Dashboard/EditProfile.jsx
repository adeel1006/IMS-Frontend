import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Box, TextField } from "@mui/material";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SelectBox from "../../../Components/SelectBox";
import { updateUserProfile } from "./ComplainDashboardApi";
import { departments } from "../../../Utils/constants";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import "./EditProfile.css";
const styles = {
  inputWidth: { width: "600px" },
  btnStyle: { backgroundColor: seaGreenBtn },
};

const EditProfile = () => {
  const [formValues, setFormValues] = useState({
    image: "",
    username: "",
    email: "",
    designation: "",
    department: "",
    contact: "",
    education: "",
    companyExperience: "",
    totalExperience: "",
  });

  const navigateTo = useNavigate();
  const submitFormMutation = useMutation(updateUserProfile);

  const handleGoBack = () => {
    navigateTo(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    const id = localStorage.getItem("userId");
    submitFormMutation.mutate({ id: id, formData: formValues });
    navigateTo(-1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormValues((prevValues) => ({
        ...prevValues,
        image: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    const formData = new FormData();
    formData.append("image", file);
  };
  return (
    <>
      <Box className="container">
        <Box className="new-profile-header">
          <Box className="left-btns header-profile-btns">
            <button onClick={handleGoBack} className="back-btn">
              <KeyboardBackspaceIcon fontSize="small" />
              Back
            </button>
            <h1>Edit Profile</h1>
          </Box>
          <Box className="right-btns header-profile-btns">
            <button
              style={styles.btnStyle}
              className="save-btn btn"
              onClick={handleSubmit}
            >
              Save
            </button>
          </Box>
        </Box>

        <Box className="new-profile-form">
          <form onSubmit={handleSubmit}>
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
              {/* <input id="upload-btn" type="file" hidden /> */}
              <input
                id="upload-btn"
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
                hidden
              />
            </Box>

            <Box className="name data-field">
              <span className="form-left">Name</span>
              <TextField
                sx={styles.inputWidth}
                size="small"
                placeholder="Enter Full Name"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </Box>

            <Box className="email data-field">
              <span className="form-left">Email Address</span>

              <TextField
                sx={styles.inputWidth}
                size="small"
                placeholder="Enter Email Address"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Box>

            <Box className="desg data-field">
              <span className="form-left">Designation</span>

              <TextField
                sx={styles.inputWidth}
                size="small"
                placeholder="Enter Designation"
                name="designation"
                value={formValues.designation}
                onChange={handleChange}
              />
            </Box>

            <Box className="org-name data-field">
              <span className="form-left">Department</span>

              <SelectBox
                className="selectBox"
                minWidth="600px"
                marginLeft="0px"
                marginRight="0px"
                placeHolder={"Select Department"}
                options={departments}
                name="department"
                value={formValues.department}
                onChange={handleChange}
              />
            </Box>

            <Box className="contact data-field">
              <span className="form-left">Contact Number</span>
              <TextField
                sx={styles.inputWidth}
                size="small"
                type="number"
                placeholder="Enter Contact Number"
                name="contact"
                value={formValues.contact}
                onChange={handleChange}
              />
            </Box>

            <Box className="edu data-field">
              <span className="form-left">Education</span>
              <TextField
                sx={styles.inputWidth}
                size="small"
                type="text"
                placeholder="Enter Education"
                name="education"
                value={formValues.education}
                onChange={handleChange}
              />
            </Box>

            <Box className="exp data-field">
              <span className="form-left">Company Experience (years)</span>
              <TextField
                sx={styles.inputWidth}
                size="small"
                type="text"
                placeholder="Enter Company Experience"
                name="companyExperience"
                value={formValues.companyExperience}
                onChange={handleChange}
              />
            </Box>

            <Box className="contact data-field">
              <span className="form-left">Total Experience (years)</span>
              <TextField
                sx={styles.inputWidth}
                size="small"
                type="text"
                placeholder="Enter Total Experience"
                name="totalExperience"
                value={formValues.totalExperience}
                onChange={handleChange}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default EditProfile;

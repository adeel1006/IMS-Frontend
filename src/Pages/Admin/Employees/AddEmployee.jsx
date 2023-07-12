import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { addNewEmployee } from "./AdminEmployeeApi";
import { departments } from "../../../Utils/constants";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SelectBox from "../../../Components/SelectBox";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import "./AddEmployee.css";

const styles = {
  fieldWidth: { width: "500px" },
  saveBtn: { backgroundColor: seaGreenBtn },
  fieldBorder: { border: "none" },
};

const AddEmployee = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    contact: "",
    role: "EMPLOYEE",
    department: "",
    password: "",
  });
  const navigateTo = useNavigate();
  const handleGoBack = () => {
    navigateTo(-1);
  };

  const submitFormMutation = useMutation(addNewEmployee);

  const handleSubmit = async (event) => {
    event.preventDefault();
    submitFormMutation.mutate(formValues);
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
    <Box className="container">
      <Box className="new-emp-header">
        <Box className="left-btns header-emp-btns">
          <button onClick={handleGoBack} className="back-btn">
            <KeyboardBackspaceIcon fontSize="small" />
            Back
          </button>
          <h1>Add New Employee</h1>
        </Box>
        <Box className="right-btns header-emp-btns">
          <button onClick={handleGoBack} className="cancel-btn btn">
            Cancel
          </button>
          <button
            style={styles.saveBtn}
            className="save-btn btn"
            onClick={handleSubmit}
          >
            Save
          </button>
        </Box>
      </Box>

      <Box className="new-emp-form">
        <form onSubmit={handleSubmit}>
          <Box className="img-upload">
            <Box className="logo-upload">
              <img src={imgPlaceHolder} alt="image" />
            </Box>
            <Box className="heading">
              <span className="Box-heading">Employee's Picture</span>
              <span className="mandatory-asterik"> *</span>
              <p>Upload a high-res picture with face is clear</p>
            </Box>
            <label htmlFor="upload-btn" className="upload-img-btn">
              <DriveFolderUploadIcon />
              Upload
            </label>
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
              sx={styles.fieldWidth}
              size="small"
              placeholder="Full Name"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </Box>

          <Box className="email data-field">
            <span className="form-left">Email Address</span>

            <TextField
              sx={styles.fieldWidth}
              size="small"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </Box>

          <Box className="contact data-field">
            <span className="form-left">Contact Number</span>
            <TextField
              sx={styles.fieldWidth}
              size="small"
              type="number"
              placeholder="Contact Number"
              name="contact"
              value={formValues.contact}
              onChange={handleChange}
            />
          </Box>

          <Box className="org-name data-field">
            <span className="form-left">Department</span>

            <SelectBox
              className="selectBox"
              minWidth="500px"
              marginLeft="0px"
              marginRight="0px"
              placeHolder={"Select Department"}
              options={departments}
              name="department"
              value={formValues.department}
              onChange={handleChange}
            />
          </Box>

          <Box className="credentials">
            <span className="Box-heading">Credentials</span>
            <p>
              Below are the one-time created credentials. These will be sent to
              the mentioned email.
            </p>
            <Box className="crd-email data-field" style={styles.fieldBorder}>
              <span className="form-left">Email Address</span>

              <TextField
                sx={styles.fieldWidth}
                size="small"
                type="text"
                placeholder="Email Address"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Box>

            <Box className="crd-password data-field" style={styles.fieldBorder}>
              <span className="form-left">Password</span>

              <TextField
                sx={styles.fieldWidth}
                size="small"
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddEmployee;

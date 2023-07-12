import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Box, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { submitAdmComplaint } from "./AdminComplainApi";
import "./AdminAddComplaint.css";

const styles = {
  submitBtn: { backgroundColor: seaGreenBtn },
  imgLabel: { marginLeft: "5%" },
};
const AdminAddComplaint = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const navigateTo = useNavigate();
  const submitFormMutation = useMutation(submitAdmComplaint);
  const handleGoBack = () => {
    navigateTo(-1);
  };

  const handleSubmit = (event) => {
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

  return (
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
            <button onClick={handleGoBack} className="cancel-btn btn">
              Cancel
            </button>
            <button
              style={styles.submitBtn}
              className="save-btn btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Box>
        </Box>

        <Box className="new-complain-form">
          <form onSubmit={handleSubmit}>
            <Box className="email data-field">
              <span className="form-left">Title</span>

              <TextField
                className="input-field"
                placeholder="Enter Title..."
                name="title"
                value={formValues.title}
                onChange={handleChange}
                required
              />
            </Box>

            <Box className="email data-field">
              <span className="form-left">Description</span>

              <TextField
                className="input-field"
                multiline
                rows={6}
                placeholder="Enter Description..."
                name="description"
                value={formValues.description}
                onChange={handleChange}
                required
              />
            </Box>

            {/* <Box className="contact data-field">
              <span className="form-left">Image</span>
              <Box className="logo-uploadd">
                <img src={imgPlaceHolder} alt="image" />
              </Box>

              <label
                style={styles.imgLabel}
                htmlFor="upload-btn"
                className="upload-img-btn"
              >
                <DriveFolderUploadIcon />
                Upload
              </label>
              <input id="upload-btn" type="file" hidden />
            </Box> */}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminAddComplaint;

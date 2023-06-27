import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import {
  addOrganization,
  httpRequest,
} from "../../../Utils/httpRequestsStrings";
import "./AddOrganization.css";

const btnStyle = { backgroundColor: seaGreenBtn };

const AddOrganization = () => {
  const [formValues, setFormValues] = useState({
    logo: "",
    name: "",
    email: "",
    bio: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    representativeName: "",
    representativeContact: "",
    password: "",
  });

  const navigateTo = useNavigate();
  const handleGoBack = () => {
    navigateTo(-1);
  };

  const submitFormMutation = useMutation(async (formData) => {
    const response = await axios.post(
      `${httpRequest + addOrganization}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    submitFormMutation.mutate(formValues);
    // console.log("FORM:" + JSON.stringify(formValues));
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
        logo: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }

    const formData = new FormData();
    formData.append("logo", file);
  };

  return (
    <>
      <Box className="container">
        <Box className="new-org-header">
          <Box className="left-btns header-org-btns">
            <button onClick={handleGoBack} className="back-btn">
              <KeyboardBackspaceIcon fontSize="small" />
              Back
            </button>
            <h1>Add New Organization</h1>
          </Box>
          <Box className="right-btns header-org-btns">
            <button onClick={handleGoBack} className="cancel-btn btn">
              Cancel
            </button>
            <button
              style={btnStyle}
              className="save-btn btn"
              onClick={handleSubmit}
            >
              Save
            </button>
          </Box>
        </Box>

        <Box className="new-org-form">
          <form onSubmit={handleSubmit}>
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
              <input
                id="upload-btn"
                type="file"
                accept="logo/*"
                onChange={handleChangeImage}
                hidden
              />
            </Box>

            <Box className="name data-field">
              <span className="form-left">Name of Organization</span>
              <TextField
                required
                size="small"
                placeholder="Name of Organization"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              ></TextField>
            </Box>

            <Box className="email data-field">
              <span className="form-left">Email Address</span>

              <TextField
                required
                size="small"
                placeholder="Email Address"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Box>

            <Box className="bio data-field">
              <span className="form-left">Bio</span>

              <TextField
                required
                size="large"
                placeholder="Short Bio here..."
                name="bio"
                value={formValues.bio}
                onChange={handleChange}
              />
            </Box>

            <Box className="address data-field">
              <span className="form-left">Address</span>
              <Box className="address-fields">
                <TextField
                  required
                  sx={{ mt: 2 }}
                  size="small"
                  placeholder="Address"
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                />
                <TextField
                  required
                  sx={{ mt: 2 }}
                  size="small"
                  placeholder="City"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                />
                <TextField
                  required
                  sx={{ mt: 2 }}
                  size="small"
                  placeholder="Country"
                  name="country"
                  value={formValues.country}
                  onChange={handleChange}
                />
                <TextField
                  required
                  sx={{ mt: 2 }}
                  size="small"
                  placeholder="Zip Code"
                  name="zipCode"
                  value={formValues.zipCode}
                  onChange={handleChange}
                />
              </Box>
            </Box>

            <Box className="contact data-field">
              <span className="form-left">Representative Name</span>
              <TextField
                required
                size="small"
                type="text"
                placeholder="Representative Name"
                name="representativeName"
                value={formValues.representativeName}
                onChange={handleChange}
              />
            </Box>

            <Box className="contact data-field">
              <span className="form-left">Representative Contact No.</span>
              <TextField
                required
                size="small"
                type="number"
                placeholder="Representative Contact No."
                name="representativeContact"
                value={formValues.representativeContact}
                onChange={handleChange}
              />
            </Box>

            <Box className="credentials">
              <span className="Box-heading">Credentials</span>
              <p>
                Below are the one-time created credentials. These will be sent
                to the mentioned email.
              </p>
              <Box className="crd-email data-field" style={{ border: "none" }}>
                <span className="form-left">Email Address</span>

                <TextField
                  required
                  size="small"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </Box>

              <Box
                className="crd-password data-field"
                style={{ border: "none" }}
              >
                <span className="form-left">Password</span>

                <TextField
                  required
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
    </>
  );
};

export default AddOrganization;

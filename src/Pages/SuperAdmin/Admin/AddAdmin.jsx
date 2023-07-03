import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SelectBox from "../../../Components/SelectBox";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import {
  addAdminUser,
  httpRequest,
  fetchOrganizationsList,
} from "../../../Utils/httpRequestsStrings";
import "./AddAdmin.css";

const AddAdmin = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    role: "ADMIN",
    organization: "",
    contact: "",
    credentialEmail: "",
    password: "",
  });

  const navigateTo = useNavigate();
  const handleGoBack = () => {
    navigateTo(-1);
  };

  const fetchOrganizations = async () => {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(
      `${httpRequest + fetchOrganizationsList}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  };

  const {
    data: organizationList,
    isLoading,
    isError,
  } = useQuery("organization", fetchOrganizations);


  const submitFormMutation = useMutation(async (formData) => {
    const response = await axios.post(
      `${httpRequest + addAdminUser}`,
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

  const organizations = organizationList?.map((item) => {
    const { id, name } = item;
    return { value: id, label: name };
  });

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

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">Error occurred while fetching complaints.</div>
    );
  }

  return (
    <Box className="container">
      <Box className="new-adm-header">
        <Box className="left-btns header-adm-btns">
          <button onClick={handleGoBack} className="back-btn">
            <KeyboardBackspaceIcon fontSize="small" />
            Back
          </button>
          <h1>Add New Admin</h1>
        </Box>
        <Box className="right-btns header-adm-btns">
          <button onClick={handleGoBack} className="cancel-btn btn">
            Cancel
          </button>
          <button
            style={{ backgroundColor: seaGreenBtn }}
            className="save-btn btn"
            onClick={handleSubmit}
          >
            Save
          </button>
        </Box>
      </Box>

      <Box className="new-adm-form">
        <form onSubmit={handleSubmit}>
          <Box className="img-upload">
            <Box className="logo-upload">
              <img src={imgPlaceHolder} alt="image" />
            </Box>
            <Box className="heading">
              <span className="Box-heading">Admin's Picture</span>
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
              required
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
              required
              size="small"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </Box>

          <Box className="org-name data-field">
            <span className="form-left">Organization Name</span>
            <SelectBox
              className="selectBox"
              minWidth="238px"
              marginLeft="0px"
              marginRight="0px"
              placeHolder="Select Organization"
              options={organizations}
              name="organization"
              value={formValues.organization}
              onChange={handleChange}
            />
          </Box>

          <Box className="contact data-field">
            <span className="form-left">Contact Number</span>
            <TextField
              required
              size="small"
              type="number"
              placeholder="Contact Number"
              name="contact"
              value={formValues.contact}
              onChange={handleChange}
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

            <Box className="crd-password data-field" style={{ border: "none" }}>
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
  );
};

export default AddAdmin;

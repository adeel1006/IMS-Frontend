import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import imgPlaceHolder from "../../../Assets/placeholder.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SelectBox from "../../../Components/SelectBox";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import { editAdmin, fetchOrganizations } from "./AdminApi";
import { addAdminUser, httpRequest } from "../../../Utils/httpRequestsStrings";
import "./AddAdmin.css";

const EditAdmin = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    organization: "",
    contact: "",
  });
  const { id } = useParams();
  const navigateTo = useNavigate();
  const handleGoBack = () => {
    navigateTo(-1);
  };

  const {
    data: organizationList,
    isLoading,
    isError,
  } = useQuery("organization", fetchOrganizations);

  const submitFormMutation = useMutation(editAdmin, {
    onSuccess: (data) => {
      navigateTo(-1);
    },
  });

  const organizations = organizationList?.map((item) => {
    const { id, name } = item;
    return { value: id, label: name };
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedFields = {};
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key) && formValues[key] !== "") {
        updatedFields[key] = formValues[key];
      }
    }
    submitFormMutation.mutate({ id: id, formData: updatedFields });
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
          <h1>Update Admin</h1>
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
              <span className="Box-heading">Update Admin's Picture</span>
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
              placeholder="Updated Full Name..."
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
              placeHolder="Update Organization"
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
              placeholder="Update Contact Number..."
              name="contact"
              value={formValues.contact}
              onChange={handleChange}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default EditAdmin;

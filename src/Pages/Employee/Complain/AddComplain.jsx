import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Box, TextField } from "@mui/material";
import { submitComplaint } from "./ComplainApi";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import "./AddComplain.css";
const btnStyle = { backgroundColor: seaGreenBtn };

const AddComplain = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    suggestion: "",
  });
  const navigateTo = useNavigate();

  const submitFormMutation = useMutation(submitComplaint);

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
    <>
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
                style={btnStyle}
                className="save-btn btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Box>
          </Box>

          <Box className="new-complain-form">
            <form onSubmit={handleSubmit}>
              <Box className="name data-field">
                <span className="form-left">Title</span>
                <TextField
                  className="input-field"
                  placeholder="Enter Title..."
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                  required
                ></TextField>
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

              <Box className="contact data-field">
                <span className="form-left">Suggestion</span>
                <TextField
                  className="input-field"
                  multiline
                  rows={6}
                  type="text"
                  placeholder="Enter Suggestion..."
                  name="suggestion"
                  value={formValues.suggestion}
                  onChange={handleChange}
                  required
                />
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddComplain;

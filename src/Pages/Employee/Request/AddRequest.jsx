import React from "react";
import { Box, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./AddRequest.css";
import { options } from "../../../Utils/testingData";
import SelectBox from "../../../Components/SelectBox";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
const AddRequest = () => {
  return (
    <>
      <Box className="container">
        <Box className="inner-content">
          <Box className="new-org-header">
            <Box className="left-btns header-org-btns">
              <button className="back-btn">
                <KeyboardBackspaceIcon fontSize="small" />
                Back
              </button>
              <h1>Add New Request</h1>
            </Box>
            <Box className="right-btns header-org-btns">
              <button className="cancel-btn btn">Cancel</button>
              <button style={{backgroundColor:seaGreenBtn}} className="save-btn btn">Submit</button>
            </Box>
          </Box>

          <Box className="new-request-form">
            <Box className="name data-field">
              <span className="form-left">Item Name</span>
              <TextField
                className="input-field"
                required
                placeholder="Enter Item Name..."
              ></TextField>
            </Box>

            <Box className="name data-field">
              <span className="form-left">Category</span>
              <SelectBox
                className="input-field"
                placeHolder="Select Category"
                minWidth="600px"
                marginLeft="0"
                options={options}
              />
            </Box>

            <Box className="name data-field">
              <span className="form-left">Sub-Category</span>
              <SelectBox
                className="input-field"
                placeHolder="Select Sub-Category"
                minWidth="600px"
                marginLeft="0"
                options={options}
              />
            </Box>

            <Box className="name data-field">
              <span className="form-left">Request Type</span>
              <SelectBox
                className="input-field"
                placeHolder="Select Request Type"
                minWidth="600px"
                marginLeft="0"
                options={options}
              />
            </Box>

            <Box className="contact data-field">
              <span className="form-left">Description</span>
              <TextField
                className="input-field"
                required
                multiline
                rows={6}
                type="text"
                placeholder="Enter Description..."
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddRequest;

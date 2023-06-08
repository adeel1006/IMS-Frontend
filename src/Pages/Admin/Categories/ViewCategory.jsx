import React from "react";
import "./ViewCategory.css";
import { Button, Box } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DropDownMenu from "../../../Components/DropDownMenu";

const ViewCategory = () => {
  return (
    <>
      <Box className="container">
        <Box className="component-header">
          <Box className="left-header">
            <Button style={{ color: "gray" }}>
              <KeyboardBackspaceIcon />
              Back
            </Button>
          </Box>

          <Box className="right-header">
            <DropDownMenu />
          </Box>
        </Box>

        <Box className="data-field">
          <span className="form-left bold-txt">Category Name</span>
          <p style={{ width: "160%" }}>Electronics</p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Sub-Category</span>
          <p style={{ width: "160%" }}>Laptop</p>
        </Box>

        <Box className="no-border">
          <Box className="data-field">
            <span className="form-left">Total Quantity</span>
            <p className="form-right">50</p>
          </Box>
          <Box className="data-field">
            <span className="form-left">Quantity Assigned</span>
            <p className="form-right">45</p>
          </Box>
        </Box>

        <Box className="data-field">
          <span className="form-left bold-txt">Quantity Unassigned</span>
          <p style={{ width: "160%" }}>4</p>
        </Box>

        <Box className="data-field">
          <span className="form-left bold-txt">Quantity Faulty</span>
          <p style={{ width: "160%" }}>1</p>
        </Box>

        <span className="Box-heading">Vendor</span>

        <Box className="no-border">
          <Box className="data-field">
            <span className="form-left">Name</span>
            <p className="form-right">Apple</p>
          </Box>
          <Box className="data-field">
            <span className="form-left">Contact Number</span>
            <p className="form-right">(777) 777 777</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ViewCategory;

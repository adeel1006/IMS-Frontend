import React from "react";
import "./ViewVendor.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, Box } from "@mui/material";
import DropDownMenu from "../../../Components/DropDownMenu";
import DataTable from "../../../Components/DataTable";
import { tableDataDashboard } from "../../../Utils/testingData";

const ViewVendor = () => {
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
          <span className="form-left bold-txt">Name</span>
          <p style={{ width: "160%" }}>Cameron Green</p>
        </Box>

        <Box className="data-field">
          <span className="form-left bold-txt">Contact Number</span>
          <p style={{ width: "160%" }}>(666) 666 666</p>
        </Box>

        <Box className="data-field">
          <span className="form-left bold-txt">Category</span>
          <p style={{ width: "160%" }}>Electronics</p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Sub-Category</span>
          <p style={{ width: "160%" }}>Laptop & Notebooks</p>
        </Box>

        <Box className="data-field">
          <DataTable rows= {tableDataDashboard}/>
        </Box>
      </Box>
    </>
  );
};

export default ViewVendor;

import React from "react";
import DropDownMenu from "../../../Components/DropDownMenu";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, Box, Typography } from "@mui/material";
import avatar from "../../../Assets/avatar.png";
import "./ViewItem.css";
const ViewItem = () => {
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

        <Box className="no-border">
          <Box className="data-field">
            <span className="form-left">Item Name</span>
            <p className="form-right">Macbook Pro</p>
          </Box>
          <Box className="data-field">
            <span className="form-left">Serial Number</span>
            <p className="form-right">12345678</p>
          </Box>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Description</span>
          <p style={{ width: "160%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            possimus qui! Neque soluta earum enim dolores aperiam esse
            voluptatibus doloribus vel unde incidunt nulla, velit nostrum
            recusandae pariatur qui commodi.
          </p>
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
          <span className="form-left bold-txt">Purchase Date</span>
          <p style={{ width: "160%" }}>12/03/2023</p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Unit Price</span>
          <p style={{ width: "160%" }}>$1500</p>
        </Box>
        <Box className="no-border">
          <Box className="data-field">
            <span className="form-left bold-txt">Depricated Price</span>
            <p style={{ width: "160%" }}>$400</p>
          </Box>
          <Box className="data-field">
            <span className="form-left bold-txt">Percentage Deprication</span>
            <p style={{ width: "160%" }}>30%</p>
          </Box>
        </Box>
        <span className="Box-heading">Vendor</span>
        <Box className="data-field">
          <span className="form-left bold-txt">Name</span>
          <p style={{ width: "160%" }}>Apple</p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Contact Number</span>
          <p style={{ width: "160%" }}>(666) 666 666</p>
        </Box>

        <span className="box-heading">Assigned to:</span>
        <Box className="user-card">
          <Box className="profile-pic">
            <img src={avatar} alt="pfp" />
          </Box>
          <Box className="details">
            <Typography className="Box-heading">Steve Smith</Typography>
            <Typography className="dept">Department: Development</Typography>
            <Typography className="email">steve@gigalabs.co</Typography>
            <Typography className="contact">(555) 555 555</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ViewItem;

import React, { useState } from "react";
import "./ViewEmployee.css";
import { Box, Button, Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DataTable from "../../../Components/DataTable";
import DropDownMenu from "../../../Components/DropDownMenu";
import avatar from "../../../Assets/avatar.png";
import { rows } from "../../../Utils/testingData";
import { cornFlowerBlue } from "../../../Utils/ColorConstants";
const activeBtn = {
  color: "white",
  backgroundColor: cornFlowerBlue,
  fontWeight: "bold",
};
const blackTextBtn = { color: "black" };
const ViewEmployee = () => {
  const [generalInfo, setGeneralInfo] = useState(true);
  const [inventoryTab, setInventoryTab] = useState(false);
  const [requestTab, setRequestTab] = useState(false);

  return (
    <>
      <Box className="container">
        <Box className="component-headers">
          <Box className="left-header">
            <Button sx={{ color: "gray" }} className="back-btn">
              <KeyboardBackspaceIcon fontSize="small" />
              Back
            </Button>
          </Box>
          <Box className="right-header">
            <DropDownMenu />
          </Box>
        </Box>
        <Divider />
        <Box className="content">
          <Box className="left-content">
            <Button
              style={generalInfo ? activeBtn : blackTextBtn}
              onClick={() => {
                setGeneralInfo(true);
                setInventoryTab(false);
                setRequestTab(false);
              }}
              className="switch-btn"
            >
              General Information
            </Button>
            <Button
              style={inventoryTab ? activeBtn : blackTextBtn}
              onClick={() => {
                setGeneralInfo(false);
                setInventoryTab(true);
                setRequestTab(false);
              }}
              className="switch-btn"
            >
              Inventory
            </Button>
            <Button
              style={requestTab ? activeBtn : blackTextBtn}
              onClick={() => {
                setGeneralInfo(false);
                setInventoryTab(false);
                setRequestTab(true);
              }}
              className="switch-btn"
            >
              Requests
            </Button>
          </Box>
          <Box className="right-content">
            {generalInfo && (
              <>
                <Box className="user-card">
                  <Box className="profile-img">
                    <img
                      className="img-rad"
                      src={avatar}
                      alt="profile-avatar"
                    />
                  </Box>
                  <Box className="details">
                    <span className="Box-heading">Steve Smith</span>
                  </Box>
                </Box>
                <Box className="data-field border-top">
                  <span className="form-left bold-txt">Email Address</span>
                  <p>steve@gigalabs.co</p>
                </Box>
                <Box className="data-field">
                  <span className="form-left bold-txt">Contact Number</span>
                  <p>(888) 888 888</p>
                </Box>
                <Box className="data-field">
                  <span className="form-left bold-txt">Department</span>
                  <p>Sales</p>
                </Box>
              </>
            )}
            <>
              {inventoryTab && (
                <Box className="inventory-table">
                  <DataTable rows={rows} />
                </Box>
              )}
            </>
            <>
              {requestTab && (
                <Box className="request-table">
                  <DataTable rows={rows} />
                </Box>
              )}
            </>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ViewEmployee;

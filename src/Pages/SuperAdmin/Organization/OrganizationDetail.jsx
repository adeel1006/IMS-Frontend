import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./OrganizationDetails.css";
import DataTable from "../../../Components/DataTable";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import logo from "../../../Assets/logoBlack.png";
import DropDownMenu from "../../../Components/DropDownMenu";
const OrganizationDetail = () => {
  const [orgDet, setOrgDet] = useState(true);
  const [activeBtn, setActiveBtn] = useState(true);
  return (
    <>
      <Box className="container">
        <Box className="org-det-header">
          <button className="back-btn">
            <KeyboardBackspaceIcon fontSize="small" />
            Back
          </button>
          <DropDownMenu/>
        </Box>
        <Box className="org-details">
          <Box className="tabs">
            <button
              onClick={() => {
                setOrgDet(true);
                setActiveBtn(true);
              }}
              className="switch-btn"
              style={{
                color: !activeBtn ? "black" : "white",
                backgroundColor: !activeBtn ? "white" : "#4583F5 ",
              }}
            >
              General Information
            </button>
            <button
              onClick={() => {
                setOrgDet(false);
                setActiveBtn(false);
              }}
              className="switch-btn"
              style={{
                color: !activeBtn ? "white" : "black",
                backgroundColor: !activeBtn ? "#4583F5" : "white",
              }}
            >
              Admins
            </button>
          </Box>
          {orgDet && (
            <Box className="org-det-content">
              <Box className="org-content-head">
                <Box className="logo">
                  <img src={logo} alt="logo" />
                </Box>
                <Box className="title">
                  <Typography fontWeight="bold">Gigalabs (Pvt) Ltd.</Typography>
                  <Typography>contact@gigalabs.co</Typography>
                </Box>
              </Box>
              <Box className="bio org-det-field">
                <Box sx={{ width: "70%" }}>
                  <Typography fontWeight="bold" className="org-det-left">
                    Bio
                  </Typography>
                </Box>

                <Typography>
                  Gigalabs is a web and mobile development firm that has
                  expertise in over 12 technology stacks including various
                  frameworks. Their goal is to innovate for their clients and
                  give them turnkey solutions ranging from scoping workshops to
                  documentation and finally the development and upkeep of a
                  product/project.
                </Typography>
              </Box>
              <Box className="address org-det-field">
                <Box sx={{ width: "28%" }}>
                  <Typography fontWeight="bold" className="org-det-left">
                    Address
                  </Typography>
                </Box>

                <Typography>G4, 409 Johar Town, Lahore</Typography>
              </Box>
              <Box className="rep org-det-field">
                <Box sx={{ width: "28%" }}>
                  <Typography fontWeight="bold" className="org-det-left">
                    Representative Name
                  </Typography>
                </Box>

                <Typography>John Smith</Typography>
              </Box>
              <Box className="rep-contact org-det-field">
                <Box sx={{ width: "28%" }}>
                  <Typography fontWeight="bold" className="org-det-left">
                    Representative Contact
                  </Typography>
                </Box>

                <Typography>(555) 555 555</Typography>
              </Box>
            </Box>
          )}
          {!orgDet && (
            <Box className="org-det-admins">
              <DataTable />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default OrganizationDetail;

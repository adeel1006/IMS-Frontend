import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import DataTable from "../../../Components/DataTable";
import { options, rows } from "../../../Utils/testingData";
import "./OrganizationList.css";
import { Link } from "react-router-dom";


const OrganizationList = () => {
  return (
    <>
      <Box className="org-container">
        <Box className="org-header">
          <Box className="org-left-header">
            <Typography variant="h3">Organizations</Typography>
            <SearchBar className="searchBar" />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Locations"}
              options={options}
            />
          </Box>

          <Box className="org-right-header">
            <Button style={{ color: "white", backgroundColor: seaGreenBtn, borderRadius: "10px" }}>
              <AddIcon />
              <Link className="link-style" to="/superAdminOrganization">
              Add
              </Link>
            </Button>
          </Box>
        </Box>
        <Box className="org-table">
          <DataTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default OrganizationList;

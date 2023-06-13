import { Box, Typography, Button } from "@mui/material";
import React from "react";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import DataTable from "../../../Components/DataTable";
import {rows} from "../../../Utils/testingData";
import "./AdminList.css";
import { options } from "../../../Utils/testingData";
import { Link } from "react-router-dom";


const AdminList = () => {
  return (
    <>
      <Box className="adm-container">
        <Box className="adm-header">
          <Box className="adm-left-header">
            <Typography variant="h3">Admins</Typography>
            <SearchBar className="searchBar" />
            <SelectBox className="selectBox" placeHolder={"Select Organization"} options={options} />
          </Box>

          <Box className="adm-right-header">
            <Button style={{ color: "white", backgroundColor: seaGreenBtn, borderRadius:"10px" }}>
              <AddIcon />
              <Link className="link-style" to="/addAdmin">
              Add
              </Link>
              
            </Button>
          </Box>
        </Box>
        <Box className="adm-table">
          <DataTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default AdminList;

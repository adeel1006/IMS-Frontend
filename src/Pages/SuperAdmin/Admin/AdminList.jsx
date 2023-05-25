import { Box, Typography, Button } from "@mui/material";
import React from "react";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import DataTable from "../../../Components/DataTable";
import "./AdminList.css";
//dummy data for testing purposes
const options = [
  { value: "Gigalabs", label: "Gigalabs" },
  { value: "Nextbridge", label: "Netbridge" },
  { value: "Systems", label: "Systems" },
];

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
            <Button style={{ color: "white", backgroundColor: seaGreenBtn }}>
              <AddIcon />
              Add
            </Button>
          </Box>
        </Box>
        <Box className="adm-table">
          <DataTable />
        </Box>
      </Box>
    </>
  );
};

export default AdminList;

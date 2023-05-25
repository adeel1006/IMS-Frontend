import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import DataTable from "../../../Components/DataTable";
import "./Complaints.css";
//dummy data for testing purposes
const options = [
    { value: "Gigalabs", label: "Gigalabs" },
    { value: "Nextbridge", label: "Netbridge" },
    { value: "Systems", label: "Systems" },
  ];

  const status = [
    { value: "Resolved", label: "Resolved" },
    { value: "Pending", label: "Pending" },
  ];

const Complaints = () => {
  return (
    <>
      <Box className="complaints-container">
        <Box className="complaints-header">
          <Box className="complaints-left-header">
            <Typography variant="h3">Complaints</Typography>
            <SearchBar className="searchBar" />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Organization"}
              options={options}
            />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Status"}
              options={status}
            />
          </Box>

          <Box className="complaints-right-header">
            <Button style={{ color: "white", backgroundColor: seaGreenBtn }}>
              <AddIcon />
              Add
            </Button>
          </Box>
        </Box>
        <Box className="complaints-table">
          <DataTable />
        </Box>
      </Box>
    </>
  );
};

export default Complaints;

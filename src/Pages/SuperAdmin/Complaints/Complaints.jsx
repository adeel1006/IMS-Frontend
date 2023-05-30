import React from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import DataTable from "../../../Components/DataTable";
import "./Complaints.css";
import { rows, options, status } from "../../../Utils/testingData";

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
        </Box>
        <Box className="complaints-table">
          <DataTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default Complaints;

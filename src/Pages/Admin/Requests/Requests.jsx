import React from "react";
import { options, rows } from "../../../Utils/testingData";
import SelectBox from "../../../Components/SelectBox";
import { Box, Typography } from "@mui/material";
import "./Requests.css";
import DataTable from "../../../Components/DataTable";
import SearchBar from "../../../Components/SearchBar";
import SortIcon from "../../../Components/SortIcon";

const Requests = () => {
    
  return (
    <>
      <Box className="req-container">
        <Box className="req-header">
          <Box className="req-left-header">
            <Typography variant="h3">Requests</Typography>
            <SearchBar className="searchBar" />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Status"}
              options={options}
            />
          </Box>

          <Box className="req-right-header">
            <SortIcon defaultDirection="asc" />
          </Box>
        </Box>
        <Box className="req-table">
          <DataTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default Requests;

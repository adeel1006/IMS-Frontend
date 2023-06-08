import React from "react";
import "./Returns.css";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import { options, rows } from "../../../Utils/testingData";
import DataTable from "../../../Components/DataTable";

const Returns = () => {
  return (
    <>
      <Box className="return-container">
        <Box className="return-header">
          <Box className="return-left-header">
            <Typography variant="h3">Returns</Typography>
            <SearchBar className="searchBar" />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Status"}
              options={options}
            />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Type"}
              options={options}
            />
          </Box>
        </Box>

        <Box className="return-table">
          <DataTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default Returns;

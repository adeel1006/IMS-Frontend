import React from "react";
import "./Employees.css";
import { Box, Typography, Button } from "@mui/material";
import SelectBox from "../../../Components/SelectBox";
import SearchBar from "../../../Components/SearchBar";
import DataTable from "../../../Components/DataTable";
import { options, rows } from "../../../Utils/testingData";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import SortIcon from "../../../Components/SortIcon";
import { Link } from "react-router-dom";
const addBtnStyle = {
  color: "white",
  backgroundColor: seaGreenBtn,
  borderRadius: "10px",
};
const Employees = () => {
  return (
    <>
      <Box className="emp-container">
        <Box className="emp-header">
          <Box className="emp-left-header">
            <Typography variant="h3">Employees</Typography>
            <SearchBar className="searchBar" />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Department"}
              options={options}
            />
          </Box>

          <Box className="emp-right-header">
            <Button style={addBtnStyle}>
              <AddIcon />
              <Link className="link-style" to="/addEmployee">
              Add Employee
              </Link>
            </Button>
          </Box>
        </Box>

        <Box className="sort-btns">
          <Box className="filter-btn">
            <SortIcon defaultDirection="asc" value="AZ" />
          </Box>
        </Box>

        <Box className="emp-table">
          <DataTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default Employees;

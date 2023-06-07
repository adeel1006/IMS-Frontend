import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { options, rows } from "../../../Utils/testingData";
import "./Inventory.css";
import DataTable from "../../../Components/DataTable";
import SortIcon from "../../../Components/SortIcon";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { seaGreenBtn } from "../../../Utils/ColorConstants";

const Inventory = () => {
  return (
    <>
      <Box className="inv-container">
        <Box className="inv-header">
          <Box className="inv-left-header">
            <Typography sx={{ mr: "10px" }} variant="h3">
              Inventory
            </Typography>
            <SearchBar className="searchBar" />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Category"}
              options={options}
            />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Sub-Category"}
              options={options}
            />
          </Box>

          <Box className="inv-right-header">
            <Button
              style={{
                color: "white",
                backgroundColor: seaGreenBtn,
                borderRadius: "10px",
              }}
            >
              <AddIcon />
              <Link className="link-style" to="/addItem">
                Add Item
              </Link>
            </Button>
          </Box>
        </Box>

        <Box className="sort-btns">
          <Box className="filter-btn">
            <SortIcon defaultDirection="asc" value="AZ" />
          </Box>

          <Box className="filter-btn">
            <SortIcon defaultDirection="asc" value="09" />
          </Box>
        </Box>

        <Box className="inv-table">
          <DataTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default Inventory;

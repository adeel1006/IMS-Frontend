import React from 'react'
import "./Vendors.css";
import { Box, Typography, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import SortIcon from "../../../Components/SortIcon";
import { options, rows } from '../../../Utils/testingData';
import { seaGreenBtn } from '../../../Utils/ColorConstants';
import SelectBox from '../../../Components/SelectBox';
import SearchBar from '../../../Components/SearchBar';
import DataTable from '../../../Components/DataTable';
const fieldWidth = {width:"250px"};
const Vendors = () => {
  return (
    <>
    <Box className="ven-container">
      <Box className="ven-header">
        <Box className="ven-left-header">
          <Typography sx={{ mr: "10px" }} variant="h3">
            Vendors
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

        <Box className="ven-right-header">
          <Button
            style={{
              color: "white",
              backgroundColor: seaGreenBtn,
              borderRadius: "10px",
            }}
          >
            <AddIcon />
            <Link className="link-style" to="/addVendor">
              Add Vendor
            </Link>
          </Button>
        </Box>
      </Box>

      <Box className="sort-btns">
        <Box className="filter-btns">
          <TextField sx={fieldWidth} size="small" placeholder="Min Price" />
        </Box>

        <Box className="filter-btns">
        <TextField sx={fieldWidth} size="small" placeholder="Max Price" />
        </Box>
      </Box>

      <Box className="ven-table">
        <DataTable rows={rows} />
      </Box>
    </Box>
  </>
  )
}

export default Vendors
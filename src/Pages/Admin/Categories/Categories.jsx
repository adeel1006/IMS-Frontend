import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SortIcon from "../../../Components/SortIcon";
import SearchBar from "../../../Components/SearchBar";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import CollapsibleTable from "../../../Components/CollapsibleTable";
import "./Categories.css";
import { rows } from "../../../Utils/collapsibleData";
const Categories = () => {
  return (
    <>
      <Box className="cate-container">
        <Box className="cate-header">
          <Box className="cate-left-header">
            <Typography sx={{ mr: "10px" }} variant="h3">
              Categories
            </Typography>
            <SearchBar className="searchBar" />
          </Box>

          <Box className="cate-right-header">
            <Button
              style={{
                color: "white",
                backgroundColor: seaGreenBtn,
                borderRadius: "10px",
              }}
            >
              <AddIcon />
              <Link className="link-style" to="/category">
                Add Category
              </Link>
            </Button>
          </Box>
        </Box>

        <Box className="sort-btns">
          <Box className="filter-btn">
            <SortIcon defaultDirection="asc" value="AZ" />
          </Box>
        </Box>

        <Box className="cate-table">
          <CollapsibleTable rows={rows} />
        </Box>
      </Box>
    </>
  );
};

export default Categories;

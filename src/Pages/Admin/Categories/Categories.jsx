import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SortIcon from "../../../Components/SortIcon";
import SearchBar from "../../../Components/SearchBar";
import CollapsibleTable from "../../../Components/CollapsibleTable";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import { rows } from "../../../Utils/collapsibleData";
import "./Categories.css";

const styles = {
  heading: { mr: "10px" },
  addBtn: {
    color: "white",
    backgroundColor: seaGreenBtn,
    borderRadius: "10px",
  },
};

const Categories = () => {
  return (
    <Box className="cate-container">
      <Box className="cate-header">
        <Box className="cate-left-header">
          <Typography sx={styles.heading} variant="h3">
            Categories
          </Typography>
          <SearchBar className="searchBar" />
        </Box>

        <Box className="cate-right-header">
          <Button style={styles.addBtn}>
            <AddIcon />
            <Link className="link-style" to="/addCategory">
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
  );
};

export default Categories;

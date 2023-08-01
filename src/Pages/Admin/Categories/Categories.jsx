import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SortIcon from "../../../Components/SortIcon";
import SearchBar from "../../../Components/SearchBar";
import CollapsibleTable from "../../../Components/CollapsibleTable";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import { fetchCategories } from "./CategoriesApi";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDirection, setSortDirection] = useState("AZ");
  const navigateTo = useNavigate();
  const {
    data: categoriesList,
    isLoading,
    isError,
  } = useQuery("categoriesList", fetchCategories);

  const handleAddBtn = () => {
    navigateTo(`/addCategory`);
  };

  const handleSort = () => {
    setSortDirection(sortDirection === "AZ" ? "ZA" : "AZ");
  };

  const filteredCategories = categoriesList
    ?.filter((category) =>
      category?.CategoryName?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const nameA = a.CategoryName.toLowerCase();
      const nameB = b.CategoryName.toLowerCase();
      if (sortDirection === "AZ") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return <div className="container">Error occurred while fetching Data.</div>;
  }
  return (
    <Box className="cate-container">
      <Box className="cate-header">
        <Box className="cate-left-header">
          <Typography sx={styles.heading} variant="h3">
            Categories
          </Typography>
          <SearchBar className="searchBar" setSearchQuery={setSearchQuery} />
        </Box>

        <Box className="cate-right-header">
          <Button style={styles.addBtn} onClick={handleAddBtn}>
            <AddIcon />
            Add Category
          </Button>
        </Box>
      </Box>

      <Box className="sort-btns">
        <Box className="filter-btn" onClick={handleSort}>
          <SortIcon defaultDirection="AZ" value={sortDirection} />
        </Box>
      </Box>

      <Box className="cate-table">
        <CollapsibleTable
          rows={filteredCategories}
          linkString={`/viewCategory/`}
        />
      </Box>
    </Box>
  );
};

export default Categories;

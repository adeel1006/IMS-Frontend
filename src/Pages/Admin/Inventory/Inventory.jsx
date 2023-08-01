import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Box, Typography, Button } from "@mui/material";
import DataTable from "../../../Components/DataTable";
import SortIcon from "../../../Components/SortIcon";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import { fetchCategories, fetchInventory } from "./inventoryApi";
import "./Inventory.css";

const styles = {
  heading: { mr: "10px" },
  addBtn: {
    color: "white",
    backgroundColor: seaGreenBtn,
    borderRadius: "10px",
  },
  noData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Inventory = () => {
  let notAvailable = "N/A";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const navigateTo = useNavigate();

  const handleAddBtn = () => {
    navigateTo(`/addItem`);
  };

  const {
    data: categories,
    isLoading: isCateLoading,
    isError: isCateError,
  } = useQuery("categories", fetchCategories);

  const categoriesList = categories?.map((item) => {
    const { id, categoryName } = item;
    return {
      id: id,
      value: categoryName + id,
      label: categoryName,
    };
  });

  //extracting sub-categories from category data
  const subCategoryData = [];
  categories?.forEach((item) => {
    const { subcategories } = item;
    subcategories?.forEach((data) => {
      const { id, name } = data;
      subCategoryData.push({
        id: id,
        value: id,
        label: name,
      });
    });
  });

  const {
    data: inventoryList,
    isLoading,
    isError,
  } = useQuery("inventoryList", fetchInventory);

  const specificInventoryTableData = inventoryList?.map((item) => {
    const { id, itemName, description, category, subcategory, price } = item;
    const Category = category?.categoryName || notAvailable;
    const CategoryID = category?.id || notAvailable;
    const SubcategoryID = subcategory?.id || notAvailable;
    const Subcategory = subcategory?.name || notAvailable;
    const Action = "View";
    const Price = price || notAvailable;

    return {
      Id: id,
      ItemName: itemName,
      Description: description,
      Category: Category,
      Subcategory: Subcategory,
      Price: Price,
      Action: Action,
      CategoryID: CategoryID,
      SubcategoryID: SubcategoryID,
    };
  });

  const tableData = specificInventoryTableData?.filter((item) => {
    const { ItemName, Category, CategoryID, SubcategoryID } = item;

    if (
      searchQuery &&
      !ItemName.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (selectedCategory && selectedCategory !== Category + CategoryID) {
      return false;
    }

    if (selectedSubCategory && selectedSubCategory !== SubcategoryID) {
      return false;
    }

    return true;
  });

  if (isLoading || isCateLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError || isCateError) {
    return (
      <div className="container">
        Error occurred while fetching Employees Data.
      </div>
    );
  }

  return (
    <Box className="inv-container">
      <Box className="inv-header">
        <Box className="inv-left-header">
          <Typography sx={styles.heading} variant="h3">
            Inventory
          </Typography>
          <SearchBar className="searchBar" setSearchQuery={setSearchQuery} />
          <SelectBox
            className="selectBox"
            placeHolder={"Select Category"}
            options={categoriesList}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <SelectBox
            className="selectBox"
            placeHolder={"Select Sub-Category"}
            options={subCategoryData}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          />
        </Box>

        <Box className="inv-right-header">
          <Button style={styles.addBtn} onClick={handleAddBtn}>
            <AddIcon />
            Add Item
          </Button>
        </Box>
      </Box>

      {/* <Box className="sort-btns">
        <Box className="filter-btn">
          <SortIcon defaultDirection="asc" value="AZ" />
        </Box>

        <Box className="filter-btn">
          <SortIcon defaultDirection="asc" value="09" />
        </Box>
      </Box> */}

      <Box className="inv-table">
        {!tableData.length && (
          <div className="container" style={styles.noData}>
            No data available
          </div>
        )}
        <DataTable
          rows={tableData.map(({ CategoryID, SubcategoryID, ...rest }) => rest)}
          linkString={`/viewItem/`}
        />
      </Box>
    </Box>
  );
};

export default Inventory;

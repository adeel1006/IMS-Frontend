import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Box, Typography, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import SelectBox from "../../../Components/SelectBox";
import SearchBar from "../../../Components/SearchBar";
import DataTable from "../../../Components/DataTable";
import { fetchCategories, fetchVendorsList } from "./vendorApi";
import "./Vendors.css";

const styles = {
  heading: { mr: "10px" },
  fieldWidth: { width: "250px" },
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
const Vendors = () => {
  let notAvailable = "N/A";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const {
    data: vendorsList,
    isLoading,
    isError,
  } = useQuery("vendorsList", fetchVendorsList);

  const {
    data: categoriesList,
    isLoading: isCateLoading,
    isError: isCateError,
  } = useQuery("categoriesList", fetchCategories);

  const categoryList = categoriesList?.map((item) => {
    const { id, categoryName } = item;
    return {
      id: id,
      value: categoryName + id,
      label: categoryName,
    };
  });
  //extracting sub-categories from category data
  const subCategoryData = [];
  categoriesList?.forEach((item) => {
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

  // console.log(JSON.stringify(categoriesList, null, 2));

  const specificVendorTableData = vendorsList?.map((item) => {
    const {
      id,
      vendorName,
      contactNumber,
      category,
      subcategories,
      totalSpendings,
      action,
    } = item;
    const VendorName = vendorName || notAvailable;
    const Contact = contactNumber || notAvailable;
    const Category = category?.categoryName || notAvailable;
    const CategoryID = category?.id || notAvailable;
    const SubcategoryID = subcategories?.id || notAvailable;
    const Subcategories =
      subcategories?.map((subcategory) => subcategory.name).join(", ") ||
      notAvailable;
    const TotalSpendings = totalSpendings || notAvailable;
    const Action = action || "View";

    return {
      Id: id,
      Vendor: VendorName,
      Contact: Contact,
      Category: Category,
      Subcategory: Subcategories,
      TotalSpendings: TotalSpendings,
      Action: Action,
      CategoryID: CategoryID,
      SubcategoryID: SubcategoryID,
    };
  });

  const tableData = specificVendorTableData?.filter((item) => {
    const { Vendor, Category, CategoryID, SubcategoryID, TotalSpendings } =
      item;

    if (
      searchQuery &&
      !Vendor.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (selectedCategory && selectedCategory !== Category + CategoryID) {
      return false;
    }

    if (selectedSubCategory && selectedSubCategory !== SubcategoryID) {
      return false;
    }

    if (
      minPrice &&
      (TotalSpendings === notAvailable || TotalSpendings < minPrice)
    ) {
      return false;
    }

    if (
      maxPrice &&
      (TotalSpendings === notAvailable || TotalSpendings > maxPrice)
    ) {
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
    <Box className="ven-container">
      <Box className="ven-header">
        <Box className="ven-left-header">
          <Typography sx={styles.heading} variant="h3">
            Vendors
          </Typography>
          <SearchBar className="searchBar" setSearchQuery={setSearchQuery} />
          <SelectBox
            className="selectBox"
            placeHolder={"Select Category"}
            options={categoryList}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <SelectBox
            className="selectBox"
            placeHolder={"Select Sub-Category"}
            options={subCategoryData}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          />
        </Box>

        <Box className="ven-right-header">
          <Button style={styles.addBtn}>
            <AddIcon />
            <Link className="link-style" to="/addVendor">
              Add Vendor
            </Link>
          </Button>
        </Box>
      </Box>

      <Box className="price-fields">
        <Box className="filter-btns">
          <TextField
            sx={styles.fieldWidth}
            size="small"
            placeholder="Min Price"
            onChange={(event) => setMinPrice(event.target.value)}
          />
        </Box>

        <Box className="filter-btns">
          <TextField
            sx={styles.fieldWidth}
            size="small"
            placeholder="Max Price"
            onChange={(event) => setMaxPrice(event.target.value)}
          />
        </Box>
      </Box>

      <Box className="ven-table">
        {!tableData.length && (
          <div className="container" style={styles.noData}>
            No data available
          </div>
        )}
        <DataTable
          rows={tableData.map(({ CategoryID, ...rest }) => rest)}
          linkString={`/viewVendor/`}
        />
      </Box>
    </Box>
  );
};

export default Vendors;

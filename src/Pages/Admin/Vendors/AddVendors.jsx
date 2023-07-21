import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { TextField, Button, Box } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { grayBtn, seaGreenBtn } from "../../../Utils/ColorConstants";
import { addVendor, fetchCategories } from "./vendorApi";
import SelectBox from "../../../Components/SelectBox";
import "./AddVendors";

const styles = {
  backBtn: { color: "gray" },
  cancelBtn: {
    color: "gray",
    backgroundColor: grayBtn,
    borderRadius: "10px",
    marginRight: "8%",
    padding: "5%",
  },
  saveBtn: {
    color: "white",
    backgroundColor: seaGreenBtn,
    borderRadius: "10px",
  },
  fieldWidth: { width: "32%" },
};

const AddVendors = () => {
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const [formValues, setFormValues] = useState({
    vendorName: "",
    contactNumber: "",
    category: "",
    subCategory: [],
  });

  const navigateTo = useNavigate();
  const handleGoBack = () => {
    navigateTo(-1);
  };
  const submitFormMutation = useMutation(addVendor);

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery("categories", fetchCategories);

  const categoriesList = categories?.map((item) => {
    const { id, categoryName } = item;
    return {
      id: id,
      value: id,
      label: categoryName,
    };
  });

  useEffect(() => {
    if (formValues.category && categories) {
      const selectedCategory = categories.find(
        (item) => item.id === formValues.category
      );

      if (selectedCategory) {
        setFilteredSubcategories(selectedCategory.subcategories);
        setFormValues((prevValues) => ({
          ...prevValues,
          subCategoryId: "",
        }));
      }
    }
  }, [formValues.category, categories]);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFormMutation.mutate(formValues);
    navigateTo(-1);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">Error occurred while fetching categories.</div>
    );
  }

  return (
    <Box className="container">
      <Box className="header-mainItem">
        <Box className="left-header">
          <Button onClick={handleGoBack} style={styles.backBtn}>
            <KeyboardBackspaceIcon />
            Back
          </Button>
        </Box>

        <Box className="right-header">
          <Button onClick={handleGoBack} style={styles.cancelBtn}>
            Cancel
          </Button>
          <Button style={styles.saveBtn} onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box className="data-field">
          <span className="form-left">Name</span>
          <TextField
            required
            size="small"
            placeholder="Name"
            style={styles.fieldWidth}
            name="vendorName"
            value={formValues.vendorName}
            onChange={handleChange}
          />
        </Box>
        <Box className="data-field">
          <span className="form-left">Contact Number</span>
          <TextField
            required
            type="number"
            size="small"
            placeholder="Enter Contact number"
            name="contactNumber"
            value={formValues.contactNumber}
            onChange={handleChange}
            style={styles.fieldWidth}
          />
        </Box>

        <Box className="data-field">
          <span className="form-left">Category</span>
          <SelectBox
            marginLeft={0}
            minWidth={500}
            options={categoriesList}
            placeHolder={"Select Category"}
            name="category"
            value={formValues.category}
            onChange={handleChange}
          />
        </Box>
        <Box className="data-field">
          <span className="form-left">Sub-category</span>
          <SelectBox
            marginLeft={0}
            minWidth={500}
            options={
              filteredSubcategories.length === 0
                ? [{ id: "", value: "", label: "No subcategories found" }]
                : filteredSubcategories.map((item) => ({
                    id: item.id,
                    value: item.id,
                    label: item.name,
                  }))
            }
            placeHolder={"Select Sub-category"}
            name="subCategory"
            value={formValues.subCategory}
            onChange={handleChange}
            multiple
          />
        </Box>
      </form>
    </Box>
  );
};

export default AddVendors;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { submitRequest, fetchCategories } from "./RequestApi";
import { Box, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SelectBox from "../../../Components/SelectBox";
import { requestTypes } from "../../../Utils/constants";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
const submitBtn = { backgroundColor: seaGreenBtn };
import "./AddRequest.css";

const AddRequest = () => {
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const [formValues, setFormValues] = useState({
    itemName: "",
    requestType: "",
    category: "",
    subCategory: "",
    description: "",
  });
  const navigateTo = useNavigate();
  const handleGoBack = () => {
    navigateTo(-1);
  };
  const submitFormMutation = useMutation(submitRequest);

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
      <div className="container">Error occurred while fetching complaints.</div>
    );
  }

  return (
    <Box className="container">
      <Box className="inner-content">
        <Box className="new-org-header">
          <Box className="left-btns header-org-btns">
            <button onClick={handleGoBack} className="back-btn">
              <KeyboardBackspaceIcon fontSize="small" />
              Back
            </button>
            <h1>Add New Request</h1>
          </Box>
          <Box className="right-btns header-org-btns">
            <button onClick={handleGoBack} className="cancel-btn btn">
              Cancel
            </button>
            <button
              style={submitBtn}
              className="save-btn btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Box>
        </Box>

        <Box className="new-request-form">
          <form onSubmit={handleSubmit}>
            <Box className="name data-field">
              <span className="form-left">Item Name</span>
              <TextField
                className="input-field"
                required
                placeholder="Enter Item Name..."
                name="itemName"
                value={formValues.itemName}
                onChange={handleChange}
              ></TextField>
            </Box>

            <Box className="name data-field">
              <span className="form-left">Category</span>
              <SelectBox
                className="input-field"
                placeHolder="Select Category"
                minWidth="600px"
                marginLeft="0"
                options={categoriesList}
                name="category"
                value={formValues.category}
                onChange={handleChange}
              />
            </Box>

            <Box className="name data-field">
              <span className="form-left">Sub-Category</span>
              <SelectBox
                className="input-field"
                placeHolder="Select Sub-Category"
                minWidth="600px"
                marginLeft="0"
                options={
                  filteredSubcategories.length === 0
                    ? [{ id: "", value: "", label: "No subcategories found" }]
                    : filteredSubcategories.map((item) => ({
                        id: item.id,
                        value: item.id,
                        label: item.name,
                      }))
                }
                name="subCategory"
                value={formValues.subCategory}
                onChange={handleChange}
              />
            </Box>

            <Box className="name data-field">
              <span className="form-left">Request Type</span>
              <SelectBox
                className="input-field"
                placeHolder="Select Request Type"
                minWidth="600px"
                marginLeft="0"
                options={requestTypes}
                name="requestType"
                value={formValues.requestType}
                onChange={handleChange}
              />
            </Box>

            <Box className="contact data-field">
              <span className="form-left">Description</span>
              <TextField
                className="input-field"
                required
                multiline
                rows={6}
                type="text"
                placeholder="Enter Description..."
                name="description"
                value={formValues.description}
                onChange={handleChange}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AddRequest;

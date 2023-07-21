import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Box, Button, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import { addCategory } from "./CategoriesApi";
import "./AddCategory.css";

const styles = {
  saveBtn: { backgroundColor: seaGreenBtn },
  addSubBtn: {
    backgroundColor: seaGreenBtn,
    color: "white",
    borderRadius: "10px",
  },
};
const AddCategory = () => {
  const [formValues, setFormValues] = useState({
    categoryName: "",
    subCategoryName: [],
  });

  const navigateTo = useNavigate();
  const submitFormMutation = useMutation(addCategory);

  const handleGoBack = () => {
    navigateTo(-1);
  };
  const handleSubmit = async (event) => {
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

  const handleSubCategoryChange = (event, index) => {
    const { value } = event.target;
    setFormValues((prevValues) => {
      const updatedSubCategories = [...prevValues.subCategoryName];
      updatedSubCategories[index] = value;
      return {
        ...prevValues,
        subCategoryName: updatedSubCategories,
      };
    });
  };

  const handleAddSubCategory = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      subCategoryName: [...prevValues.subCategoryName, ""],
    }));
  };

  return (
    <Box className="container">
      <Box className="inner-content">
        <Box className="new-cate-header">
          <Box className="left-btns header-cate-btns">
            <button onClick={handleGoBack} className="back-btn">
              <KeyboardBackspaceIcon fontSize="small" />
              Back
            </button>
            <h1>Add New Category</h1>
          </Box>
          <Box className="right-btns header-cate-btns">
            <button onClick={handleGoBack} className="cancel-btn btn">
              Cancel
            </button>
            <button
              style={styles.saveBtn}
              className="save-btn btn"
              onClick={handleSubmit}
            >
              Save
            </button>
          </Box>
        </Box>

        <Box className="new-request-form">
          <form onSubmit={handleSubmit}>
            <Box className="name data-field">
              <span className="form-left">Category Name</span>
              <TextField
                className="input-field"
                required
                placeholder="Category Name..."
                name="categoryName"
                value={formValues.categoryName}
                onChange={handleChange}
              />
            </Box>
            {formValues.subCategoryName?.map((subCategory, index) => (
              <Box key={index} className="name data-field">
                <span className="form-left">{`Subcategory# ${
                  index + 1
                } Name`}</span>
                <TextField
                  className="input-field"
                  required
                  placeholder={`Subcategory# ${index + 1} Name`}
                  type="text"
                  value={subCategory}
                  onChange={(event) => handleSubCategoryChange(event, index)}
                />
              </Box>
            ))}
            <Box>
              <Button style={styles.addSubBtn} onClick={handleAddSubCategory}>
                Add Sub-Category
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AddCategory;

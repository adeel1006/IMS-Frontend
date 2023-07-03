import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./AddCategory.css";
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const navigateTo = useNavigate();
  const handleGoBack = () => {
    navigateTo(-1);
  };

  const [subCategories, setSubCategories] = useState([]);

  const handleAddSubCategory = () => {
    const newSubCategory = {
      id: subCategories.length + 1,
      name: `Sub-Category# Name${subCategories.length + 1}`,
    };

    setSubCategories([...subCategories, newSubCategory]);
  };

  return (
    <>
      <Box className="container">
        <Box className="inner-content">
          <Box className="new-cate-header">
            <Box className="left-btns header-cate-btns">
              <button onClick={handleGoBack} className="back-btn">
                <KeyboardBackspaceIcon fontSize="small" />
                Back
              </button>
              <h1>Add New Request</h1>
            </Box>
            <Box className="right-btns header-cate-btns">
              <button onClick={handleGoBack} className="cancel-btn btn">Cancel</button>
              <button
                style={{ backgroundColor: seaGreenBtn }}
                className="save-btn btn"
              >
                Save
              </button>
            </Box>
          </Box>

          <Box className="new-request-form">
            <Box className="name data-field">
              <span className="form-left">Category Name</span>
              <TextField
                className="input-field"
                required
                placeholder="Category Name..."
              ></TextField>
            </Box>

            {subCategories.map((subCategory) => (
              <Box key={subCategory.id} className="name data-field">
                <span className="form-left">{subCategory.name}</span>
                <TextField
                  className="input-field"
                  required
                  placeholder="Sub-Category Name..."
                />
              </Box>
            ))}

            <Box>
              <Button
                style={{
                  backgroundColor: seaGreenBtn,
                  color: "white",
                  borderRadius: "10px",
                }}
                onClick={handleAddSubCategory}
              >
                Add Sub-Category
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddCategory;

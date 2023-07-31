import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { grayBtn, seaGreenBtn } from "../../../Utils/ColorConstants";
import SelectBox from "../../../Components/SelectBox";
import { addItem, fetchCategories, fetchVendorsList } from "./inventoryApi";
import "./AddItem.css";

const styles = {
  backBtn: { color: "gray" },
  fieldWidth: { width: "32%" },
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
};

const AddItem = () => {
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const [formValues, setFormValues] = useState({
    itemName: "",
    serialNumber: "",
    description: "",
    category: "",
    subCategoryId: "",
    price: "",
    vendor: "",
  });
  const navigateTo = useNavigate();

  const submitFormMutation = useMutation(addItem);

  const {
    data: vendorsList,
    isLoading: isVendorsLoading,
    isError: isVendorsError,
  } = useQuery("vendorsList", fetchVendorsList);

  const vendors = vendorsList?.map((vendor) => {
    const { id, vendorName } = vendor;
    return {
      value: id,
      label: vendorName,
    };
  });

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

  const handleGoBack = () => {
    navigateTo(-1);
  };

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

  if (isLoading || isVendorsLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError || isVendorsError) {
    return <div className="container">Error occurred while fetching data.</div>;
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
          <span className="form-left">Item Name</span>
          <TextField
            required
            size="small"
            placeholder="Item Name"
            style={styles.fieldWidth}
            name="itemName"
            value={formValues.itemName}
            onChange={handleChange}
          />
        </Box>
        <Box className="data-field">
          <span className="form-left">Serial Number</span>
          <TextField
            required
            type="text"
            size="small"
            placeholder="Enter serial number"
            style={styles.fieldWidth}
            name="serialNumber"
            value={formValues.serialNumber}
            onChange={handleChange}
          />
        </Box>
        <Box className="data-field">
          <span className="form-left">Description</span>
          <TextField
            sx={{ width: "500px" }}
            type="text"
            required
            multiline
            rows={6}
            placeholder="Description"
            className="bio-field"
            name="description"
            value={formValues.description}
            onChange={handleChange}
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
            name="subCategoryId"
            value={formValues.subCategoryId}
            onChange={handleChange}
          />
        </Box>
        <Box className="data-field">
          <span className="form-left">Unit Price</span>
          <TextField
            required
            size="small"
            placeholder="Unit price"
            style={styles.fieldWidth}
            name="price"
            value={formValues.price}
            onChange={handleChange}
          />
        </Box>
        <Box className="data-field">
          <span className="form-left">Vendor</span>
          <SelectBox
            marginLeft={0}
            minWidth={500}
            options={vendors}
            placeHolder={"Select vendor"}
            name="vendor"
            value={formValues.vendor}
            onChange={handleChange}
          />
        </Box>
      </form>
    </Box>
  );
};

export default AddItem;

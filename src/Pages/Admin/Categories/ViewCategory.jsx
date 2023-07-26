import React from "react";
import { useQuery, useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Box, Alert } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DropDownMenu from "../../../Components/DropDownMenu";
import { deleteCategory, fetchCategoryDetail } from "./CategoriesApi";
import "./ViewCategory.css";

const styles = {
  backBtn: { color: "gray" },
  fieldWidth: { width: "160%" },
};

const ViewCategory = () => {
  let notAvailable = "N/A";
  const { id } = useParams();
  const navigateTo = useNavigate();

  const deleteCategoryMutation = useMutation(deleteCategory, {
    onSuccess: (data) => {
      navigateTo(-1);
    },
  });

  const {
    data: viewCategory,
    isLoading,
    isError,
  } = useQuery(["viewCategory", id], () => fetchCategoryDetail(id));

  const subcategoryNames = viewCategory?.category?.subcategories?.map(
    (subCat) => subCat.name
  );
  const subCategoriesNames = subcategoryNames
    ? subcategoryNames.join(", ")
    : "";

  const handleEdit = () => {
    navigateTo(`/editCategory/${id}`);
  };

  const handleDelete = () => {
    deleteCategoryMutation.mutate(id);
  };

  const menuOptions = [
    {
      label: "Edit",
      icon: <EditOutlinedIcon />,
      handler: handleEdit,
      dividerAfter: true,
    },
    {
      label: "Delete",
      icon: <DeleteOutlineOutlinedIcon />,
      handler: handleDelete,
    },
  ];
  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return <div className="container">Error occurred while fetching Data.</div>;
  }

  const handleGoBack = () => {
    navigateTo(-1);
  };
  return (
    <Box className="container">
      {deleteCategoryMutation.isError && (
        <Alert severity="error">Error! Category is not deleted</Alert>
      )}
      <Box className="component-header-cat">
        <Box className="left-header">
          <Button style={styles.backBtn} onClick={handleGoBack}>
            <KeyboardBackspaceIcon />
            Back
          </Button>
        </Box>

        <Box className="right-header">
          <DropDownMenu options={menuOptions} />
        </Box>
      </Box>

      <Box className="data-field">
        <span className="form-left bold-txt">Category Name</span>
        <p style={styles.fieldWidth}>
          {viewCategory?.category?.categoryName || notAvailable}
        </p>
      </Box>
      <Box className="data-field">
        <span className="form-left bold-txt">Sub-Category</span>
        <p style={styles.fieldWidth}>{subCategoriesNames || notAvailable}</p>
      </Box>

      <Box className="no-border">
        <Box className="data-field">
          <span className="form-left">Total Quantity</span>
          <p className="form-right">
            {viewCategory?.category?.items?.length || notAvailable}
          </p>
        </Box>
        <Box className="data-field">
          <span className="form-left">Quantity Assigned</span>
          {/* shows the length of assigned item vendors */}
          <p className="form-right">
            {viewCategory?.category?.items?.map((vendor) => vendor?.length) ||
              "0"}
          </p>
        </Box>
      </Box>

      {/* <Box className="data-field">
        <span className="form-left bold-txt">Quantity Unassigned</span>
        <p style={styles.fieldWidth}>4</p>
      </Box>

      <Box className="data-field">
        <span className="form-left bold-txt">Quantity Faulty</span>
        <p style={styles.fieldWidth}>1</p>
      </Box> */}

      <span className="Box-heading">Vendor</span>

      <Box className="no-border">
        <Box className="data-field">
          <span className="form-left">Name</span>
          <p className="form-right">
            {viewCategory?.category?.items?.map(
              (item) => item.vendor?.vendorName
            ) || notAvailable}
          </p>
        </Box>
        <Box className="data-field">
          <span className="form-left">Contact Number</span>
          <p className="form-right">
            {viewCategory?.category?.items?.map(
              (item) => item.vendor?.contactNumber
            ) || notAvailable}
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewCategory;

import React from "react";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import DropDownMenu from "../../../Components/DropDownMenu";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { fetchVendor, deleteVendor } from "./vendorApi";
import "./ViewVendor.css";

const styles = {
  backBtn: { color: "gray" },
  fieldWidth: { width: "160%" },
};

const ViewVendor = () => {
  let notAvailable = "N/A";
  const { id } = useParams();
  const navigateTo = useNavigate();

  const deleteVendorMutation = useMutation(deleteVendor, {
    onSuccess: (data) => {
      navigateTo(-1);
    },
  });

  const {
    data: viewVendor,
    isLoading,
    isError,
  } = useQuery(["viewVendor", id], () => fetchVendor(id));

  const subCategoryList =
    viewVendor?.vendor?.subcategories
      .map((subCategory) => subCategory.name)
      .join(", ") || null;

  const handleGoBack = () => {
    navigateTo(-1);
  };

  const handleEdit = () => {
    navigateTo(`/editVendor/${id}`);
  };

  const handleDelete = () => {
    deleteVendorMutation.mutate(id);
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

  return (
    <Box className="container">
      <Box className="component-header-ven">
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
        <span className="form-left bold-txt">Name</span>
        <p style={styles.fieldWidth}>
          {viewVendor?.vendor?.vendorName || notAvailable}
        </p>
      </Box>

      <Box className="data-field">
        <span className="form-left bold-txt">Contact Number</span>
        <p style={styles.fieldWidth}>
          {viewVendor?.vendor?.contactNumber || notAvailable}
        </p>
      </Box>

      <Box className="data-field">
        <span className="form-left bold-txt">Category</span>
        <p style={styles.fieldWidth}>
          {viewVendor?.vendor?.category?.categoryName || notAvailable}
        </p>
      </Box>
      <Box className="data-field">
        <span className="form-left bold-txt">Sub-Category</span>
        <p style={styles.fieldWidth}>{subCategoryList}</p>
      </Box>
    </Box>
  );
};

export default ViewVendor;

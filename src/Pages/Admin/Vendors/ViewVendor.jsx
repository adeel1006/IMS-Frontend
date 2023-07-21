import React from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, Box } from "@mui/material";
import DropDownMenu from "../../../Components/DropDownMenu";
import DataTable from "../../../Components/DataTable";
import { fetchVendor } from "./vendorApi";
import "./ViewVendor.css";

const styles = {
  backBtn: { color: "gray" },
  fieldWidth: { width: "160%" },
};

const ViewVendor = () => {
  let notAvailable = "N/A";
  const { id } = useParams();
  const navigateTo = useNavigate();

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

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return <div className="container">Error occurred while fetching Data.</div>;
  }

  return (
    <Box className="container">
      <Box className="component-header">
        <Box className="left-header">
          <Button style={styles.backBtn} onClick={handleGoBack}>
            <KeyboardBackspaceIcon />
            Back
          </Button>
        </Box>

        <Box className="right-header">{/* <DropDownMenu />  */}</Box>
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

      {/* <Box className="data-field">
        <DataTable rows={tableDataDashboard} />
      </Box> */}
    </Box>
  );
};

export default ViewVendor;

import React from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import DropDownMenu from "../../../Components/DropDownMenu";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, Box, Typography } from "@mui/material";
import placeholder from "../../../Assets/placeholder.jpg";
import { fetchItem } from "./inventoryApi";
import "./ViewItem.css";

const styles = {
  backBtn: { color: "gray" },
  fieldWidth: { width: "160%" },
};

const deprecatedPrice = (itemPrice, deprecatedValue) => {
  return itemPrice * (1 - deprecatedValue);
};

const ViewItem = () => {
  let notAvailable = "N/A";
  const { id } = useParams();
  const navigateTo = useNavigate();

  const {
    data: viewItem,
    isLoading,
    isError,
  } = useQuery(["viewItem", id], () => fetchItem(id));

  const itemPrice = viewItem?.item?.price;
  const deprecatedValue = 0.3;
  const deprecatedPercentValue = deprecatedValue * 100 + "%";
  const deprecatePrice = deprecatedPrice(itemPrice, deprecatedValue);

  const formattedDate = viewItem?.item?.createdAt
    ? new Date(viewItem?.item?.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

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
    <>
      <Box className="container">
        <Box className="component-headerInv">
          <Box className="left-header">
            <Button style={styles.backBtn} onClick={handleGoBack}>
              <KeyboardBackspaceIcon />
              Back
            </Button>
          </Box>

          <Box className="right-headerMenu">
            <DropDownMenu />
          </Box>
        </Box>

        <Box className="no-border">
          <Box className="data-field">
            <span className="form-left">Item Name</span>
            <p className="form-right">
              {viewItem?.item?.itemName || notAvailable}
            </p>
          </Box>
          <Box className="data-field">
            <span className="form-left">Serial Number</span>
            <p className="form-right">
              {viewItem?.item?.serialNumber || notAvailable}
            </p>
          </Box>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Description</span>
          <p style={styles.fieldWidth}>
            {viewItem?.item?.description || notAvailable}
          </p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Category</span>
          <p style={styles.fieldWidth}>
            {viewItem?.item?.category?.categoryName || notAvailable}
          </p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Sub-Category</span>
          <p style={styles.fieldWidth}>
            {viewItem?.item?.subcategory?.name || notAvailable}
          </p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Purchase Date</span>
          <p style={styles.fieldWidth}>{formattedDate || notAvailable}</p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Unit Price</span>
          <p style={styles.fieldWidth}>
            {viewItem?.item?.price || notAvailable}
          </p>
        </Box>
        <Box className="no-border">
          <Box className="data-field">
            <span className="form-left bold-txt">Depricated Price</span>
            <p>{deprecatePrice || notAvailable}</p>
          </Box>
          <Box className="data-field">
            <span className="form-left bold-txt">Percentage Deprication</span>
            <p>{deprecatedPercentValue || notAvailable}</p>
          </Box>
        </Box>
        <span className="Box-heading">Vendor</span>
        <Box className="data-field">
          <span className="form-left bold-txt">Name</span>
          <p style={styles.fieldWidth}>{viewItem?.item?.vendor?.vendorName || notAvailable}</p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Contact Number</span>
          <p style={styles.fieldWidth}>{viewItem?.item?.vendor?.contactNumber || notAvailable}</p>
        </Box>

        {/* <span className="box-heading">Assigned to:</span>
        <Box className="user-card">
          <Box className="profile-pic">
            <img src={placeholder} alt="profile" />
          </Box>
          <Box className="details">
            <Typography className="Box-heading">Steve Smith</Typography>
            <Typography className="dept">Department: Development</Typography>
            <Typography className="email">steve@gigalabs.co</Typography>
            <Typography className="contact">(555) 555 555</Typography>
          </Box>
        </Box> */}
      </Box>
    </>
  );
};

export default ViewItem;

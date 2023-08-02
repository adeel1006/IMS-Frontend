import React from "react";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DropDownMenu from "../../../Components/DropDownMenu";
import { deleteItem, fetchItem } from "./inventoryApi";
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

  const deleteItemMutation = useMutation(deleteItem, {
    onSuccess: (data) => {
      navigateTo(-1);
    },
  });

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

  const handleEdit = () => {
    navigateTo(`/editItem/${id}`);
  };

  const handleDelete = () => {
    deleteItemMutation.mutate(id);
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
            <DropDownMenu options={menuOptions} />
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
          <p style={styles.fieldWidth}>
            {viewItem?.item?.vendor?.vendorName || notAvailable}
          </p>
        </Box>
        <Box className="data-field">
          <span className="form-left bold-txt">Contact Number</span>
          <p style={styles.fieldWidth}>
            {viewItem?.item?.vendor?.contactNumber || notAvailable}
          </p>
        </Box>
      </Box>
    </>
  );
};

export default ViewItem;

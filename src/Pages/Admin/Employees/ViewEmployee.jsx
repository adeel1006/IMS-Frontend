import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DataTable from "../../../Components/DataTable";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DropDownMenu from "../../../Components/DropDownMenu";
import avatar from "../../../Assets/avatar.png";
import { rows } from "../../../Utils/testingData";
import { cornFlowerBlue } from "../../../Utils/ColorConstants";
import {
  deleteEmp,
  fetchEmployeeDetail,
  fetchEmployeeRequest,
} from "./AdminEmployeeApi";
import "./ViewEmployee.css";

const styles = {
  activeBtn: {
    color: "white",
    backgroundColor: cornFlowerBlue,
    fontWeight: "bold",
  },
  blackTextBtn: { color: "black" },
};

const ViewEmployee = () => {
  let notAvailable = "N/A";
  const { id } = useParams();
  const navigateTo = useNavigate();
  const [generalInfo, setGeneralInfo] = useState(true);
  const [inventoryTab, setInventoryTab] = useState(false);
  const [requestTab, setRequestTab] = useState(false);

  const deleteEmpMutation = useMutation(deleteEmp, {
    onSuccess: (data) => {
      navigateTo(-1);
    },
  });

  const {
    data: employeeDetail,
    isLoading,
    isError,
  } = useQuery(["employeeDetail", id], () => fetchEmployeeDetail(id));

  const {
    data: employeeRequests,
    isEmpLoading,
    isEmpError,
  } = useQuery(["employeeRequests", id], () => fetchEmployeeRequest(id));

  const specificRequestsTableData = employeeRequests?.requests?.map((item) => {
    const { id, itemName, category, subcategory, status } = item;

    const Category = category !== null ? category : "Not available";
    const subCategory = subcategory?.name || "Not available";
    let actionBy;
    if (status === "pending") {
      actionBy = "-";
    } else {
      actionBy = localStorage.getItem("userRole");
    }

    return {
      Id: id,
      Name: itemName,
      Category: Category,
      Subcategory: subCategory,
      Status: status,
      Action_By: actionBy,
    };
  });

  const handleGoBack = () => {
    navigateTo(-1);
  };

  const handleEdit = () => {
    navigateTo(`/editEmployee/${id}`);
  };

  const handleDelete = () => {
    deleteEmpMutation.mutate(id);
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

  if (isLoading || isEmpLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError || isEmpError) {
    return (
      <div className="container">
        Error occurred while fetching employee detail...
      </div>
    );
  }
  return (
    <Box className="container">
      <Box className="component-headers">
        <Box className="left-header">
          <Button
            sx={{ color: "gray" }}
            className="back-btn"
            onClick={handleGoBack}
          >
            <KeyboardBackspaceIcon fontSize="small" />
            Back
          </Button>
        </Box>
        <Box className="right-header">
          <DropDownMenu options={menuOptions} />
        </Box>
      </Box>
      <Divider />
      <Box className="content">
        <Box className="left-content">
          <Button
            style={generalInfo ? styles.activeBtn : styles.blackTextBtn}
            onClick={() => {
              setGeneralInfo(true);
              setInventoryTab(false);
              setRequestTab(false);
            }}
            className="switch-btn"
          >
            General Information
          </Button>
          {/* <Button
            style={inventoryTab ? styles.activeBtn : styles.blackTextBtn}
            onClick={() => {
              setGeneralInfo(false);
              setInventoryTab(true);
              setRequestTab(false);
            }}
            className="switch-btn"
          >
            Inventory
          </Button> */}
          <Button
            style={requestTab ? styles.activeBtn : styles.blackTextBtn}
            onClick={() => {
              setGeneralInfo(false);
              setInventoryTab(false);
              setRequestTab(true);
            }}
            className="switch-btn"
          >
            Requests
          </Button>
        </Box>
        <Box className="right-content">
          {generalInfo && (
            <>
              <Box className="user-card">
                <Box className="profile-img">
                  <img className="img-rad" src={avatar} alt="profile-avatar" />
                </Box>
                <Box className="details">
                  <span className="Box-heading">
                    {employeeDetail[0]?.username || notAvailable}
                  </span>
                </Box>
              </Box>
              <Box className="data-field border-top">
                <span className="form-left bold-txt">Email Address</span>
                <p>{employeeDetail[0]?.email || notAvailable}</p>
              </Box>
              <Box className="data-field">
                <span className="form-left bold-txt">Contact Number</span>
                <p>{employeeDetail[0]?.contact || notAvailable}</p>
              </Box>
              <Box className="data-field">
                <span className="form-left bold-txt">Department</span>
                <p>{employeeDetail[0]?.department || notAvailable}</p>
              </Box>
            </>
          )}
          {inventoryTab && (
            <Box className="inventory-table">
              <DataTable rows={rows} />
            </Box>
          )}
          {requestTab && (
            <Box className="request-table">
              <DataTable rows={specificRequestsTableData} linkString={`#`} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ViewEmployee;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Box, Button, Typography, Divider } from "@mui/material";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import DropDownMenu from "../../../Components/DropDownMenu";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import placeholder from "../../../Assets/placeholder.jpg";
import { httpRequest, adminByID } from "../../../Utils/httpRequestsStrings";
import { deleteAdmin } from "./AdminApi";
import "./AdminDetails.css";

const AdminDetails = () => {
  let notAvailable = "N/A";
  const [adminData, setAdminData] = useState(null);

  const { id } = useParams();
  const navigateTo = useNavigate();

  const deleteAdmMutation = useMutation(deleteAdmin, {
    onSuccess: (data) => {
      navigateTo(-1);
    },
  });

  const handleGoBack = () => {
    navigateTo(-1);
  };

  const handleEdit = () => {
    navigateTo(`/editAdmin/${id}`);
  };

  const handleDelete = () => {
    deleteAdmMutation.mutate(id);
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

  useEffect(() => {
    const fetchAdminDetail = async () => {
      try {
        let accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(`${httpRequest}${adminByID}${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setAdminData(response.data);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    fetchAdminDetail();
  }, [id]);

  if (!adminData) {
    return <div>Loading...</div>;
  }

  return (
    <Box className="container">
      <Box className="details-header component-header">
        <Box className="left-header-content">
          <Button style={{ color: "gray" }} onClick={handleGoBack}>
            <BackArrow />
            Back
          </Button>
          <Typography fontWeight="bold" variant="h4">
            Admin Details
          </Typography>
        </Box>
        <Divider />
        <DropDownMenu options={menuOptions} />
      </Box>
      <Box className="admin-info">
        <Box className="profile-pic">
          <img src={adminData[0].image || placeholder} alt="profile pic " />
        </Box>
        <Box className="admin-details">
          <span className="pri-heading">
            {adminData[0]?.username || notAvailable}
          </span>
          <p className="gray-text">{adminData[0]?.email || notAvailable}</p>
          <p className="gray-text">{adminData[0]?.contact || notAvailable}</p>
        </Box>
      </Box>
      <Divider />
      <Box className="admin-organization">
        <Typography fontWeight="bold" variant="h5">
          Organization
        </Typography>
        <Box className="admin-organization">
          <Box className="adm-info-main">
            <Box className="profile-pic">
              <img
                src={adminData[0].organization?.logo || placeholder}
                alt="logo"
              />
            </Box>
            <Box className="rep-data">
              <Typography fontWeight="bold" variant="h5">
                {adminData[0].organization?.name || notAvailable}
              </Typography>
              <p> {adminData[0].organization?.email || notAvailable}</p>
            </Box>
          </Box>

          <Box className="field-adm-data">
            <Typography fontWeight="bold">Representative Name</Typography>
            <Typography>
              {adminData[0].organization?.representativeName || notAvailable}
            </Typography>
          </Box>
          <Box className="rep-contact field-adm-data2 ">
            <Typography fontWeight="bold">Representative Contact:</Typography>
            <Typography>
              {adminData[0].organization?.representativeContact || notAvailable}
            </Typography>
          </Box>
          <Box className="no-border field-adm-data3">
            <Typography fontWeight="bold">Bio:</Typography>
            <Typography>
              {adminData[0].organization?.bio || notAvailable}
            </Typography>
          </Box>
          <Box className="no-border field-adm-data4">
            <Typography fontWeight="bold">Address</Typography>
            <Typography>
              {" "}
              {adminData[0].organization?.address || notAvailable}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDetails;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DropDownMenu from "../../../Components/DropDownMenu";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { cornFlowerBlue } from "../../../Utils/ColorConstants";
import { httpRequest, orgByID } from "../../../Utils/httpRequestsStrings";
import { deleteOrganization } from "./organizationApi";
import AdminList from "../Admin/AdminList";
import "./OrganizationDetails.css";

const styles = {
  fieldWidth: { width: "28%" },
};

const OrganizationDetail = () => {
  const { id } = useParams();
  const [orgDetail, setOrgDet] = useState({
    org: null,
  });
  const [activeBtn, setActiveBtn] = useState(true);
  const navigateTo = useNavigate();

  const deleteOrgMutation = useMutation(deleteOrganization, {
    onSuccess: (data) => {
      navigateTo(-1);
    },
  });

  const handleGoBack = () => {
    navigateTo(-1);
  };

  const handleEdit = () => {
    navigateTo(`/editOrganization/${id}`);
  };

  const handleDelete = () => {
    deleteOrgMutation.mutate(id);
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
    const fetchOrganizationDetail = async () => {
      try {
        let accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(`${httpRequest}${orgByID}${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setOrgDet((prevState) => ({
          ...prevState,
          org: response.data.org,
        }));
      } catch (error) {
        throw new Error(error.message)
      }
    };

    fetchOrganizationDetail();
  }, [id]);

  return (
    <Box className="container">
      <Box className="org-det-header">
        <button className="back-btn" onClick={handleGoBack}>
          <KeyboardBackspaceIcon fontSize="small" />
          Back
        </button>
        <DropDownMenu options={menuOptions} />
      </Box>

      <Box className="org-details">
        <Box className="tabs">
          <button
            onClick={() => {
              setOrgDet((prevState) => ({
                ...prevState,
              }));
              setActiveBtn(true);
            }}
            className="switch-btn"
            style={{
              color: !activeBtn ? "black" : "white",
              backgroundColor: !activeBtn ? "white" : cornFlowerBlue,
            }}
          >
            General Information
          </button>
          <button
            onClick={() => {
              setActiveBtn(false);
            }}
            className="switch-btn"
            style={{
              color: !activeBtn ? "white" : "black",
              backgroundColor: !activeBtn ? cornFlowerBlue : "white",
            }}
          >
            Admins
          </button>
        </Box>

        {activeBtn && orgDetail.org && (
          <Box className="org-det-content">
            <Box className="org-content-head">
              <Box className="logo">
                <img src={orgDetail.org.logo} alt="logo" />
              </Box>
              <Box className="title">
                <Typography fontWeight="bold">{orgDetail.org.name}</Typography>
                <Typography>{orgDetail.org.email}</Typography>
              </Box>
            </Box>
            <Box className="bio org-det-field">
              <Box sx={styles.fieldWidth}>
                <Typography fontWeight="bold" className="org-det-left">
                  Bio
                </Typography>
              </Box>

              <Typography>{orgDetail.org.bio}</Typography>
            </Box>
            <Box className="address org-det-field">
              <Box sx={styles.fieldWidth}>
                <Typography fontWeight="bold" className="org-det-left">
                  Address
                </Typography>
              </Box>

              <Typography>{orgDetail.org.address}</Typography>
            </Box>
            <Box className="rep org-det-field">
              <Box sx={styles.fieldWidth}>
                <Typography fontWeight="bold" className="org-det-left">
                  Representative Name
                </Typography>
              </Box>

              <Typography>{orgDetail.org.representativeName}</Typography>
            </Box>
            <Box className="rep-contact org-det-field">
              <Box sx={styles.fieldWidth}>
                <Typography fontWeight="bold" className="org-det-left">
                  Representative Contact
                </Typography>
              </Box>

              <Typography>{orgDetail.org.representativeContact}</Typography>
            </Box>
          </Box>
        )}
        {!activeBtn && orgDetail && (
          <Box className="org-det-admins">
            <AdminList />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OrganizationDetail;

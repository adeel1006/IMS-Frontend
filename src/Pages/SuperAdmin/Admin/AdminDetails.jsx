import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Typography, Divider } from "@mui/material";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import avatar from "../../../Assets/avatar.png";
import { httpRequest , adminByID} from "../../../Utils/httpRequestsStrings";
import "./AdminDetails.css";

const AdminDetails = () => {
  const [adminData, setAdminData] = useState(null);

  const { id } = useParams();
  const navigateTo = useNavigate();


  const handleGoBack = () => {
    navigateTo(-1);
  };

  useEffect(() => {
    const fetchAdminDetail = async () => {
      try {
        let accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(`${httpRequest}${adminByID}${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);
        setAdminData(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchAdminDetail();
  }, [id]);

  if (!adminData) {
    return <div>Loading...</div>;
  }

  console.log(adminData[0].organization)

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
        </Box>
        <Box className="admin-info">
          <Box className="profile-pic">
            <img src={avatar} alt="profile pic " />
          </Box>
          <Box className="admin-details">
            <span className="pri-heading">{adminData[0]?.username}</span>
            <p className="gray-text">{adminData[0]?.email}</p>
            <p className="gray-text">{adminData[0]?.contact}</p>
          </Box>
        </Box>
        <Divider />
        <Box className="admin-organization">
          <Typography fontWeight="bold" variant="h5">
            Organization
          </Typography>
          <Box className="admin-organization">
            <Box className="org-info-main">
              <Box className="profile-pic">
                <img src={adminData[0].organization?.logo} alt="logo" />
              </Box>
              <Box className="rep-data">
                <Typography fontWeight="bold" variant="h5">
                  {adminData[0].organization?.name}
                </Typography>
                <p> {adminData[0].organization?.email}</p>
              </Box>
            </Box>

            <Box className="field-adm-data">
              <Typography fontWeight="bold">Representative Name</Typography>
              <Typography> {adminData[0].organization?.representativeName}</Typography>
            </Box>
            <Box className="rep-contact field-adm-data2 ">
              <Typography fontWeight="bold">Representative Contact:</Typography>
              <Typography> {adminData[0].organization?.representativeContact }</Typography>
            </Box>
            <Box className="no-border field-adm-data3">
              <Typography fontWeight="bold">Bio:</Typography>
              <Typography>
              {adminData[0].organization?.bio}
              </Typography>
            </Box>
            <Box className="no-border field-adm-data4">
              <Typography fontWeight="bold">Address</Typography>
              <Typography> {adminData[0].organization?.address}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default AdminDetails;

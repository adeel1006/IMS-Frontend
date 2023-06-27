import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import {
  httpRequest,
  fetchAdminsData,
} from "../../../Utils/httpRequestsStrings";
import AdminDataTable from "./AdminDataTable";
import { options } from "../../../Utils/testingData";
import placeHolderImg from "../../../Assets/placeholder.jpg";
import "./AdminList.css";

const AdminList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const fetchAdmins = async () => {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(`${httpRequest + fetchAdminsData}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  };

  const {
    data: adminsList,
    isLoading,
    isError,
  } = useQuery("adminsList", fetchAdmins);

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">Error occurred while fetching Admins.</div>
    );
  }

  const specificAdminsList = adminsList.map((item) => {
    const { id, image, username, email, contact, organization } = item;
    const name = username !== null ? username : "Not updated yet";
    const handleImage = image !== null ? image : placeHolderImg;
    const handleContact = contact !== null ? contact : "Not updated yet";
    const orgName = organization?.name || "Not updated yet";
    return {
      Id: id,
      Image: handleImage,
      Name: name,
      Organization: orgName,
      Email: email,
      Contact: handleContact,
    };
  });

  const filteredAdminTableData = specificAdminsList.filter((item) => {
    const values = Object.values(item).map((value) =>
      String(value).toLowerCase()
    );
    return values.some((value) => value.includes(searchQuery.toLowerCase()));
  });

  return (
    <>
      <Box className="adm-container">
        <Box className="adm-header">
          <Box className="adm-left-header">
            <Typography variant="h3">Admins</Typography>
            <SearchBar setSearchQuery={setSearchQuery} />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Organization"}
              options={options}
            />
          </Box>

          <Box className="adm-right-header">
            <Button
              style={{
                color: "white",
                backgroundColor: seaGreenBtn,
                borderRadius: "10px",
              }}
            >
              <AddIcon />
              <Link className="link-style" to="/addAdmin">
                Add
              </Link>
            </Button>
          </Box>
        </Box>
        <Box className="adm-table">
          <AdminDataTable rows={filteredAdminTableData} />
        </Box>
      </Box>
    </>
  );
};

export default AdminList;

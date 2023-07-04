import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchAdmins, fetchOrganizations } from "./AdminApi";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import AdminDataTable from "./AdminDataTable";
import placeHolderImg from "../../../Assets/placeholder.jpg";
import "./AdminList.css";

const btnStyle = {
  color: "white",
  backgroundColor: seaGreenBtn,
  borderRadius: "10px",
};

const AdminList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");

  const {
    data: adminsList,
    isLoading: adminsLoading,
    isError: adminsError,
  } = useQuery("adminsList", fetchAdmins);

  const {
    data: orgs,
    isLoading: orgLoading,
    isError: orgError,
  } = useQuery("orgs", fetchOrganizations);

  if (adminsLoading || orgLoading) {
    return <div className="container">Loading...</div>;
  }

  if (adminsError || orgError) {
    return <div className="container">Error occurred while fetching data.</div>;
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

  const organizationOptions = orgs.map((org) => ({
    id: org.id,
    value: org.name,
    label: org.name,
  }));

  const filteredAdminTableData = specificAdminsList.filter((item) => {
    const values = Object.values(item).map((value) =>
      String(value).toLowerCase()
    );
    return (
      values.some((value) => value.includes(searchQuery.toLowerCase())) &&
      (!selectedOrganization || item.Organization === selectedOrganization)
    );
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
              options={organizationOptions}
              value={selectedOrganization}
              onChange={(event) => setSelectedOrganization(event.target.value)}
            />
          </Box>

          <Box className="adm-right-header">
            <Button style={btnStyle}>
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

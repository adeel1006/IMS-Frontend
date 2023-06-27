import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import SelectBox from "../../../Components/SelectBox";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import OrgDataTable from "./OrgDataTable";
import { options, rows } from "../../../Utils/testingData";
import {
  httpRequest,
  fetchOrganizationsList,
} from "../../../Utils/httpRequestsStrings";
import placeHolderImg from "../../../Assets/placeholder.jpg";
import "./OrganizationList.css";

const btnStyle = {
  color: "white",
  backgroundColor: seaGreenBtn,
  borderRadius: "10px",
};

const OrganizationList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const fetchOrg = async () => {
    let accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(
      `${httpRequest + fetchOrganizationsList}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  };

  const { data: org, isLoading, isError } = useQuery("org", fetchOrg);

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">
        Error occurred while fetching Organizations.
      </div>
    );
  }

  const specificOrgList = org.map((item) => {
    const { id, logo, name, city, email, representativeContact } = item;
    const image = logo !== null ? logo : placeHolderImg;
    return {
      Id: id,
      Image: image,
      Name: name,
      Location: city,
      Email: email,
      Contact: representativeContact,
    };
  });

  const filteredOrgTableData = specificOrgList.filter((item) => {
    const values = Object.values(item).map((value) =>
      String(value).toLowerCase()
    );
    return values.some((value) => value.includes(searchQuery.toLowerCase()));
  });

  // console.log(
  //   "Organizations::" + JSON.stringify(filteredOrgTableData, null, 2)
  // );

  return (
    <>
      <Box className="org-container">
        <Box className="org-header">
          <Box className="org-left-header">
            <Typography variant="h3">Organizations</Typography>
            <SearchBar setSearchQuery={setSearchQuery} />
            <SelectBox
              className="selectBox"
              placeHolder={"Select Locations"}
              options={options}
            />
          </Box>

          <Box className="org-right-header">
            <Button style={btnStyle}>
              <AddIcon />
              <Link className="link-style" to="/superAdminOrganization">
                Add
              </Link>
            </Button>
          </Box>
        </Box>
        <Box className="org-table">
          <OrgDataTable rows={filteredOrgTableData} />
        </Box>
      </Box>
    </>
  );
};

export default OrganizationList;

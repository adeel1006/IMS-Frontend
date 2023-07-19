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
import {
  httpRequest,
  fetchOrganizationsList,
} from "../../../Utils/httpRequestsStrings";
import placeHolderImg from "../../../Assets/placeholder.jpg";
import "./OrganizationList.css";

const styles = {
  btnStyle: {
    color: "white",
    backgroundColor: seaGreenBtn,
    borderRadius: "10px",
  },
  noData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const OrganizationList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

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

  const organizationsLocations = org.map((item) => {
    const { id, city } = item;
    return {
      id: id,
      value: city,
      label: city,
    };
  });

  const removeDuplicateLocations = organizationsLocations.reduce(
    (unique, location) => {
      const existsLocation = unique.find(
        (item) => item.label === location.label
      );
      if (!existsLocation) {
        unique.push(location);
      }
      return unique;
    },
    []
  );

  const filteredOrgTableData = specificOrgList.filter((item) => {
    const values = Object.values(item).map((value) =>
      String(value).toLowerCase()
    );
    return (
      values.some((value) => value.includes(searchQuery.toLowerCase())) &&
      (!selectedLocation || item.Location === selectedLocation)
    );
  });

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
              value={selectedLocation}
              options={removeDuplicateLocations}
              onChange={(e) => setSelectedLocation(e.target.value)}
            />
          </Box>

          <Box className="org-right-header">
            <Button style={styles.btnStyle}>
              <AddIcon />
              <Link className="link-style" to="/superAdminOrganization">
                Add
              </Link>
            </Button>
          </Box>
        </Box>
        <Box className="org-table">
          {!filteredOrgTableData.length ? (
            <div className="container" style={styles.noData}>
              No data available
            </div>
          ) : (
            <OrgDataTable rows={filteredOrgTableData} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default OrganizationList;

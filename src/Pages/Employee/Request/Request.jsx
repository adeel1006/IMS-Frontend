import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { fetchUserRequests } from "./RequestApi";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "../../../Components/DataTable";
import { updateUserReqData } from "../../../Redux/Reducers/requestSlice";
import "./Request.css";

const styles = {
  noData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  BtnStyle: {
    fontSize: "smaller",
    color: "white",
    backgroundColor: seaGreenBtn,
    borderRadius: "10px",
  },
};

const Request = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: userRequests,
    isLoading,
    isError,
  } = useQuery("userRequests", fetchUserRequests);

  const specificUserReqTableData = userRequests?.requests?.map((item) => {
    const {
      id,
      itemName,
      category,
      subcategory,
      requestType,
      status,
      createdAt,
      action,
    } = item;
    const Category = category !== null ? category : "Not available";
    const subCategory = subcategory?.name || "Not available";
    const handleNullAction = action !== null ? action : "View";
    const formattedDate = new Date(createdAt).toISOString().slice(0, 10);
    return {
      Id: id,
      Name: itemName,
      Category: Category,
      Subcategory: subCategory,
      Type: requestType,
      Date: formattedDate,
      Status: status,
      Action: handleNullAction,
    };
  });

  useEffect(() => {
    dispatch(updateUserReqData(specificUserReqTableData));
  }, [userRequests]);

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">Error occurred while fetching requests.</div>
    );
  }

  const handleAddRequest = () => {
    navigate("/addRequest");
  };

  return (
    <Box className="request-container">
      <Box className="request-header">
        <Box className="request-left-header">
          <Typography variant="h3">Requests</Typography>
        </Box>

        <Box className="request-right-header">
          <Button style={styles.BtnStyle} onClick={handleAddRequest}>
            <AddIcon />
            Create Request
          </Button>
        </Box>
      </Box>
      <Box className="request-table">
        {!specificUserReqTableData.length && (
          <div className="container" style={styles.noData}>
            No data available
          </div>
        )}
        <DataTable
          rows={specificUserReqTableData}
          linkString={`/requestDetail/`}
        />
      </Box>
    </Box>
  );
};

export default Request;

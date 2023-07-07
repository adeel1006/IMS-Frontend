import React, {useEffect} from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import DataTable from "../../../Components/DataTable";
import AddIcon from "@mui/icons-material/Add";
import { seaGreenBtn } from "../../../Utils/ColorConstants";
import "./Complaints.css";
import { fetchUserComplaints } from "./ComplainApi";
import { updateUserComplaints } from "../../../Redux/Reducers/complaintSlice";

const btnStyle = {
  color: "white",
  backgroundColor: seaGreenBtn,
  fontSize: "smaller",
  borderRadius: "10px",
};

const Complaints = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: userComplaints,
    isLoading,
    isError,
  } = useQuery("userComplaints", fetchUserComplaints);

  const specificUserComplaintTableData = userComplaints?.complaints?.map(
    (item) => {
      const { id, title, description, submissionDate, status, action } = item;
      const Description = description !== null ? description : "Not available";
      const Status = status !== null ? status : "pending";
      const handleNullAction = action !== null ? action : "View";
      const formattedDate = new Date(submissionDate).toISOString().slice(0, 10);
      return {
        Id: id,
        Title: title,
        Description: Description,
        SubmissionDate: formattedDate,
        Status: Status,
        Action: handleNullAction,
      };
    }
  );

  useEffect(()=>{
    dispatch(updateUserComplaints(specificUserComplaintTableData));
  },[userComplaints])

  // console.log(JSON.stringify(specificUserComplaintTableData, null, 2));

  const handleAddRequest = () => {
    navigate(`/addComplaint`);
  };

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="container">Error occurred while fetching requests.</div>
    );
  }


  return (
    <>
      <Box className="complaints-container">
        <Box className="complaints-header">
          <Box className="complaints-left-header">
            <Typography variant="h3">Complaints</Typography>
          </Box>

          <Box className="complaints-right-header">
            <Button onClick={handleAddRequest} style={btnStyle}>
              <AddIcon />
              Create Complain
            </Button>
          </Box>
        </Box>
        <Box className="complaints-table">
          <DataTable
            rows={specificUserComplaintTableData}
            linkString={`/complaintDetail/`}
          />
        </Box>
      </Box>
    </>
  );
};

export default Complaints;

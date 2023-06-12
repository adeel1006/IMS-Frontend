import React from 'react'
import "./AddVendors";
import { TextField, Button, Box, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { grayBtn, seaGreenBtn } from '../../../Utils/ColorConstants';
import { options } from '../../../Utils/testingData';
import SelectBox from '../../../Components/SelectBox';
const AddVendors = () => {
  return (
    <>
    <Box className="container">
      <Box className="header-mainItem">

        <Box className="left-header">
          <Button style={{color:"gray"}}>
            <KeyboardBackspaceIcon />
            Back
          </Button>
        </Box>

        <Box className="right-header">
          <Button style={{ color: "gray", backgroundColor: grayBtn , borderRadius:"10px", marginRight:"8%", padding:"5%"}}>
            Cancel
          </Button>
          <Button style={{ color: "white", backgroundColor: seaGreenBtn, borderRadius:"10px" }}>
            Save
          </Button>
        </Box>


      </Box>
      <form action="">
        <Box className="data-field">
          <span className="form-left">Name</span>
          <TextField
            required
            size="small"
            placeholder="Name"
            style={{ width: "32%" }}
          ></TextField>
        </Box>
        <Box className="data-field">
          <span className="form-left">Contact Number</span>
          <TextField
            required
            size="small"
            placeholder="Enter Contact number"
            style={{ width: "32%" }}
          ></TextField>
        </Box>
       
        <Box className="data-field">
          <span className="form-left">Category</span>
          <SelectBox
            marginLeft={0}
            minWidth={500}
            options={options}
            placeHolder={"Select Category"}
          />
        </Box>
        <Box className="data-field">
          <span className="form-left">Sub-category</span>
          <SelectBox
            marginLeft={0}
            minWidth={500}
            options={options}
            placeHolder={"Select Sub-category"}
          />
        </Box>

      </form>
    </Box>
  </>
  )
}

export default AddVendors
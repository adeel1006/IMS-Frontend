import React from "react";
import { TextField, Button, Box } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { options } from "../../../Utils/testingData";
import { grayBtn, seaGreenBtn } from "../../../Utils/ColorConstants";
import SelectBox from "../../../Components/SelectBox";
import "./AddItem.css";
const AddItem = () => {
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
            <span className="form-left">Item Name</span>
            <TextField
              required
              size="small"
              placeholder="Item Name"
              style={{ width: "32%" }}
            ></TextField>
          </Box>
          <Box className="data-field">
            <span className="form-left">Serial Number</span>
            <TextField
              required
              size="small"
              placeholder="Enter serial number"
              style={{ width: "32%" }}
            ></TextField>
          </Box>
          <Box className="data-field">
            <span className="form-left">Description</span>
            <TextField
              sx={{ width: "500px" }}
              type="text"
              required
              multiline
              rows={6}
              placeholder="Description"
              className="bio-field"
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
          <Box className="data-field">
            <span className="form-left">Unit Price</span>
            <TextField
              required
              size="small"
              placeholder="Unit price"
              style={{ width: "32%" }}
            ></TextField>
          </Box>
          <Box className="data-field">
            <span className="form-left">Vendor</span>
            <SelectBox
              marginLeft={0}
              minWidth={500}
              options={options}
              placeHolder={"Select vendor"}
            />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddItem;

import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SelectBox({ placeHolder, options }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 200 , marginLeft:1 , marginRight:1}}>
      <InputLabel id="select-label">{placeHolder}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedValue}
        onChange={handleChange}
        label={placeHolder}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectBox;

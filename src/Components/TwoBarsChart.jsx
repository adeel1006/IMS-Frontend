import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { cornFlowerBlue, seaGreenBtn } from "../Utils/ColorConstants";
import { Box } from "@mui/material";
const styles = {
  style1: {
    color: "gray",
    fontSize: "small",
    display: "flex",
    justifyContent: "flex-end",
  },
  style2: {
    width: "20px",
    height: "20px",
    backgroundColor: cornFlowerBlue,
    margin: "0% 1%",
  },
  style3: {
    width: "20px",
    height: "20px",
    backgroundColor: seaGreenBtn,
    margin: "0% 1%",
  },
};

const TwoBarsChart = ({ data }) => {
  return (
    <>
      <BarChart
        style={{ paddingTop: "2%" }}
        width={800}
        height={300}
        data={data}
      >
        <XAxis dataKey="name" stroke="gray" />
        <YAxis />
        <Tooltip />
        <Bar fill={cornFlowerBlue} dataKey="number" barSize={25} />
        <Bar fill={seaGreenBtn} dataKey="number" barSize={25} />
      </BarChart>
      <Box sx={styles.style1}>
        <Box style={styles.style2}></Box>
        Assigned Items
        <Box style={styles.style3}></Box>
        Remaining Items
      </Box>
    </>
  );
};

export default TwoBarsChart;

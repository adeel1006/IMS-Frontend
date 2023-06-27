import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  Pagination,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  tableCellClasses,
  TableBody,
  Table,
  Paper,
  Avatar,
} from "@mui/material";
import { cornFlowerBlue } from "../../../Utils/ColorConstants";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: cornFlowerBlue,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const OrgDataTable = ({ rows }) => {
  const headerKeys = [
    "Id",
    "Image",
    "Name",
    "Location",
    "Email",
    "Contact",
    "Action",
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 10;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headerKeys.map((key, index) => (
                <StyledTableCell align="left" key={`${key}-${index}`}>
                  {key}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(startIndex, endIndex).map((row, rowIndex) => {
              const { Id, Image, Name, Location, Email, Contact } = row;

              return (
                <StyledTableRow key={rowIndex}>
                  <StyledTableCell align="left">{Id}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Avatar
                      src={Image}
                      alt={Name}
                      sx={{ width: 40, height: 40 }}
                      variant="square"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="left">{Name}</StyledTableCell>
                  <StyledTableCell align="left">{Location}</StyledTableCell>
                  <StyledTableCell align="left">{Email}</StyledTableCell>
                  <StyledTableCell align="left">{Contact}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Link
                      to={`/superAdminOrganizationDetails/${Id}`}
                      style={{ color: cornFlowerBlue }}
                    >
                      View
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
        {rows.length > rowsPerPage && (
          <Box>
            <Stack spacing={2} sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Box sx={{ marginLeft: "auto" }}>
                <Pagination
                  count={Math.ceil(rows.length / rowsPerPage)}
                  page={currentPage}
                  onChange={(event, page) => setCurrentPage(page)}
                  variant="outlined"
                  shape="rounded"
                />
              </Box>
            </Stack>
          </Box>
        )}
      </TableContainer>
    </>
  );
};

export default OrgDataTable;

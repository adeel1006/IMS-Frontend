import * as React from "react";
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

const AdminDataTable = ({ rows }) => {
  const headerKeys = [
    "Id",
    "Image",
    "Name",
    "Organization",
    "Email",
    "Contact",
    "Action",
    ...Object.keys(rows[0] || {}).filter(
      (key) =>
        key !== "Id" &&
        key !== "Image" &&
        key !== "Name" &&
        key !== "Organization" &&
        key !== "Email" &&
        key !== "Contact" &&
        key !== "Action"
    ),
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
              const { Id  } = row;
              const cells = headerKeys.map((key, columnIndex) => {
                if (key === "Image") {
                  return (
                    <StyledTableCell
                      align="left"
                      key={`${key}-${rowIndex}-${columnIndex}`}
                    >
                      <Avatar
                        src={row[key]}
                        alt={row["Name"]}
                        sx={{ width: 40, height: 40 }}
                        variant="square"
                      />
                    </StyledTableCell>
                  );
                }
                return (
                  <StyledTableCell
                    align="left"
                    key={`${key}-${rowIndex}-${columnIndex}`}
                  >
                    {row[key]}
                  </StyledTableCell>
                );
              });

              return (
                <StyledTableRow key={rowIndex}>
                  {cells.slice(0, -1)}
                  <StyledTableCell align="left">
                    <Link
                      to={`/adminsDetails/${Id}`}
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

export default AdminDataTable;

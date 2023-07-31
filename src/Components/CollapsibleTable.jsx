import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "react-query";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Collapse,
  IconButton,
  Box,
  Paper,
  Button,
  Alert,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { deleteCategory } from "../Pages/Admin/Categories/CategoriesApi";
import {
  cornFlowerBlue,
  dangerButton,
  grayOp,
  seaGreenBtn,
} from "../Utils/ColorConstants";

const styles = {
  headerRowClr: { color: "white" },
  add: { color: seaGreenBtn },
  edit: { color: grayOp },
  delete: { color: dangerButton },
  tableWidth: { minWidth: 700 },
  tableHead: { backgroundColor: cornFlowerBlue, color: "white" },
  collapseMargin: { margin: 1 },
  stack: { marginTop: "1rem", marginBottom: "1rem" },
};

const DataTable = ({ rows, linkString }) => {
  const navigateTo = useNavigate();
  const [openRow, setOpenRow] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const deleteCategoryMutation = useMutation(deleteCategory, {
    onSuccess: (data) => {
      setShowAlert(data.message);
      setTimeout(() => setShowAlert(false), 5000);
    },
  });

  const handleRowClick = (index) => {
    if (openRow === index) {
      setOpenRow(null);
    } else {
      setOpenRow(index);
    }
  };

  const handleAddAction = (id) => {
    navigateTo("/addCategory");
  };

  const handleEditAction = (id) => {
    navigateTo(`/editCategory/${id}`);
  };

  const handleDeleteAction = (id) => {
    deleteCategoryMutation.mutate(id);
  };

  const firstRowIndex = (currentPage - 1) * rowsPerPage;
  const lastRowIndex = Math.min(firstRowIndex + rowsPerPage, rows?.length);

  return (
    <TableContainer component={Paper}>
      {showAlert && (
        <Alert severity="success" onClose={() => setShowAlert(false)}>
          {showAlert}
        </Alert>
      )}
      <Table sx={styles.tableWidth} aria-label="collapsible table">
        <TableHead style={styles.tableHead}>
          <TableRow>
            <TableCell sx={styles.headerRowClr} align="left">
              ID
            </TableCell>
            <TableCell sx={styles.headerRowClr} align="left">
              Category Name
            </TableCell>
            <TableCell sx={styles.headerRowClr} align="center">
              Number of Subcategories
            </TableCell>
            <TableCell sx={styles.headerRowClr} align="center">
              Number of Vendors
            </TableCell>
            <TableCell sx={styles.headerRowClr} align="center">
              Action
            </TableCell>
            <TableCell sx={styles.headerRowClr} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.slice(firstRowIndex, lastRowIndex).map((row, index) => (
            <React.Fragment key={row.ID}>
              <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell component="th" scope="row">
                  {row.ID}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.CategoryName}
                </TableCell>
                <TableCell align="center">
                  {row.NumberofSubcategories}
                </TableCell>
                <TableCell align="center">{row.NumberOfVendors}</TableCell>
                <TableCell align="center">
                  {row.Action === "Add or Delete" ? (
                    <>
                      <Button
                        style={styles.add}
                        onClick={() => handleAddAction(row.ID)}
                      >
                        <AddIcon />
                      </Button>
                      <Button
                        style={styles.edit}
                        onClick={() => handleEditAction(row.ID)}
                      >
                        <EditOutlinedIcon />
                      </Button>
                      <Button
                        style={styles.delete}
                        onClick={() => handleDeleteAction(row.ID)}
                      >
                        <DeleteOutlineIcon />
                      </Button>
                    </>
                  ) : (
                    row.Action
                  )}
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => handleRowClick(index)}
                  >
                    {openRow === index ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
                >
                  <Collapse in={openRow === index} timeout="auto" unmountOnExit>
                    <Box sx={styles.collapseMargin}>
                      <Table size="small" aria-label="subcategories">
                        <TableHead>
                          <TableRow>
                            <TableCell>Subcategory Name</TableCell>
                            <TableCell>Vendor Name</TableCell>
                            <TableCell align="right">Items Quantity</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.subcategories.map((subcat, subIndex) => (
                            <TableRow key={subIndex}>
                              <TableCell component="th" scope="row">
                                {subcat.SubcategoryName}
                              </TableCell>
                              <TableCell>{subcat.VendorName}</TableCell>
                              <TableCell align="right">
                                {subcat.ItemsQuantity}
                              </TableCell>
                              <TableCell>
                                <Link to={linkString + `${row.ID}`}>
                                  <Button
                                    sx={{
                                      fontSize: "x-small",
                                      marginLeft: "-12px",
                                    }}
                                  >
                                    {subcat.Action}
                                  </Button>
                                </Link>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      {rows?.length > rowsPerPage && (
        <Box>
          <Stack spacing={2} sx={styles.stack}>
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
  );
};

export default DataTable;

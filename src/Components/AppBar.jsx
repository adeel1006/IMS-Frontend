import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../Assets/logo.png";
import avatar from "../Assets/avatar.png";

const superAdminContent = [
  { label: "Dashboard", path: "/superAdminDashboard" },
  { label: "Organization", path: "/superAdminOrganizationList" },
  { label: "Admin", path: "/adminsList" },
  { label: "Complaints", path: "/superAdminComplaints" },
];

const adminContent = [
  { label: "Dashboard", path: "/adminDashboard" },
  { label: "Inventory", path: "/adminInventory" },
  { label: "Category", path: "/categories" },
  { label: "Employees", path: "/employees" },
  { label: "Requests", path: "/adminRequest" },
  { label: "Returns", path: "/returns" },
  { label: "Complaints", path: "/adminComplaints" },
  { label: "Vendor", path: "/vendors" },
];

const employeeContent = [
  { label: "Dashboard", path: "/employeeDashboard" },
  { label: "Requests", path: "/requests" },
  { label: "Complaints", path: "/employeeComplaint" },
];

function AppBarz({ userRole }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    if (path) {
      navigate(path);
    }
  };

  const logout = () => {
    ["accessToken", "userRole", "userId"].forEach((item) => {
      localStorage.removeItem(item);
    });
    navigate("/login");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    logout();
  };

  let content = [];
  let showLoginButton = false;

  if (userRole === "SUPER_ADMIN") {
    content = superAdminContent;
  } else if (userRole === "ADMIN") {
    content = adminContent;
  } else if (userRole === "EMPLOYEE") {
    content = employeeContent;
  } else {
    showLoginButton = true;
  }

  return (
    <AppBar sx={{ backgroundColor: "white" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="#"
            sx={{
              mr: 2,
              display: { md: "flex", xs: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 70,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={Logo}
                alt="Gigalabs"
              />
            </Box>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { md: "none", xs: "flex" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {content.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="#"
            sx={{
              mr: 2,
              display: { md: "none", xs: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 70,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={Logo}
                alt="Gigalabs"
              />
            </Box>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: "flex", xs: "none" } }}>
            {content.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                sx={{
                  mt: 2,
                  pb: 2.5,
                  color: location.pathname === page.path ? "black" : "gray",
                  borderBottom:
                    location.pathname === page.path
                      ? "5px solid #5085EC"
                      : "none",
                  borderRadius: "0px",
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {showLoginButton ? (
              <></>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, color: "inherit" }}
                  >
                    <Avatar alt="Remy Sharp" src={avatar} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  anchorReference="anchorEl"
                  anchorEl={anchorElUser}
                >
                  <MenuItem onClick={handleLogout} sx={{ color: "black" }}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarz;

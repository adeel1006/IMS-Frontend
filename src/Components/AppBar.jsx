import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { seaGreenBtn } from "../Utils/ColorConstants";

const superAdminContent = [
  { label: "Dashboard", path: "/superAdminDashboard" },
  { label: "Organization", path: "/superAdminOrganization" },
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

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AppBarz({ userRole }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
    <AppBar style={{ backgroundColor: "white" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              style={{ width: "70px", height: "70px" }}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              src={Logo}
              alt="Gigalabs"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {content.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              src={Logo}
              alt="Gigalabs"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {content.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
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
              <Button
                variant="contained"
                component={Link}
                to="/login"
                sx={{ m: 1, backgroundColor: seaGreenBtn }}
              >
                Login
              </Button>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={avatar} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={handleCloseUserMenu}
                      sx={{ color: "black" }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
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

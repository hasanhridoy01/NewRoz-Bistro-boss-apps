//Apps bar import........................!
import * as React from "react";
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
import { Link, useNavigate } from "react-router-dom";

//Drawer Import...................!
import Drawer from "@mui/material/Drawer";
import { Stack } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { signOutUser, user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //style event section............................!
  const [activeButtonHome, setActiveButtonHome] = React.useState(false);
  const [activeButtonContact, setActiveButtonContact] = React.useState(false);
  const [activeButtonDashboard, setActiveButtonDashboard] =
    React.useState(false);
  const [activeButtonMenu, setActiveButtonMenu] = React.useState(false);
  const [activeButtonShop, setActiveButtonShop] = React.useState(false);

  const handleButtonClickHome = () => {
    setActiveButtonHome(true);
    setActiveButtonContact(false);
    setActiveButtonDashboard(false);
    setActiveButtonMenu(false);
    setActiveButtonShop(false);
  };

  const handleButtonClickContact = () => {
    setActiveButtonContact(true);
    setActiveButtonHome(false);
    setActiveButtonDashboard(false);
    setActiveButtonMenu(false);
    setActiveButtonShop(false);
  };

  const handleButtonClickDashboard = () => {
    setActiveButtonDashboard(true);
    setActiveButtonContact(false);
    setActiveButtonHome(false);
    setActiveButtonMenu(false);
    setActiveButtonShop(false);
  };

  const handleButtonClickMenu = () => {
    setActiveButtonMenu(true);
    setActiveButtonDashboard(false);
    setActiveButtonContact(false);
    setActiveButtonHome(false);
    setActiveButtonShop(false);
  };

  const handleButtonClickShop = () => {
    setActiveButtonShop(true);
    setActiveButtonMenu(false);
    setActiveButtonDashboard(false);
    setActiveButtonContact(false);
    setActiveButtonHome(false);
  };

  //Drawer Section Events.......................!
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //handleLogOut....................!
  const handleLogOut = (e) => {
    e.preventDefault();

    //SignOut............!
    signOutUser()
      .then(() => {
        navigate("/login");
      })
      .then((error) => console.log(error));
  };

  const DrawerList = (
    <Box sx={{ width: 220 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack sx={{ marginTop: "10px", padding: "20px" }} spacing={1}>
        <nav>
          <Stack direction={"column"} spacing={2}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "yellow",
                  textAlign: "left",
                  backgroundColor: activeButtonHome === true ? "red" : "",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
                onClick={() => handleButtonClickHome()}
              >
                Home
              </Button>
            </Link>
            <Link to={"/contactPage"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "yellow",
                  textAlign: "left",
                  backgroundColor: activeButtonContact === true ? "red" : "",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
                onClick={() => handleButtonClickContact()}
              >
                Contact Us
              </Button>
            </Link>

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "yellow",
                  textAlign: "left",
                  backgroundColor: activeButtonDashboard === true ? "red" : "",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
                onClick={() => handleButtonClickDashboard()}
              >
                Dashboard
              </Button>
            </Link>

            <Link to={"/menuPage"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "yellow",
                  textAlign: "left",
                  backgroundColor: activeButtonMenu === true ? "red" : "",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
                onClick={() => handleButtonClickMenu()}
              >
                Our Menu
              </Button>
            </Link>

            <Link to={"/shopPage"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "yellow",
                  textAlign: "left",
                  backgroundColor: activeButtonShop === true ? "red" : "",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
                onClick={() => handleButtonClickShop()}
              >
                Our Shop
              </Button>
            </Link>
          </Stack>
        </nav>
      </Stack>
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          opacity: 0.8,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Bistro Boss
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                margin: "auto",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="info"
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Bistro Boss
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Box className="w-full text-center">
                <nav>
                  <Stack direction={"row"} spacing={2}>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          color: "yellow",
                          textAlign: "left",
                          backgroundColor:
                            activeButtonHome === true ? "red" : "",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                        onClick={() => handleButtonClickHome()}
                      >
                        Home
                      </Button>
                    </Link>
                    <Link
                      to={"/contactPage"}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        sx={{
                          color: "yellow",
                          textAlign: "left",
                          backgroundColor:
                            activeButtonContact === true ? "red" : "",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                        onClick={() => handleButtonClickContact()}
                      >
                        Contact Us
                      </Button>
                    </Link>

                    <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          color: "yellow",
                          textAlign: "left",
                          backgroundColor:
                            activeButtonDashboard === true ? "red" : "",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                        onClick={() => handleButtonClickDashboard()}
                      >
                        Dashboard
                      </Button>
                    </Link>

                    <Link to={"/menuPage"} style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          color: "yellow",
                          textAlign: "left",
                          backgroundColor:
                            activeButtonMenu === true ? "red" : "",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                        onClick={() => handleButtonClickMenu()}
                      >
                        Our Menu
                      </Button>
                    </Link>

                    <Link to={"/shopPage"} style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          color: "yellow",
                          textAlign: "left",
                          backgroundColor:
                            activeButtonShop === true ? "red" : "",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                        onClick={() => handleButtonClickShop()}
                      >
                        Our Shop
                      </Button>
                    </Link>
                  </Stack>
                </nav>
              </Box>
            </Box>

            <Box sx={{ marginRight: "13px" }}>
              <Button
                sx={{
                  background: "yellow",
                  color: "red",
                  "&:hover": {
                    background: "red", // Change this to the desired hover background color
                    color: "yellow", // Change this to the desired hover text color
                  },
                }}
              >
                <ShoppingCartCheckoutIcon />
                100
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {user ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
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
                    <MenuItem sx={{ padding: "10px 16px" }}>
                      <Stack spacing={2}>
                        <Typography textAlign="left" onClick={handleLogOut}>
                          Logout
                        </Typography>
                      </Stack>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Link to="/login">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "yellow",
                      textTransform: 'none',
                      color: "red",
                      "&:hover": {
                        backgroundColor: "red",
                        color: "yellow",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;

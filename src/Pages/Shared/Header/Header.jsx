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
import { Link } from "react-router-dom";

//Drawer Import...................!
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Stack } from "@mui/material";

const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Pages",
    pathName: "/pages",
  },
  {
    route: "Category",
    pathName: "/categories/news?category=all-news",
  },
  {
    route: "News",
    pathName: "/news",
  },
  {
    route: "Contact",
    pathName: "/contact",
  },
  {
    route: "About",
    pathName: "/about",
  },
];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //style event section............................!
  const [activeButton, setActiveButton] = React.useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  //Drawer Section Events.......................!
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 220 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack sx={{ marginTop: "10px", padding: "20px" }} spacing={1}>
        {navItems.map((item, index) => (
          <Link key={item.route} href={item.pathName}>
            <Button
              sx={{
                color: "#000",
                textAlign: "left",
                backgroundColor: activeButton === index ? "#f5f5f5" : "",
                "&:hover": {
                  color: "#2CC506",
                },
              }}
              fullWidth
              onClick={() => handleButtonClick(index)}
            >
              {item.route}
            </Button>
          </Link>
        ))}
      </Stack>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ position: 'fixed', opacity: 0.4, backgroundColor: '#000'  }}>
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
                color="dark"
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
                {navItems.map((item, index) => (
                  <Link key={item.route} href={item.pathName}>
                    <Button
                      sx={{
                        color: "red",
                        marginLeft: "20px",
                        backgroundColor:
                          activeButton === index ? "#f5f5f5" : "",
                        "&:hover": {
                          color: "#fff",
                        },
                      }}
                      onClick={() => handleButtonClick(index)}
                    >
                      {item.route}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem sx={{ padding: '20px' }}>
                  <Stack spacing={2}>
                    <Typography textAlign="left">Profile</Typography>
                    <Typography textAlign="left">Account</Typography>
                    <Typography textAlign="left">Dashboard</Typography>
                    <Typography textAlign="left">Logout</Typography>
                  </Stack>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;

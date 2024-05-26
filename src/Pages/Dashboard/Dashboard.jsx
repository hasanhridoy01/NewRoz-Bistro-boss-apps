import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Divider, Stack, Switch } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import Shop2Icon from "@mui/icons-material/Shop2";
import HouseIcon from "@mui/icons-material/House";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Home from "./Admin/Home";
import AllItems from "./Admin/AllItems";
import ManageItem from "./Admin/ManageItem";
import AllUser from "./Admin/AllUser";
import Users from "./Users/Users";
import Booking from "./Users/Booking";
import Shop from "./Users/Shop";
import Contact from "./Users/Contact";

const drawerWidth = 290;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [isHome, setIsHome] = React.useState(false);
  const [isItem, setIsItem] = React.useState(false);
  const [isManager, setIsManager] = React.useState(false);
  const [isUser, setIsUser] = React.useState(false);
  const [isHomeUser, setIsHomeUser] = React.useState(false);
  const [isShop, setIsShop] = React.useState(false);
  const [isMenu, setIsMenu] = React.useState(false);
  const [isContact, setIsContact] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // handleNewMenu.....................!
  const handleNewMenu = (e) => {
    e.preventDefault();

    alert();
  };

  //set listItem content on toolBar....................!
  const handleListItemClick = (index) => {
    setSelectedItem(index);
  };

  // menu style methods.............................!
  const handleStyle = (index) => {
    if (index === 0) {
      setIsHome(true);
    } else {
      setIsHome(false);
    }

    if (index === 1) {
      setIsItem(true);
    } else {
      setIsItem(false);
    }

    if (index === 2) {
      setIsManager(true);
    } else {
      setIsManager(false);
    }

    if (index === 3) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }

    if (index === 4) {
      setIsHomeUser(true);
    } else {
      setIsHomeUser(false);
    }

    if (index === 5) {
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }

    if (index === 6) {
      setIsShop(true);
    } else {
      setIsShop(false);
    }

    if (index === 7) {
      setIsContact(true);
    } else {
      setIsContact(false);
    }
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const toolbarContent = selectedItem !== null && (
    <Toolbar>
      {selectedItem === 0 && <div> <Home /> </div>}
      {selectedItem === 1 && <div> <AllItems /> </div>}
      {selectedItem === 2 && <div> <ManageItem /> </div>}
      {selectedItem === 3 && <div> <AllUser /> </div>}
      {selectedItem === 4 && <div> <Users /> </div>}
      {selectedItem === 5 && <div> <Booking /> </div>}
      {selectedItem === 6 && <div> <Shop /> </div>}
      {selectedItem === 7 && <div> <Contact /> </div>}
    </Toolbar>
  );

  const drawer = (
    <div style={{ overflow: "hidden" }}>
      <Toolbar sx={{ paddingRight: "0px" }}>
        <Typography variant="body1" sx={{ paddingRight: "2px" }}>
          <span style={{ color: "#ff0052" }}>Bistro</span> Boss{" "}
          <span style={{ color: "#00a1a1" }}>Restaurant</span>
        </Typography>
        <Switch
          sx={{ marginLeft: "15px", marginRight: "0px" }}
          onClick={() => setCollapsed(!collapsed)}
          {...label}
        />
      </Toolbar>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "0px",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          {/* <Button
            variant="contained"
            size="large"
            onClick={handleNewMenu}
            startIcon={<AddIcon />}
            tabIndex={0}
            sx={{
              backgroundColor: "#ff0052",
              marginLeft: "6px",
              width: "250px",
              border: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
              },
            }}
          >
            <Typography variant="body1" sx={{ textTransform: "none" }}>
              Create New
            </Typography>
          </Button> */}
        </div>
      </div>
      <Toolbar sx={{ marginTop: "38px" }}>
        <Sidebar backgroundColor="#fff" collapsed={collapsed}>
          <Menu sx={{ backgroundColor: "#fff" }} transitionDuration={500}>
            <Stack spacing={2}>
              <MenuItem
                icon={<HouseIcon />}
                onClick={() => {
                  handleListItemClick(0);
                  handleStyle(0);
                }}
                style={{
                  backgroundColor: isHome ? "rgba(204, 204, 255, 0.5)" : "#fff",
                }}
              >
                Admin Home
              </MenuItem>
              <MenuItem
                icon={<AddIcon />}
                onClick={() => {
                  handleListItemClick(1);
                  handleStyle(1);
                }}
                style={{
                  backgroundColor: isItem ? "rgba(204, 204, 255, 0.5)" : "#fff",
                }}
              >
                {" "}
                Add Item
              </MenuItem>
              <MenuItem
                icon={<ManageHistoryIcon />}
                onClick={() => {
                  handleListItemClick(2);
                  handleStyle(2);
                }}
                style={{
                  backgroundColor: isManager
                    ? "rgba(204, 204, 255, 0.5)"
                    : "#fff",
                }}
              >
                {" "}
                Manager PAQ
              </MenuItem>
              <MenuItem
                icon={<PeopleIcon />}
                onClick={() => {
                  handleListItemClick(3);
                  handleStyle(3);
                }}
                style={{
                  backgroundColor: isUser ? "rgba(204, 204, 255, 0.5)" : "#fff",
                }}
              >
                {" "}
                All User
              </MenuItem>
            </Stack>
            <Divider
              sx={{
                marginTop: "13px",
                marginBottom: "13px",
                height: "1px",
                backgroundColor: "red",
              }}
            />
            <Stack spacing={2}>
              <MenuItem
                icon={<HomeIcon />}
                onClick={() => {
                  handleListItemClick(4);
                  handleStyle(4);
                }}
                style={{
                  backgroundColor: isHomeUser
                    ? "rgba(204, 204, 255, 0.5)"
                    : "#fff",
                }}
              >
                Home
              </MenuItem>
              <MenuItem
                icon={<MenuIcon />}
                onClick={() => {
                  handleListItemClick(5);
                  handleStyle(5);
                }}
                style={{
                  backgroundColor: isMenu ? "rgba(204, 204, 255, 0.5)" : "#fff",
                }}
              >
                {" "}
                Booking
              </MenuItem>
              <MenuItem
                icon={<Shop2Icon />}
                onClick={() => {
                  handleListItemClick(6);
                  handleStyle(6);
                }}
                style={{
                  backgroundColor: isShop ? "rgba(204, 204, 255, 0.5)" : "#fff",
                }}
              >
                {" "}
                Shop
              </MenuItem>
              <MenuItem
                icon={<ContactsIcon />}
                onClick={() => {
                  handleListItemClick(7);
                  handleStyle(7);
                }}
                style={{
                  backgroundColor: isContact
                    ? "rgba(204, 204, 255, 0.5)"
                    : "#fff",
                }}
              >
                {" "}
                Contact
              </MenuItem>
            </Stack>
          </Menu>
        </Sidebar>
      </Toolbar>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#ffffff",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "#000", display: { lg: "none", sm: "block" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              display: { lg: "none", sm: "block" },
              margin: "auto",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#ff0052" }}>Bistro</span>
            <span style={{ color: "#000" }}>Boss</span>
          </Typography>
          {/* <Avatar
            sx={{ marginLeft: "auto" }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          /> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
          // Use media query to adjust width for small screens
          "@media (min-width: 600px)": {
            width: `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#EEEEF3",
            marginTop: "70px",
          }}
        >
          {toolbarContent}
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

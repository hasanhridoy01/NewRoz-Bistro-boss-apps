import React from "react";
import PropTypes from "prop-types";
import { Container, Tabs, Tab, Typography, Box, Grid } from "@mui/material";
import Cover from "../../Shared/Cover/Cover";
import banner from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Shop = () => {
  const [value, setValue] = React.useState(0);
  const [menus] = useMenu();

  const salad = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const offered = menus.filter((menu) => menu.category === "offered");
  const drinks = menus.filter((menu) => menu.category === "drinks");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Cover
        image={banner}
        title="Our Shop"
        body="Would you like to try a dish"
      />
      <Container sx={{ marginTop: "100px", marginBottom: "100px" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  "&::after": {
                    content: '""',
                    width: "42px", // Set the custom width
                    height: "3px", // Set the custom height
                    backgroundColor: "gold", // Set the indicator color
                    borderRadius: "2px", // Optional: make the edges rounded
                  },
                },
                marginBottom: '20px'
              }}
            >
              <Tab
                label="Salad"
                sx={{
                  color: "gold",
                  "&.Mui-selected": { color: "gold" },
                }}
                {...a11yProps(0)}
              />
              <Tab
                label="Pizza"
                sx={{
                  color: "gold",
                  "&.Mui-selected": { color: "gold" },
                }}
                {...a11yProps(1)}
              />
              <Tab
                label="Soups"
                sx={{
                  color: "gold",
                  "&.Mui-selected": { color: "gold" },
                }}
                {...a11yProps(2)}
              />
              <Tab
                label="Dessert"
                sx={{
                  color: "gold",
                  "&.Mui-selected": { color: "gold" },
                }}
                {...a11yProps(3)}
              />
              <Tab
                label="Drink"
                sx={{
                  color: "gold",
                  "&.Mui-selected": { color: "gold" },
                }}
                {...a11yProps(4)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid
              spacing={2}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              {salad.map((sl) => (
                <FoodCard key={sl._id} item={sl}></FoodCard>
              ))}
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Grid
              spacing={2}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              {soup.map((sl) => (
                <FoodCard key={sl._id} item={sl}></FoodCard>
              ))}
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Grid
              spacing={2}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              {pizza.map((sl) => (
                <FoodCard key={sl._id} item={sl}></FoodCard>
              ))}
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Grid
              spacing={2}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              {offered.map((sl) => (
                <FoodCard key={sl._id} item={sl}></FoodCard>
              ))}
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Grid
              spacing={2}
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              {drinks.map((sl) => (
                <FoodCard key={sl._id} item={sl}></FoodCard>
              ))}
            </Grid>
          </CustomTabPanel>
        </Box>
      </Container>
    </div>
  );
};

export default Shop;

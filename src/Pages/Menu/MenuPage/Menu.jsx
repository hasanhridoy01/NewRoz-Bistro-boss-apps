import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import banner from "../../../assets/menu/banner3.jpg";
import banner1 from "../../../assets/home/chef-service.jpg";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MenuItem from "../../Menu/MenuItem/MenuItem";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenus(popularItems);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu Page</title>
      </Helmet>
      <Cover image={banner} title="Our Menu" body="Would You To A Try Dish?" />
      <Container sx={{ marginTop: "150px", marginBottom: "150px" }}>
        <div
          className=""
          style={{ margin: "auto", marginTop: "100px", marginBottom: "0px" }}
        >
          <Stack rowGap={2}>
            <Typography sx={{ textAlign: "center", color: "gold" }}>
              ---Don't miss---
            </Typography>
            <div
              className=""
              style={{ height: "100px", width: "400px", margin: "auto" }}
            >
              <Divider />
              <Typography
                sx={{
                  textAlign: "center",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                variant="h5"
              >
                TODAY'S OFFER
              </Typography>
              <Divider />
            </div>
          </Stack>
        </div>

        <div className="" style={{ marginTop: "50px", marginBottom: "100px" }}>
          <Grid
            spacing={5}
            container
            alignItems={"center"}
            justifyContent={"center"}
          >
            {menus.map((menu) => (
              <MenuItem key={menu._id} menu={menu}></MenuItem>
            ))}
          </Grid>
        </div>
      </Container>
      <div className="" style={{ marginBottom: '150px', marginTop: '50px' }}>
        <Cover
          image={banner1}
          title="Dessert"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
    </div>
  );
};

export default Menu;

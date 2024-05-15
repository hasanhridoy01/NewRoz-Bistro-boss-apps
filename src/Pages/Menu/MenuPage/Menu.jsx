import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import banner from "../../../assets/menu/banner3.jpg";
import banner1 from "../../../assets/home/chef-service.jpg";
import { Container, Divider, Stack, Typography } from "@mui/material";
import MenuData from "../MenuData/MenuData";
import React from "react";

const Menu = () => {
  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
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
          <MenuData></MenuData>
        </div>
      </Container>

      {/* dessert */}
      <div className="" style={{ marginBottom: "150px", marginTop: "50px" }}>
        <Cover
          image={banner1}
          title="Dessert"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
      <Container sx={{ marginTop: "150px", marginBottom: "150px" }}>
        <div className="" style={{ marginTop: "50px", marginBottom: "100px" }}>
          <MenuData></MenuData>
          <div className="" style={{ marginTop: "45px" }}>
            <MenuData></MenuData>
          </div>
        </div>
      </Container>

      {/* Pizza */}
      <div className="" style={{ marginBottom: "150px", marginTop: "50px" }}>
        <Cover
          image={banner1}
          title="Pizza"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
      <Container sx={{ marginTop: "150px", marginBottom: "150px" }}>
        <div className="" style={{ marginTop: "50px", marginBottom: "100px" }}>
          <MenuData></MenuData>
          <div className="" style={{ marginTop: "45px" }}>
            <MenuData></MenuData>
          </div>
        </div>
      </Container>

      {/* salad */}
      <div className="" style={{ marginBottom: "150px", marginTop: "50px" }}>
        <Cover
          image={banner1}
          title="Salad"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
      <Container sx={{ marginTop: "150px", marginBottom: "150px" }}>
        <div className="" style={{ marginTop: "50px", marginBottom: "100px" }}>
          <MenuData></MenuData>
          <div className="" style={{ marginTop: "45px" }}>
            <MenuData></MenuData>
          </div>
        </div>
      </Container>

      {/* Soups */}
      <div className="" style={{ marginBottom: "150px", marginTop: "50px" }}>
        <Cover
          image={banner1}
          title="Soups"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
      <Container sx={{ marginTop: "150px", marginBottom: "150px" }}>
        <div className="" style={{ marginTop: "50px", marginBottom: "100px" }}>
          <MenuData></MenuData>
          <div className="" style={{ marginTop: "45px" }}>
            <MenuData></MenuData>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;

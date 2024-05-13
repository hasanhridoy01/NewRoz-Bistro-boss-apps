import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Menu from "../Shared/Menu/Menu";

const PopularMenu = () => {
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
      <Container sx={{ marginBottom: '150px' }}>
        <div
          className=""
          style={{ margin: "auto", marginTop: "100px", marginBottom: "0px" }}
        >
          <Stack rowGap={3}>
            <Typography sx={{ textAlign: "center", color: "gold" }}>
              ---Check it out---
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
                FROM OUR MENU
              </Typography>
              <Divider />
            </div>
          </Stack>
        </div>
        <div className="">
          <Grid spacing={3} container alignItems={"center"} justifyContent={"center"}>
            {menus.map((menu) => (
              <Menu key={menu._id} menu={menu}></Menu>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default PopularMenu;

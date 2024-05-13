// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Categories.css";

const ImageContainer = styled("div")({
  position: "relative",
  width: "100%",
});

const ImageText = styled("p")({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#ffffff",
  padding: "10px",
  margin: 0,
});

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import styled from "styled-components";
const Categories = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container sx={{ marginTop: "170px", marginBottom: "170px" }}>
        <div
          className=""
          style={{ margin: "auto", marginTop: "100px", marginBottom: "0px" }}
        >
          <Stack rowGap={2}>
            <Typography sx={{ textAlign: "center", color: "gold" }}>
              ---From 11:00am to 10:00pm---
            </Typography>
            <div
              className=""
              style={{ height: "100px", width: "400px", margin: "auto"}}
            >
              <Divider />
              <Typography sx={{ textAlign: "center", marginTop: '10px', marginBottom: '10px' }} variant="h5">ORDER ONLINE</Typography>
              <Divider />
            </div>
          </Stack>
        </div>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Swiper
            slidesPerView={isSmallScreen ? 1 : 3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ImageContainer>
                <img
                  style={{
                    height: "450px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                  src={img1}
                  alt=""
                />
                <ImageText>Salad</ImageText>
              </ImageContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ImageContainer>
                <img
                  style={{
                    height: "450px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                  src={img2}
                  alt=""
                />
                <ImageText>Soups</ImageText>
              </ImageContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ImageContainer>
                <img
                  style={{
                    height: "450px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                  src={img3}
                  alt=""
                />
                <ImageText>pizzas</ImageText>
              </ImageContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ImageContainer>
                <img
                  style={{
                    height: "450px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                  src={img4}
                  alt=""
                />
                <ImageText>desserts</ImageText>
              </ImageContainer>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Container>
    </>
  );
};

export default Categories;

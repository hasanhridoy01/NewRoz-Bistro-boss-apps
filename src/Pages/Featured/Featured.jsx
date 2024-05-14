import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import "./Featured.css";
import img from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div style={{ marginBottom: "100px", marginTop: "200px" }}>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item sm={12}>
          <div className="backGround-image">
            <div
              className=""
              style={{
                margin: "auto",
                marginBottom: "0px",
              }}
            >
              <Stack rowGap={2}>
                <Typography sx={{ textAlign: "center", color: "gold" }}>
                  ---From 11:00am to 10:00pm---
                </Typography>
                <div
                  className=""
                  style={{ height: "100px", width: "400px", margin: "auto" }}
                >
                  <Divider sx={{ backgroundColor: "#fff" }} />
                  <Typography
                    sx={{
                      textAlign: "center",
                      marginTop: "10px",
                      marginBottom: "10px",
                      color: "#fff",
                    }}
                    variant="h5"
                  >
                    FROM OUR MENU
                  </Typography>
                  <Divider sx={{ backgroundColor: "#fff" }} />
                </div>
              </Stack>
            </div>
            <Container>
              <Grid spacing={4} container justifyContent={"space-between"}>
                <Grid item lg={6} md={6} xs={12}>
                  <img
                    style={{ height: "340px", width: "100%" }}
                    src={img}
                    alt=""
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <Stack spacing={2} sx={{ marginTop: '30px' }}>
                    <Typography variant="h6" sx={{ color: '#fff' }}>March 20, 2023</Typography>
                    <div className="">
                      <Typography variant="h5" sx={{ marginBottom: '10px', color: '#fff' }}>
                        WHERE CAN I GET SOME?
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff', lineHeight: '23px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error voluptate facere, deserunt dolores maiores quod
                        nobis quas quasi. Eaque repellat recusandae ad
                        laudantium tempore consequatur consequuntur omnis ullam
                        maxime tenetur.
                      </Typography>
                    </div>
                    <Button sx={{ marginRight: "auto", width: '30%', backgroundColor: '#fff', color: '#000' }} variant="contained" size="large">
                      Read More
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Featured;

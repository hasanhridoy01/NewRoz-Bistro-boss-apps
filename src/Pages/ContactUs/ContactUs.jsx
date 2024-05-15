import { Helmet } from "react-helmet-async";
import banner from "../../assets/contact/banner.jpg";
import Cover from "../Shared/Cover/Cover";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Page</title>
      </Helmet>

      <Cover
        image={banner}
        title="Contact Us"
        body="Would you like to try a dish"
      />

      <div
        className=""
        style={{ margin: "auto", marginTop: "100px", marginBottom: "0px" }}
      >
        <Stack rowGap={2}>
          <Typography sx={{ textAlign: "center", color: "gold" }}>
            ---Visit Us---
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
              OUR LOCATION
            </Typography>
            <Divider />
          </div>
        </Stack>
      </div>

      <Container style={{ marginTop: "30px", marginBottom: "100px" }}>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid item lg={4} md={6} xs={12}>
            <Card>
              <CardActionArea>
                <div
                  className=""
                  style={{
                    backgroundColor: "#d1a054",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneIcon sx={{ color: "#fff", fontSize: "30px" }} />
                </div>
                <CardContent sx={{ padding: '0px 20px 20px 20px' }}>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: '20px',
                      backgroundColor: '#f5f5f5'
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      PHONE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +38 (012) 34 56 789
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} xs={12}></Grid>
          <Grid item lg={4} md={6} xs={12}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;

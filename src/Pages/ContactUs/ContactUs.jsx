import { Helmet } from "react-helmet-async";
import banner from "../../assets/contact/banner.jpg";
import Cover from "../Shared/Cover/Cover";
import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import TelegramIcon from '@mui/icons-material/Telegram';

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

      <Container style={{ marginTop: "10px", marginBottom: "100px" }}>
        <Grid
          spacing={2}
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
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
                <CardContent sx={{ padding: "0px 20px 20px 20px" }}>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                      backgroundColor: "#f5f5f5",
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
                  <EditLocationIcon sx={{ color: "#fff", fontSize: "30px" }} />
                </div>
                <CardContent sx={{ padding: "0px 20px 20px 20px" }}>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      ADDRESS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +38 (012) 34 56 789
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
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
                  <WatchLaterIcon sx={{ color: "#fff", fontSize: "30px" }} />
                </div>
                <CardContent sx={{ padding: "0px 20px 20px 20px" }}>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      WORKING HOURS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +38 (012) 34 56 789
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <div
        className=""
        style={{ margin: "auto", marginTop: "80px", marginBottom: "0px" }}
      >
        <Stack rowGap={2}>
          <Typography sx={{ textAlign: "center", color: "gold" }}>
            ---Send Us a Message---
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
              CONTACT FORM
            </Typography>
            <Divider />
          </div>
        </Stack>
      </div>

      <Container
        sx={{
          marginTop: "40px",
          backgroundColor: "#f5f5f5",
          marginBottom: "100px",
          padding: {
            xs: "16px", // Padding for extra-small screens
            sm: "16px", // Padding for small screens
            md: "60px", // Padding for medium screens
            lg: "60px", // Padding for large screens
          },
        }}
      >
        <Grid spacing={2} container justifyContent={"center"}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <label htmlFor="">Name</label>
            <TextField
              placeholder="Enter Your Name"
              fullWidth
              sx={{ backgroundColor: "#fff", border: "none", marginTop: "7px" }}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <label htmlFor="">Email</label>
            <TextField
              placeholder="Enter Your Email"
              fullWidth
              sx={{ backgroundColor: "#fff", border: "none", marginTop: "7px" }}
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ marginTop: "5px" }}>
          <label htmlFor="">Phone</label>
            <TextField
              placeholder="Enter Your Phone"
              fullWidth
              sx={{ backgroundColor: "#fff", border: "none", marginTop: '7px' }}
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ marginTop: "5px" }}>
          <label htmlFor="">Message</label>
            <TextField
              placeholder="Enter Your Message"
              fullWidth
              sx={{
                backgroundColor: "#fff",
                border: "none",
                height: "100px",
                marginTop: '7px',
                "& .MuiInputBase-root": {
                  height: "100%",
                },
                "& .MuiInputBase-input": {
                  height: "100px",
                  padding: "0 14px",
                },
              }}
            />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ marginTop: '15px', boxShadow: 'none', backgroundColor: '#a4752c', textTransform: 'none' }} size="large" endIcon={ <TelegramIcon /> }>Send Message</Button>
      </Container>
    </div>
  );
};

export default ContactUs;

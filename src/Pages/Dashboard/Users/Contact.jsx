import { Helmet } from "react-helmet-async";
import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Page</title>
      </Helmet>

      <div
        className=""
        style={{ margin: "auto", marginTop: "30px", marginBottom: "0px" }}
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

      <Container
        sx={{
          marginTop: "0px",
          backgroundColor: "#f5f5f5",
          marginBottom: "50px",
          padding: {
            xs: "16px", // Padding for extra-small screens
            sm: "16px", // Padding for small screens
            md: "40px", // Padding for medium screens
            lg: "40px", // Padding for large screens
          },
        }}
      >
        <Grid spacing={2} container justifyContent={"center"}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <label htmlFor="">Name</label>
            <TextField
              placeholder="Enter Your Name"
              fullWidth
              sx={{
                backgroundColor: "#fff",
                border: "none",
                marginTop: "7px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <label htmlFor="">Email</label>
            <TextField
              placeholder="Enter Your Email"
              type="email"
              fullWidth
              sx={{
                backgroundColor: "#fff",
                border: "none",
                marginTop: "7px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ marginTop: "5px" }}>
            <label htmlFor="">Phone</label>
            <TextField
              placeholder="Enter Your Phone"
              fullWidth
              sx={{
                backgroundColor: "#fff",
                border: "none",
                marginTop: "7px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
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
                marginTop: "7px",
                "& .MuiInputBase-root": {
                  height: "100%",
                },
                "& .MuiInputBase-input": {
                  height: "100px",
                  padding: "0 14px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            marginTop: "15px",
            boxShadow: "none",
            backgroundColor: "#a4752c",
            textTransform: "none",
          }}
          size="large"
          endIcon={<TelegramIcon />}
        >
          Send Message
        </Button>
      </Container>
    </div>
  );
};

export default Contact;

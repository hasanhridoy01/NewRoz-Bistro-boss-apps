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
import { Helmet } from "react-helmet-async";

const Users = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Users Page</title>
      </Helmet>
      <div style={{ padding: "20px", marginTop: "0px" }}>
        <Stack rowGap={2} sx={{ margin: "auto" }}>
          <Typography sx={{ textAlign: "center", color: "gold" }}>
            ---Reservation---
          </Typography>
          <div
            className=""
            style={{ height: "100px", width: "400px", margin: "auto" }}
          >
            <Divider sx={{ backgroundColor: "#EEEEF3", height: "4px" }} />
            <Typography
              sx={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              variant="h5"
            >
              BOOK A TABLE
            </Typography>
            <Divider sx={{ backgroundColor: "#EEEEF3", height: "4px" }} />
          </div>
        </Stack>
      </div>
      <Container
        sx={{
          marginTop: "0px",
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
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <label htmlFor="">Date*</label>
            <TextField
              placeholder="Enter Your Name"
              type="date"
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

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <label htmlFor="">Time*</label>
            <TextField
              placeholder="Enter Your Email"
              type="time"
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

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <label htmlFor="">Guest*</label>
            <TextField
              placeholder="Enter Your Guest"
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
          
          <Grid item lg={4} md={4} sm={12} xs={12} style={{ marginTop: '20px' }}>
            <label htmlFor="">Name*</label>
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

          <Grid item lg={4} md={4} sm={12} xs={12} style={{ marginTop: '20px' }}>
            <label htmlFor="">Phone*</label>
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

          <Grid item lg={4} md={4} sm={12} xs={12} style={{ marginTop: '20px' }}>
            <label htmlFor="">Email*</label>
            <TextField
              placeholder="Enter Your Email"
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

        </Grid>
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            boxShadow: "none",
            backgroundColor: "#a4752c",
            textTransform: "none",
          }}
          size="large"
          endIcon={<TelegramIcon />}
        >
          Book A Table
        </Button>
      </Container>
    </div>
  );
};

export default Users;

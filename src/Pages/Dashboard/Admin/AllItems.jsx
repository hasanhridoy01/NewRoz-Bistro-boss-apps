import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import TelegramIcon from "@mui/icons-material/Telegram";

const AllItems = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Items Page</title>
      </Helmet>
      <div style={{ padding: "20px", marginTop: "30px" }}>
        <Stack rowGap={2} sx={{ margin: "auto" }}>
          <Typography sx={{ textAlign: "center", color: "gold" }}>
            ---What's new?---
          </Typography>
          <div
            className=""
            style={{ height: "100px", width: "400px", margin: "auto" }}
          >
            <Divider sx={{ backgroundColor: '#EEEEF3', height: '4px' }} />
            <Typography
              sx={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              variant="h5"
            >
              ADD AN ITEM
            </Typography>
            <Divider sx={{ backgroundColor: '#EEEEF3', height: '4px' }} />
          </div>
        </Stack>
      </div>
      <Container
        sx={{
          marginTop: "0px",
          backgroundColor: "#f5f5f5",
          marginBottom: "60px",
          padding: {
            xs: "16px", // Padding for extra-small screens
            sm: "16px", // Padding for small screens
            md: "40px", // Padding for medium screens
            lg: "40px", // Padding for large screens
          },
        }}
      >
        <Grid spacing={2} container justifyContent={"center"}>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ marginTop: "5px" }}>
            <label htmlFor="">Recipe name*</label>
            <TextField
              placeholder="Recipe name"
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
            <label htmlFor="">Category*</label>
            <TextField
              placeholder="Category"
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
            <label htmlFor="">Price*</label>
            <TextField
              placeholder="Price"
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
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{
              marginTop: "5px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          >
            <label htmlFor="">Recipe Details*</label>
            <TextField
              placeholder="Recipe Details"
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
          Add Item
        </Button>
      </Container>
    </>
  );
};

export default AllItems;

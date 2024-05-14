import { Container, Grid, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div style={{ height: "350px", width: "100%" }}>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{ backgroundColor: "#1f2937", height: "272px", width: "100%" }}
        >
          <div className="" style={{ width: "300px", margin: "auto" }}>
            <Typography sx={{ color: "white", marginTop: "50px" }} variant="h5">
              CONTACT US
            </Typography>
            <Typography
              sx={{
                color: "white",
                marginTop: "23px",
              }}
            >
              123 ABS Street, Uni 21, Bangladesh
            </Typography>
            <Typography sx={{ color: "white", marginTop: "8px" }}>
              +88 123456789
            </Typography>
            <Typography sx={{ color: "white", marginTop: "8px" }}>
              Mon - Fri: 08:00 - 22:00
            </Typography>
            <Typography sx={{ color: "white", marginTop: "8px" }}>
              Sat - Sun: 10:00 - 23:00
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{ backgroundColor: "#111827", height: "272px", width: "100%" }}
        >
          <div className="" style={{ width: "300px", margin: "auto" }}>
            <Typography
              sx={{
                color: "white",
                marginTop: "50px",
              }}
              variant="h5"
            >
              Follow US
            </Typography>
            <Typography
              sx={{
                color: "white",
                marginTop: "23px",
              }}
            >
              Join us on social media
            </Typography>
            <Stack spacing={2} direction={'row'} style={{ marginTop: '14px' }}>
              <FacebookIcon style={{ color: '#fff' }} />
              <InstagramIcon style={{ color: '#fff' }} />
              <TwitterIcon style={{ color: '#fff' }} />
              <YouTubeIcon style={{ color: '#fff' }} />
            </Stack>
          </div>
        </Grid>
      </Grid>
      <div
        className=""
        style={{
          height: "78px",
          backgroundColor: "#000",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="body2" sx={{ color: "#fff", }}>
          Copyright © CulinaryCloud. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

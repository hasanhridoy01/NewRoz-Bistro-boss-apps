import { Divider, Stack, Typography } from "@mui/material";

const Testimonials = () => {
    return (
        <div>
            <div
          className=""
          style={{ margin: "auto", marginTop: "100px", marginBottom: "0px" }}
        >
          <Stack rowGap={2}>
            <Typography sx={{ textAlign: "center", color: "gold" }}>
            ---What Our Clients Say---
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
                TESTIMONIALS
              </Typography>
              <Divider />
            </div>
          </Stack>
        </div>
        </div>
    );
};

export default Testimonials;
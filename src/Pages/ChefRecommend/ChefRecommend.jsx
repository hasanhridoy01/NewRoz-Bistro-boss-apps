import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import img1 from "../../assets/home/product-5-370x247.jpg";

const ChefRecommend = () => {
  return (
    <div>
      <Container style={{ marginBottom: "100px" }}>
        <div
          className=""
          style={{ margin: "auto", marginTop: "40px", marginBottom: "0px" }}
        >
          <Stack rowGap={2}>
            <Typography sx={{ textAlign: "center", color: "gold" }}>
              ---Should Try---
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
                CHEF RECOMMENDS
              </Typography>
              <Divider />
            </div>
          </Stack>
        </div>
        <Grid spacing={2} container alignItems={"center"} justifyContent={"center"}>
          <Grid item lg={4} md={6} sm={12}>
            <Card>
              <CardMedia
                sx={{ height: "300px" }}
                image={img1}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Caeser Salad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "10px",
                }}
              >
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    backgroundColor: "#00a1a1",
                    textTransform: "none",
                    boxShadow: "none",
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card>
              <CardMedia
                sx={{ height: "300px" }}
                image={img1}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Caeser Salad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "10px",
                }}
              >
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    backgroundColor: "#00a1a1",
                    textTransform: "none",
                    boxShadow: "none",
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card>
              <CardMedia
                sx={{ height: "300px" }}
                image={img1}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Caeser Salad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "10px",
                }}
              >
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    backgroundColor: "#00a1a1",
                    textTransform: "none",
                    boxShadow: "none",
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ChefRecommend;

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
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ChefRecommend = () => {
  //check user...............!
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //Handle Add to Cart.............!
  const handleAddToCart = (id) => {
    if (user && user.email) {
      //send cart item go to the context...............!
      const cartItem = {
        menuId: id,
        email: user.email,
      };
      console.log(cartItem);
    } else {
      Swal.fire({
        title: "You Are not Login!",
        text: "You won't be able order this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00a1a1",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //Send the user to the login page........!
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <Container style={{ marginBottom: "100px" }}>
        <div
          className=""
          style={{ margin: "auto", marginTop: "40px", marginBottom: "15px" }}
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
        <Grid
          spacing={2}
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item lg={4} md={6} sm={12}>
            <Card>
              <CardMedia
                sx={{ height: "300px" }}
                image={img1}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Caesar salad
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
                  onClick={() => handleAddToCart(1)}
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
                  Caesar salad
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
                  onClick={() => handleAddToCart(2)}
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
                  Caesar salad
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
                  onClick={() => handleAddToCart(3)}
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
      <div
        className=""
        style={{
          width: "140px",
          marginBottom: "0px",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <Link to={"/shopPage"}>
          <Button variant="outlined" size="large" sx={{ marginTop: "20px" }}>
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ChefRecommend;

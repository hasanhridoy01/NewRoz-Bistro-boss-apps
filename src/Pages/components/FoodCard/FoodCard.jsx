import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  
  return (
    <Grid item lg={4} sm={6} xs={12}>
      <Card sx={{ backgroundColor: '#f5f5f5', cursor: 'pointer' }}>
        <CardMedia sx={{ height: 240 }} image={image} title="green iguana" />
        <CardContent sx={{ marginBottom: '0px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Price: {price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0px' }}>
            {recipe.slice(0, 70)}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginBottom: '8px', marginTop: '0px' }}>
          <Button size="small" variant="contained" sx={{ marginLeft: '8px', boxShadow: 'none', marginTop: '0px', backgroundColor: 'red', color: 'gold', bottomBorder: '2px solid gold' }}>Add To Cart</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

//set props type
FoodCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    recipe: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodCard;

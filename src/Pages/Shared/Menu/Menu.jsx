import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const Menu = ({ menu }) => {
  const { image, name, price, recipe } = menu;

  return (
    <Grid item lg={6} md={6} xs={12}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            borderRadius: "0px 200px 200px 200px",
            width: "100px",
            marginTop: "0px",
          }}
        />
        <div style={{ marginLeft: "15px" }}>
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ marginBottom: "0px", marginTop: "7px" }}>{name}</h3>
            <p style={{ marginBottom: "0px", marginTop: "9px", color: "gold" }}>
              ${price}
            </p>
          </div>
          <p style={{ marginBottom: "0px", marginTop: "7px" }}>{recipe}</p>
        </div>
      </div>
    </Grid>
  );
};

//Assign Props Type on this Components..................!
Menu.propTypes = {
  menu: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    recipe: PropTypes.string.isRequired,
  }).isRequired,
};

export default Menu;
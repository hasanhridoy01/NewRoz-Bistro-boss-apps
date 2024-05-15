import { Grid } from "@mui/material";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../MenuItem/MenuItem";

const MenuData = () => {
    const [menus] = useMenu();
    const popularItems = menus.filter((item) => item.category === "popular");
    return (
        <Grid
            spacing={5}
            container
            alignItems={"center"}
            justifyContent={"center"}
          >
            {popularItems.map((menu) => (
              <MenuItem key={menu._id} menu={menu}></MenuItem>
            ))}
        </Grid>
    );
};

export default MenuData;
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

import img from "../../../assets/reservation/wood-grain-pattern-gray1x.png";

const Shop = () => {
    return (
        <div style={{ padding: "30px", paddingLeft: "20px" }}>
      <Helmet>
        <title>Bistro Boss | Shop Page</title>
      </Helmet>
      <div style={{ padding: "20px", marginTop: "0px" }}>
        <Stack rowGap={2} sx={{ margin: "auto" }}>
          <Typography sx={{ textAlign: "center", color: "gold" }}>
            ---Let's see!---
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
              MANAGE SHOP
            </Typography>
            <Divider sx={{ backgroundColor: "#EEEEF3", height: "4px" }} />
          </div>
        </Stack>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "1100px" }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Item Image</TableCell>
              <TableCell align="left">Item Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="right">Action</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">
                <img
                  style={{ height: "30px", width: "60px" }}
                  src={img}
                  alt=""
                />
              </TableCell>
              <TableCell align="left">Roast Duck Breast</TableCell>
              <TableCell align="center">$90</TableCell>
              <TableCell align="right" style={{ paddingRight: "15px" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#d1a054",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="right" style={{ paddingRight: "15px" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF0052",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">
                <img
                  style={{ height: "30px", width: "60px" }}
                  src={img}
                  alt=""
                />
              </TableCell>
              <TableCell align="left">Roast Duck Breast</TableCell>
              <TableCell align="center">$90</TableCell>
              <TableCell align="right" style={{ paddingRight: "15px" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#d1a054",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="right" style={{ paddingRight: "15px" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF0052",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">
                <img
                  style={{ height: "30px", width: "60px" }}
                  src={img}
                  alt=""
                />
              </TableCell>
              <TableCell align="left">Roast Duck Breast</TableCell>
              <TableCell align="center">$9</TableCell>
              <TableCell align="right" style={{ paddingRight: "15px" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#d1a054",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="right" style={{ paddingRight: "15px" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF0052",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    );
};

export default Shop;
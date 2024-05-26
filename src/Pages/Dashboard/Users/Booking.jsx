import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Booking = () => {
  return (
    <div style={{ padding: "20px", paddingLeft: "20px" }}>
      <Helmet>
        <title>Bistro Boss | Booking Page</title>
      </Helmet>
      <div style={{ padding: "20px", marginTop: "0px" }}>
        <Stack rowGap={2} sx={{ margin: "auto" }}>
          <Typography sx={{ textAlign: "center", color: "gold" }}>
            ---At a Glance!---
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
              PAYMENT HISTORY
            </Typography>
            <Divider sx={{ backgroundColor: "#EEEEF3", height: "4px" }} />
          </div>
        </Stack>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "1100px", margin: 'auto' }} aria-label="caption table">
          <TableHead style={{ backgroundColor: "#d1a054" }}>
            <TableRow>
              <TableCell style={{ color: '#fff' }}>ID</TableCell>
              <TableCell align="left" style={{ color: '#fff' }}>Email</TableCell>
              <TableCell align="left" style={{ color: '#fff' }}>Category</TableCell>
              <TableCell align="left" style={{ color: '#fff' }}>Total Price</TableCell>
              <TableCell align="left" style={{ color: '#fff' }}>Payment Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">hasanhridoy1367@gmail.com</TableCell>
              <TableCell align="left">Food Order</TableCell>
              <TableCell align="left">$90</TableCell>
              <TableCell align="left" style={{ paddingRight: "15px" }}>
                Monday, April 10, 2023
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                2
              </TableCell>
              <TableCell align="left">hasanhridoy1367@gmail.com</TableCell>
              <TableCell align="left">Food Order</TableCell>
              <TableCell align="left">$90</TableCell>
              <TableCell align="left" style={{ paddingRight: "15px" }}>
                Monday, April 10, 2023
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                3
              </TableCell>
              <TableCell align="left">hasanhridoy1367@gmail.com</TableCell>
              <TableCell align="left">Food Order</TableCell>
              <TableCell align="left">$9</TableCell>
              <TableCell align="left" style={{ paddingRight: "15px" }}>
                Monday, April 10, 2023
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Booking;

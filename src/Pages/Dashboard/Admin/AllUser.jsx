import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const AllUser = () => {
  return (
    <div style={{ padding: "30px", paddingLeft: "20px" }}>
      <Helmet>
        <title>Bistro Boss | Admin Home Page</title>
      </Helmet>
      <div style={{ padding: "20px", marginTop: "0px" }}>
        <Stack rowGap={2} sx={{ margin: "auto" }}>
          <Typography sx={{ textAlign: "center", color: "gold" }}>
            ---Resources!---
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
              MANAGE ALL USERS
            </Typography>
            <Divider sx={{ backgroundColor: "#EEEEF3", height: "4px" }} />
          </div>
        </Stack>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "1100px" }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Display Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Zahid Hasan Hridoy
              </TableCell>
              <TableCell align="left">hasanhridoy@gmail.com</TableCell>
              <TableCell align="left">User</TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff0052",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell align="right" style={{ paddingRight: "15px" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#00a1a1",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Confirm
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Zahid Hasan Hridoy
              </TableCell>
              <TableCell align="left">hasanhridoy@gmail.com</TableCell>
              <TableCell align="left">User</TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff0052",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell align="right" style={{ paddingRight: "15px" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#00a1a1",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Confirm
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Zahid Hasan Hridoy
              </TableCell>
              <TableCell align="left">hasanhridoy@gmail.com</TableCell>
              <TableCell align="left">User</TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff0052",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell align="right" style={{ paddingRight: "15px" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#00a1a1",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Confirm
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllUser;

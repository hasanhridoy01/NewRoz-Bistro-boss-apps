import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import img from "../../../assets/others/authentication.png";
import login from "../../../assets/others/authentication2.png";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const Registration = () => {
  //Show password section...................................!
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: `url(${img})`,
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className=""
          style={{
            height: "400px",
            width: "800px",
            backgroundImage: `url(${img})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inherit",
          }}
        >
          <Card sx={{ width: "100%", height: "100%", background: "none" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div
                className=""
                style={{
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                }}
              >
                <Stack spacing={2}>
                  <h4
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                      fontFamily: "monospace",
                    }}
                  >
                    Login
                  </h4>

                  <div
                    className=""
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        fontSize: "17px",
                        fontFamily: "sans-serif",
                        marginBottom: "0px",
                      }}
                    >
                      Email
                    </label>
                    <TextField
                      placeholder="Enter Your Email"
                      type="email"
                      fullWidth
                      sx={{
                        backgroundColor: "#fff",
                        border: "none",
                        marginTop: "7px",
                      }}
                    />
                  </div>

                  <div
                    className=""
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label
                      htmlFor="password"
                      style={{
                        fontSize: "17px",
                        fontFamily: "sans-serif",
                        marginBottom: "0px",
                      }}
                    >
                      Password
                    </label>
                    <TextField
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Your Password"
                      fullWidth
                      sx={{
                        backgroundColor: "#fff",
                        border: "none",
                        marginTop: "7px",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  <div
                    className=""
                    style={{
                      marginTop: "24px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ backgroundColor: "#00a1a1", boxShadow: "none" }}
                    >
                      Login
                    </Button>
                  </div>
                </Stack>
              </div>
              <div className="" style={{ background: "none" }}>
                <img className="img" src={login} alt="" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registration;

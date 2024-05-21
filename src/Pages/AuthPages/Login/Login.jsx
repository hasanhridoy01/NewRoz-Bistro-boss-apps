import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import img from "../../../assets/others/authentication.png";
import login from "../../../assets/others/authentication2.png";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./Login.css";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

const Login = () => {
  //Show password section...................................!
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //handleFormSubmit....................!
  const handleFormSubmit = (e) => {
    e.preventDefault();

    //get user data.................!
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation regex (at least 8 characters)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    //user field validation..................!
    if (!email) {
      alert("Please fill the email field");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
    } else if (!password) {
      alert("Please fill the password field");
    } else if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number"
      );
    } else {
      // Reset the fields
      e.target.email.value = "";
      e.target.password.value = "";

      // Now send the data to Firebase Auth
      alert("Success!");
    }
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
              <div className="" style={{ background: "none" }}>
                <img className="img" src={login} alt="" />
              </div>
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
                      marginTop: "13px",
                    }}
                  >
                    Login
                  </h4>

                  <Form onSubmit={handleFormSubmit}>
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
                        name="email"
                        required
                        fullWidth
                        sx={{
                          backgroundColor: "#fff",
                          border: "none",
                          marginTop: "7px",
                          borderRadius: "10px",
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
                        name="password"
                        required
                        fullWidth
                        sx={{
                          backgroundColor: "#fff",
                          border: "none",
                          marginTop: "7px",
                          borderRadius: "10px",
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

                    <p style={{ fontSize: "13px", marginLeft: "2px" }}>
                      Are You New? Please{" "}
                      <Link
                        to={"/registration"}
                        style={{ color: "#00a1a1", fontSize: "14px" }}
                      >
                        Registration
                      </Link>
                    </p>

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
                        type="submit"
                        sx={{
                          backgroundColor: "#00a1a1",
                          boxShadow: "none",
                          textTransform: "none",
                        }}
                      >
                        Login
                      </Button>
                    </div>
                  </Form>
                </Stack>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;

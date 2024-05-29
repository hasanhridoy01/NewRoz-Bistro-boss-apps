import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  TextField,
} from "@mui/material";
import img from "../../../assets/others/authentication.png";
import login from "../../../assets/others/authentication2.png";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./Login.css";
import { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  //Show password section...................................!
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //handleFormSubmit....................!
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

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
      setLoading(false);
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      setLoading(false);
    } else if (!password) {
      alert("Please fill the password field");
      setLoading(false);
    } else if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number"
      );
      setLoading(false);
    } else {
      // Reset the fields
      e.target.email.value = "";
      e.target.password.value = "";

      // Now send the data to Firebase Auth
      signInUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          //if find valid user............!
          if (user) {
            Swal.fire({
              title: `${user.displayName} Login SuccessFully!`,
              showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
              },
              hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
              },
            });
            navigate(from, { replace: true });
            setLoading(false);
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoading(false);
          setError(errorMessage);
        });
    }
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login Page</title>
      </Helmet>
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
            height: "410px",
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
                  {error ? (
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        fontFamily: "monospace",
                        marginTop: "13px",
                        color: '#E80101'
                      }}
                    >
                      {error}
                    </p>
                  ) : (
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
                  )}

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
                          marginTop: "7px",
                          borderRadius: "3px",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
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
                          marginTop: "7px",
                          borderRadius: "3px",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
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

                    <p
                      style={{
                        fontSize: "13px",
                        marginLeft: "2px",
                        fontWeight: 500,
                      }}
                    >
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
                        disabled={loading}
                        sx={{
                          backgroundColor: "#00a1a1",
                          boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.4)",
                          textTransform: "none",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#00a1a1",
                            boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.4)",
                          },
                        }}
                      >
                        {loading ? (
                          <CircularProgress
                            size={24}
                            sx={{ color: "#00a1a1" }}
                          />
                        ) : (
                          "Login"
                        )}
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

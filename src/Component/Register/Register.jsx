import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { registerUserData, loginUserData } from "../../Services/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Register.css";
import Header from "../Header/Header";
import { saveUserId } from "../../Redux/Actions";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [txtUserName, setUserName] = useState("");
  const [txtUserNameLogin, setUserNameLogin] = useState("");
  const [txtPassword, setPassword] = useState("");
  const [txtPasswordLogin, setPasswordLogin] = useState("");
  const [txtRestaurantName, setRestaurantName] = useState("");
  const [txtContNumber, setContNumber] = useState("");
  const [isLogin, setLogin] = useState(true);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "txtUserName") {
      setUserName(value);
    } else if (name === "txtUserNameLogin") {
      setUserNameLogin(value);
    } else if (name === "txtPassword") {
      setPassword(value);
    } else if (name === "txtPasswordLogin") {
      setPasswordLogin(value);
    } else if (name === "txtRestaurantName") {
      setRestaurantName(value);
    } else if (name === "txtContNumber") {
      setContNumber(value);
    }
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;

    if (name === "txtUserNameLogin") {
      setUserNameLogin(value);
    } else if (name === "txtPasswordLogin") {
      setPasswordLogin(value);
    } else {
      //todo
    }
  };

  const isValidPhoneNumber = (value) => {
    const isValid = /^\d{10}$/u.test(value);
    return isValid;
  };

  //email validations
  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validation = () => {
    if (txtUserName.trim() === "") {
      setError("User name can not be empty");
    } else if (!isValidEmail(txtUserName)) {
      setError("Please enter valid email");
    } else if (txtRestaurantName === "") {
      setError("Restaurant can not be empty");
    } else if (txtContNumber === "") {
      setError("Contact Number can not be empty");
    } else if (!isValidPhoneNumber(txtContNumber)) {
      setError("Contact number not valid, Please enter 10 digit number");
    } else if (txtPassword === "") {
      setError("Password can not be empty");
    } else {
      setError("");
      return true;
    }
  };

  const loginValidation = () => {
    if (txtUserNameLogin.trim() === "") {
      setError("User name can not be empty");
    } else if (!isValidEmail(txtUserNameLogin)) {
      setError("Please enter valid email");
    } else if (txtPasswordLogin === "") {
      setError("Password can not be empty");
    } else {
      setError("");
      return true;
    }
  };

  const clearData = () => {
    setUserName("");
    setRestaurantName("");
    setContNumber("");
    setPassword("");
    setUserNameLogin("");
    setPasswordLogin("");
  };
  const registerUser = async (payload) => {
    try {
      const response = await registerUserData(payload);
      toast.success(response.msg, { position: "top-center" });
      clearData();
      navigate("/menu");
    } catch (error) {
      if (error.response.status !== undefined && error.response.status === 400)
        toast.error(error.response.data.msg, { position: "top-center" });
      else console.log(error);
    }
  };

  const loginUser = async (payload) => {
    try {
      const response = await loginUserData(payload);
      toast.success(response.msg, { position: "top-center" });
      localStorage.setItem("token", JSON.stringify(response.token));
      localStorage.setItem("user", JSON.stringify(response.user));
      //dispatch(saveUserId({userId: response.userId}));
      clearData();
      navigate("/dashboard");
    } catch (error) {
      if (error.response.status !== undefined && error.response.status === 400)
        toast.error(error.response.data.msg, { position: "top-center" });
      else console.log(error);
    }
  };

  const handleRegister = () => {
    if (validation()) {
      const payload = {
        userName: txtUserName,
        restaName: txtRestaurantName,
        contactNumber: txtContNumber,
        password: txtPassword,
      };

      registerUser(payload);
    }
  };

  const handleLogin = () => {
    if (loginValidation()) {
      const payload = {
        userName: txtUserNameLogin,
        password: txtPasswordLogin,
      };

      loginUser(payload);
    }
  };

  const handleLoginVisibility = () => {
    setLogin(!isLogin);
    setError("");
  };

  //currently login  user
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <Header isMenu={false} />

      <Grid container spacing={0} className="singup">
        <ToastContainer autoClose={1000} />
        <Grid item xs={11} sm={4}>
          <Card>
            <CardContent>
              <div className="title">Welcome to Restaurants Billing App</div>
              <div className="error">{error}</div>
              {isLogin ? (
                <Grid item xs={12}>
                  <TextField
                    id="txtUserNameLogin"
                    name="txtUserNameLogin"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 1 }}
                    value={txtUserNameLogin}
                    onChange={handleChangeLogin}
                  />

                  <FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
                    <InputLabel htmlFor="txtPasswordLogin">Password</InputLabel>
                    <OutlinedInput
                      id="txtPasswordLogin"
                      type={showPassword ? "text" : "password"}
                      value={txtPasswordLogin}
                      onChange={handleChangeLogin}
                      name="txtPasswordLogin"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>

                  <div className="btnContainer">
                    {/* <div>
                  Already have an account?{" "}
                  <NavLink to="" onClick={handleLoginVisibility}>
                    Register
                  </NavLink>
                </div> */}
                    <Button
                      variant="contained"
                      onClick={handleLogin}
                      sx={{ mt: 2 }}
                    >
                      Login
                    </Button>
                  </div>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <TextField
                    id="txtUserName"
                    name="txtUserName"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 1 }}
                    value={txtUserName}
                    onChange={handleChange}
                  />

                  <TextField
                    id="txtRestaurantName"
                    name="txtRestaurantName"
                    label="Restaurant Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    value={txtRestaurantName}
                    onChange={handleChange}
                  />

                  <TextField
                    id="txtContNumber"
                    name="txtContNumber"
                    label="Contact Number"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    value={txtContNumber}
                    type="number"
                    onChange={handleChange}
                  />

                  <TextField
                    id="txtPassword"
                    name="txtPassword"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    type="password"
                    value={txtPassword}
                    onChange={handleChange}
                  />
                  <div className="btnContainer">
                    <div>
                      Already have an account?{" "}
                      <NavLink to="" onClick={handleLoginVisibility}>
                        Login
                      </NavLink>
                    </div>
                    <Button
                      variant="contained"
                      onClick={handleRegister}
                      sx={{ mt: 2 }}
                    >
                      Register
                    </Button>
                  </div>
                </Grid>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;

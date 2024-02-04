import { List, ListItem } from "@mui/material";

import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import "./Nav.css";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Nav = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={`nav ${!xs ? "justify-end" : "m-t-10"}`}>
      <div>
        <NavLink to={"/menu"}>Menu</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        <NavLink to={"/bills"}>Bills</NavLink>
        <NavLink to={"/customer"}>Customer</NavLink>
      </div>
      <Tooltip disableFocusListener title="Logout">
        <ExitToAppIcon className="logout" onClick={handleLogout} />
      </Tooltip>
    </div>
  );
};

export default Nav;

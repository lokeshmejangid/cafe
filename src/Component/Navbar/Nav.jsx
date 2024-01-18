import { List, ListItem } from "@mui/material";

import { Link, NavLink } from "react-router-dom";

import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to={"/"}>Menu</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <NavLink to={"/bills"}>Bills</NavLink>
      <NavLink to={"/customer"}>Customer</NavLink>
    </div>
  );
};

export default Nav;

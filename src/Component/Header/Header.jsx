import { Grid } from "@mui/material";
import React from "react";
import "./Header.css";
import Nav from "../Navbar/Nav";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Grid container spacing={0} className="header">
      <Grid item xs={9}>
        logo
      </Grid>
      <Grid item xs={3}>
        <Nav />
      </Grid>
    </Grid>
  );
};

export default Header;

import React from "react";
import "./Footer.css";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Grid container spacing={0} className={`footer ${xs && 'p-10'}`}>
      <Grid item xs={12} sm={6} className="copyright">
        Copyright © 2024 Coffee Shop. All Rights Reserved.
      </Grid>
      <Grid item xs={12} sm={6} className={`links ${!xs && 'justify-end'}`}>
        <NavLink to="/privacy">PRIVACY</NavLink>
        <NavLink to="/term">TERM OF USE POLICY</NavLink>
      </Grid>
    </Grid>
  );
};

export default Footer;

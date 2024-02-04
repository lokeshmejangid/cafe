import { Grid } from "@mui/material";
import React from "react";
import "./Header.css";
import Nav from "../Navbar/Nav";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { NavLink } from "react-router-dom";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = (props) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));

  let user;
  if (localStorage.getItem('user') !== null && localStorage.getItem('user') !== undefined) {
    user = JSON.parse(localStorage.getItem('user'));
  }
  
  return (
    <Grid container spacing={0} className={`header`}>
      <Grid item xs={12} container spacing={0} className={`companyInfo ${xs && 'p-10'}`}>
        <Grid item xs={12} sm={6} className="email">
          <EmailIcon />
          Lokeshjangid.me@gmail.com
        </Grid>
        <Grid item xs={12} sm={6} className={`contactNo ${!xs && 'justify-end'}`}>
          <LocalPhoneIcon />
          +91 9784-477-117
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={0} className={`restoInfo ${xs && 'p-10'}`}>
        <Grid item xs={12} sm={9}>
          <NavLink to={props.isMenu ? "/dashboard" : "/"} className="logo">
            <img
              src="./assets/images/logo.png"
              alt="logo"
              height="40px"
              width="40px"
            />
            <span>{user !== undefined && user.restaName ? user.restaName : "Restaurant"}</span></NavLink>
        </Grid>

        <Grid item xs={12} sm={3}>
          {props.isMenu && <Nav />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;

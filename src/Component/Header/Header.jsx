import { Grid } from "@mui/material";
import React from "react";
import "./Header.css";
import Nav from "../Navbar/Nav";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Grid container spacing={0} className="header">
      <Grid item xs={12} className="companyInfo">
        <div className="email">
          <EmailIcon />
          Lokeshjangid.me@gmail.com
        </div>
        <div className="contactNo">
          <LocalPhoneIcon />
          +91 9784-477-117
        </div>
      </Grid>
      <Grid item xs={12} container spacing={0} className="restoInfo">
        <Grid item xs={9}>
          <NavLink to={props.isMenu ? "/menu" : "/"} className="logo">
            <img
              src="./assets/images/logo.png"
              alt="logo"
              height="40px"
              width="40px"
            />
            <span>Restaurant</span>
          </NavLink>
        </Grid>

        <Grid item xs={3}>
          {props.isMenu && <Nav />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;

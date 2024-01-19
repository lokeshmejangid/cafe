import React from 'react'
import './Footer.css'
import { Grid, List, ListItem } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Grid container spacing={0} className='footer'>
      <Grid item xs={6}>
        <div><img src='Cafelogo.png' className='imglogo'></img></div>
        <div>RASTAURANT . BAR . COFFIE . BISTRO</div>
      </Grid>
      <Grid item xs={6}>
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
        <TwitterIcon></TwitterIcon>
      </Grid>

      <hr style={{ color: "white", width: "100%" }} />

      <Grid item xs={6}>
        Copyright © 2023 Themesflat. All Rights Reserved.
      </Grid>
      <Grid item xs={6}>
        <List className='nav'>
          <ListItem>
            <a href="/">PRIVACY</a>
          </ListItem>
          <ListItem>
            <a href="/cart">TERM OF USE</a>
          </ListItem>
          <ListItem>
            <a href="bills/">POLICY</a>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default Footer
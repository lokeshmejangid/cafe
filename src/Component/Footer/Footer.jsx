import React from 'react'
import './Footer.css'
import { Grid, List, ListItem } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Footer = () => {
  return (
    <Grid container spacing={0} className='bgImg'>
      <Grid item xs={12} container spacing={0} className='footer'>
        <Grid item xs={4} className='icon'>
          <div><h1>STEPOUT</h1></div>
          <div>RASTAURANT . BAR . COFFIE . BISTRO</div>
          <div>Our buzzy food-hall style concept is inspired by international dining styles, especially in Asia. Explore the following fast-action food</div>
        </Grid>

        <Grid item xs={4} className='icon' sx={{ display: 'flex', justifyContent: 'center' }}>
          Copyright © 2023 Themesflat. All Rights Reserved.
        </Grid>

        {/* <span className='hr' /> */}

        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div>
            <FacebookIcon className='circle' />
            <InstagramIcon className='circle' />
            <TwitterIcon className='circle' />
            <AttachEmailIcon className='circle' />
          </div>

          <List className='nav'>
            <a href="/">PRIVACY</a>
            <a href="/cart">TERM OF USE</a>
            <a href="bills/">POLICY</a>
          </List>


        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
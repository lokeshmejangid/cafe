import { Grid } from '@mui/material'
import React from 'react'
import './Header.css'
import Nav from '../Navbar/Nav'
const Header = () => {
  return (
    <Grid container spacing={0} className='bgImg'>
      <Grid item xs={12} container spacing={0} className='header'>
        <Grid item xs={9} className='logo'>
          <h1>STEPOUT</h1>
          <p>RASTAURANT | BAR | COFFIE | BISTRO</p>
        </Grid>
        <Grid item xs={3}>
          <Nav />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
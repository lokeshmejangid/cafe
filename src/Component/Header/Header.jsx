import { Grid } from '@mui/material'
import React from 'react'
import './Header.css'
import Nav from '../Navbar/Nav'
const Header = () => {
  return (
    <Grid container spacing={0} className='header'>
      <Grid item xs={9}className='h-logo'>
        <img src='CafeLogo.png' className='img'></img>
        <h2>Stepout Cafe</h2>
      </Grid>
      <Grid item xs={3}>
        <Nav />
      </Grid>
    </Grid>
  )
}

export default Header
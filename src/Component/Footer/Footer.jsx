import React from 'react'
import './Footer.css'
import { Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Grid container spacing={0} className='footer'>
      <Grid item xs={6} className='copyright'>Copyright © 2024 Coffee Shop. All Rights Reserved.</Grid>
      <Grid item xs={6} className='links'>
        <NavLink to='/privacy'>PRIVACY</NavLink>
        <NavLink to='/term'>TERM OF USE POLICY</NavLink>
      </Grid>
    </Grid>

  )
}

export default Footer
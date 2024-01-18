import {List, ListItem } from '@mui/material'
import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
   <List className='nav'>
    <ListItem>
        <a href="/" className='text'>Menu</a>
    </ListItem>
    <ListItem>
    <a href="/cart" className='text'>Cart</a>
    </ListItem>
    <ListItem>
    <a href="bills/" className='text'>Bills</a>
    </ListItem>
    <ListItem>
    <a href="/customer" className='text'>Customer</a>
    </ListItem>
   </List>
  )
}

export default Nav
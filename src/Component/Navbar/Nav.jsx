import {List, ListItem } from '@mui/material'
import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
   <List className='nav'>
    <ListItem>
        <a href="/">Menu</a>
    </ListItem>
    <ListItem>
    <a href="/cart">Cart</a>
    </ListItem>
    <ListItem>
    <a href="bills/">Bills</a>
    </ListItem>
    <ListItem>
    <a href="/customer">Customer</a>
    </ListItem>
   </List>
  )
}

export default Nav
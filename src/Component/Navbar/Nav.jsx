import { List, ListItem } from '@mui/material'
import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <List className='nav'>
      <ListItem>
        <NavLink to='/'>Menu</NavLink>
      </ListItem>
      <ListItem>
      <NavLink to='/cart'>Cart</NavLink>
      </ListItem>
      <ListItem>
      <NavLink to='/bills'>Bills</NavLink>
      </ListItem>
      <ListItem>
      <NavLink to='/customer'>Customer</NavLink>
      </ListItem>
    </List>
  )
}

export default Nav
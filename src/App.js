
import { Grid } from '@mui/material'
import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'
import Bills from './Pages/Bills'
import Customer from './Pages/Customer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Component/Register/Register'

const App = () => {

  return (
    <Grid>
      <BrowserRouter>
        <Header />
        <Grid className='h-content'>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/customer" element={<Customer />} />
          </Routes>
        </Grid>
      </BrowserRouter>
      <Footer />
    </Grid >
  )
}

export default App
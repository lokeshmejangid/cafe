
import { Grid } from '@mui/material'
import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Menu from './Pages/Menu'
import { BrowserRouter, Router, Route } from '@mui/material'

const App = () => {

  return (
    <Grid>
      <BrowserRouter>
        <Header />
        <Router>
          <Grid className='h-content'>
            <Route path="/" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/coustmer" element={<Coustmer />} />
          </Grid>
        </Router>
      </BrowserRouter>
      <Footer />
    </Grid>
  )
}

export default App
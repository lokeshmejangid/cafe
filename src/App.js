
import { Grid } from '@mui/material'
import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Menu from './Pages/Menu'
const App = () => {
  
  return (
    <Grid>
      <Header />
      <Grid className='h-content'>
        <Menu />
      </Grid>
      <Footer />
    </Grid>
  )
}

export default App
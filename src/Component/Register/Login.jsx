import React from 'react'
import { Grid, TextField, Button } from '@mui/material'

const Login = () => {
    return (
        <Grid container spacing={0} className='Login'>
            <div className='restoRegister'>Welcome to Restaurant Billing App</div>
            <Grid item xs={12}  >
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    fullWidth
                    sx={{ mt: 5 }}
                />
                <TextField
                    id="outlined-required"
                    label="Restaurant Name"
                    fullWidth
                    sx={{ mt: 2 }}
                />
            </Grid>
            <Grid item xs={12} container spacing={0} sx={{ mt: 2 }} justifyContent={'space-between'}>
                <div>Already have an account
                    <Button >Register</Button>
                </div>
                <Button variant="contained">Register</Button>
            </Grid>
        </Grid>
    )
}

export default Login
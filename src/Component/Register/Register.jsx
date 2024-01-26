import { Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import Login from './Login'

const Register = () => {

    const [email, setEmail] = useState('');
    const [restoName, setRestoName] = useState('');
    const [regiNumber, setRegiNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name + " " + value);
        if (name === email) {
            setEmail(value)
        } else if (name === restoName) {
            setRestoName(value)
        } else if (name === regiNumber) {
            setRegiNumber(value)
        } else if (name === password) {
            setPassword(value)
        } else {
            //todo
        }
    }

    return (
        <Grid container spacing={0} className='register'>
            <div className='restoRegister'>Welcome to Restaurant Billing App</div>
            <Grid item xs={12}  >
                <TextField
                    required
                    id="email"
                    label="Email"
                    name='email'
                    value={email}
                    fullWidth
                    sx={{ mt: 5 }}
                    onChange={handleChange}
                />
                <TextField
                    id="restoName"
                    label="Restaurant Name"
                    name='restoName'
                    value={restoName}
                    fullWidth
                    sx={{ mt: 2 }}
                    onChange={handleChange}
                />
                <TextField
                    id="regiNumber"
                    label="Contact Number"
                    name='regiNumber'
                    value={regiNumber}
                    fullWidth
                    sx={{ mt: 2 }}
                    onChange={handleChange}
                />
                <TextField
                    id="password"
                    label="Password"
                    name='password'
                    value={password}
                    fullWidth
                    sx={{ mt: 2 }}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} container spacing={0} sx={{ mt: 2 }} justifyContent={'space-between'}>
                <div>Already have an account
                    <Button onClick={Login} >Login</Button>
                </div>
                <Button variant="contained">Register</Button>
            </Grid>
        </Grid>
    )
}

export default Register
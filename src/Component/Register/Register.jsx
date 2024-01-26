import { Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import Login from './Login'

const Register = () => {

    const [txtEmail, setEmail] = useState('');
    const [txtRestoName, setRestoName] = useState('');
    const [txtRegiNumber, setRegiNumber] = useState('');
    const [txtPassword, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name + " " + value);
        if (name === txtEmail) {
            setEmail(value)
        } else if (name ===txtRestoName) {
            setRestoName(value)
        } else if (name === txtRegiNumber) {
            setRegiNumber(value)
        } else if (name === txtPassword) {
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
                    id="txtEmail"
                    label="Email"
                    name='txtEmail'
                    value={txtEmail}
                    fullWidth
                    sx={{ mt: 5 }}
                    onChange={handleChange}
                />
                <TextField
                    id="txtRestoName"
                    label="Restaurant Name"
                    name='txtRestoName'
                    value={txtRestoName}
                    fullWidth
                    sx={{ mt: 2 }}
                    onChange={handleChange}
                />
                <TextField
                    id="txtRegiNumber"
                    label="Contact Number"
                    name='txtRegiNumber'
                    value={txtRegiNumber}
                    fullWidth
                    sx={{ mt: 2 }}
                    onChange={handleChange}
                />
                <TextField
                    id="txtPassword"
                    label="Password"
                    name='txtPassword'
                    value={txtPassword}
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
import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'

const Login = () => {
    const [userLogin, setUserLogin] = useState('');
    const [loginPassword,setLoginPassword] = useState('');

    const handlechange = (e) => {
        const{name, value} = e.target;
        if(name === "userLogin"){
            setUserLogin(value)
        }else if(name === "loginPassword"){
            setLoginPassword(value)
        }else{
            //todo
        }
    }
    const handleLogin = () => {
        const payload = {
            "User Name": userLogin,
            "password": loginPassword
        }
        console.log(payload);
    }

    return (
        <Grid container spacing={0} className='login'>
            <div className='restoRegister'>Welcome to Restaurant Billing App</div>
            <Grid item xs={12}  >
                <TextField
                    required
                    id="userLogin"
                    label="User Name"
                    fullWidth
                    sx={{ mt: 5 }}
                    name='userLogin'
                    value={userLogin}
                    onChange={handlechange}
                />
                <TextField
                    id="loginPassword"
                    label="Password"
                    fullWidth
                    sx={{ mt: 2 }}
                    name='loginPassword'
                    value={password}
                    onChange={handlechange}

                />
            </Grid>
            <Grid item xs={12} container spacing={0} sx={{ mt: 2 }} justifyContent={'space-between'}>
                <div>Already have an account
                    <Button >Register</Button>
                </div>
                <Button variant="contained" onClick={handleLogin}>Login</Button>
            </Grid>
        </Grid>
    )
}

export default Login
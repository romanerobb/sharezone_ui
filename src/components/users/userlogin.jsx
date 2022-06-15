import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function UserLogin() {

  const navigate = useNavigate();

  const url = "https://sharezone.azurewebsites.net"

  const usernameInput = useRef();
  const userpasswordInput = useRef();

  async function login(){

    const userprofile = {
        
        username: usernameInput.current.value,
        userpassword: userpasswordInput.current.value,
    }
    
    try{
        const response = await axios.post(`${url}/auth`, userprofile)
        console.log(response.data)
        navigate("/user");
    } catch (error) {
        console.error(error.response.data)
        console.log(error)
        alert(error.response.data);
    }
}

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h9">
              User Sign In
            </Typography>
            <h4>Sign in and start engaging with industry experts!</h4>

            <input size="80" placeholder="Please enter a username" ref={usernameInput}></input>
            <br></br>
            <input size="80" type="password" placeholder="Please enter a password" ref={userpasswordInput}></input>
            <br></br>


            <Button variant="contained" color="success" onClick={login}>Log In</Button>
          </Box>
        </Grid>
      </Grid>

    </ThemeProvider>
  );
}
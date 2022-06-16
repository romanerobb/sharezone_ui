import * as React from 'react';
import { Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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

export default function AdminLogIn() {

  const usernameInput = useRef();
  
  const userpasswordInput = useRef();
  
  // const is_adminInput = useRef();
  
  // const is_subscriberInput = useRef();
  
  const navigate = useNavigate();
  
  const url = "http://sharezone.azurewebsites.net"

  async function login(){

    const admin = {

      username: usernameInput.current.value,
      userpassword: userpasswordInput.current.value,
      // is_admin: true,
      // is_subscriber: is_subscriberInput.current.value
  };
    
            try {
                const response = await axios.post(`${url}/auth`, admin);
                // is_admin = true;
                console.log(response.data.is_admin);
                if (response.data.is_admin === true) {
                  navigate("/admin");
                } else navigate("/");
                console.log(response.data);
            } catch (error) {
                console.error(error.response.data);
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
              <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h9">
                  Welcome Back, Expert!<br></br> Please Sign in!
                </Typography>
                <p>Your subject matter expertise is needed!</p>

            <input size="50" placeholder="Enter username" ref={usernameInput}></input>
            <br></br>
            <br></br>
            <input size="50" type="password" placeholder="Enter password" ref={userpasswordInput}></input>
            <br></br>
            {/* <input placeholder="is_admin" ref={is_adminInput}></input> 
            <br></br>
            <input placeholder="is_subscriber" ref={is_subscriberInput}></input> */}
            <br></br>
            <Button size="50" variant="contained" color="error" onClick={login}>Log In</Button>
          </Box>
        </Grid>
      </Grid>

    </ThemeProvider>
  );
}
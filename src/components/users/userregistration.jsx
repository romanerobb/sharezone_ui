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

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/about">
        ShareZone Corporation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function UserRegistration() {

  const navigate = useNavigate();

  const url = "https://sharezone.azurewebsites.net"

  const usernameInput = useRef();
  const fnameInput = useRef();
  const lnameInput = useRef();
  const emailaddressInput = useRef();
  const userpasswordInput = useRef();
  const ageInput = useRef();
  const isadminInput = useRef();
  const issubscriberInput = useRef();

  async function userReg(){

    const userprofile = {
        
        username: usernameInput.current.value,
        fname: fnameInput.current.value,
        lname: lnameInput.current.value,
        emailaddress: emailaddressInput.current.value,
        userpassword: userpasswordInput.current.value,
        age: ageInput.current.value,
        is_admin: isadminInput.current.value,
        is_subscriber: issubscriberInput.current.value

    }

  //   {
  //     "username": "user7",
  //     "fname": "jacky",
  //     "lname": "robb",
  //     "emailaddress": "user6@gmail.com",
  //     "userpassword": "password",
  //     "age": 20,
  //     "is_admin": false,
  //     "is_subscriber": true
  // }
  

    // if (userprofile.userPassword === "") {
    //     alert("You have failed to enter a valid password! Please try again!");
    // if (userprofile.username === "")
    //     alert("You have failed to enter a valid username! Please try again!");
    // }else navigate("/user");
    
    try{
        const response = await axios.post(`${url}/register`, userprofile)
        console.log(response.data)
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
              Register
            </Typography>
            <Box component="form" onClick={userReg} sx={{ mt: 1 }}>

            <br></br>
            <input margin="normal" placeholder="Enter Username" ref={usernameInput}></input>
            <br></br>
            <br></br>
            <input placeholder="Enter First Name" ref={fnameInput}></input>
            <br></br>
            <br></br>
            <input placeholder="Enter Last Name" ref={lnameInput}></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter password" ref={userpasswordInput}></input>
            <br></br>
            <br></br>
            <input placeholder="Enter email address" ref={emailaddressInput}></input>
            <br></br>
            <br></br>
            <input placeholder="age" ref={ageInput}></input>
            <br></br>
            <br></br>
            <input placeholder="subscriber" ref={issubscriberInput}></input>
            <br></br>
            <br></br>
            <input placeholder="admin" ref={isadminInput}></input>
            <br></br>
            <br></br>

              <FormControlLabel
                control={<Checkbox value="remember" color="success" />}
                label="Remember me"
              />
              <Button
                type="onClick"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/termsandconditions" variant="body1">{"terms and conditions!"}</Link>
                </Grid>
                <Grid item>
                  <Link href="/thezone" variant="body1">{"the zone!"}</Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>


    </ThemeProvider>
  );
}
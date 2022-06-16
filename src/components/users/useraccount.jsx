import { buttonUnstyledClasses } from "@mui/base"
import { Typography, Avatar, Card, Button, Stack, LocationOn, IconButton, Chip, Switch, Divider, Edit, grey } from "@mui/material"
import { Box } from "@mui/system"
import DeleteUserAccount from "./deleteuseraccount"
import Logout from "./logout"
import UpdateUserAccount from "./updateuser"
import UserMessages from "./usermessages"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as React from 'react';


export default function UserAccount () {

    
    return (
        <>
            <Typography component="h1" variant="h3">
              Welcome To Your User Account
            </Typography>
            <br></br>
      <Grid container spacing={1}   justifyContent="center"
  alignItems="center">
        <Grid item xs={4}>
          <UpdateUserAccount />
        </Grid>
        <Grid item xs={4}>
          <DeleteUserAccount />
          <br></br>
          <br></br>
          <br></br>
          <br></br>          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Logout />
        </Grid>
      </Grid>
        </>
    )
}
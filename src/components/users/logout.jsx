import { buttonUnstyledClasses } from "@mui/base"
import { Typography, Avatar, Card, Button, Stack, LocationOn, IconButton, Chip, Switch, Divider, Edit, grey } from "@mui/material"
import { Box } from "@mui/system"
import { Navigate } from "react-router-dom";
import { useRef, useState } from "react"
import axios from "axios";

export default function Logout () {

    const url = "https://zahfosha.azurewebsites.net"

    const usernameInput = useRef();
 
     async function logout(){
 
         const userprofile = {
             username: usernameInput.current.value
         }
 
        try{
             const response = await axios.delete(`${url}/auth`, userprofile)
             console.log(response)
             console.log(response.data)
             Navigate("/");
         }catch (error){
             console.error(error.response.data)
             console.error(error)
         }
 
     }
    
    return (
        <>
        <br></br>
        <Button variant="contained" color="primary" onClick={logout}>Logout</Button>
        </>
    )
}
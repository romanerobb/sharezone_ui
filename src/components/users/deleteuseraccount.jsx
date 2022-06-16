import { buttonUnstyledClasses } from "@mui/base"
import { Typography, Avatar, Card, Button, Stack, LocationOn, IconButton, Chip, Switch, Divider, Edit, grey } from "@mui/material"
import { Box } from "@mui/system"
import { Navigate } from "react-router-dom";
import { useRef, useState } from "react"
import axios from "axios";

export default function DeleteUserAccount () {

    const usernameInput = useRef();

    const url = "https://zahfosha.azurewebsites.net"
 
    async function deleteCustomer(){
 
         const user = {
             username: usernameInput.current.value,
         }
 
         if (usernameInput === " ") {
         alert("You have failed to enter a valid customer username! Please try again!");
 
         } try{
             const response = await axios.delete(`${url}/userprofile?username=${usernameInput.current.value}`, user)
             console.log(response)
             console.log(response.data)
             Navigate("/");
         }catch (error){
            console.error(error.response.data)
            console.log(error)
            alert(error.response.data)
         }
 
     }
    
    return (
        
        <>
        <br></br>
        <br></br>
        <Typography component="h5" variant="h5">Delete Your Account</Typography>
        <input placeholder="Enter your username" ref={usernameInput}></input>
        <br></br>
        <br></br>
        <Button variant="contained" color="error" onClick={deleteCustomer}>Delete Your Account</Button>
        </>
    )
}
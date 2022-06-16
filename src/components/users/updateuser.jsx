import { buttonUnstyledClasses } from "@mui/base";
import { Typography, Avatar, Card, Button, Stack, LocationOn, IconButton, Chip, Switch, Divider, Edit, grey } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateUserAccount () {

const [showUpdate, setShowUpdated] = useState(false);

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

  async function update(){

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

    if (userprofile.username === "") {
        alert("You have failed to enter a valid username! Please try again!");
    }
    
    try{
        const response = await axios.put(`${url}/userprofile`, userprofile)
        console.log(response.data)
        navigate("/user");
    } catch (error) {
        console.error(error.response.data)
        console.log(error)
        alert(error.response.data);
    }
}
    
    return (

        <>
        
        <Typography component="h5" variant="h5">Update Your Account</Typography>
        <input size="40" placeholder="Please enter a username" ref={usernameInput}></input>
            <br></br>
            <br></br>
            <input size="40" placeholder="Please enter your first name" ref={fnameInput}></input>
            <br></br>
            <br></br>
            <input size="40" placeholder="Please enter your last name" ref={lnameInput}></input>
            <br></br>
            <br></br>
            <input size="40" type="password" placeholder="Please enter a password" ref={userpasswordInput}></input>
            <br></br>
            <br></br>
            <input size="40" placeholder="Please enter your email address" ref={emailaddressInput}></input>
            <br></br>
            <br></br>
            <input size="40" placeholder="How old are you?" ref={ageInput}></input>
            <br></br>
            <br></br>
            <input size="40" placeholder="Are you a subscriber?" ref={issubscriberInput}></input>
            <br></br>
            <br></br>
            <input size="40" placeholder="Are you an admin?" ref={isadminInput}></input>
            <br></br>
            <br></br>

        <Button variant="contained" color="success" onClick={() => {update(); setShowUpdated(!showUpdate)}}>Update Account</Button>
        {showUpdate && <p><strong>You Have Successfully Updated Your Account</strong></p>}
        </>

    )
}
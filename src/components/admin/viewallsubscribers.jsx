import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function ViewAllSubscribers(){

        const [subscriptionBody, setSubscriptionBody] = useState();

        const url = "http://sharezone.azurewebsites.net"

        async function getAllSubscribers(){

            try{
                const response = await axios.get(`${url}/userprofile-findall`, subscriptionBody)
                const items = await response.data;
                const userProfileTableRows = items.map((e) => {
                    return (
                        <tr>
                            <td>{e.username}</td>
                            <td>{e.age}</td>
                            <td>{e.emailaddress}</td>
                            <td>{e.fname}</td>
                            <td>{e.is_admin}</td>
                            <td>{e.is_subscriber}</td>
                            <td>{e.lname}</td>
                        </tr>
                    )
                   
                })
                setSubscriptionBody(userProfileTableRows)
                console.log(response)
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }

        }

    return(
        <>
        <h2> View All Subscribers</h2>

        <Button variant="contained" color="primary" onClick={getAllSubscribers}>Press Here To View All Subscribers</Button>
    <br></br>

    <table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Age</th>
                <th>Email Address</th>
                <th>First Name</th>
                <th>Is Admin</th>
                <th>Is Subscriber</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>{subscriptionBody}</tbody>
    </table>
        </>
    )
}
import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function ViewContentBySection(){

        const [subscriptionBody, setSubscriptionBody] = useState();

        const url = "http://sharezone.azurewebsites.net"

        async function getAllContentBySection(){

            try{
                const response = await axios.get(`${url}/contents/findAllBySection?section=sports`, subscriptionBody)
                const items = await response.data;
                const contentsTableRows = items.map((e) => {
                    return (
                        <tr>
                            <td align="center">{e.id}</td>
                            <td align="center">{e.username.username}</td>
                            <td align="center">{e.displaypicture}</td>
                            <td align="center" word-wrap="break-word">{e.postcontent}</td>
                            <td align="center">{e.postdate}</td>
                            <td align="center">{e.section}</td>
                        </tr>
                    )                 
                })
                setSubscriptionBody(contentsTableRows)
                console.log(response)
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

    return(
        <>
        <h1>[Find Expert Knowledge By Section!]</h1>
        <input size="80" placeholder="Please enter the section"></input><br></br><br></br>
        <Button variant="contained" color="success" onClick={getAllContentBySection}>Search Content By Section!</Button>
    <br></br>

    <table>
        <thead>
            <tr>
                <th align="center">Content ID</th>
                <th align="center">Expert Username</th>
                <th align="center">Supporting Link(s)</th>
                <th align="center">Post Content</th>
                <th align="center">Post Date</th>
                <th align="center">Section</th>
                
            </tr>
        </thead>
        <tbody>{subscriptionBody}</tbody>
    </table>
        </>
    )
}
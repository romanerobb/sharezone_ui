import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export default function ViewAllContent(){

        const [subscriptionBody, setSubscriptionBody] = useState();

        const url = "http://sharezone.azurewebsites.net"

        async function getAllContent(){

            try{
                const response = await axios.get(`${url}/contents`)
                const subscription = await response.data;
                console.log(subscription)
                const contentsTableRows = subscription.map((e) => {
                    return (
                        <tr>
                            <td align="center">{e.id}</td>
                            <td align="center">{e.username.username}</td>
                            <td align="center" word-wrap="break-word">{e.postcontent}</td>
                            <td align="center">{e.displaypicture}</td>
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
        <h1>[Seek Knowledge From Experts!]</h1>
        
        <Button variant="contained" color="secondary" onClick={getAllContent}>Click Here To View All Content!</Button>
    <br></br>

    <table>
        <thead>
            <tr>
                <th align="center">ID</th>
                <th align="center">Expert Username</th>
                <th align="center">Post Content</th>
                <th align="center">Supporting Link(s)</th>
                <th align="center">Post Date</th>
                <th align="center">Section</th>
            </tr>
        </thead>
        <tbody>{subscriptionBody}</tbody>
    </table>
        </>
    )
}
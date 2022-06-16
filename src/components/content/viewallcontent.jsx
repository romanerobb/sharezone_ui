import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function ViewAllContent(){

        const [subscriptionBody, setSubscriptionBody] = useState();

        const url = "http://sharezone.azurewebsites.net"

        async function getAllContent(){

            try{
                const response = await axios.get(`${url}/contents`, subscriptionBody)
                const items = await response.data;
                const contentsTableRows = items.map((e) => {
                    return (
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.displaypicture}</td>
                            <td>{e.postcontent}</td>
                            <td>{e.postdate}</td>
                            <td>{e.section}</td>
                            <td>{e.username}</td>
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

        <Button variant="contained" color="secondary" onClick={getAllContent}>Press Here To View All Content!</Button>
    <br></br>

    <table>
        <thead>
            <tr>
                <th>Content ID</th>
                <br></br>
                <th>Display Picture</th>
                <br></br>
                <th>Post Content</th>
                <br></br>
                <th>Post Date</th>
                <br></br>
                <th>Section</th>
                <br></br>
                <th>Expert Username</th>
            </tr>
        </thead>
        <tbody>{subscriptionBody}</tbody>
    </table>
        </>
    )
}
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useState} from "react";

export default function TheZone() {

const [contentBody, setContentBody] = useState();

const url = "https://sharezone.azurewebsites.net"

async function allContents() {
    try {
        const response = await fetch(`${url}/content`);
        const content = await response.json();
        const contentTableRows = content.map((e) => {
            return (
                <tr>
                    <td>{e.displayPicture}</td>
                    <td>{e.postContent}</td>
                    <td>{e.postDate}</td>
                    <td>{e.section}</td>
                    <td>{e.username}</td>
                </tr>
            );
        });

        setContentBody(contentTableRows);
        console.log(content);
    } catch (e) {
        console.error(e);
    }


return(
    <>
    <h3 class="display-1">Contents</h3>
    <button class="btn btn-secondary btn-lg" onClick={allContents}>Here is What's Hot On ShareZone</button>
<table>
    <thead>
        <tr>
            <th>Display Picture</th>
            <th>Post Content</th>
            <th>Post Date</th>
            <th>Section</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody>{contentBody}</tbody>
</table>
    <br></br>
    <br></br>
    </>
)

}

}

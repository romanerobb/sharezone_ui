import { useState } from "react"
import axios from "axios"

export default function ViewAllSubscribers(){

        const [subscriptionBody, setSubscriptionBody] = useState();

        const url = ""

        async function getAllSubscribers(){

            try{
                const response = await axios.get(`${url}/userprofile`)
                const items = await response.data;
                const userProfileTableRows = items.map((e) => {
                    return (
                        <tr>
                            
                            <td>{e.userprofile}</td>
                            <td>{e.email}</td>
                            <td>{e.is_admin}</td>
                            <td>{String(e.is_subscriber)}</td>
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
        <h1> View All Subscribers</h1>
        <br></br>
        <br></br>
        <button onClick={getAllSubscribers}>Press Here To View All Subscribers</button>
    <table>
        <thead>
            <tr>
                
                <th>username</th>
                <th>emailaddress</th>
                <th>is_admin</th>
            </tr>
        </thead>
        <tbody>{subscriptionBody}</tbody>
    </table>
        </>
    )
}
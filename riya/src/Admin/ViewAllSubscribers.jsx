import { useState } from "react"
import axios from "axios"

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
                            <td>{e.userprofile}</td>
                            <td>{e.is_admin}</td>
                            <td>{e.is_subscriber}</td>
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
        <h3> View All Subscribers</h3>

        <button onClick={getAllSubscribers}>Press Here To View All Subscribers</button>
    <br></br>
    <table>
        <thead>
            <tr>
            
                <th>username</th>
                <th>is_admin</th>
                <th>is_subscriber</th>
                
            </tr>
        </thead>
        <tbody>{subscriptionBody}</tbody>
    </table>
        </>
    )
}
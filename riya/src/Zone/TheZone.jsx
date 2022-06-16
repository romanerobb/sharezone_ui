import { useState } from "react"
import axios from "axios";


export default function TheZone(){

    const [subscriptionBody, setSubscriptionBody] = useState();

    const url = "http://sharezone.azurewebsites.net"

    async function thezone(){

        try{
            const response = await axios.get(`${url}/contents`)
            const subscription = await response.data;
            console.log(subscription)
            const contentsTableRows = subscription.map((e) => {
                return (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.username.username}</td>
                        <td>{e.postcontent}</td>
                        <td>{e.displaypicture}</td>
                        <td>{e.postdate}</td>
                        <td>{e.section}</td>
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
        <h1>Welcome To the Feed</h1>
        <button onClick={thezone}>Click Here To Find all News</button>
    <br></br>

        <table>
        <thead>
            <tr>
                <th >ID</th>
                <th >Expert</th>
                <th >Post Content</th>
                <th >Picture Link(s)</th>
                <th >Post Date</th>
                <th >Section</th>
            </tr>
        </thead>
        <tbody>{subscriptionBody}</tbody>
    </table>
        </>  
    )
    
}
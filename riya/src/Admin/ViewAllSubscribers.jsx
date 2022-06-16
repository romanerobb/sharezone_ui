import { useState } from "react"
import axios from "axios"

export default function ViewAllSubscribers(){

        const [subscriptionBody, setSubscriptionBody] = useState();

        const url = "http://sharezone.azurewebsites.net"

        async function getAllSubscribers(){

            try{
                const response = await axios.get(`${url}/userprofile-findall`)
                const subscription = await response.data;
                console.log(subscription)
                const userProfileTableRows = subscription.map((e) => {
                    return (
                        <tr>
                           <td>{e.username}</td>
                           <td>{e.age}</td>
                           <td>{e.emailaddress}</td>
                           <td>{e.fname}</td>
                           <td>{String(e.is_admin)}</td>
                            <td>{String(e.is_subscriber)}</td>
                            <td>{e.lname}</td>
                            {/* <td>{e.userpassword}</td> */}

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
                <th>age</th>
                <th>emailaddress</th>
                <th>fname</th>
              <th>is_admin</th>
                <th>is_subscriber</th>
                <th>lname</th>
                {/* <th>userpassword</th> */}
                
            </tr>
        </thead>
        <tbody>{subscriptionBody}</tbody>
    </table>
        </>
    )
}
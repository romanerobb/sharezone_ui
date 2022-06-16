import { useRef } from "react"
import axios from "axios";
import Button from '@mui/material/Button';


export default function BanUserAccount(){

    const usernameInput = useRef();

    const url = "http://sharezone.azurewebsites.net"

    async function banUserAccount(){

        const user = {
            username: usernameInput.current.value,
        }

        try{
            const response = await axios.delete(`${url}/userprofile?username=${usernameInput.current.value}`, user)

            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }
        }
    


    return(
        <>
        <h2>Ban User Account</h2>
        <input placeholder="Enter Username Here" ref={usernameInput}></input><br></br><br></br>
        <Button variant="contained" color="error" onClick={banUserAccount}>Ban User Account </Button>
        </>
    )
}
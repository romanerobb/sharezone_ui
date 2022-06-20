import { useRef, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';

export default function UpdateAccount(){

    const [showUpdate, setShowUpdated] = useState(false);

    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const emailaddressInput = useRef();
    const ageInput = useRef();
    const userpasswordInput = useRef();
    const is_adminInput = useRef();
   
    const url = "http://sharezone.azurewebsites.net/userprofile?username=user1"


    async function accountUpdate(){
        

        const userProfile = {

            username: usernameInput.current.value,
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            emailaddress: emailaddressInput.current.value,
            age:ageInput.current.value,
            userpassword: userpasswordInput.current.value,
            is_admin: true
        }


        try{
        const response = await axios.put(`${url}/userprofile` , userProfile)
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }


    return(
        <>
        <h2>Update Your Account</h2>
         <input placeholder="Update First Name" ref={fnameInput}></input>
         <br></br>
         <br></br>
         <input placeholder="Update Last Name" ref={lnameInput}></input>
         <br></br>
         <br></br>
         <input placeholder="Update your Username" ref={usernameInput }></input>
         <br></br>
         <br></br>
         <input placeholder="Update your Email" ref={emailaddressInput }></input>
         <br></br>
         <br></br>
         <input placeholder="Update your Age" ref={ageInput }></input>
         <br></br>
         <br></br>
         <input placeholder="Update your admin status" ref={is_adminInput }></input>
         <br></br>
         <br></br>
         <input type="password" placeholder="Update User password" ref={userpasswordInput}></input>
         <br></br>
         <br></br>
        <Button variant="contained" color="primary" onClick={() => {accountUpdate(); setShowUpdated(!showUpdate)}}>Update Account</Button>
        {showUpdate && <p><strong>Updating Account Successful!</strong></p>}
        
        </>
    )
}
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogIn() {

    const usernameInput = useRef();
    const userpasswordInput = useRef();
    const is_adminInput = useRef();
    const is_subscriberInput = useRef();
    const navigate = useNavigate();
    const url = "http://sharezone.azurewebsites.net"

    async function login() {
        
        const admin = {
            username: usernameInput.current.value,
            userpassword: userpasswordInput.current.value,
             is_admin: true,
             is_subscriber: is_subscriberInput.current.value
        };

            try {
                const response = await axios.post(`${url}/auth`, admin);
                //is_admin = true
                console.log(response.data);
                navigate("/admin");
            } catch (error) {
                console.error(error.response.data);
                alert(error.response.data);
            }
        }
    


    return(
    <>
            <h4>Welcome, please log in below.</h4>
            <input placeholder="Enter username" ref={usernameInput}></input>
            <input type="password" placeholder="Enter password" ref={userpasswordInput}></input>
             <input placeholder="is_admin" ref={is_adminInput}></input> 
             <input placeholder="is_subscriber" ref={is_subscriberInput}></input>
            <button onClick={login}>Login</button>
    </>
    )
    }

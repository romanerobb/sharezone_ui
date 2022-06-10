import { useRef } from "react";

export default function UpdateAccount(){

    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const emailaddressInput = useRef();
    const ageInput = useRef();
    const userpasswordInput = useRef();
    const is_adminInput = useRef();
   
    const url = ""


    async function accountUpdate(){
        

        const userProfile = {

            username: usernameInput.current.value,
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            emailaddress: emailaddressInput.current.value,
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
        <br></br>
        <br></br>
        <br></br>
        <h3>Update Your Account.</h3>
         <input placeholder="Update First Name" ref={fnameInput}></input>
         <br></br>
         <input placeholder="Update Last Name" ref={lnameInput}></input>
         <br></br>
         <input placeholder="Update your Username" ref={usernameInput }></input>
         <br></br>
         <input placeholder="Update your Email" ref={emailaddressInput }></input>
         <br></br>
         <input placeholder="Update your Age" ref={ageInput }></input>
         <br></br>
         <input placeholder="Update your admin status" ref={is_adminInput }></input>
         <br></br>
         <input type="password" placeholder="Update User password" ref={userpasswordInput}></input>
         <br></br>
        <button onClick={accountUpdate}>Update Account</button>
        
        </>
    )
}
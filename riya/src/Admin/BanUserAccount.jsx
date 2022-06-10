import { useRef } from "react"



export default function BanUserAccount(){

    const userInput = useRef();

    const url = " "

    async function banUserAccount(){

        try{
            const response = await axios.delete(`${url}/user/delete-Account?username=${userInput.current.value}`)

            console.log(response)
            console.log(respomse.data)
        }catch (error){
            console.error(error)
        }
        }
    


    return(
        <>
        <h3>Ban User Account.</h3>
        <input placeholder="Enter Username Here" ref={userInput}></input>
        <button onclick={banUserAccount}>Ban User Account </button>
        </>
    )
}
import axios from "axios";
import { useRef } from "react"

export default function DeleteContent(){

    const contentInput = useRef();

    const url = "http://sharezone.azurewebsites.net"

    async function deleteContent(){


        try{
            const response = await axios.delete(`${url}/contents/?id=${contentInput.current.value}` )

            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)

        }

    }

    return(
        <>
        <h3>Please enter the Content You Would Like To Delete</h3>
        <input placeholder="id" ref={contentInput}></input>
        <button onClick={deleteContent}>Delete Content</button>

        </>
    )
}
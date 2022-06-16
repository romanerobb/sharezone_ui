import axios from "axios";
import { useRef } from "react"

export default function DeleteComment(){

    const usercommentInput = useRef();


    const url = "http://sharezone.azurewebsites.net"



    async function deleteComment(){

        const comment = {
            usercomment: usercommentInput.current.value,
        }


        try{
            const response = await axios.delete(`${url}/actions?id=${usercommentInput.current.value}`, comment )

           
            

            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }

    }

    return(
        <>
        <h3>Please enter Usercomment You Would Like To Delete</h3>
        <br></br>
        <input placeholder="id" ref={usercommentInput}></input>
        <button onClick={deleteComment}>Delete Comment</button>
        </>
    )
}
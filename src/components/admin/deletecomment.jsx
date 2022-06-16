import axios from "axios";
import { useRef } from "react"
import Button from '@mui/material/Button';

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
        <h2>Please enter the ID of User's Comment<br></br> You Would Like To Delete</h2>
        <input placeholder="id" ref={usercommentInput}></input><br></br><br></br>
        <Button variant="contained" color="error" onClick={deleteComment}>Delete Comment</Button>
        </>
    )
}
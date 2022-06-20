import axios from "axios";
import { useRef, useState } from "react";
import Button from '@mui/material/Button';

export default function DeleteContent(){

    const [showDelete, setShowDeleted] = useState(false);

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
        <h2>Please enter the Content ID Of <br></br>The Content You Would Like To Delete</h2>
        <input placeholder="id" ref={contentInput}></input><br></br><br></br>
        {/* <Button variant="contained" color="error" onClick={deleteContent}>Delete Content</Button> */}
        <Button variant="contained" color="error" onClick={() => {deleteContent(); setShowDeleted(!showDelete)}}>Delete Content</Button>
        {showDelete && <p><strong>Content Deleted Successful!</strong></p>}

        </>
    )
}
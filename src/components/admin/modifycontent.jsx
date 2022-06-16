import axios from "axios";
import { useRef } from "react";
import Button from '@mui/material/Button';

export default function ModifyContent(){

    const idInput = useRef();
    const sectionInput = useRef();
    const postcontentInput = useRef();
    const displaypictureInput = useRef();
    const postdateInput = useRef();
    const usernameInput = useRef();

    const url = "http://sharezone.azurewebsites.net"

    async function modifyContents(){

        const content = {

            id: idInput.current.value,
            section: sectionInput.current.value,
            postcontent: postcontentInput.current.value,
            displaypicture: displaypictureInput.current.value,
            postdate: postdateInput.current.value,
            username: usernameInput.current.value,
        }
        try{
            const response = await axios.put(`${url}/contents` ,  content)
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }


    }

    return (
        <>
        <h2>Please Update Content Below</h2>
        <input placeholder="Enter The ID" ref={idInput}></input>
        <br></br>
        <br></br>
        <input placeholder="Enter The Section" ref={sectionInput}></input>
        <br></br>
        <br></br>
        <input size="50" placeholder="Enter The Content" ref={postcontentInput}></input>
        <br></br>
        <br></br>
        <input  placeholder="Enter Display Picture" ref={displaypictureInput}></input>
        <br></br>
        <br></br>
        <input placeholder="Enter The Post Date" ref={postdateInput}></input>
        <br></br>
        <br></br>
        <input  placeholder="Enter The Username" ref={usernameInput}></input>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" onClick={modifyContents}>Update Content</Button>
        </>
    )
}
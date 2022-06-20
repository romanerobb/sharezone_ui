import axios from "axios";
import { useRef, useState } from "react";
import Button from '@mui/material/Button';

export default function ModifyContent(){
    const [showModify, setShowModified] = useState(false);

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

    const today = new Date();
    const year = today.getFullYear();
    const day = today.getDate();
    const month = today.getMonth()+1;
    const newdate = month + "/" + day + "/" + year;
 

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
        <input  placeholder="Enter The Link" ref={displaypictureInput}></input>
        <br></br>
        <br></br>
        {/* <input placeholder="Enter The Post Date" ref={postdateInput}></input> */}
        <input value = {newdate} ref={postdateInput} >
   </input>
        <br></br>
        <br></br>
        <input  placeholder="Enter The Username" ref={usernameInput}></input>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" onClick={() => {modifyContents(); setShowModified(!showModify)}}>Modify Content</Button>
        {showModify && <p><strong>Content Update Sucessful</strong></p>}
        </>
    )
}
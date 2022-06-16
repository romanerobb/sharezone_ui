import axios from "axios";
import { useRef } from "react"

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

    return(
        <>
        <h3>Please Update Content Below</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter The ID" ref={idInput}></input>
        <br></br>
        <input placeholder="Enter The Section" ref={sectionInput}></input>
        <br></br>
        <input placeholder="Enter The Content" ref={postcontentInput}></input>
        <br></br>
        <input  placeholder="Enter Display Picture" ref={displaypictureInput}></input>
        <br></br>
        <input placeholder="Enter The Post Date" ref={postdateInput}></input>
        <br></br>
        <input  placeholder="Enter The USername" ref={usernameInput}></input>
        <br></br>
        <button onClick={modifyContents}>Update Content</button>
        </>
    )
}
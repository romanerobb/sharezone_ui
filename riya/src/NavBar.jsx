import { useNavigate } from "react-router-dom";



export default function NavBar(){  



    const navigate = useNavigate();

    return(

        <nav>
           
            <button onClick={() => navigate("")}>Home</button>
            <button onClick={() => navigate("create")}>Create</button>
            <button onClick={() => navigate("admin")}>Admin</button>
            <button onClick={() => navigate("admin-login")}>Admin LogIn</button>


            </nav>
    )
}
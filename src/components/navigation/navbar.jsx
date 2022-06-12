import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavBar() {

    const navigate = useNavigate();

    return (
        <nav>
            <Link to="/">
                <Button variant="contained" color="success" size="large">Home</Button>
            </Link>
            <span> </span>
            <Link to="/login">
                <Button variant="contained" color="primary" size="large">Login</Button>
            </Link>
            <span> </span>
            <Link to="/register">
                <Button variant="contained" color="warning" size="large">Join Us</Button>
            </Link>
            <span> </span>
            <Link to="/menu">
                <Button variant="contained" color="secondary" size="large">TheZone</Button>
            </Link>
            <span> </span>
            <Link to="/admin">
                <Button variant="contained" color="success" size="large">Admin</Button>
            </Link>
        </nav>
    );
}
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";
import { BoxProps } from "@mui/material";

export default function NavBar() {

    const navigate = useNavigate();

    return (
        <nav>
            <Button variant="contained" color="success" size="large" href="/">Home</Button>
            <Button variant="contained" color="primary" size="large" href="/login">Login</Button>
            <Button variant="contained" color="warning" size="large" href="/register">Join Us</Button>
            <Button variant="contained" color="secondary" size="large" href="/thezone">The Zone</Button>
        </nav>
    );
}
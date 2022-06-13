import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";

export default function Footer() {

    const navigate = useNavigate();
    
    return (
        
        <nav>
            <br></br>
            <Link to="/termsandconditions">
                <button>Terms and Conditions</button>
            </Link>
            <span> </span>
            <Link to="/privacypolicy">
                <button>Privacy Policy</button>
            </Link>
            <span> </span>
                <Button variant="outlined" color="secondary" href="/adminlogin">Admin Login</Button>
            <span> </span>
            <Link to="/about">
                <button>About Us</button>
            </Link>
            <span> </span>
            <Link to="/contact">
                <button>Contact Us</button>
            </Link>
            <br></br>
            <br></br>
        </nav>
    );
}
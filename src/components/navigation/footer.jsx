import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();
    
    return (
        
        <nav>
            <br></br>
            <Link to="/">
                <button class="p-3 mb-2 bg-primary text-white">Terms and Conditions</button>
            </Link>
            <span> </span>
            <Link to="/login">
                <button class="p-3 mb-2 bg-secondary text-white">Privacy Policy</button>
            </Link>
            <span> </span>
            <Link to="/register">
                <button class="p-3 mb-2 bg-warning text-dark">Partner Up!</button>
            </Link>
            <span> </span>
            <Link to="/menu">
                <button class="p-3 mb-2 bg-dark text-white">About Us</button>
            </Link>
            <span> </span>
            <Link to="/contact">
                <button class="p-3 mb-2 bg-success text-white">Contact Us</button>
            </Link>
            <br></br>
            <br></br>
        </nav>
    );
}
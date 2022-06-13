import { useContext, useRef } from "react";
import axios from "axios";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Box, Button, Modal, Typography } from "@mui/material";

export default function UserLogin() {
  const usernameInput = useRef();
  const userpasswordInput = useRef();
  const navigate = useNavigate;
  const [user, setUser] = useContext(userContext);
  const isAdmin = false;
  const url = "";

  async function login() {
    const people = {
      peopleUsername: usernameInput.current.value,
      userpassword: userpasswordInput.current.value
    };

    if (people.userpassword === "" || people.username === "") {
      alert("You need to enter password or You need to enter username");
    } else if (people.userpassword === "hello") {
      alert("You need to change password");
    }
    try {
      const response = await axios.post("url/auth", user);
      console.log(response.data);
      setUser({ ...user, username: people.username });
      console.log("This is after we set the user");
      // window.location.replace(url);
      navigate("/");
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data);
    }
  }

  return (
    <>
      <h4>Welcome back, Sharezone - please Log in !</h4>
      <input placeholder="Enter Your Username" ref={usernameInput}></input>
      <input
        type="password"
        placeholder="Enter Password"
        ref={userpasswordInput}
      ></input>
      <button onClick={login}>Login</button>
    </>
  );
}

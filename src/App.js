import logo from './logo.svg';
import './App.css';
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/navigation/navbar';
import Footer from './components/navigation/footer';
import FixedBottomNavigation from './components/users/usermessages';
import UserRegistration from './components/users/userregistration';
import HomePage from './components/navigation/homepage';
import UserLogin from './components/users/userlogin';
import UserAccount from './components/users/useraccount';
import UserMessages from './components/users/usermessages';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({ email: "Guest" });
  return (
          <>
    <center>
      <br></br>
      <img src="https://i.ibb.co/NrgBdkG/sharezone.png" alt="Sharezone App" width="400" height="175"></img>
      <BrowserRouter>
                <userContext.Provider value={[user, setUser]}>
                    <NavBar />
                    <br></br>
                    <Routes>
                        <Route exact path="" element={<HomePage />} />
                        <Route path="user" element={<UserAccount />} />
                        <Route path="login" element={<UserLogin />} />
                        <Route path="register" element={<UserRegistration />} />
                        <Route path="messages" element={<UserMessages />} />
                    </Routes>
                    <Footer />
                </userContext.Provider>
            </BrowserRouter>
    </center>

          </>

  );
}

export default App;
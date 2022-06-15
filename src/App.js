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
import AdminLogin from './components/admin/adminlogin';
import Admin from './components/admin/admin';
import TheZone from './components/content/thezone';
import Typography from '@mui/material/Typography';
import DeleteUserAccount from './components/users/deleteuseraccount';
import About from './components/about';
import TermsAndConditions from './components/termsandconditions';
import PrivacyPolicy from './components/privacypolicy';
import ContactUs from './components/contactus';

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
                    <Typography variant="h4" color="text.error">sharezone aims to be the number one platform where subject matter experts (SMEs) <br></br>share their knowledge with their interested community.</Typography>
                    <br></br>
                    <Routes>
                        <Route exact path="" element={<HomePage />} />
                        <Route path="user" element={<UserAccount />} />
                        <Route path="usermessages" element={<UserMessages />} />
                        <Route path="deleteuseraccount" element={<DeleteUserAccount />} />
                        <Route path="login" element={<UserLogin />} />
                        <Route path="register" element={<UserRegistration />} />
                        <Route path="usermessages" element={<UserMessages />} />
                        <Route path="adminlogin" element={<AdminLogin />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="thezone" element={<TheZone />} />
                        <Route path="about" element={<About />} />
                        <Route path="termsandconditions" element={<TermsAndConditions />} />
                        <Route path="privacypolicy" element={<PrivacyPolicy />} />
                        <Route path="contact" element={<ContactUs />} />
                    </Routes>
                    <Footer />
                </userContext.Provider>
            </BrowserRouter>
    </center>

          </>

  );
}

export default App;
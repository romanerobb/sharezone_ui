import Footer from "./Footer";
import UserLogin from "./components/UserLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import HomePage from "./Homepage";
import Modal from "./components/Modal";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({ email: "Guest" });
  return (
    <div>
      <BrowserRouter>
        <userContext.Provider value={[user, setUser]}>
          <Routes>
            <Route exact path="" element={<HomePage />} />
            <Route path="login" element={<UserLogin />} />
            <Route path="modal" element={<Modal />} />
          </Routes>
        </userContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

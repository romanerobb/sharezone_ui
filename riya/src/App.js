import { BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "./Admin/Admin";
import AdminLogIn from "./Admin/AdminLogin";
import BanUserAccount from "./Admin/BanUserAccount";
import CreateContent from "./Admin/CreateContent";
import DeleteComment from "./Admin/DeleteComment";
import DeleteContent from "./Admin/DeleteContent";
import ModifyContent from "./Admin/ModifyContent";
import UpdateAccount from "./Admin/UpdateAccount";
import ViewAllSubscribers from "./Admin/ViewAllSubscribers";
import NavBar from "./NavBar";
import Welcome from "./Welcome";





function App() {
  return (
    <>
   <BrowserRouter>
   <NavBar/>
  <Routes>
    <Route exact path=""element={<Welcome/>}/>
    <Route path="create-content"element={<CreateContent/>}/>
    <Route path="modify-content"element={<ModifyContent/>}/>
    <Route path="delete-content"element={<DeleteContent/>}/>
    <Route path="update-account"element={<UpdateAccount/>}/>
    <Route path="ban-account"element={<BanUserAccount/>}/>
    <Route path="view-subscriber"element={<ViewAllSubscribers/>}/>
    <Route path="delete-comment"element={<DeleteComment/>}/>
    <Route path="admin"element={<Admin/>}/>
    <Route path="admin-login"element={<AdminLogIn/>}/>
    <Route path="delete-comment"element={<DeleteComment/>}/>

    

     </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;

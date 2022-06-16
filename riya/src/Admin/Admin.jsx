import BanUserAccount from "./BanUserAccount";
import CreateContent from "./CreateContent";
import DeleteComment from "./DeleteComment";
import DeleteContent from "./DeleteContent";
import ModifyContent from "./ModifyContent";
import UpdateAccount from "./UpdateAccount";
import ViewAllSubscribers from "./ViewAllSubscribers";



export default function Admin(){
    return(
        <>
        <h1>Welcome to Admin Dashboard</h1>
            
            <CreateContent/>
                  <ModifyContent/>  
                 <br></br>
                 <DeleteContent/>
                  <UpdateAccount/> 
                 <BanUserAccount/>
                <ViewAllSubscribers/>
                <DeleteComment/>  


                 
                
        </>
    )
}
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Logout from "../users/logout";
import CreateContent from "./createcontent";
import ModifyContent from "./modifycontent";
import BanUserAccount from "./banuseraccount";
import DeleteContent from "./deletecontent";
import DeleteComment from "./deletecomment";
import UpdateAccount from "./updateaccount";
import ViewAllSubscribers from "./viewallsubscribers";


export default function Admin() {

    return (
        <>
           <Typography component="h1" variant="h9">Welcome back, expert!</Typography>
        <br></br>
        <Grid container spacing={1}   justifyContent="center"
            alignItems="center">
        <Grid item xs={4}>
        <CreateContent />
        <br></br>
        <ModifyContent />
        <br></br>
        </Grid>
        <Grid item xs={4}>
        <ViewAllSubscribers />
        <UpdateAccount />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Logout />
        </Grid>
        <Grid item xs={4}>
        <DeleteComment />
        <br></br>
        <DeleteContent />
        <br></br>
        <BanUserAccount />
        <br></br>
        <br></br>
        </Grid>
      </Grid>

        </>
    );
}
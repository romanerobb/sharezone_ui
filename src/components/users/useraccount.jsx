import { buttonUnstyledClasses } from "@mui/base"
import { Typography, Avatar, Card, Button, Stack, LocationOn, IconButton, Chip, Switch, Divider, Edit, grey } from "@mui/material"
import { Box } from "@mui/system"
import DeleteUserAccount from "./deleteuseraccount"
import UpdateUserAccount from "./updateuser"
import UserMessages from "./usermessages"


export default function UserAccount () {

    
    return (
        <>
            <Typography component="h1" variant="h3">
              Welcome To Your User Account
            </Typography>

    <div class="container">
        <div class="row">
        <div class="col"><UpdateUserAccount /></div>
        <div class="col"><DeleteUserAccount /></div>
        </div>
    </div>

        </>
    )
}
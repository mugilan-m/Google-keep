import React from "react"
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Person } from '@mui/icons-material';
const Profile=(props)=>{
  return (
    <div>
       {/* <p style={{fontSize:"15px", marginLeft:"310px",marginTop:"-35px"}}>{props.name}</p> */}
       <ListItemAvatar style={{ marginLeft:"260px",marginTop:"-55px"}}>
        
        <Avatar alt="Profile Picture" src={props.photo} />
      </ListItemAvatar>
    </div>
  )
}
export default Profile;
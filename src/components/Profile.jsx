import React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
const Profile =(props)=>{
    return (
        <div style={{marginTop:"-45px"}}>
    <ListItemAvatar style={{ marginLeft:"260px"}}>
        
        <Avatar alt="Profile Picture" src={props.photo} />
  
      </ListItemAvatar>
      <h2>{props.name}</h2>
        </div>
    )
}
export default Profile;
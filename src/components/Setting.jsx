
import SettingsIcon from '@mui/icons-material/Settings';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Shortcuts from './Shortcuts';
import  './style.css';
export default function Setting() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SettingsIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
         <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Enable Dark Theme</MenuItem>
         <MenuItem onClick={handleClose}>Send Feedback</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
        <MenuItem onClick={handleClose}> App downloads</MenuItem>
        <MenuItem ><Shortcuts  text="Keyboard shortcuts"/> </MenuItem>
        
       
      </Menu>
    </div>
  );
}

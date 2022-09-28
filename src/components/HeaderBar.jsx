import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Login from './Login';

import Profile from './Profile';
import Setting from './Setting';
import Autosave from './Autosave';
const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`


const HeaderBar = ({ open, handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{width: 30}} />
        <Heading>Keep</Heading>
        <Heading></Heading>
        <Heading style={{marginLeft:'600px'}}> <Login />  </Heading>
        <Heading >  </Heading>
        <Heading > <Setting />
        
        </Heading>
        {/* <Heading style={{marginLeft:'600px'}}>   <Login />  </Heading > */}
          <Profile />
          
      </Toolbar>
    </Header>
  )
}

export default HeaderBar;
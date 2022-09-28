import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function Content() {


  return (
    <Root>
    <h2>Navigation</h2>
      <Divider></Divider>
      <h3 style={{color:"grey"}}>Navigate to next/previous note   <span style={{marginLeft:"100px",color:"black"}}> j / k</span>  </h3>              
      <Divider ></Divider>
      <h3 style={{color:"grey"}}>Move note to next/previous position	  <span style={{marginLeft:"10px",color:"black"}}> Shift + j / k </span>  </h3> 
      <Divider ></Divider>
      <h3 style={{color:"grey"}}>Navigate to next/previous list item   <span style={{marginLeft:"70px",color:"black"}}> n / p</span>  </h3> 
      <Divider ></Divider>
      <h3 style={{color:"grey"}}>Move list item to next/previous position	  <span style={{marginLeft:"0px",color:"black"}}>Shift+n/p</span>  </h3> 
      <Divider ></Divider>
      <h2>Application</h2>
      <Divider ></Divider>
      <h3 style={{color:"grey"}}>Compose a new note   <span style={{marginLeft:"100px",color:"black"}}>c</span>  </h3>              
      <Divider ></Divider>
      <h3 style={{color:"grey"}}>Compose a new list   <span style={{marginLeft:"100px",color:"black"}}>l</span>  </h3> 
      <Divider ></Divider>             
      <h3 style={{color:"grey"}}>Search notes  <span style={{marginLeft:"100px",color:"black"}}> /</span>  </h3>  
      <Divider ></Divider>            
      <h3 style={{color:"grey"}}>Select all notes   <span style={{marginLeft:"100px",color:"black"}}>Ctrl + a</span>  </h3>              
      <Divider ></Divider>            
      <h3 style={{color:"grey"}}>Open keyboard shortcut help   <span style={{marginLeft:"100px",color:"black"}}>?</span>  </h3>              
      <Divider ></Divider>            
      <h3 style={{color:"grey"}}>Send feedback  <span style={{marginLeft:"100px",color:"black"}}>@</span>  </h3>              
      <h2>Actions</h2>
      <Divider ></Divider>            
      <h3 style={{color:"grey"}}>Archive note  <span style={{marginLeft:"100px",color:"black"}}>e</span>  </h3>              
      <Divider ></Divider>            
      <h3 style={{color:"grey"}}>Trash note <span style={{marginLeft:"100px",color:"black"}}>#</span>  </h3>              
      
      <Divider ></Divider>            
      <h3 style={{color:"grey"}}>Pin or unpin notes  <span style={{marginLeft:"100px",color:"black"}}>f</span>  </h3>              
      
      <Divider ></Divider>            
      <h3 style={{color:"grey"}}>Select note  <span style={{marginLeft:"100px",color:"black"}}>x</span>  </h3>              
      <Divider ></Divider>            
      <h3 style={{color:"grey"}}>Toggle between list and grid view<span style={{marginLeft:"100px",color:"black"}}>Ctrl + g</span>  </h3>              
      
    
    
      <Divider>
       
      </Divider>
   
    </Root>
  );
}

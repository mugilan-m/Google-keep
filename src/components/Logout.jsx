import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
 const Logout=()=>{
    const logout=(response)=>{
        console.log("user logout successfully...");
    }
    return(
        <div>
            <GoogleLogout
     clientId="970545682560-m76skfo8i9dlo43o6lnf5nb368p4qh2l.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
        </div>
    )
 }
 export default Logout;
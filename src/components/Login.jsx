    //const client_id=970545682560-m76skfo8i9dlo43o6lnf5nb368p4qh2l.apps.googleusercontent.com;
    import React, { useEffect, useState } from 'react'
    import GoogleLogin from 'react-google-login';
    import { gapi } from 'gapi-script';
    import HeaderBar from './HeaderBar';
    import Profile from './Profile';

    const Login=()=>{
        const clientId="970545682560-m76skfo8i9dlo43o6lnf5nb368p4qh2l.apps.googleusercontent.com";
        const [username,setusername]=useState();
        const [userphoto,setuserphoto]=useState();
        useEffect(()=>{
            gapi.load("client:auth2",()=>{
    gapi.auth2.init({clientId:clientId})
        })
    },[])
        const responseGoogle=(response)=>{
            console.log(response);
        setusername(response.profileObj.name)
        setuserphoto(response.profileObj.imageUrl)

        }

        return(
            <div>
                    <GoogleLogin 
        clientId="970545682560-m76skfo8i9dlo43o6lnf5nb368p4qh2l.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    /> 
        <Profile  name={username} photo={userphoto}/>

       </div>
        )
    }
    export default Login;
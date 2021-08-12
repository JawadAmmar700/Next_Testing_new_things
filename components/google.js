import React from 'react'
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login'

const google = () => {
  const [user, setUser] = React.useState('')

  console.log(user)
  return (
    <div>
      <h1>Google Auth</h1>
      <GoogleLogin
        clientId="900620801271-79142sk5ui327a7d4c5ufuk0rlsdumkj.apps.googleusercontent.com"
        buttonText="Login with google"
        onSuccess={response => setUser(response)}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
      <GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={response => setUser(response)}
      ></GoogleLogout>
    </div>
  )
}

export default google

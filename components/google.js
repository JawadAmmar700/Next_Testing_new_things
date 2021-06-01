import React from 'react'
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import axios from 'axios'


const google = () => {
    const [user, setUser] = React.useState('')

    const reponseGoogleSuccess = async (response) => {
        await axios.post('http://localhost:5000/google', {
            name: response.profileObj.name,
            email: response.profileObj.email,
            googleId: response.profileObj.googleId,
        })
            .then(res => {
                console.log(res);
                setUser(res)
            })
    }
    const reponseGoogleFailer = () => {

    }
    const logout = async (response) => {
        await axios.post('http://localhost:5000/delete', {
            _id: user.googleId,
        })
            .then(res => {
                setUser(res.data);
                console.log(res);
            })




    }


    React.useEffect(() => {


        const check = async () => {
            if (!user) {

                await axios.get('http://localhost:5000/getUser').
                    then(res => {
                        setUser(res.data.users[0])
                        console.log(res.data.users[0]);
                    })
            }
        }
        check()

        console.log('ff');

    }, [])



    return (
        <div>
            <h1>Google Auth</h1>
            <GoogleLogin
                clientId="900620801271-79142sk5ui327a7d4c5ufuk0rlsdumkj.apps.googleusercontent.com"
                buttonText="Login with google"
                onSuccess={reponseGoogleSuccess}
                onFailure={reponseGoogleFailer}
                cookiePolicy={'single_host_origin'}
            />
            <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
            ></GoogleLogout>


        </div>
    )
}

export default google

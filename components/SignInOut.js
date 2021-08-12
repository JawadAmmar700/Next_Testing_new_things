import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { motion } from 'framer-motion'
import axios from 'axios'
import Cookies from 'universal-cookie'

const SignInOut = () => {
  const [user, setUser] = useState('')
  const cookies = new Cookies()

  //---------Animation Func----------------
  const [registor, setRegistor] = React.useState(false)
  const [sign, setSign] = React.useState(true)

  const reveal = () => {
    setSign(!sign)
    setRegistor(!registor)
  }
  const variants = {
    RegImgOpen: { x: 0, y: 0, opacity: 1, display: 'block' },
    RegImgClosed: { x: 0, y: -100, opacity: 0, display: 'none' },
    SignUpOpen: { x: 0, y: 0, opacity: 1, display: 'block' },
    SignUpClosed: { x: 0, y: 100, opacity: 0, display: 'none' },
    SignImgOpen: { x: 0, y: 0, opacity: 1, display: 'block' },
    SignImgClosed: { x: 0, y: 100, opacity: 0, display: 'none' },
    SignInOpen: { x: 0, y: 0, opacity: 1, display: 'block' },
    SignInClosed: { x: 0, y: -100, opacity: 0, display: 'none' },
  }
  // ------------------------end Animation Func-------------------------

  //-------------------On Click Events-------------------------
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [usernameErr, setUsernameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [passErr, setPassErr] = useState('')
  const SignIn = () => {
    cookies.remove('user')

    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.match(mailformat) && username && email && pass) {
      axios
        .post('/api/UserAuth', {
          username: username,
          email: email,
          pass: pass,
          SignUpClicked: false,
        })
        .then(res => {
          setUser(res.data[0])
          cookies.set('user', JSON.stringify(res.data[0]))
        })
    } else {
      setUsernameErr(!username ? 'err' : null)
      setEmailErr(!email ? 'err' : null)
      setPassErr(!pass ? 'err' : null)
    }
    setUsername('')
    setEmail('')
    setPass('')
  }
  const Signup = () => {
    cookies.remove('user')
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.match(mailformat)) {
      const colorText = Math.floor(Math.random() * 16777215).toString(16)
      let strColor = ''
      for (let i = 0; i < colorText.length; i++) {
        strColor += String.fromCharCode(parseInt(colorText.substr(i, 2), 16))
      }

      axios.post('/api/UserAuth', {
        username: username,
        email: email,
        pass: pass,
        color: strColor,
        SignUpClicked: true,
      })
    } else {
      alert('invalid email address')
    }

    setUsername('')
    setEmail('')
    setPass('')
  }

  const logout = () => {
    cookies.remove('user')
    setUser('')
  }

  const UsernameChange = e => {
    setUsername(e.target.value)
    console.log(username)
    setUsernameErr(!username ? 'err' : null)
  }
  const EmailChange = e => {
    setEmail(e.target.value)
    setEmailErr(!email ? 'err' : null)
  }
  const PassChange = e => {
    setPass(e.target.value)
    setPassErr(!pass ? 'err' : null)
  }

  //-------------------End of On Click Events-------------------------

  //-----------------keep user loged in when refresh-----------------
  useEffect(() => {
    setUser(cookies.get('user'))
    console.log(cookies.get('user'))
  }, [])

  return (
    <>
      <div>
        <div
          id="1"
          className="w-6 h-6 rounded-full flex align-center justify-center"
        >
          {user ? user?.Username?.substr(0, 1).toUpperCase() : 'guest'}
        </div>
        hello {user ? user.Email : 'guest'}
        <p onClick={logout}>logout</p>
      </div>
      <div
        className="w-8/12 h-5/6 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4
    rounded flex shadow-2xl"
      >
        {/*--------------Sign In--------------------*/}
        <motion.img
          animate={sign ? 'SignImgOpen' : 'SignImgClosed'}
          variants={variants}
          src="https://img.pngio.com/nature-background-png-3-png-image-187825-png-images-pngio-background-images-nature-png-1920_1080.png"
          className={`w-2/4 h-full absolute left-0  object-cover`}
        />
        <motion.div
          animate={sign ? 'SignInOpen' : 'SignInClosed'}
          variants={variants}
          className={`w-2/4 h-full absolute right-0 `}
        >
          <form className="w-full h-full bg-yellow-300 flex flex-col items-center justify-center ">
            <h1 className="absolute top-10 text-4xl text-blue-800 font-bold italic ">
              Sign In
            </h1>
            <div className="w-3/4 h-auto -mt-32 absolute left-2/4 transform -translate-x-2/4 ">
              <div className="flex w-full  relative top-10  ">
                <TextField
                  id="standard-basic"
                  label="Username"
                  className="w-full"
                  value={username}
                  onChange={UsernameChange}
                />
                {usernameErr && (
                  <p className="w-6 h-6 relative right-5 top-5  rounded-full border border-red-600 grid place-items-center">
                    !
                  </p>
                )}
              </div>
              <div className="flex w-full  relative top-10  ">
                <TextField
                  id="standard-basic"
                  label="Email"
                  className="w-full"
                  value={email}
                  onChange={EmailChange}
                />
                {emailErr && (
                  <p className="w-6 h-6 relative right-5 top-5  rounded-full border border-red-600 grid place-items-center">
                    !
                  </p>
                )}
              </div>
              <div className="flex w-full  relative top-10  ">
                <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  className="w-full "
                  value={pass}
                  onChange={PassChange}
                />
                {passErr && (
                  <p className="w-6 h-6 relative right-5 top-5  rounded-full border border-red-600 grid place-items-center">
                    !
                  </p>
                )}
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="absolute top-32"
              onClick={SignIn}
            >
              Sign In
            </Button>
            <h2 className="absolute bottom-10">
              Create an account:{' '}
              <a
                onClick={reveal}
                className="text-blue-500 cursor-pointer  hover:border-b-2 border-indigo-600 hover:text-green-500"
              >
                registor
              </a>
            </h2>
          </form>
        </motion.div>

        {/* --------------------------Sign Up------------------------- */}
        <motion.img
          animate={registor ? 'RegImgOpen' : 'RegImgClosed'}
          variants={variants}
          src="https://www.teahub.io/photos/full/134-1347618_background-natural-hd-png.jpg"
          className={`w-2/4 h-full absolute right-0  object-cover `}
        />
        <motion.div
          animate={registor ? 'SignUpOpen' : 'SignUpClosed'}
          variants={variants}
          className={`w-2/4 h-full absolute left-0  `}
        >
          <form
            className="w-full h-full bg-yellow-300 flex flex-col items-center justify-center 
                "
          >
            <h1 className="absolute top-10 text-4xl text-blue-800 font-bold italic ">
              Sign Up
            </h1>
            <div className="w-3/4 h-auto -mt-32 absolute left-2/4 transform -translate-x-2/4 ">
              <TextField
                id="standard-basic"
                label="UserName"
                className="w-full"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Email"
                className="w-full  relative top-5"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Password"
                type="password"
                className="w-full p-8 relative top-10"
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              className="absolute top-32"
              onClick={Signup}
            >
              Sign Up
            </Button>
            <h2 className="absolute bottom-10">
              You have an account:{' '}
              <a
                onClick={reveal}
                className="w-12 h-4 text-blue-500  hover:border-b-2 border-indigo-600   cursor-pointer hover:text-green-500"
              >
                Sign in
              </a>
            </h2>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default SignInOut

import React, { useState, useEffect } from 'react'
import { Magic } from 'magic-sdk'
import store from '../redux/store/store'

const MagicLink = () => {
  const [email, setEmail] = useState()
  const [user, setUser] = useState('')
  const { getState, subscribe, dispatch } = store
  subscribe(() => {
    setUser(getState().User)
  })
  const handleSubmit = async event => {
    event.preventDefault()
    const magic = new Magic('pk_live_75BACB8FD4D56C15')
    if (email) {
      await magic.auth.loginWithMagicLink({ email })

      let userMetadata = await magic.user.getMetadata()
      Dispatch('Add_User', userMetadata)
    }
  }

  const CheckUserLogIn = async () => {
    const magic = new Magic('pk_live_75BACB8FD4D56C15')

    try {
      if (magic.user.isLoggedIn()) {
        let userMetadata = await magic.user.getMetadata()
        console.log(userMetadata)
        Dispatch('Add_User', userMetadata)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(async () => {
    await CheckUserLogIn()
  }, [])

  const handleLogout = async () => {
    const magic = new Magic('pk_live_75BACB8FD4D56C15')
    await magic.user.logout()
    Dispatch('Remove_User', null)
  }

  const Dispatch = (type, data) => {
    return dispatch({
      type: type,
      payload: {
        user: data,
      },
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">SignUp \ Login</button>
      </form>
      <button onClick={handleLogout}>logout</button>
      <div>{user?.email}</div>
    </>
  )
}

export default MagicLink

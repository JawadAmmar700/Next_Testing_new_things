import Google from '../components/google'
import Menu from '../components/Menu'
import SignInOut from '../components/SignInOut'
import Pagination from '../components/pagination'
import React, { useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Pusher from 'pusher-js'
import ReactPlayer from 'react-player'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import HomePage from './Home'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home({ categories }) {
  const router = useRouter()
  const user = useSelector(State => State.User)
  const input = useRef()
  const dispatch = useDispatch()

  // const [session, loading] = useSession()

  // var pusher = new Pusher('0f451dc85b035e1558d1', {
  //   cluster: 'ap1'
  // });

  // useEffect(() => {
  //   var channel = pusher.subscribe('lives');
  //   channel.bind('inserted', function (data) {
  //     alert(JSON.stringify(data.data.name))

  //   });

  // }, [])

  // useEffect(() => {
  //   axios.get('http://localhost:5000').then(response => {
  //     console.log(response.data);
  //     dispatch({
  //       type: 'Add_User',
  //       user: response.data
  //     })
  //   })
  // }, [])

  // const change = () => {

  //   axios.post('http://localhost:5000', {
  //     name: input.current.value,
  //     age: 20
  //   }).then(response => {
  //     console.log(response.data);
  //     dispatch({
  //       type: 'Add_User',
  //       user: response.data
  //     })
  //   })

  // }

  return (
    <div>
      {/* <Pagination data={data} /> */}
      {/* <input type="text" ref={input} />
      <button onClick={change}>Change</button>
      <div>
        {user?.map((item, id) => (
          <p key={id}>{item.name}</p>
        ))}
      </div> */}

      {/* {!data && <>
        Not signed in <br />
  <button onClick={() => signIn()}>Sign in</button>
      </> 
       
      } */}
      <Link href="/Home?id=jaad">gooooooooo</Link>
    </div>
  )
}

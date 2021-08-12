import React, { useEffect, useState, useCallback } from 'react'
import Google from '../components/google'
import SignInOut from '../components/SignInOut'
import MagicLink from '../components/MagicLink'
import Translate from '../components/translate'
import TextEditor from '../components/TextEditor'
import { signIn, signOut, getSession } from 'next-auth/client'
import axios from 'axios'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import Nadine from '../components/nadine'

const prisma = new PrismaClient()

export const getServerSideProps = async context => {
  const session = await getSession(context)
  const data = await prisma.user.findMany()
  let doc = []
  if (session) {
    let id = 0
    data.map(item => {
      if (item.name === session?.user.email) {
        id = item.id
      }
    })
    doc = await prisma.docs.findMany({
      where: {
        UserId: id,
      },
    })
  }
  return {
    props: { session, doc: session ? doc : '' },
  }
}

export default function Home({ session, doc }) {
  const [docs, setDocs] = useState(doc)

  if (!session) {
    return (
      <div>
        <button onClick={signIn}>login</button>
      </div>
    )
  }

  const [input, setInput] = useState('')
  async function addtodb() {
    await axios.post('/api/prisma', {
      name: session.user.email,
      doc: input,
    })
    await axios
      .post('/api/Docs', {
        name: session.user.email,
      })
      .then(data => {
        setDocs(data?.data)
      })
  }

  return (
    <div>
      <input type="text" onChange={e => setInput(e.target.value)} />
      <button onClick={addtodb}>add</button>
      <br />
      <button onClick={signOut}>sign out</button>
      {doc &&
        docs?.map(item => (
          <Link href={`Editor?id=${item.id}`} key={item.id}>
            <p> {item.docName}</p>
          </Link>
        ))}
      {/* <Nadine /> */}
    </div>
  )
}

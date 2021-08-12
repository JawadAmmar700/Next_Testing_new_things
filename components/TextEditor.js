import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState } from 'draft-js'
import { convertFromRaw, convertToRaw } from 'draft-js'
import axios from 'axios'
import { useSession } from 'next-auth/client'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(module => module.Editor),
  {
    ssr: false,
  }
)

function TextEditor({ id }) {
  const [session] = useSession()
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  useEffect(() => {
    const fetch = async () => {
      await axios.get('/api/Content').then(data => {
        if (data.data.length > 0) {
          for (let i = 0; i < data.data.length; i++) {
            if (data.data[i].id == id) {
              setEditorState(
                EditorState.createWithContent(
                  convertFromRaw(JSON.parse(data.data[i].Saved))
                )
              )
            }
          }
        }
        console.log(data.data)
      })
    }
    fetch()
  }, [])

  const onEditorStateChange = async editorState => {
    setEditorState(editorState)
    console.log(convertToRaw(editorState.getCurrentContent()))

    await axios.post('/api/Content', {
      userName: session.user.email,
      id: id,
      nameJson: convertToRaw(editorState.getCurrentContent()),
    })
    //   .then(data => {
    //     for (let i = 0; i < data.data.length; i++) {
    //       if (i == data.data.length - 1) {
    //         console.log(JSON.parse(data.data[i].name))
    //         setEditorState(
    //           EditorState.createWithContent(
    //             convertFromRaw(JSON.parse(data.data[i].name))
    //           )
    //         )
    //       }
    //     }
    //   })
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <h1>Name of the doc {id}</h1>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
      />
    </div>
  )
}

export default TextEditor

import TextEditor from '../components/TextEditor'

export const getServerSideProps = async context => {
  return {
    props: {
      id: context.query.id,
    },
  }
}

const Editor = ({ id }) => {
  return (
    <div>
      <TextEditor id={id} />
    </div>
  )
}

export default Editor

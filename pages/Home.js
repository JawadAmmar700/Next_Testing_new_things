import React from 'react'

export async function getStaticProps(context) {
  const id = context.query?.id || 'ammar'

  return { props: { id } }
}

const Home = ({ id }) => {
  console.log(id)
  return <div>home</div>
}

export default Home

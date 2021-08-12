import React, { useRef, useState } from 'react'

const sections = ['one', 'two', 'three']

const Test = () => {
  const [reveal, setReveal] = useState('')

  const one = useRef(null)
  const two = useRef(null)
  const three = useRef(null)

  function view(text) {
    switch (text) {
      case 'one':
        one.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
        break
      case 'two':
        two.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
        break
      case 'three':
        three.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
        break
      default:
    }
  }

  return (
    <div>
      {sections.map(section => (
        <section
          key={section}
          ref={section === 'one' ? one : section == 'two' ? two : three}
          className="w-full h-screen  relative"
        >
          <img
            className="h-screen w-full -z-1 absolute top-0 "
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752"
            alt=""
          />
          <h1 className=" text-white text-4xl absolute top-0 left-2/4 transform -translate-x-2/4">
            {section}
          </h1>

          <div className="absolute flex flex-col text-white z-10 space-y-4 cursor-pointer ml-8  top-2/4 transform -translate-y-2/4">
            <p
              onMouseOver={() => setReveal('one')}
              onMouseLeave={() => setReveal('')}
              onClick={() => view('one')}
              className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-yellow-500`}
            >
              <label
                htmlFor=""
                className={`ml-16   ${reveal == 'one' ? 'block ' : 'hidden'}`}
              >
                one
              </label>
            </p>
            <p
              onMouseOver={() => setReveal('two')}
              onMouseLeave={() => setReveal('')}
              onClick={() => view('two')}
              className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-yellow-500`}
            >
              <label
                htmlFor=""
                className={`ml-16 ${reveal == 'two' ? 'block  ' : 'hidden'}`}
              >
                two
              </label>
            </p>
            <p
              onMouseOver={() => setReveal('three')}
              onMouseLeave={() => setReveal('')}
              onClick={() => view('three')}
              className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-yellow-500`}
            >
              <label
                htmlFor=""
                className={`ml-16 ${reveal == 'three' ? 'block' : 'hidden'}`}
              >
                three
              </label>
            </p>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Test

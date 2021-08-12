import React, { useState, useEffect } from 'react'

function nadine() {
  const [state, setState] = useState(0)
  function activateLasers() {
    for (let i = 10; i < 100; i += 10) {
      setTimeout(() => {
        setState(i)
      }, i * 80)
    }
  }

  useEffect(() => {
    alert(state)
  }, [])

  return (
    <div>
      <p>{state}</p>
      <button onClick={activateLasers}>Activate Lasers</button>
    </div>
  )
}

export default nadine

import { useState } from 'react'
import './App.css'

function App() {
  const EXTENTIION_TITLE = 'Qutes'

  return (
    <>
      <h1>{EXTENTIION_TITLE}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

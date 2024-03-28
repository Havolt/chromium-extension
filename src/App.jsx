import { useState, useRef } from 'react'
import './App.css'

function App() {
  const EXTENTIION_TITLE = 'Qutes'
  
  // State
  const [notes, setNotes] = useState([])

  // Refs
  const inputRef = useRef(null)

  const handleNoteSubmit = (e) => { 
    e.preventDefault()
    console.log(inputRef.current.value)
    if (inputRef.current.value) {
      setNotes([...notes, inputRef.current.value])
      inputRef.current.value = ''
    }
  }

  return (
    <>
      <h1>{EXTENTIION_TITLE}</h1>
      <form onSubmit={handleNoteSubmit} className="note-form">
        <input ref={inputRef} type="text" />
        <button>+</button>
      </form>
    </>
  )
}

export default App

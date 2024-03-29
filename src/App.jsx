import { useState } from 'react'
import './App.scss'
import Notes from './components/Notes'


const SECTIONS = {
  MENU: 'menu',
  NOTES: 'notes',
  STRETCHES: 'stretches',
}


function App() {

  const [currentSection, setCurrentSection] = useState(SECTIONS.NOTES)
  
  return (
    <>
    {
      currentSection === SECTIONS.NOTES && <Notes />
    }
      
    </>
  )
}

export default App

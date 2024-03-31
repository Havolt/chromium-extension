import {useState} from 'react'
import { stretches } from '../json/stretches'
import './Stretches.scss'

function Stretches() {
  const [stretchesData, setStretchesData] = useState(stretches.map(stretch => ({ ...stretch, completed: false })))

  const handleCheckboxChange = (index) => {
    const newStretchesData = [...stretchesData]
    newStretchesData[index].completed = !newStretchesData[index].completed
    setStretchesData(newStretchesData)
  }
  return (
    <ul className="stretches">
      { stretchesData.map((stretch, index) => (
        <li key={index}>
          <label>{ stretch.name}</label>
          <input type="checkbox" checked={stretch.completed} onChange={() => {handleCheckboxChange(index)} } />
          <button>{'>'}</button>
        </li>
      ))}
    </ul>
  )
}

export default Stretches
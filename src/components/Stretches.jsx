import {useState} from 'react'
import { stretches } from '../json/stretches'

function Stretches() {
  const [stretchesData, setStretchesData] = useState(stretches.map(stretch => ({ ...stretch, completed: false })))
  return (
    <div>
      <ul>
        { stretchesData.map((stretch, index) => (
          <li key={index}>{ stretch.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Stretches
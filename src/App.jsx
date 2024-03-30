import { useState } from 'react'
import './App.scss'
import Menu from './components/Menu'
import Notes from './components/Notes'


const SECTIONS = {
	NOTES: 'notes',
	STRETCHES: 'stretches',
}



function App() {
	const [currentSection, setCurrentSection] = useState(null)

	const updateSection = (section) => {
		setCurrentSection(section)
	}

	return (
		<div id="app">
			{ !currentSection && <Menu sections={SECTIONS} updateSection={updateSection} /> }
			{ currentSection === SECTIONS.NOTES && <Notes /> }
			{ currentSection === SECTIONS.STRETCHES && <h1>Stretches</h1> }
		</div>
	)
}

export default App

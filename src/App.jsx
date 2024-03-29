import { useState } from 'react'
import './App.scss'
import Menu from './components/Menu'
import Notes from './components/Notes'


const SECTIONS = {
	MENU: 'menu',
	NOTES: 'notes',
	STRETCHES: 'stretches',
}



function App() {
	const [currentSection, setCurrentSection] = useState(SECTIONS.MENU)

	const updateSection = (section) => {
		setCurrentSection(section)
	}

	return (
		<>
			{currentSection === SECTIONS.MENU && <Menu sections={SECTIONS} updateSection={updateSection} />}
			{currentSection === SECTIONS.NOTES && <Notes />}
			{currentSection === SECTIONS.STRETCHES && <h1>Stretches</h1>}
		</>
	)
}

export default App

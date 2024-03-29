import { useState, useRef } from 'react'

function Notes() {
	const EXTENTIION_TITLE = 'Qutes'

	// State
	const [notes, setNotes] = useState([])

	// Refs
	const noteTitleRef = useRef(null)
	const noteDescRef = useRef(null)

	const handleNoteSubmit = (e) => { 
		e.preventDefault()

		const note = {
		title: noteTitleRef.current.value,
		description: noteDescRef.current.value
		}

		if (noteTitleRef.current.value) {
		setNotes([...notes, note])
		noteTitleRef.current.value = ''
		noteDescRef.current.value = ''
		}
	}

	return (
		<div>
			<h1>{EXTENTIION_TITLE}</h1>
			<form onSubmit={handleNoteSubmit} className="note-form">
					<div>
					<label htmlFor="note-title">Title</label>
					<input ref={noteTitleRef} name='note-title' type="text" />
					</div>
					<div>
					<label htmlFor="note-description">Description</label>
					<textarea ref={noteDescRef} name='note-description'></textarea>
					</div>
					<button>+</button>
			</form>
		</div>
	)
}

export default Notes
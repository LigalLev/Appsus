const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

export function NoteEdit() {
    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.noteId) loadNote()
    }, [])

    function loadNote() {
        noteService.get(params.noteId)
            .then(setNoteToEdit)
            .catch(err => {
                console.log('Had issued in note edit:', err);
                navigate('/note')
                // showErrorMsg('Book not found!')
            })
    }

    // function handleChange({ target }) {
    //     const field = target.name
    //     const value = target.type === 'number' ? (+target.value || '') : target.value
    //     if (field === 'amount') {
    //         setNoteToEdit(prevNote => ({ ...prevNote, info: { ...prevNote.info, txt: value } }))
    //     } else {
    //         setNoteToEdit(prevNote => ({ ...prevNote, [field]: value }))
    //     }
    // }

    function onSaveNote(ev) {
        ev.preventDefault()
        noteService.save(noteToEdit)
            .then(() => {
                navigate('/book')
                // showSuccessMsg('Booked saved')
            })
    }

    const { info: { txt }} = noteToEdit

    return (
        <section className="note-edit">
            <h2>{noteToEdit.id ? 'Edit' : 'Add'} Note</h2>

            <form onSubmit={onSaveNote} className="note-edit-form">
                <label htmlFor="txt">Text:</label>
                <input required onChange={handleChange} value={txt} type="text" name="txt" id="txt" />
            </form>

            <button>{noteToEdit.id ? 'Save' : 'Add'}</button>
        </section>
    )
}
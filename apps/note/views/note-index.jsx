const { useEffect, useState } = React
const { Link } = ReactRouterDOM


import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/note-list.jsx"

export function NoteIndex() {

    const [notes, setnotes] = useState([])

    useEffect(() => {
        loadNotes()
    }, []) //[filterBy]

    function loadNotes() {
        noteService.query().then(setnotes) //inside query (filterBy)
    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setnotes(updatedNotes)
            // showSuccessMsg(`Note (${noteId}) was removed!`)
        })
    }

    return (
        <section className="note-index">
            {/* <button><Link to="/note/edit">Creat note</Link></button> */}
            <NoteList notes={notes} onRemoveNote={onRemoveNote} />
            <h1>basa!</h1>
            <h1>sababa!</h1>

        </section>
    )
}

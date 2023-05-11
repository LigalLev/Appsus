const { Link } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx";


export function NoteList({ notes, onRemoveNote }) {

    return (
        <ul className="note-list">
            {notes.map(note =>
                <li key={note.id} className="note-item">
                    <NotePreview note={note} />
                    <section > 
                        <button onClick={() => onRemoveNote(note.id)} >Delete</button>
                        {/* <button><Link to={`/note/${note.id}`} >Details</Link ></button> */}
                        {/* <button><Link to={`/note/edit/${note.id}`} >Edit</Link></button> */}
                        {/* onClick={() => onEditNote(note.id)} */}
                    </section>
                </li>
            )}
        </ul>
    )
}

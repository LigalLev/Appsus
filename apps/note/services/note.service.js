// note serviceimport { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    // getDefaultFilter,
    // getNextCarId
}

function query(filterBy = {}) {
    // console.log('filterBy service:', filterBy)
    return storageService.query(NOTE_KEY)
        
        // .then(notes => {
        //     if (filterBy.type) {
        //         const regExp = new RegExp(filterBy.type, 'i')
        //         notes = notes.filter(note => regExp.test(car.type))
        //     }

        //     if (filterBy.search) {
        //         notes = notes.filter(note => note.search >= filterBy.search)
        //     }
        //     return notes
        // })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, car)
    } else {
        return storageService.post(NOTE_KEY, car)
    }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = []
        notes.push(_createNote('NoteTxt', isPinned = false))
        notes.push(_createNote('NoteTxt', isPinned = false))
        notes.push(_createNote('NoteTxt', isPinned = false))
        utilService.saveToStorage(NOTE_KEY, notes)
    }
}

function _createNote(type = 'NoteTxt', isPinned = false) {
    const note = getEmptyNote(type, info.txt = '')
    note.id = utilService.makeId()
    note.createdAt = utilService.getTimeStamp()
    note.info.txt = utilService.makeLorem(size = 4)
    return note
}

function getEmptyNote(type = '', isPinned = false) {
    return { 
        id: '', 
        createdAt, 
        type, 
        isPinned, 
        style: {
            backgroundColor: '#00d'
        }, 
        info: {
            txt: 'Fullstack Me Baby!'
        }
    }
}
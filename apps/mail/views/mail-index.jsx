
const { Link, useSearchParams } = ReactRouterDOM

import { mailService } from '../services/mail.service.js'
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"
import { MailList } from "../cmps/mail-list.jsx"
import { MailCompose } from '../cmps/mail-compose.jsx'
const { useState, useEffect } = React

export function MailIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [mails, setMails] = useState([])
    const [isCompose, setIsCompose] = useState(false)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter(searchParams))
    useEffect(() => {
        loadMails()
        setSearchParams(filterBy)
        showSuccessMsg('Welcome to Email index!')
    }, [])

    function loadMails() {
        mailService.query().then(setMails)
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId).then(() => {
            const updatedMails = mails.filter(mail => mail.id !== mailId)
            setMails(updatedMails)
            showSuccessMsg(`Mail (${mailId}) removed!`)
        })
    }
    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }
    function mailsUnread() {
       return mails.filter((mail) => {
            return mail.isRead === false
        }).length
    }

    return <div className="mail-index-container">
        <div className="search-mail-bar"><label htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" /></div>
        <div className="side-bar-container">
            <button onClick={()=>{setIsCompose(true)}}><h2>compose</h2></button>
            <ul className="side-bar-list clean-list">
                <li><button>Inbox {mailsUnread()}</button></li>
                <li><button>Sent</button></li>
                <li><button>Drafts</button></li>
                <li><button>Stared</button></li>
                <li><button>Trash</button></li>
            </ul>
        </div>
        <MailList mails={mails} onRemoveMail={onRemoveMail} className="mail-list-container"/>
       {isCompose && <MailCompose onClose={()=>{setIsCompose(false)}}/>}

    </div>
}


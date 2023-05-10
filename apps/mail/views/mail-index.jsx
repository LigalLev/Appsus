
const { Link, useSearchParams } = ReactRouterDOM

import { mailService } from '../services/mail.service.js'
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"
import { MailList } from "../cmps/mail-list.jsx"
const { useState, useEffect } = React

export function MailIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [mails, setMails] = useState([])
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

        function onSetFilter(filterBy) {
            setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
        }

    }
    return <div><MailList mails={mails} onRemoveMail={onRemoveMail}/></div>
}


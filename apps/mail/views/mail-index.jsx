
import { mailService } from '../services/mail.service.js'
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"
import { MailList } from "./mail-list"
const {useState, useEffect} = React

export function MailIndex() {
    const [mails, setMails] = useState([])
    useEffect(() => {
        loadMails()
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
    return <div><MailList/></div>
}


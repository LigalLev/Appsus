const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
import { mailService } from "../services/mail.service.js"

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const { mailId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (mail) markMailAsRead()
        else loadMail()
    }, [mail, mailId])

    function loadMail() {

        mailService.get(mailId)
            .then(setMail)
            .catch(err => {
                console.log('Had issued in mail details:', err);
                navigate('/mail')
            })
    }

    function markMailAsRead() {
        let updatedMail = { ...mail, isRead: true }
        mailService.save(updatedMail)
            .then(setMail)
            .catch(err => {
                console.log('error has accured:', err);
                navigate('/mail')
            })
    }

    function onBack() {
        navigate('/mail')
    }


    if (!mail) return <div>Loading...</div>
    return (
        <section className="mail-details">
            <h1> {mail.subject}</h1>
            <h6>{mail.from}</h6>
            <h6>{mail.to}</h6>
            <p>{mail.body}</p>

            <button onClick={onBack}>Back</button>
            {/* <Link to={`/mail/${nextMailId}`}>Next mail</Link> */}
        </section >
    )
}
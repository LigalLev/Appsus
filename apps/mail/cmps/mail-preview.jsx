const { Link } = ReactRouterDOM
// import { MailDetails } from "../views/mail-details.jsx"
import { LongTxt } from "../../../cmps/long-txt.jsx"

export function MailPreview({ mail, onRemoveMail }) {

    function getMailFontWeight() {
        if (mail.isRead) return { fontWeight: 'regular' }
        else if (!mail.isRead) return { fontWeight: 'bold' }
        else return ''
    }

    return (
        <tr className="mail-preview">
            <td style={ getMailFontWeight() }> <Link to={`/mail/${mail.id}`}> 
            <div>{mail.from}</div>
            <div>Subject: {mail.subject}</div>
                <div>{mail.body}</div></Link> </td>

            <td><button onClick={() => onRemoveMail(mail.id)} >Delete</button></td>
            <td>{mail.sentAt}</td>
        </tr>
    )
}
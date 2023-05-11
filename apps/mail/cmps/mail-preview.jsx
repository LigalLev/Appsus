const { Link } = ReactRouterDOM
// import { MailDetails } from "../views/mail-details.jsx"
import { LongTxt } from "../../../cmps/long-txt.jsx"

export function MailPreview({ mail, onRemoveMail }) {

    function getMailFontWeight() {
        if (mail.isRead) return { fontWeight: 'regular' }
        else if (!mail.isRead) return { fontWeight: 'bold' }
        else return ''
    }
    const fontStyle =  getMailFontWeight()

    const sentAt = mail.sentAt.split(',')[0]
    return (
        <Link to={`/mail/${mail.id}`}> 
        <div className="mail-preview">
            
            <div clasName="mail-from-name">{mail.from.name}</div>
            <div clasName="mail-subjct" style={ fontStyle }>{mail.subject}</div>
            <div clasName="mail-body"><LongTxt txt={mail.body} length={80}></LongTxt></div> 
            {/* <td><button onClick={() => onRemoveMail(mail.id)} >Delete</button></td> */}
            <div clasName="mail-date"style={ fontStyle }>{sentAt}</div>
        </div>
        </Link>
    )
}
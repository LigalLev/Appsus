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
            {/* <img src="../../assets/img/importanc(2).png" alt="" /> */}
            <div className="mail-from-name"style={ fontStyle }>{mail.from.name}</div>
            <div className="mail-subject"style={ fontStyle }>{mail.subject}</div>
            <div className="mail-body"style={ fontStyle }><LongTxt txt={mail.body} length={80}></LongTxt></div> 
            {/* <td><button onClick={() => onRemoveMail(mail.id)} >Delete</button></td> */}
            <div className="mail-date"style={ fontStyle }>{sentAt}</div>
        </div>
        </Link>
    )
}
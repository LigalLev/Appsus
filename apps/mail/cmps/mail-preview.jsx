const { useState } = React
const { Link } = ReactRouterDOM

// import { MailDetails } from "../views/mail-details.jsx"
import { LongTxt } from "../../../cmps/long-txt.jsx"

export function MailPreview({ mail, onRemoveMail }) {
    const [isHover, setIsHover] = useState(false)

  
    function getMailFontWeight() {
        if (mail.isRead) return { fontWeight: 'regular' }
        else if (!mail.isRead) return { fontWeight: 'bold' }
        else return ''
    }
    const fontStyle = getMailFontWeight()

    const sentAt = mail.sentAt.split(',')[0]
    return (
        <Link to={`/mail/${mail.id}`}>
            <div className="mail-preview" onMouseOver={()=>{setIsHover(true)}}>
                <div className="mail-from-name" style={fontStyle}>{mail.from.name}</div>
                <div className="mail-subject" style={fontStyle}>{mail.subject}</div>
                <div className="mail-body" style={fontStyle}> {mail.body}</div>
                {/* <td><button onClick={() => onRemoveMail(mail.id)} >Delete</button></td> */}
                {/* <button> <img src="../../assets/img/trash.png" alt="" className="trash-img" /></button> */}
                <div className="mail-date" style={fontStyle}>{sentAt}</div>
            </div>
        </Link>
    )
}
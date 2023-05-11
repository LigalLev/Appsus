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
            <div className="mail-preview" onMouseOver={() => { setIsHover(true) }} onMouseOut={() => { setIsHover(false) }}>
                <div className="mail-from-name" style={fontStyle}>{mail.from.name}</div>
                <div className="mail-subject" style={fontStyle}>{mail.subject}</div>
                <div className="mail-body" style={fontStyle}> {mail.body}</div>
                {/* <td><button onClick={() => onRemoveMail(mail.id)} >Delete</button></td> */}
               <div class="hover-btns"> {isHover && <div>  <button className="btn btn-trash"> <img src="../../assets/img/trash.png" alt="" className="trash-img" /></button>
                 <button className="btn btn-unread"> <img src="../../assets/img/unreademail.png" alt="" className="readMail-img" /></button>
                </div>}</div>
                <div className="mail-date" style={fontStyle}>{sentAt}</div>
            </div>
        </Link>
    )
}
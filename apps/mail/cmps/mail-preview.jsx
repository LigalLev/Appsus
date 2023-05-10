import { LongTxt } from "./long-txt.jsx"

export function MailPreview({ mail, onRemoveMail }) {
   
    return (
        <tr className="mail-preview">
            {/* <h2>Mail read: {mail.read}</h2>
            <h4>Mail Unread: {mail.unread}</h4> */}
            {/* <img src={`../assets/img/${mail}.png`} alt="" /> */}
            <td>Subject: {mail.subject}</td>
            <td>{mail.body}</td>
            <td><button onClick={() => onRemoveMail(mail.id)} >Remove Mail</button></td>
        </tr>
    )
}
import { MailPreview } from "./mail-preview.jsx"
const { Link } = ReactRouterDOM

export function MailList({ mails, onRemoveMail }) {
    return <div className="mail-list">
        {/* <tbody> */}
            {mails.map(mail =>
                
                <MailPreview mail={mail} onRemoveMail={onRemoveMail} key={mail.id} />
                
            )}
        {/* </tbody> */}
    </div>

}


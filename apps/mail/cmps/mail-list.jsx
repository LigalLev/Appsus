import { MailPreview } from "./mail-preview.jsx"

export function MailList({ mails, onRemoveMail }) {
    return <table className="mail-list">
        <tbody>
            {mails.map(mail =>
                <MailPreview mail={mail} onRemoveMail={onRemoveMail} key={mail.id} />
            )}
        </tbody>
    </table>

}


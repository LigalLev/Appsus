import { MailPreview } from "./mail-preview.jsx"

export function MailList({ mails, onRemoveMail }) {


    // const mails = [{
    //     id: 'e101',
    //     subject: 'Miss you!',
    //     body: 'Would love to catch up sometimes',
    //     isRead: false,
    //     sentAt: 1551133930594,
    //     removedAt: null,
    //     from: 'momo@momo.com',
    //     to: 'user@appsus.com'
    // },
    // {
    //     id: 'e102',
    //     subject: 'Miss you!',
    //     body: 'Would love to catch up sometimes',
    //     isRead: false,
    //     sentAt: 1551133930594,
    //     removedAt: null,
    //     from: 'momo@momo.com',

    //     to: 'user@appsus.com'
    // }]
    return <table className="mail-list">
        <tbody>
            {mails.map(mail =>
                <MailPreview mail={mail} onRemoveMail={onRemoveMail} key={mail.id} />
            )}
        </tbody>
    </table>

}


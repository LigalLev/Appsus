import { MailPreview } from "./mail-preview.jsx"

export function MailList() {
    const mails = [{
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }]
    return <ul className="mail-list">
        {mails.map(mail =>
            <li key={mail.id}>
                haaa
                <MailPreview mail={mail} />
                {/* <section>
                        <button onClick={() => onRemoveMail(mail.id)} >Remove Mail</button>
                        <button><Link to={`/mail/${mail.id}`} >Details</Link ></button>
                        <button><Link to={`/mail/edit/${mail.id}`} >Edit</Link></button>

                    </section> */}
            </li>
        )}
    </ul>

}


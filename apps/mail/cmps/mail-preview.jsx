export function MailPreview({ mail }) {
   
    return (
        <article className="mail-preview">
            {/* <h2>Mail read: {mail.read}</h2>
            <h4>Mail Unread: {mail.unread}</h4> */}
            {/* <img src={`../assets/img/${mail}.png`} alt="" /> */}
            {<h2>Subject: {mail.subject}</h2>}
        </article>
    )
}
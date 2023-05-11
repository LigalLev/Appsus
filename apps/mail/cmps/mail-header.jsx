export function MailHeader(props) {
    const { mails } = props

    return <section >
        <div className="search-mail-bar"><label htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" /></div>
    </section>
} 
export function MailCompose(props){
    return <section className="mail-compose-container">
        <h3>New message</h3>
        <button onClick={props.onClose}>x</button>
        <form className="flex column">
            <div>From: momo@mail.com</div>
            <label htmlFor="to"></label>To:<input type="email" name="to" id="to" />
            <label htmlFor="subject">Subject:</label><input type="text" name="subject" id="subject" />
            <label htmlFor="body"></label><input type="text" name="body" id="to" />
            <button>Send {'>'}</button>
        </form>
    </section>
}
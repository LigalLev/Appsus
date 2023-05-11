export function MailBar(props) {
   const {mails} = props

    function mailsUnread() {
        return mails.filter((mail) => {
             return mail.isRead === false
         }).length
     }

    return <section >
        <div className="search-mail-bar"><label htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" /></div>
        <div className="side-bar-container">
            <button className="btn btn-compose" onClick={() => { props.setIsCompose(true) }}><h2>compose</h2></button>
            <ul className="side-bar-list clean-list">
                <li><button>Inbox {mailsUnread()}</button></li>
                <li><button>Sent</button></li>
                <li><button>Drafts</button></li>
                <li><button>Stared</button></li>
                <li><button>Trash</button></li>
            </ul>
        </div>
    </section>
}
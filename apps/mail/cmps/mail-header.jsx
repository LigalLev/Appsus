export function MailHeader(props) {
    const { mails } = props

    return <header className="mail-header">
      <img src="../../../assets/img/mail-logo.jpeg" alt="" />
      {/* <Link to="/">
          <h3><img src="" alt="" /></h3>
      </Link> */}
        <div className="search-mail-bar"><label htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" /></div>
    </header>
} 
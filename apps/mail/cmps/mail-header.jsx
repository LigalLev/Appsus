export function MailHeader(props) {
    const { mails } = props

    return <header className="mail-header">
      
      <Link to="/">
          <h3><img src="asste" alt="" /></h3>
      </Link>
        <div className="search-mail-bar"><label htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" /></div>
    </header>
} 
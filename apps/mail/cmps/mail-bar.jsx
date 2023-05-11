export function MailBar(){

return<section> <div className="search-mail-bar"><label htmlFor="search">Search:</label>
<input type="text" name="search" id="search" /></div>
<div className='side-bar'>
<button><h2>compose</h2></button>
<ul>
    <li><button>Inbox {mailsUnread()}</button></li>
    <li><button>Sent</button></li>
    <li><button>Drafts</button></li>
    <li><button>Stared</button></li>
    <li><button>Trash</button></li>
</ul>
</div>
</section>
}

import { utilService } from '../../../services/util.service.js'
import { storageService as asyncStorageService } from '../../../services/async-storage.service.js'
import { storageService} from '../../../services/storage.service.js'



const MAIL_KEY = 'mailDB'

export const mailService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
    getEmptyMail,

}

_createMails()

function getDefaultFilter() {
    return { subject: '', body: '' }
}
function query(filterBy = {}) {
    return asyncStorageService.query(MAIL_KEY)
    // .then(mails => {
    //     if (filterBy.title) {
    //         const regExp = new RegExp(filterBy.title, 'i')
    //         books = books.filter(book => regExp.test(book.title))
    //     }

    //     if (filterBy.maxPrice) {
    //         console.log('hello')
    //         books = books.filter(book => book.listPrice.amount <= filterBy.maxPrice)
    //     }
    //     return mails
    // })
}

function get(mailId) {
    return asyncStorageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return asyncStorageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return asyncStorageService.put(MAIL_KEY, mail)
    } else {
        return asyncStorageService.post(MAIL_KEY, mail)
    }
}
function getEmptyMail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: Date.now(),
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }
}

function _createMails() {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
         mails = [{
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
        return mails
    }
}
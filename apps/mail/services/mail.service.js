
import { utilService } from '../../../services/util.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
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
    .then(mails => {
        if (filterBy.subject) {
            const regExp = new RegExp(filterBy.subject, 'i')
            mails = mails.filter(mail => regExp.test(mail.subject))
        }

        if (filterBy.isRead) {
            console.log('hello')
            mails = mails.filter(mail => mail.isRead === filterBy.isRead)
        }
        return mails
    })
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
            id: 'e001',
            subject: 'Meeting Reminder',
            body: 'Just a friendly reminder about our meeting tomorrow.',
            isRead: true,
            sentAt: 1642059012941,
            removedAt: null,
            from: 'john@example.com',
            to: 'jane@example.com'
          },
          {
            id: 'e002',
            subject: 'Lunch next week?',
            body: 'Hey there, how about we grab lunch next week? Are you available?',
            isRead: false,
            sentAt: 1642060148639,
            removedAt: null,
            from: 'jane@example.com',
            to: 'john@example.com'
          },
          {
            id: 'e003',
            subject: 'Movie night!',
            body: 'Want to join us for a movie night this weekend?',
            isRead: false,
            sentAt: 1642061208932,
            removedAt: null,
            from: 'alice@example.com',
            to: 'bob@example.com'
          },
          {
            id: 'e004',
            subject: 'Happy birthday!',
            body: 'Wishing you a very happy birthday!',
            isRead: true,
            sentAt: 1642062312390,
            removedAt: null,
            from: 'jane@example.com',
            to: 'john@example.com'
          },
          {
            id: 'e005',
            subject: 'Conference call tomorrow',
            body: 'Just a reminder about the conference call tomorrow. Please make sure to join on time.',
            isRead: false,
            sentAt: 1642063423948,
            removedAt: null,
            from: 'john@example.com',
            to: 'jane@example.com'
          },
          {
            id: 'e006',
            subject: 'Happy Holidays!',
            body: 'Wishing you and your family a very happy holiday season!',
            isRead: true,
            sentAt: 1642064531283,
            removedAt: null,
            from: 'bob@example.com',
            to: 'alice@example.com'
          },
          {
            id: 'e007',
            subject: 'Important Update',
            body: 'Please take a look at the attached document for an important update.',
            isRead: false,
            sentAt: 1642065643901,
            removedAt: null,
            from: 'jane@example.com',
            to: 'john@example.com'
          },
          {
            id: 'e008',
            subject: 'Dinner plans',
            body: 'How about we grab dinner tonight? Any suggestions for a good restaurant?',
            isRead: true,
            sentAt: 1642066751938,
            removedAt: null,
            from: 'alice@example.com',
            to: 'bob@example.com'
          },
          {
            id: 'e009',
            subject: 'Reminder: Project Deadline',
            body: 'Just a reminder that the deadline for the project is coming up soon. Please make sure to submit your work on time.',
            isRead: false,
            sentAt: 1642067864387,
            removedAt: null,
            from: 'john@example.com',
            to: 'jane@example.com'
          },
          
        ]
        storageService.saveToStorage(MAIL_KEY, mails)
        return mails
    }
}

// function _createMail() {
//     const mail = getEmptyMail()
//     mail.id = utilService.makeId()
//     return mail
// }
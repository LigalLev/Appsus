
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
         mails = [
          {
            id: 'e201',
            subject: 'Happy Birthday!',
            body: 'Dear John,\n\nWishing you a very happy birthday filled with love, joy, and lots of cake! I hope this year brings you all the success and happiness you deserve. It has been a pleasure working with you and I am grateful for all the support and encouragement you have provided me over the years.\n\nBest wishes,\nMegan',
            isRead: true,
            sentAt: 'May 11, 2023 09:12:45 AM',
            removedAt: null,
            from: { email: 'megan@example.com', name: 'Megan' },
            to: { email: 'john@example.com', name: 'John' }
          },
          {
            id: 'e202',
            subject: 'Invitation to Party',
            body: 'Dear all,\n\nYou are cordially invited to our annual party to celebrate the end of the year. Join us for an evening of food, drinks, and fun at the Grand Ballroom. Dress code is formal and don\'t forget to bring your dancing shoes!\n\nLooking forward to seeing you all there!\n\nBest regards,\nKate',
            isRead: false,
            sentAt: 'December 15, 2022 06:30:00 PM',
            removedAt: null,
            from: { email: 'kate@example.com', name: 'Kate' },
            to: { email: 'all@example.com', name: 'All' }
          },
          {
            id: 'e203',
            subject: 'Urgent: Meeting Rescheduled',
            body: 'Dear team,\n\nI regret to inform you that due to unforeseen circumstances, we will have to reschedule tomorrow\'s meeting to Friday at the same time. I understand that this may cause inconvenience to some of you, but this is unavoidable.\n\nPlease let me know if this change creates any scheduling conflicts for you and we will try our best to accommodate everyone.\n\nThank you for your understanding.\n\nBest,\nMike',
            isRead: false,
            sentAt: 'August 5, 2022 10:15:00 AM',
            removedAt: null,
            from: { email: 'mike@example.com', name: 'Mike' },
            to: { email: 'team@example.com', name: 'Team' }
          },
          {
            id: 'e204',
            subject: 'Thank You!',
            body: 'Dear Jane,\n\nI just wanted to take a moment to thank you for your kindness and support during my recent illness. Your words of encouragement and your thoughtful gestures meant a lot to me and helped me through a difficult time.\n\nI feel lucky to have you as a friend and colleague, and I look forward to working with you again soon.\n\nWith gratitude,\nTom',
            isRead: true,
            sentAt: 'April 20, 2022 02:45:00 PM',
            removedAt: null,
            from: { email: 'tom@example.com', name: 'Tom' },
            to: { email: 'jane@example.com', name: 'Jane' }
          },
          {
            id: 'e206',
            subject: 'Follow-up Meeting',
            body: 'Dear John,\n\nI wanted to touch base with you following our meeting last week. It was great to hear your thoughts on the project, and I wanted to follow up on some of the action items that we discussed.\n\nI have attached a document with some additional information that I think will be helpful, and I would appreciate it if you could take a look and let me know your thoughts.\n\nBest regards,\nMegan',
            isRead: false,
            sentAt: 'September 30, 2021 11:45:00 AM',
            removedAt: null,
            from: { email: 'megan@example.com', name: 'Megan' },
            to: { email: 'john@example.com', name: 'John' }
          },
          {
            id: 'e207',
            subject: 'Holiday Schedule',
            body: 'Dear all,\n\nAs we approach the holiday season, I wanted to remind you of our office hours and schedule during this period. We will be closed on December 24th and 25th, as well as January 1st. In addition, we will have limited hours on December 31st and January 2nd.\n\nIf you have any questions or concerns, please don\'t hesitate to reach out.\n\nHappy Holidays!\nKate',
            isRead: false,
            sentAt: 'December 5, 2021 10:00:00 AM',
            removedAt: null,
            from: { email: 'kate@example.com', name: 'Kate' },
            to: { email: 'all@example.com', name: 'All' }
          },
          {
            id: 'e208',
            subject: 'Project Update',
            body: 'Dear team,\n\nI wanted to give you a quick update on our progress with the new project. We have completed the initial design phase and are now moving on to development. We have set up a new Trello board to track our progress, and I would appreciate it if you could take a few minutes to familiarize yourselves with it.\n\nAs always, please let me know if you have any questions or concerns.\n\nBest,\nMike',
            isRead: true,
            sentAt: 'June 15, 2021 02:30:00 PM',
            removedAt: null,
            from: { email: 'mike@example.com', name: 'Mike' },
            to: { email: 'team@example.com', name: 'Team' }
          },
          {
            id: 'e209',
            subject: 'Job Opening',
            body: 'Dear friends,\n\nI wanted to let you know that we have a job opening for a new marketing manager on our team. If you know of anyone who might be a good fit, please feel free to share the job posting with them. We are looking for someone with experience in digital marketing, social media management, and content creation.\n\nThank you for your help!\nTom',
            isRead: false,
            sentAt: 'February 10, 2022 09:00:00 AM',
            removedAt: null,
            from: { email: 'tom@example.com', name: 'Tom' },
            to: { email: 'friends@example.com', name: 'Friends' }
          }
          
        ]
        storageService.saveToStorage(MAIL_KEY, mails)
        console.log('mails:', mails)
        return mails
    }
}

// function _createMail() {
//     const mail = getEmptyMail()
//     mail.id = utilService.makeId()
//     return mail
// }
const nodeMailer = require('nodemailer')
const { sendBillEmail } = require('./emails')

module.exports = {
    sendEmail: async (to, username, emainContent, emailTitle) => {
        const emailBody = sendBillEmail(username, emainContent, emailTitle)
        const transporter = nodeMailer.createTransport({
            host: 'mail.tradersfx247.com',
            port: 465,
            secure: true,
            auth: {
                user: 'team@tradersfx247.com',
                pass: '2PC}ZgjZb3zH'
            }
        })
        transporter.sendMail({
            from: 'team@tradersfx247.com',
            to: to,
            subject: emailTitle,
            html: emailBody
        }).then(res => {
            return true
        })
            .catch(e => false)

    }
}
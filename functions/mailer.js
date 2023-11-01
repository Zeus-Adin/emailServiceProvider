const nodeMailer = require('nodemailer')

module.exports = {
    sendEmail: async (to, username, emainContent, emailTitle) => {
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
            html: emainContent
        }).then(res => {
            return true
        })
            .catch(e => false)

    }
}
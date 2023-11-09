const nodeMailer = require('nodemailer')

module.exports = {
    sendEmail: async (to, emainContent, emailTitle) => {
        const transporter = nodeMailer.createTransport({
            host: 'mail.tradersfx247.com',
            port: 465,
            secure: true,
            auth: {
                user: 'tradersfx247@tradersfx247.com',
                pass: 'f^JEp2Dt=_yA'
            }
        })
        transporter.sendMail({
            from: 'tradersfx247@tradersfx247.com',
            to: to,
            subject: emailTitle,
            html: emainContent
        }).then(res => {
            return true
        })
            .catch(e => false)

    }
}
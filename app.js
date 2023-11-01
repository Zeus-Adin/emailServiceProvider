require('dotenv').config();
const express = require('express')
const { sendEmail } = require('./functions/mailer')
const cors = require('cors')


// init app & middleware
const app = express()
app.use(express.json({ limit: '1mb' }))
app.use(cors({
    origin: [process.env.APP_ORIGIN]
}))

app.post('/api/send/email/:recipient/:username/:emailcontent/:emailtitle', (req, res) => {
    // const { recipient, username, emailcontent, emailtitle } = req.body;
    console.log(req.body, req.params)
    // const send = sendEmail(recipient, username, emailcontent, emailtitle);
    // if (send) {
    //     res.status(200).json({ sent: true, to: recipient })
    // } else {
    //     res.status(500).json({ sent: false, to: recipient })
    // }
})

app.listen(process.env.PORT, () => {
    console.log('DB connected at port ' + process.env.PORT)
})
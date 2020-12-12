const sgMail = require('@sendgrid/mail')
const sendgridAPIkey = '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 '

sgMail.setApiKey(sendgridAPIkey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'karevalo1393@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    }) 
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'karevalo1393@gmail.com',
        subject: 'Back soon!',
        text: `Goodbye, ${name}.`
    }) 

}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
const nodemailer = require('nodemailer')

const sendEmail = async options=>{
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
    });

    const mailOption = {
        from : "Test-Devloper <test@gmail.com>",
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    await transport.sendMail(mailOption);
}
module.exports=sendEmail
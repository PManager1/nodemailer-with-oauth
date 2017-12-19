var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');




let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        clientId: '8902809483023.apps.googleusercontent.com',
        clientSecret: '890283asfda40423243-xoAlb'
    }
});

transporter.sendMail({
    from: 'theemail7899@gmail.com',
    to: 'theemail@gmail.com',
    subject: 'Message',
    text: 'I hope this message gets through!',
    auth: {
        user: 'harryporter7899@gmail.com',
        refreshToken: '1/aasfas2424324232',
        accessToken: 'ya29.GlsnBYXeWiUASFASCHANDSICMxGRxW5OPTQYKBOWmmjYXOz27muVmjVeTgoXx1d5qXLRnMlvAEEbMX0nv_-_5rLAJOVim1nWaa2n5TtQJKaFtUrSN912ZoCkMdW',
        expires: 1484314697598
    }
});
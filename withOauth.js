var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');




let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        clientId: '99925046008-klt93d6s78a56gqjua5jqrbd4eo4nd82.apps.googleusercontent.com',
        clientSecret: '2T_AGt7W5QaHzkYQCK-xoAlb'
    }
});

transporter.sendMail({
    from: 'harryporter7899@gmail.com',
    to: 'harryporter7899@gmail.com',
    subject: 'Message',
    text: 'I hope this message gets through!',
    auth: {
        user: 'harryporter7899@gmail.com',
        refreshToken: '1/Jh66nvJwGwbiGuWFejyGTtBjWtfuNHr8WueZauiTrNQ',
        accessToken: 'ya29.GlsnBYXeWiU9GPqjInjFnwSICMxGRxW5OPTQYKBOWmmjYXOz27muVmjVeTgoXx1d5qXLRnMlvAEEbMX0nv_-_5rLAJOVim1nWaa2n5TtQJKaFtUrSN912ZoCkMdW',
        expires: 1484314697598
    }
});
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

// listen for token updates (if refreshToken is set)
// you probably want to store these to a db


// generator.on('token', function(token){
//     console.log('New token for %s: %s', token.user, token.accessToken);
// });

// login
// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         type: 'OAuth2',
//         user: 'recherryapp@gmail.com',
//         accessToken: 'ya29.GlsnBY_gS10XBV60UaxftD4e1Im3092m1GPcQeB-zw9tDbvHTt27bOAN39Y67_95C0PePhZdNXKjojmphha1e-A7CWc0DTuFqJRAMunSq_n_BKcWxhjMYYquBve2'
//     }
// });


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
    from: 'recherryapp@gmail.com',
    to: 'recherryapp@gmail.com',
    subject: 'Message',
    text: 'I hope this message gets through!',
    auth: {
        user: 'recherryapp@gmail.com',
        refreshToken: '1/3gcbVcZS5fC3g9ZvDi6vGb_m1_bZpKNFv1hutrWvdd8',
        accessToken: 'GlsnBSPaZmNQuN_M4WaEepGNQaJBTmatcMGYfTm8nMcl9ASWhn3BK3owBMlck5_2vBEsSYX8QY4VAqmrRWmtXg5K3CWe0m3_BCEh20Su7fxuUTzBKQTQtn6Uk8ng',
        expires: 1484314697598
    }
});
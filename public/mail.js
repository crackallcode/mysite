console.log("it works")

$(document).ready(function () {
  $('.submit').click(function(event){
    console.log('click button')

    var email = $('.email').val()
    var name = $('.name').val()
    var message = $('.message').val()

  })
})



//
// const nodemailer = require('nodemailer');
// const mailGun = require('nodemailer-mailgun-transport');
//
// const auth = {
//   auth: {
//     api_key: '',
//     domain: '.mailgun.org?'
//   }
// };
//
// const transporter = nodemailer.createTransport(mailGun(auth));
//
// const sendMail = (email, subject, message, cb) => {
//     const mailOptions = {
//       form: 'email',
//       to: 'theweave88@gmail.com',
//       Subject: 'subject',
//       text: 'message'
//     };
//
//     transporter.sendMail(mailOptions, function(err, data) {
//       if (err) {
//         cb(err, null);
//       } else {
//         cb(null, data)
//       }
//     });
// }
//
// module.exports = sendMail

//
// <script>
//   $("form").on("submit", (e) => {
//     e.preventDefault();
//
//     // const name = $("#name").val().trim();
//     const message = $("#message").val().trim();
//     const email = $("#email").val().trim();
//     const phone = $("#subject").val().trim();
//
//     const data = {
//       email,
//       name,
//       message,
//       phone
//     };
//
//     $.post('/email',data,function() {
//       console.log("server recieved data");
//     });

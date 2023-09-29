// const { Vonage } = require('@vonage/server-sdk')

// const vonage = new Vonage({
//   apiKey: "bee04f80",
//   apiSecret: "WkK1BgIaeAktFcP0"
// })

// const from = "18285498832"
// const to = "12025702807"
// const text = 'A text message sent using the Vonage SMS API'

// async function sendSMS() {
//     await vonage.sms.send({to, from, text})
//         .then(console.log('Message sent successfully'))
// }

// sendSMS();

// 'use strict';
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/webhooks/inbound-message', (req, res) => {
//   console.log(req.body);
//   res.status(200).end();
// });

// app.listen(3000);

function responsiveChat(element) {
  $(element).html('<form class="chat"><span></span><div class="messages"></div><input type="text" placeholder="Your message"><input type="submit" value="Send"></form>');

  function showLatestMessage(element) {
    $('.responsive-html5-chat').find('.messages').scrollTop($('.responsive-html5-chat .messages')[0].scrollHeight);
  }
  showLatestMessage(element);

  $(element + ' input[type="text"]').keypress(function (event) {
      if (event.which == 13) {
          event.preventDefault();
          $(element + ' input[type="submit"]').click();
      }
  });


  $(element + ' input[type="submit"]').click(function (event) {
      event.preventDefault();
      let message = $(element + ' input[type="text"]').val();
      if ($(element + ' input[type="text"]').val()) {
          const d = new Date();
          const clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
          const month = d.getMonth() + 1;
          const day = d.getDate();
          const currentDate =
              (("" + day).length < 2 ? "0" : "") +
              month +
              "." +
              (("" + day).length < 2 ? "0" : "") +
              month +
              "." +
              "&nbsp;&nbsp;" +
              clock;
          $(element + ' div.messages').append(
              '<div class="message"><div class="myMessage"><p>' +
              message +
              "</p><date>" +
              currentDate +
              "</date></div></div>"
          );
          setTimeout(function () {
              $(element + ' > span').addClass("spinner");
          }, 100);
          setTimeout(function () {
              $(element + ' > span').removeClass("spinner");
          }, 2000);


         
          
              }
              $(element + ' input[type="text"]').val("");
              showLatestMessage(element);

      


               });
      }



function responsiveChatPush(element, sender, origin, date, message) {
  let originClass;
  if (origin == 'me') {
      originClass = 'myMessage';
  } else {
      originClass = 'fromThem';
  }
  $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
}
responsiveChat('.responsive-html5-chat');
responsiveChatPush('.chat', 'Kevin', 'me', 'September 28th', 'Hey, is this working?');
responsiveChatPush('.chat', 'John Doe', 'you', '', 'Nope! :)');
responsiveChatPush('.chat', 'Kevin', 'me', 'Sewptember 29th', 'Great : |');
if (parent == top) {
$("a.article").show();
}

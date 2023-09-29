// const { Vonage } = require()

// const vonage = new Vonage({
//     apiKey: "bee04f80",
//     apiSecret: "WkK1BgIaeAktFcP0"
// })

// const userInput = document.querySelector('#text').value
// let  sendhButton = document.querySelector('#send')

// searchButton.addEventListener('click', async ()=> {
//     async function sendSMS() {
//         await vonage.sms.send({to, from, text})
//             .then(resp => { console.log('Message sent successfully'); console.log(resp); })
//             .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
//     }
// })
    


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

    // function sendSMS(element) {
    //     var { Vonage } = require('@vonage/server-sdk');
    //     const vonage = new Vonage({
    //         apiKey: "bee04f80",
    //         apiSecret: "WkK1BgIaeAktFcP0"
    // });
    //     const from = "18285498832";
    //     const to = "12025702807";
    //      function sendSMS() {
    //          vonage.sms.send({to, from, message});
    //     };


// const from = "18285498832"
// const to = "12025702807"
// const text = "Whats up Lamar"

// async function sendSMS() {
//     await vonage.sms.send({to, from, text})
//         .then(resp => { console.log('Message sent successfully'); console.log(resp); })
//         .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
// }

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
                day +
                "." +
                (("" + month).length < 2 ? "0" : "") +
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
responsiveChatPush('.chat', 'Kate', 'me', '08.03.2017 14:30:7', 'It looks beautiful!');
responsiveChatPush('.chat', 'John Doe', 'you', '08.03.2016 14:31:22', 'It looks like the iPhone message box.');
responsiveChatPush('.chat', 'Kate', 'me', '08.03.2016 14:33:32', 'Yep, is this design responsive?');
responsiveChatPush('.chat', 'Kate', 'me', '08.03.2016 14:36:4', 'By the way when I hover on my message it shows date.');
responsiveChatPush('.chat', 'John Doe', 'you', '08.03.2016 14:37:12', 'Yes, this is completely responsive.');

if (parent == top) {
  $("a.article").show();
}

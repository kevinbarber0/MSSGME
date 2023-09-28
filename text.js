const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "bee04f80",
  apiSecret: "WkK1BgIaeAktFcP0"
})

const from = "18285498832"
const to = "12025702807"
const text = "Whats up Lamar"

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

////////
function scrollDown(){
  var focusBottom = document.getElementById("adobewordpress");
  focusBottom.scrollTop = focusBottom.scrollHeight;
}
 


$('form.chat input[type="submit"]').click(function(event){
  event.preventDefault(); 
  var message = $('form.chat input[type="text"]').val(); 
  if( $('form.chat input[type="text"]').val()) { 
    var d = new Date(); 
    var clock = d.getHours() + ":" + d.getMinutes();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var currentDate =
        ((''+month).length<2 ? '0' : '') + month + '.' +
        ((''+day).length<2 ? '0' : '') + day +'&nbsp;&nbsp;'+ clock;

    $('form.chat div.messages').append('<div class="message"><div class="myMessage"><p>'+message+'</p><date>'+clock+'</date></div></div>');
    setTimeout(function() {
      $('form.chat > span').addClass('spinner'); 
    }, 100);
    setTimeout(function() {
      $('form.chat > span').removeClass('spinner'); 
    }, 2000);
  }
  $('form.chat input[type="text"]').val(''); 
  scrollDown(); 
});

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

sendSMS();
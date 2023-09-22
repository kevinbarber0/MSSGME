const { RestClient } = require("@signalwire/compatibility-api");

let PROJECT_ID = "460dcfae-a860-4bfc-b8f6-f5d957e290e9";
let API_TOKEN = "PTbf657ae293459918861ae64668ec11ec9d1d859fa7ce45b7"
let SPACE_URL = "textingappdev.signalwire.com"
let FROM_NUMBER = "+12067102247"
let TO_NUMBER = "+12025702807"

const client = RestClient(PROJECT_ID, API_TOKEN, { signalwireSpaceUrl: SPACE_URL });
client.messages
  .create({ from: FROM_NUMBER, to: TO_NUMBER, body: "Hello" })
  .then((message) => console.log(message.sid))
  .done();
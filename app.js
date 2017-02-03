const FacebookMessengerBot = require('calamars').FacebookMessengerBot;

const Forks = require('./src/forks/forks');
const payloads = require('./src/forks/payloads');

const menu = require('./src/menu');
const Helpers = require('./src/helpers');
const messages = require('./src/messages');

let storage = [];



const onMessage = function(updateEvent){
  Helpers.setUserStorage(updateEvent, storage, mybot)
  .then(() => {
    let { step } = storage[updateEvent.update.sender.id]

    if(Forks[step] && Forks[step].resolve)
      Forks[step].resolve(updateEvent, storage)
  })
};



const onPostback = function(updateEvent){
  Helpers.setUserStorage(updateEvent, storage, mybot)
  .then(()=>{
    let payload = updateEvent.update.postback.payload;
    let p = Helpers.isJSON(payload)? Helpers.getJSON(payload).type : payload

    if(payloads[p]) payloads[p](updateEvent, storage)
  })
}

const mybot = new FacebookMessengerBot({
    port:  process.env.PORT || 3000,
    callbackPath: process.env.FB_CALLBACK_PATH,
    verifyToken: process.env.FB_VERIFY_TOKEN,
    pageTokens: [process.env.FB_PAGE_ACCESS_TOKEN],
    listeners: {
        onMessage,
        onPostback
    }
});

mybot.start().then(function(){
    console.log(`server is running on port ${process.env.PORT || 3000}`);
    // Get Started button reply
    mybot.setWelcomeMessage({
        text: messages('greeting')
    }).then(welcomeMsgSetResult =>
        console.log('welcomeMsgSetResult', welcomeMsgSetResult)
    ).catch(e => {
        console.log('\nFailed to setup Get Started Button');
        console.error(e.message);
    });

    mybot.setThreadSettings({
        type: 'call_to_actions',
        state: 'existing_thread',
        cta: menu
    }).catch(e => {
        console.log('\nFailed to setup Persistent Menu');
        console.error(e.message);
    });
})
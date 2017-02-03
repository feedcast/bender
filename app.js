const FacebookMessengerBot = require('calamars').FacebookMessengerBot;

const messages = require('./src/messages');
const menu = require('./src/menu');
const helpers = require('./src/helpers');

let storage = [];

const setUserStorage = updateEvent => {
  return new Promise((resolve, reject) => {
    try{
      if("undefined" === typeof storage[updateEvent.update.sender.id]){
        let userInfo = mybot.getUserInfo(updateEvent.update.sender.id);
        userInfo.then(data => {
          storage[updateEvent.update.sender.id] = {
            id: updateEvent.update.sender.id,
            first_name: data.first_name,
            last_name: data.last_name,
            profile_pic: data.profile_pic,
            locale: data.locale,
            gender: data.gender,
            timezone: data.timezone,
            step: 0,
            locate: null,
            time: Date.now()
          }
          resolve()
        })
      } else {
        resolve()
      }
    } catch(e){
      reject(e)
    }
  })
}

const myMessageListener = function(updateEvent){
  setUserStorage(updateEvent)
  .then(() => {
    let { id: userId, first_name: name, step, locate } = storage[updateEvent.update.sender.id],
        messageText = updateEvent.update.message.text;

    switch(true){
      case step == 'a' && locate === 1:
        messageText = `busca url ${updateEvent.update.message.text}`
      break;
    }

    updateEvent.bot.sendMessage({
        userId,
        text: messageText
    })
  })
};

const onPostback = function(updateEvent){
    setUserStorage(updateEvent)
    .then(()=>{
      let payload = updateEvent.update.postback.payload;
      console.log('onPostback', updateEvent.update.sender.id, payload)
      let { id: userId, first_name: name } = storage[updateEvent.update.sender.id];

      switch(true){
        case helpers.isJSON(payload) &&
        helpers.getJSON(payload).type === 'legacy-welcome':
            updateEvent.bot.sendMessage({
              userId: updateEvent.update.sender.id,
              attachment:{
              type:"template",
              payload:{
                template_type:"button",
                text: messages('stage0'),
                buttons:[
                  {
                    type:"postback",
                    title:"Cadastrar um podcast",
                    payload:'a'
                  },
                  {
                    type:"postback",
                    title:"Ouvir um podcast",
                    payload:"b"
                  }
                ]
              }
            }
          });
        break;
        case payload == 'a':
          updateEvent.bot.sendMessage({
              userId,
              text:`Ok, ${name}! Envie a url que você deseja adicionar`
          });

          storage[updateEvent.update.sender.id].step = 'a';
          storage[updateEvent.update.sender.id].locate = 1;
          console.log('escolheu cadastrar')
        break;
        case payload == 'b':
          storage[updateEvent.update.sender.id].step = 'b';
          storage[updateEvent.update.sender.id].locate = 1;
          console.log('escolheu ouvir')
        break;
      }
    })











}

const mybot = new FacebookMessengerBot({
    port:  process.env.PORT || 3000,
    callbackPath: process.env.FB_CALLBACK_PATH,
    verifyToken: process.env.FB_VERIFY_TOKEN,
    pageTokens: [process.env.FB_PAGE_ACCESS_TOKEN],
    listeners: {
        onMessage: myMessageListener,
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

    // Persistent Menu
    mybot.setThreadSettings({
        type: 'call_to_actions',
        state: 'existing_thread',
        cta: menu
    }).catch(e => {
        console.log('\nFailed to setup Persistent Menu');
        console.error(e.message);
    });
})
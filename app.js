const FacebookMessengerBot = require('calamars').FacebookMessengerBot;

const messages = require('./src/messages');
const menu = require('./src/menu');
const helpers = require('./src/helpers');

let store = [];


const myMessageListener = function(updateEvent){
    console.log('received message:', updateEvent.update.message.text);
    // reply with the same received message
    //let userInfo = mybot.getUserInfo(updateEvent.update.sender.id);
    //userInfo.then(data => {
    //})

    updateEvent.bot.sendMessage({
        userId: updateEvent.update.sender.id,
        text:'mensagem texto'
    })

};

const onPostback = function(updateEvent){
    let postback = updateEvent.update.postback;
    let payload = updateEvent.update.postback.payload;

    console.log('onPostback', postback, payload)

    if(helpers.isJSON(payload) && helpers.getJSON(payload).type === 'legacy-welcome'){

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


  }


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
      //   quick_replies:[
      //   {
      //     content_type:"text",
      //     title:"Red",
      //     payload:"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED",
      //     image_url:"http://petersfantastichats.com/img/red.png"
      //   },
      //   {
      //     content_type:"text",
      //     title:"Green",
      //     payload:"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN",
      //     image_url:"http://petersfantastichats.com/img/green.png"
      //   }
      // ]
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
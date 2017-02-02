const FacebookMessengerBot = require('calamars').FacebookMessengerBot;

const messages = require('./src/messages');
const menu = require('./src/menu');


const myMessageListener = function(updateEvent){
    console.log('received message:', updateEvent.update.message.text);
    // reply with the same received message
    let userInfo = mybot.getUserInfo(updateEvent.update.sender.id);


    userInfo.then(data => {
      updateEvent.bot.sendMessage({
          userId: updateEvent.update.sender.id,
          text: messages(data.locale, 'welcome')
      })
    })

};

const onPostback = function(updateEvent){
    console.log('on post back')
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
        text: 'Bem vindo, deseja ouvir um podcast ?'
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
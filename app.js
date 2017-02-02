const FacebookMessengerBot = require('calamars').FacebookMessengerBot;

const myPageToken = process.env.TOKEN;
const myVerifyToken = process.env.VERIFY;
const myCallbackPath = '/webhook';
const myPort = process.env.PORT || 3000;

const myMessageListener = function(updateEvent){
    console.log('received message:', updateEvent.update.message.text);
    // reply with the same received message
    updateEvent.bot.sendMessage({
        userId: updateEvent.update.sender.id,
        text: updateEvent.update.message.text
    })
};

const mybot = new FacebookMessengerBot({
    port: myPort,
    callbackPath: myCallbackPath,
    verifyToken: myVerifyToken,
    pageTokens: [myPageToken],
    listeners: {
        onMessage: myMessageListener
    }
});

mybot.start().then(function(){
    console.log(`server is running on port ${myPort}`);
})
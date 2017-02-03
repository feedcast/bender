const messages = require('./../messages');
const Forks = require('./forks');
const payloads = {}

payloads['legacy-welcome'] = function(u, s){
  u.bot.sendMessage({
    userId: u.update.sender.id,
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




payloads['a'] = function(u, s){
  let { id: userId, first_name: name} = s[u.update.sender.id]
  u.bot.sendMessage({
    userId,
    text:`Ok, ${name}! Envie a url que você deseja adicionar`
  });
  s[u.update.sender.id].step = 'a';
  s[u.update.sender.id].locate = 1;
}




payloads['b'] = function(u, s){
  s[u.update.sender.id].step = 'b';
  s[u.update.sender.id].locate = 1;
}



payloads['restart'] = function(u, s){
  s[u.update.sender.id].step = 0
  s[u.update.sender.id].locate = null
  Forks.initial.resolve(u,s)
}



module.exports = payloads

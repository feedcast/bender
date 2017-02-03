const messages = require('./../messages');
const mocks = require('./../mocks');
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
  let { id: userId, first_name: name, locate } = s[u.update.sender.id];

  u.bot.sendMessage({
    userId: u.update.sender.id,
    attachment:{
      type:"template",
      payload:{
        template_type:"button",
        text: 'Escolha uma opção para encontrar o podcast:',
        buttons:[
          {
            type:"postback",
            title:"Lista de Canais",
            payload:'channels_list'
          },
          {
            type:"postback",
            title:"Episódios recentes",
            payload:"recent_episodes"
          },
          {
            type:"postback",
            title:"Categorias",
            payload:"categories"
          }
        ]
      }
    }
  });

  s[u.update.sender.id].step = 'b';
  s[u.update.sender.id].locate = 1;
}



payloads['channels_list'] = function(u, s){
  u.bot.sendMessage({
    userId: u.update.sender.id,
    attachment: mocks.channelList()
  });
}


payloads['recent_episodes'] = payloads['episodes'] = function(u, s){
  u.bot.sendMessage({
    userId: u.update.sender.id,
    attachment: mocks.recentEpisodesList()
  });
}


payloads['restart'] = function(u, s){
  s[u.update.sender.id].step = 0
  s[u.update.sender.id].locate = null
  Forks.initial.resolve(u,s)
}

payloads['categories'] = function(u, s){
  u.bot.sendMessage({
    userId: u.update.sender.id,
    attachment: mocks.categoriesChannel()
  }); 
}

payloads['categories_show'] = function(u, s, id){
 u.bot.sendMessage({
    userId: u.update.sender.id,
    attachment: mocks.categoriesShow(id)    
  }); 
}

payloads['choose_channel'] = function(u, s, id){
  u.bot.sendMessage({
    userId: u.update.sender.id,
    text: `canal escolhido id: ${id}`
  });
}



module.exports = payloads

class F {
	static resolve(u, s){
    let { id: userId, first_name: name, locate } = s[u.update.sender.id],
        messageText = u.update.message.text;
    switch(locate){
      case 1:
       u.bot.sendMessage({
        userId: u.update.sender.id,
        attachment:{
          type:"template",
          payload:{
            template_type:"button",
            text: 'Oque você deseja fazer agora?',
            buttons:[
              {
                type:"postback",
                title:"Ir para categorias",
                payload:'categories'
              },
              {
                type:"postback",
                title:"Ir para o começo",
                payload:"restart"
              }
            ]
          }
        }
      });
      break;
    }
	}
}

module.exports = F

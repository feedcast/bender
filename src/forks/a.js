const Helpers = require('./../helpers');

class A {


	static resolve(u, s){

		let { id: userId, first_name: name, locate } = s[u.update.sender.id],
        messageText = u.update.message.text;

		switch(true){
      case locate === 1:
        let arrayUrls = messageText.split(' ').filter(e => Helpers.urlRegex.exec(e) !== null), message;
        if(arrayUrls.length > 0){
          Helpers.testFeedUrl(arrayUrls[0], (xmlParsed, error) => {
            if(error){
              if(Helpers.findSome(['não', 'nao', 'no', 'ñ', 'not'], messageText)){
                u.bot.sendMessage({
                  userId,
                  text: 'Ok, qualquer coisa estou aqui!'
                })
                s[u.update.sender.id].step = 0
                s[u.update.sender.id].locate = null
              } else {
                message = `Não conseguimos identificar o seu feed. Deseja tentar outra url?`;
                u.bot.sendMessage({
                    userId,
                    text: message
                })
              }
            } else {
              message = `Muito obrigado por enviar sua colaboração para o Feedcast! O podcast ${xmlParsed[0].title[0]} será adicionado ao nosso catalogo em breve!`;
              u.bot.sendMessage({
                  userId,
                  text: message
              })
              s[u.update.sender.id].step = 0
              s[u.update.sender.id].locate = null
            }
          })
        } else {
          if(Helpers.findSome(['não', 'nao', 'no', 'ñ', 'not'], messageText)){
            u.bot.sendMessage({
              userId,
              text: 'Ok, qualquer coisa estou aqui!'
            })
            s[u.update.sender.id].step = 0
            s[u.update.sender.id].locate = null
          } else {
            message = Helpers.findSome(['sim','yes', 'ok'], messageText) ?
                        `Nos envie a url que nós cuidamos do resto pra você!`:
                        `${name}, você ainda quer adicionar um podcast?`;

            u.bot.sendMessage({
                userId,
                text: message
            })
          }
        }
	      break;
	    }

	}

}

module.exports = A

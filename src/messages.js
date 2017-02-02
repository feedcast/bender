let messageList = []

messageList['welcome'] = {
	ptBr: 'Olá!',
	enUs: 'Hello!'
}






const messages = (locale, id) => messageList[id][locale == 'pt_BR'? 'ptBr': 'enUs']

module.exports = messages
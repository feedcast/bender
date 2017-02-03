let messageList = []

messageList['welcome'] = {
	ptBr: 'Olá!',
	enUs: 'Hello!'
}


messageList['greeting'] = {
	ptBr: 'Bem vindo!',
	enUs: 'Welcome!'
}

messageList['stage0'] = {
	ptBr: 'Escolha uma das opções abaixo',
	enUs: 'Choose one of the next options'
}




const messages = (id) => messageList[id].ptBr

module.exports = messages
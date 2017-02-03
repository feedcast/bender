class A {

	static resolve(updateEvent, storage){

		let { id: userId, first_name: name, step, locate } = storage[updateEvent.update.sender.id],
        messageText = updateEvent.update.message.text;

		switch(true){
	      case locate === 1:
	        messageText = `busca url ${updateEvent.update.message.text}`
	      break;
	    }

	    updateEvent.bot.sendMessage({
	        userId,
	        text: messageText
	    })

	}

}

module.exports = A
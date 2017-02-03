const A =  require('./a.js')
const B =  require('./b.js')
const C =  require('./c.js')
const D =  require('./d.js')
const E =  require('./e.js')
const F =  require('./f.js')

class Initial {
  static resolve(u, s){
    let { id: userId, first_name: name } = s[u.update.sender.id]
    u.bot.sendMessage({
      userId,
      attachment:{
        type:"template",
        payload:{
          template_type:"button",
          text: `${name}, oque deseja fazer agora?`,
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


class Forks {

	static get a(){ return A }
	static get b(){ return B }
	static get c(){ return C }
	static get d(){ return D }
	static get e(){ return E }
  static get f(){ return F }
	static get initial(){ return Initial }

}

module.exports = Forks;

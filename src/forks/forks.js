const A =  require('./a.js')
const B =  require('./b.js')
const C =  require('./c.js')
const D =  require('./d.js')
const E =  require('./e.js')
const F =  require('./f.js')

class Forks {

	static get a(){ return A }
	static get b(){ return B }
	static get c(){ return C }
	static get d(){ return D }
	static get e(){ return E }
	static get f(){ return F }

}

module.exports = Forks;
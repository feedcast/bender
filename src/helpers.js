const helpers = {
	isJSON: function(string){
		try{
			let tempObj = JSON.parse(string)
			if(typeof tempObj === 'object') return true
    } catch(e){
      return false
    }
		return false
	},
  getJSON: function(string){
    if(this.isJSON(string)){
      return JSON.parse(string)
    } else {
      return {}
    }
  }

}

module.exports = helpers
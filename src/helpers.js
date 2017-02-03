class Helpers {



	static isJSON(string){
		try{
			let tempObj = JSON.parse(string)
			if(typeof tempObj === 'object') return true
    } catch(e){
      return false
    }
		return false
	}



  static getJSON(string){
    if(this.isJSON(string)){
      return JSON.parse(string)
    } else {
      return {}
    }
  }



  static setUserStorage(u, s, bot){
    return new Promise((resolve, reject) => { try{
      if("undefined" === typeof s[u.update.sender.id]){
        let userInfo = bot.getUserInfo(u.update.sender.id);
        userInfo.then(d => {
          s[u.update.sender.id] = {
            id: u.update.sender.id,
            first_name: d.first_name,
            last_name: d.last_name,
            profile_pic: d.profile_pic,
            locale: d.locale,
            gender: d.gender,
            timezone: d.timezone,
            step: 0,
            locate: null,
            time: Date.now()
          }
          resolve()
        })
      } else {
        resolve()
      } } catch(e){ reject(e) }
    })
  }

}

module.exports = Helpers
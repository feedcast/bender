const parseString = require('xml2js').parseString;
const request = require('request');


class Helpers {

  static findSome(arrayWords, stringText){
    let text = stringText.toLowerCase();
    for(let i in arrayWords)
      if(text.indexOf(arrayWords[i]) !== -1)
        return true
    return false
  }

  static get urlRegex(){
    return /((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*/gi
  }

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


  static testFeedUrl(url, callback){
    try{
      if(url.indexOf('http') === -1) url = `http://${url}`;
      request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          parseString(body, function (err, result) {
            if(err) {
              callback(null, true, err);
            } else {
              var findChannel = function(obj){
                if(typeof obj['channel'] !== 'undefined'){
                  return obj['channel']
                } else {
                  return findChannel(obj[Object.keys(obj)[0]])
                }
              }
              callback(findChannel(result));
            }
          });
        } else {
          callback(null, true, error);
        }
      });
    } catch(e){
      callback(null, true, e);
    }
  }



  static setInitial(s){
    s[u.update.sender.id].step = 0
    s[u.update.sender.id].locate = null
  }

}

module.exports = Helpers

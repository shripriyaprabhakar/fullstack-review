const request = require('request');
const config = require('../config.js');



// TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  };
  
  let cb = (error, response, body) => {
    if (!error && response.statusCode === 200) {  
     //console.log(typeof body);
      let  data = JSON.parse(body);
      callback(data);
    }
  }
  
    request (options, cb);

}

module.exports.getReposByUsername = getReposByUsername;
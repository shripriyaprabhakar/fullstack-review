const request = require('request');
const config = require('../config.js');

let getReposByUsername = (error,response,body) => {
  if (!error && response.statusCode === 200) {
      var info  = JSON.parse(body)
  }  else {
    request (options, callback);
  }


// TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

}

module.exports.getReposByUsername = getReposByUsername;
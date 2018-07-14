
const express = require('express');
let app = express();

var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost/fetcher', function (err, db) {
//   if (err) {throw err};
//  else {console.log('success')};
// }

// var myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

app.use(express.static(__dirname + '/../client/dist'));

// MongoClient.connect('mongodb', (err,client) =>{
//   if (err) return console.log(err)
//   db = client.db('repoSchema')
// });

app.post('/repos', function (req, res) {
  db.collection('repos').save(req.body, (err,result) => {
  if (err) return console.log(err)

res.redirect('/repos')
});



  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  
   var cursor = db.collection('repos').find({ "repos_url": "repoData.repos_url", "qty": 25 })

//console.log(user.socialMediaHandles.get('github'));
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


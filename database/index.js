const mongoose = require('mongoose');
const Schema = mongoose.schema; // added this line
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({ //new?
    id : Number,
    name: String,
    full_name: String,
    owner: String,
    login: String,
    html_url: String,
    repos_url: String

  // TODO: your schema here!
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoData, cb) => {
  let repo = new Repo ({
    id: repoData.id,
    name: repoData.name,
    full_name: repoData.full_name,
    owner: repoData.owner,
    login: repoData.login, 
    html_url: repoData.html_url,
    repos_url: repoData.repos_url
  });
  repo.save(cb);

}

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  


// Repo.find(function (err, repos) {
//   if (err) return console.error(err);
//   console.log(repos);
// })

module.exports.save = save;
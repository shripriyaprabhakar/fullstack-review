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

let save = (repo, cb) => {
   repo = new Repo ({
    id: repo.id,
    name: repo.name,
    full_name: repo.full_name,
    owner: repo.owner,
    login: repo.login, 
    html_url: repo.html_url,
    repos_url: repo.repos_url
  });
  repo.save(cb);

}

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  
let find  = (callback) => {
  Repo.find().sort({forks:-1}).limit(25).exec(callback);
// Repo.find().sort({forks:-1}.limit(25).exec(callback));
}

// Repo.find(function (err, repos) {
//   if (err) return console.error(err);
//   console.log(repos);
// })

module.exports.save = save;
module.exports.find = find;
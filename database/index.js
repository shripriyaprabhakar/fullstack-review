const mongoose = require('mongoose');
const Schema = mongoose.schema; // added this line
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({ //new?
    id : Number,
    name: String,
    full_name: String,
    html_url: String,
    

  // TODO: your schema here!
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, cb) => {
    //console.log('reponame', repo.name);
  for (let i = 0; i < repo.length; i++) {
    newRepo = new Repo ({
    id: repo[i].id,
    name: repo[i].name,
    full_name: repo[i].full_name,
    html_url: repo[i].html_url,
    });
      newRepo.save(cb);
     console.log('reponame', repo[i].name);
  }
  
  

}

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  
let find  = (callback) => {
  Repo.find({}).sort('-size').limit(25).exec(callback);
// Repo.find().sort({forks:-1}.limit(25).exec(callback));
}

// Repo.find(function (err, repos) {
//   if (err) return console.error(err);
//   console.log(repos);
// })

module.exports.save = save;
module.exports.find = find;
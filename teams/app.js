const express      = require('express');
const app          = express();
const bodyParser   = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.set('view engine', 'ejs');
app.set('view cache', false);

var database = [];

app.get('/', (req, res) => {
	res.render('home', { database })
});

app.get('/scoreBoard', (req, res) => {
	res.render('scoreBoard', { database })
});

app.post('/scoreBoard', (req, res) => {
     const team1 = req.body.team1;
     const team1score = req.body.team1score;
     const team2 = req.body.team2;
     const team2score = req.body.team2score;
     const team = {
     	team1: team1,
     	team1score: team1score,
     	team2: team2,
     	team2score: team2score
     }
     database.push(team);

     res.redirect('/scoreBoard');
});


app.listen(3000, () => {
	console.log('listening on 3000')
});
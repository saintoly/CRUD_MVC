const express    = require('express');
const app        = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs'); 
app.set('view cache', false);

var database = [];

app.get('/', (req, res) => {
	res.render('home', { database })
});

app.get('/add', (req, res) => {
	res.render('add', {database})
});

app.post('/add', (req, res) => {
	const name = req.body.firstname;
	const phone = req.body.phone;
	const email = req.body.email;
	const contact = {
		name: name,
		phone: phone, 
		email: email
	}
	database.push(contact);

	res.redirect('/add');
});

app.listen(3000, () => {
	console.log("listening on port 3000")
});



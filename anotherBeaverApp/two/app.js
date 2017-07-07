var express = require('express');
var app     = express();
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('view cache', false);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static("public"));

Cars = [{id:0, name:"Benz", age: 35, country: "Germany"}, {id:1, name: "Mini", age: 25, country: "London"}, {id:2, name: "Ford", age: 30, country: "USA"}]
// Schema => ["id", "name"]
 let counter = 0;

app.get('/', (req, res) => {
	res.render('index', { Cars: Cars })
});

app.get('/create', (req, res) => {
	res.render('create', {Cars})
});

app.post('/create', (req, res) => {
	const name = req.body.name;
	const age = req.body.age;
	const country = req.body.country;
	const car = {
		name: name,
		age: age, 
		country: country,
		id: counter
	}
	Cars.push(car);
     counter++

	res.redirect('/');
});



app.listen(3000, () => {
	console.log("listening on port 3000")
});

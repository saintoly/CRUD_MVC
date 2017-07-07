var express = require('express');
var app     = express();
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('view cache', false);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static("public"));

Cars = [{id:0, name:"Benz", age: 35, country: "Made in Germany"}, {id:1, name: "Mini", age: 25, country: "Made in London"}, {id:2, name: "Ford", age: 30, country: "Made in USA"}]
// Schema => ["id", "name"]
let counter = 3;

app.get('/', (req, res) => {
	res.render('index', { Cars: Cars })
});

app.get("/cars/:id", function(req, res){ 
    var carId = parseInt(req.params.id)
    var carToSearch;

    Cars.forEach( car => {
        if (car.id === carId) {
            carToSearch = car
        }
    });

   res.render('read', {car: carToSearch} )
   
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


app.get('/cars/:id/update/', (req, res) => {
     const id = Number(req.params.id)
     const car = Cars.find( car => car.id === id)
     res.render('update', { car })
});

app.post('/cars/:id/update/', (req, res) => {
     const id = Number(req.params.id)
     const name = req.body.name
     const age = req.body.age
     const country = req.body.country

     const index = Cars.findIndex( car => car.id === id)
     const car = {
          id,
          name,
          age,
          country
     }

     Cars[index] = car
     res.redirect('/')
});

app.post('/cars/:id/delete/', (req, res) => {
     const id = Number(req.params.id)
     const index = Cars.findIndex( car => car.id === id)
     Cars.splice(index, 1)
     res.redirect('/')
});


app.listen(3000, () => {
	console.log("listening on port 3000")
});

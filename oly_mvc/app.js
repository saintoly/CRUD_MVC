const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const cars        = require('./routes/cars');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index')
});

app.use('/cars', cars);


app.listen(5000, () => {
	console.log("Listening on port 5000")
});
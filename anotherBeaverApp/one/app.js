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


app.get('/', (req, res) => {
	res.render('indexNew', { Cars: Cars })
});



app.listen(3000, () => {
	console.log("listening on port 3000")
});

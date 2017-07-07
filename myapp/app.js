var express = require('express');
var app     = express();
var path    = require('path');
var port    = 3000;


app.use("/", express.static("public"))
app.use(express.static(path.join(__dirname, "images")))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'home.html'));
})

app.get('/louvre', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'louvre.html'));
})

app.get('/moma', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'moma.html'));
})

app.get('/tate', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'tate.html'));
})


app.listen(port, () => {
	console.log("listening on port " + port)
});
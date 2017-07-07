var express = require('express');
var app     = express();
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('view cache', false);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
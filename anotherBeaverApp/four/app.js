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
/*
app.use("/", carsController)

//controller
var express = require("express")
var router  = express.router()
var carModel = require("../models/carModel")

router.get("/", ()=>{
     res.render("index")
})
router.get("/create", ()=>{
     res.render("create")
})
router.post("/create", ()=>{
     //save the data
     res.redirect("/")
})


module.exports = router

//end of controller
*/

app.get('/', (req, res) => {
	res.render('index', { Cars: Cars })
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

app.listen(3000, () => {
	console.log("listening on port 3000")
});

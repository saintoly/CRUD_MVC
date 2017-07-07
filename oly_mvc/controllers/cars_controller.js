const cars   = require('../models/cars');

let idCounter = 2;

module.exports = {

	viewIndex(req, res) {
		res.render('cars', { cars })
	},

     /*  viewChoice(req, res) {
          res.render('view', { cars })
          console.log('wainting')
       },
*/
viewAdd(req, res ) {
         res.render('create')
     },

create(req, res) {
          const id = idCounter;
            
     	const name = req.body.name;
     	const model = req.body.model;
     	const country = req.body.country;
     	const car = {id: id, name: name, model: model, country: country}
     	
     	idCounter++ 
     	cars.push(car)
     	res.redirect('/cars')

     },

viewChoice(req, res) { 
    var id = parseInt(req.params.id)
    for (var i = 0; i < cars.length; i++) {
     if (cars[i].id === id) {
          var myCar = cars[i]
     }
    }
   
   res.render('view', {car: myCar} )
   
  },

viewUpdate(req, res) {

     const id = Number(req.params.id)
     const car = cars.find( car => car.id === id)
     res.render('update', { car })
},


update(req, res) {
     
    const id = Number(req.params.id)
          const name = req.body.name;
          const model = req.body.model;
          const country = req.body.country;
          const car = {id: id, name: name, model: model, country: country}
          
   
   const carr = cars.findIndex( car => car.id === id)
   //  const car = {id: id, name: name, model: model, country: country},
     
      cars[carr] = car
     res.redirect('/cars')
},

viewDelete(req, res ) {
         res.render('delete')
     },
 
delete(req,res) {
     const id = Number(req.params.id)
     const index = cars.findIndex(car => car.id === id)
     cars.splice(index, 1)
     res.redirect('/cars')
  }

};
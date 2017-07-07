const express        = require('express');
const router        = express.Router();
const CarsController  = require('../controllers/cars_controller');

router.get('/', CarsController.viewIndex);
router.get('/add', CarsController.viewAdd);
router.get('/:id', CarsController.viewChoice);
router.get('/update/:id', CarsController.viewUpdate);
router.get('/add', CarsController.viewDelete);

router.post('/', CarsController.create);
router.post('/update/:id', CarsController.update);
router.post('/delete/:id', CarsController.delete);

module.exports = router;





  
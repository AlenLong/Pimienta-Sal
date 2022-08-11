const express = require('express');
const router = express.Router();

//Destructuring requeris solo lo necesario
const{home,menu,detalle} = require('../controllers/indexController')


/* GET home page. */
router.get('/', home);
router.get('/menu', menu);
router.get('/detalle/:id', detalle);

module.exports = router;

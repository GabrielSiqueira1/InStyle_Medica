var express = require('express');
var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {

  database.query('SELECT DISTINCT especialidade FROM schedPage ORDER BY especialidade ASC', 
  function(error, data){
    res.render('index', { title: 'Express' , especialidade_data : data});
  });

});

module.exports = router;

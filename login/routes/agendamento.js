
var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = `SELECT * FROM agendamento WHERE medico = "Luciana Soares Monteiro"`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('agendamento', {title:'Node.js MySQL CRUD Application', action:'list', sampleData:data});
		}

	});

});

router.get("/add", function(request, response, next){

	response.send('Add Sample Data');

});

module.exports = router;


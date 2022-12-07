var express = require('express');
var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {

  database.query('SELECT DISTINCT especialidade FROM medicos ORDER BY especialidade ASC', 
  function(error, data){
    res.render('index', { title: 'Express' , especialidade_data : data});
  });

});

router.get("/", function(request, response, next){
  response.render('index', {title: 'Inserindo na agenda do MySQL', action:'add'});
});

router.post("/add", function(request, response, next){
  var especialidade = request.body.especialidade;
  var medico = request.body.medico;
  var data = request.body.exame;
  var horario = request.body.horario;
  var nome = request.body.nome;
  var telefone = request.body.telefone;
  var email = request.body.email;

  var query = `
    INSERT INTO agenda (especialidade, medico, data, horario, paciente, telefone, email) VALUES 
    ("${especialidade}", "${medico}", "${data}", "${horario}", "${nome}", "${telefone}", "${email}")
  `;

  database.query(query, function(error, data){
    if(error){
      throw error;
    }else{
      response.redirect("localhost:3000");
    }
  });

});

module.exports = router;

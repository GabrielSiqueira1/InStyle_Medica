var express = require('express');
var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {

  database.query('SELECT DISTINCT especialidade FROM funcionarios ORDER BY especialidade ASC', 
  function(error, data){
    res.render('index', { title: 'Express' , especialidade_data : data});
  });

});

router.get("/", function(request, response, next){
  response.render('index', {title: 'Inserindo na agenda do MySQL', action:'add'});
});

router.get('/get_data', function(request, response, next){
  var type = request.query.type;
  var search_query = request.query.parent_value;

  if(type == 'load_state'){
    var query = `
    SELECT DISTINCT nome AS Data FROM funcionarios
    WHERE especialidade = '${search_query}'
    ORDER BY nome ASC
    `;
  }

  database.query(query, function(error, data){
    var data_arr = [];
    data.forEach(function(row){
      data_arr.push(row.Data);
    });

    response.json(data_arr);

  });

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
    INSERT INTO agendamento (especialidade, medico, data, horario, paciente, telefone, email) VALUES 
    ("${especialidade}", "${medico}", "${data}", "${horario}", "${nome}", "${telefone}", "${email}")
  `;

  database.query(query, function(error, data){
    if(error){
      throw error;
    }else{
      response.redirect("http://localhost:3000");
    }
  });

});

module.exports = router;

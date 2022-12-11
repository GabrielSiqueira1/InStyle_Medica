var express = require('express');
var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , session: req.session });
});

router.post('/login', function(request, response, next){
  var user_email_address = request.body.user_email_address;
  var user_password = request.body.user_password;

  if(user_email_address && user_password){
    query = `
    SELECT * FROM medico
    WHERE email = "${user_email_address}"
    `;

    console.log("{$query}");

    database.query(query, function(error, data){
      if(data.length > 0){
        for (var count = 0; count < data.length; count++){
          if(data[count].senha == user_password){ 
            request.session.id = data[count].id; 
            response.redirect("http://localhost:3003");
            alert("Olá!");
          }else{
            response.send('Senha incorreta');
          }
        }
      }else{
        response.send('E-mail incorreto');
      }
      response.end();
    });
  }
  else{
    response.send('Por favor, entre com e-mail e sua senha');
    response.end();
  }
})

module.exports = router;

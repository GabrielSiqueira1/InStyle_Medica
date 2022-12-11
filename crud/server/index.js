const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'instyle',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))



app.get("/api/getmedicos", (req, res) => {

    const sqlSelectFunc = "SELECT * FROM medico";
    db.query(sqlSelectFunc, (err, result) => {
        res.send(result);
    })
});

app.get("/api/getfuncionarios", (req, res) => {

    const sqlSelectFunc = "SELECT * FROM funcionario";
    db.query(sqlSelectFunc, (err, result) => {
        res.send(result);
    })
});

app.get("/api/getpacientes", (req, res) => {

    const sqlSelectFunc = "SELECT * FROM paciente";
    db.query(sqlSelectFunc, (err, result) => {
        res.send(result);
    })
});

app.get("/api/getagendamentos", (req, res) => {

    const sqlSelectFunc = "SELECT * FROM agendamento";
    db.query(sqlSelectFunc, (err, result) => {
        res.send(result);
    })
});

app.get("/api/getenderecos", (req, res) => {

    const sqlSelectFunc = "SELECT * FROM addresspage";
    db.query(sqlSelectFunc, (err, result) => {
        res.send(result);
    })
});

app.post("/api/insertmedico", (req, res) => {
   
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const cep = req.body.cep;
    const logradouro = req.body.logradouro;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const data_inicio = req.body.data_inicio;
    const salario = req.body.salario;
    const senha = req.body.senha;
    const especialidade = req.body.especialidade;
    const crm = req.body.crm;


    const sqlInsert = "INSERT INTO medico (nome, email, telefone, cep, logradouro, bairro, cidade, estado, data_inicio, salario, senha, especialidade, crm) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [nome, 
        email, 
        telefone, 
        cep, 
        logradouro, 
        bairro, 
        cidade,
        estado,
        data_inicio, 
        salario,
        senha, 
        especialidade,
        crm], (err, result) => {
        console.log(result);
    })
});

app.post("/api/insertfunc", (req, res) => {
   
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const cep = req.body.cep;
    const logradouro = req.body.logradouro;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const data_inicio = req.body.data_inicio;
    const salario = req.body.salario;
    const senha = req.body.senha;

    const sqlInsert = "INSERT INTO funcionario (nome, email, telefone, cep, logradouro, bairro, cidade, estado, data_inicio, salario, senha) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [nome, 
        email, 
        telefone, 
        cep, 
        logradouro, 
        bairro, 
        cidade,
        estado,
        data_inicio, 
        salario,
        senha], (err, result) => {
        console.log(result);
    })
});

app.post("/api/insertpaciente", (req, res) => {
   
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const cep = req.body.cep;
    const logradouro = req.body.logradouro;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const peso = req.body.peso;
    const altura = req.body.altura;
    const tipo_sanguineo = req.body.tipo_sanguineo;

    const sqlInsert = "INSERT INTO paciente (nome, email, telefone, cep, logradouro, bairro, cidade, estado, peso, altura, tipo_sanguineo) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [nome, 
        email, 
        telefone, 
        cep, 
        logradouro, 
        bairro, 
        cidade,
        estado,
        peso, 
        altura,
        tipo_sanguineo], (err, result) => {
        console.log(result);
    })
});

app.delete("/api/deletemedico/:nome", (req, res) => {
    const nome = req.params.nome;
    const sqlDelete = "DELETE FROM medico WHERE nome = ?";

    db.query(sqlDelete, nome, (err, result) => {
        if(err) console.log(err);
    })
});

app.delete("/api/deletefunc/:nome", (req, res) => {
    const nome = req.params.nome;
    const sqlDelete = "DELETE FROM funcionario WHERE nome = ?";

    db.query(sqlDelete, nome, (err, result) => {
        if(err) console.log(err);
    })
});

app.delete("/api/deletepaciente/:nome", (req, res) => {
    const nome = req.params.nome;
    const sqlDelete = "DELETE FROM paciente WHERE nome = ?";

    db.query(sqlDelete, nome, (err, result) => {
        if(err) console.log(err);
    })
});

app.delete("/api/deleteagendamento/:id", (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM agendamento WHERE id = ?";

    db.query(sqlDelete, id, (err, result) => {
        if(err) console.log(err);
    })
});

app.delete("/api/deleteendereco/:id", (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM addresspage WHERE id = ?";

    db.query(sqlDelete, id, (err, result) => {
        if(err) console.log(err);
    })
});

app.listen(3001, () => {
    console.log('running on port 3001');
})
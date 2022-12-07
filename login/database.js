const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'instyle',
    user: 'root',
    password: ''
});

connection.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('MySQL Database está conectado.');
    }
});

module.exports = connection;
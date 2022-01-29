// import mysql from 'mysql';
// var mysql = require('mysql');
const express = require('express');
const app = express();

// var conex = mysql.createConnection({
//   host: '192.168.2.46',
//   user: 'root',
//   password: '1234567891.123',
//   database: 'bd25copy'
// });

// conex.connect(function (err) {
//   if (err) throw err;
//   console.log('Connected!');
//   conex.query('CALL getProductosByRefer("123")', (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

app.get('/', function (req, res) {
  res.json({
    number: 1
  });
});

app.listen(8000, function (req, res) {
  console.log('Server on');
});

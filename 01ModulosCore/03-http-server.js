'use-strict';
let http = require('http');

// 1.

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World');
//   })
//   .listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

// 2.

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World1a');
  })
  .listen(3000);
console.log('Server running at http://127.0.0.1:3000/');

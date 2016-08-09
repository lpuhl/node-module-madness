var http = require('http');
var message = require('./module3.js');

http.createServer(function (req, res) {
  res.writeHead(200);

  res.write(message.messagetext() + message.balance + '\n');

  res.end();
}).listen(3000);

console.log('Listening on port 3000');

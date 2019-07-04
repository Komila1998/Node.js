var http = require('http');
var dt = require('./average');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write( dt.average());
  res.end();
}).listen(3210);

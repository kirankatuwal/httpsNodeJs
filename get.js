var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Kiran is good boy");
    res.end();
}).listen(7010);
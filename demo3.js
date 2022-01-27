 var http = require('http');
 http.createServer(function(req,res){

    res.end("Hello, Welcome to Node js");

 }).listen(3000);
 console.log("Server started on http:127.0.0.1:3000");
 
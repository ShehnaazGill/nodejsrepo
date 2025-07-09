console.log("Basic Server");

///////// ARROW FUNCTION

// const http = require('http');
// http.createServer((req , res) => {
//     res.write("Hello");
//     res.end();
// }).listen(4500)

/////////// BASIC FUNCTION

const http = require('http');

function abc(req, res) {
    res.write("<h1>Hello World............</h1>");
    res.end();
}
http.createServer(abc).listen(4500)
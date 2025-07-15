console.log("Basic Server");

const http = require('http');

///////// ARROW FUNCTION

// http.createServer((req , res) => {
//     res.write("Hello");
//     res.end();
// }).listen(4500)

/////////// BASIC FUNCTION

// function abc(req, res) {
//     res.write("<h1>Hello World............</h1>");
//     res.end();
// }
// http.createServer(abc).listen(4500)

/////////// COLORFUL CONSOLE

// const colors = require("colors");
// console.log("Hello".red);
// console.log("Hello".black);
// console.log(100 + 30);


///////// MAKE BASIC AND SIMPLE API

// http.createServer((req , res) => {
//     res.writeHead(200 , {'content-type' : 'application\json'});
//     res.write(JSON.stringify());
//     res.end();
// }).listen(5000)

////// GET DATA FROM ANOTHER FILE

const data = require('./data');
http.createServer((req , res) => {
    res.writeHead(200 , {'content-type' : 'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)
/*jslint unparam: true*/
// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'connect' module
var connect = require('connect');

// Create a new 'connect' application instance
var app = connect();

var logger = function(req, res, next) {
    console.log(req.method, req.url);

    next();
};
// Define a new middleware function
var helloWorld = function(req, res, next) {
    // Use the 'response' object to write the 'content-type' response header
    res.setHeader('Content-Type', 'text/plain');

    // Use the 'response' object to write a response body and end the request
    res.end('Hello World');
};

var goodbyeWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
};
// Configure the 'connect' application instance to use the 'helloWorld' middleware
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

// Use the 'connect' application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

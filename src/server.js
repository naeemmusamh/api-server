'use strict';

//initialization and setup the app and required the packages
//express
const express = require('express');
const app = express();

//route to the error-handlers page
//404 Error page
const noPathExist = require('./error-handlers/404.js');
//500 Error page
const errorInPath = require('./error-handlers/500.js');

//route fo the logger page
const loggerRoute = require('./middleware/logger.js');
app.get(loggerRoute);

//route for the home page
app.get('/', (request, response) => {
    response.status(200).send('welcome to the home page');
});

//route for the error in the path and 500 error page
app.get('/wrong-path', (request, response) => {
    throw new Error('there is something wrong in your path');
});

//rote to base the name for the query in the path
app.get('/personal', (request, response) => {
    response.status(200).json({
        name: request.query.name,
    });
});

//route to run the function
//404
app.get('*', noPathExist);
//500
app.get(errorInPath);

//make the app run in the port
function start(port) {
    app.listen(port, () => {
        console.log(`im listen for the port ${port}`);
    });
};

module.exports = {
    app,
    start
}
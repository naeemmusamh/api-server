'use strict';

//initialization and setup the app from the package express
const express = require('express');
const app = express();

//middleware for the error page 500 and 404 .js
const errorPath = require('./error-handlers/500.js');
const notPathFound = require('./error-handlers/404.js');

//middleware for the logger page
const logger = require('./middleware/logger.js');

//route for the food page
const food = require('./routes/food.js');

//middleware for the logger and food page
//logger
app.use(logger);
//food
// app.use(food);

//route for the home page
app.get('/', (request, response) => {
    response.status(200).send('you in the home page');
});

//route for the personal page and base for it the query name
//middleware for the logger page and to base the query name
app.get('/personal', (request, response) => {
    response.status(200).json({
        name: request.query.name
    });
});

//route for the error page 500 if the path wrong
app.get('/bad-path', (request, response) => {
    throw new Error('there is error in the path');
});

//route for the error 500 and 404 page
app.use(errorPath);
app.use('*', notPathFound);

//route to run the app
function start(port) {
    app.listen(port, () => {
        console.log(`iam listen for the prot : ${port}`);
    });
};

module.exports = {
    start,
    app
}
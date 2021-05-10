'use strict';

//initialization and setup the app from the package dotenv and mongoose
require('dotenv').config();

//middleware for the start and app object
const server = require('./src/server.js');
const PORT = process.env.PORT || 5050;

//route for start the app
server.start(PORT);
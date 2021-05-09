'use strict';

//initialization and setup the app from the package dotenv and mongoose
require('dotenv').config();
//mongoose
const mongoose = require('mongoose');

//middleware for the start and app object
const server = require('./src/server.js');
const PORT = process.env.PORT || 5050;


//create URL for the database
const MONGODB_URI = 'mongodb://localhost:27017/class04-apiserver';

//route for create database
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => {
    console.log('iam connect to the mongoose database');
}).catch((error) => {
    console.log(error);
});

//route for start the app
server.start(PORT);
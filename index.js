'use strict';

//initialization and setup the app and the packages
//dotenv
require('dotenv').config();
//mongoose
const mongoose = require('mongoose');
//express
const express = require('express');
const app = express();

//initialization the app for the .env file
//require from the server.js
const server = require('./src/server.js');
//port
const PORT = process.env.PORT || 5050;
//mongos database
const MONGODB_URL = process.env.MONGODB_URL;

//start the app and mongo database
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then((PORT) => {
    console.log(`im listen for the port ${PORT}`);
}).catch((error) => {
    console.log(error);
});

const foodRoutes = require('./src/routes/food.js');

const clothesRoutes = require('./src/routes/clothes.js');
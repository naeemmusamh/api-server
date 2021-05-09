'use strict';
//this page will make for use new database in the schema we will create here

//initialization and setup the app from the mongoose package
const mongoose = require('mongoose');

//route for create schema and export
const foodSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['MEAT', 'VEGETARIAN'] }
});

//middleware for the schema to the route food
const foodModel = mongoose.model('food', foodSchema);
module.exports = foodModel;
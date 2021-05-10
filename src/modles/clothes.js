'use strict';
//this page will make for use new database in the schema we will create here

//initialization and setup the app from the mongoose package
const mongoose = require('mongoose');

//route for create schema and export
const clothesSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['ZARA', 'ADIDAS'] }
});

//middleware for the schema to the route clothes
const clothesModel = mongoose.model('clothes', clothesSchema);
module.exports = clothesModel;